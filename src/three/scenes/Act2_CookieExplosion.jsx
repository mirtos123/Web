import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { CookieMesh } from '../objects/CookieMesh'
import { CrumbleParticles } from '../particles/CrumbleParticles'
import { gsap } from '../../lib/gsap'

function FlyingChip({ startPos, endPos, active }) {
  const meshRef = useRef()
  const progress = useRef({ v: 0 })
  const start = useMemo(() => new THREE.Vector3(...startPos), [startPos])
  const end = useMemo(() => new THREE.Vector3(...endPos), [endPos])

  useEffect(() => {
    if (!active) { progress.current.v = 0; return }
    gsap.to(progress.current, {
      v: 1,
      duration: 1.0 + Math.random() * 0.5,
      ease: 'power2.out',
      delay: Math.random() * 0.4,
    })
    return () => gsap.killTweensOf(progress.current)
  }, [active])

  useFrame(() => {
    if (!meshRef.current) return
    const p = progress.current.v
    meshRef.current.position.lerpVectors(start, end, p)
    meshRef.current.rotation.x += 0.05
    meshRef.current.rotation.z += 0.03
  })

  return (
    <mesh ref={meshRef} position={startPos} castShadow>
      <cylinderGeometry args={[0.06, 0.08, 0.07, 8]} />
      <meshStandardMaterial color="#1a0f08" roughness={0.4} metalness={0.1} />
    </mesh>
  )
}

export function Act2_CookieExplosion({ active = false }) {
  const cookieRef = useRef()
  const scaleObj = useRef({ v: 1 })

  const chips = useMemo(() => (
    Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2
      const r = 0.5 + Math.random() * 0.5
      return {
        start: [Math.cos(a) * r * 0.5, Math.random() * 0.2, Math.sin(a) * r * 0.5],
        end: [Math.cos(a) * (2 + Math.random() * 3), (Math.random() - 0.5) * 3, Math.sin(a) * (2 + Math.random() * 3)],
      }
    })
  ), [])

  useEffect(() => {
    if (!active) {
      gsap.to(scaleObj.current, { v: 0, duration: 0.3 })
      return
    }
    gsap.fromTo(scaleObj.current, { v: 0 }, {
      v: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
    })
    if (cookieRef.current) {
      gsap.fromTo(cookieRef.current.rotation, { y: -Math.PI }, {
        y: Math.PI * 0.5,
        duration: 2,
        ease: 'power2.out',
      })
    }
  }, [active])

  useFrame(() => {
    if (!cookieRef.current) return
    const s = scaleObj.current.v
    cookieRef.current.scale.set(s, s, s)
  })

  return (
    <group ref={cookieRef} scale={0}>
      <CookieMesh position={[0, 0, 0]} rotation={[-0.2, 0, 0.1]} scale={1.4} animate={active} />
      <CrumbleParticles active={active} count={50} />
      {chips.map((c, i) => (
        <FlyingChip key={i} startPos={c.start} endPos={c.end} active={active} />
      ))}
    </group>
  )
}
