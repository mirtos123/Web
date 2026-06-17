import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { gsap } from '../../lib/gsap'

export function CrumbleParticles({ active = false, count = 60 }) {
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      origin: new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      ),
      target: new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 + 1,
        (Math.random() - 0.5) * 4
      ),
      progress: { v: 0 },
      rotation: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale: 0.04 + Math.random() * 0.12,
    }))
  }, [count])

  useEffect(() => {
    if (!active) {
      data.forEach(d => { d.progress.v = 0 })
      return
    }
    data.forEach((d, i) => {
      gsap.to(d.progress, {
        v: 1,
        duration: 0.8 + Math.random() * 0.6,
        ease: 'power2.out',
        delay: i * 0.01,
      })
    })
    const timer = setTimeout(() => {
      data.forEach((d, i) => {
        gsap.to(d.progress, {
          v: 0,
          duration: 0.8 + Math.random() * 0.4,
          ease: 'power2.in',
          delay: 1.5 + i * 0.008,
        })
      })
    }, 1200)
    return () => clearTimeout(timer)
  }, [active, data])

  useFrame(() => {
    if (!meshRef.current) return
    data.forEach((d, i) => {
      const pos = d.origin.clone().lerp(d.target, d.progress.v)
      dummy.position.copy(pos)
      dummy.rotation.copy(d.rotation)
      dummy.rotation.x += d.progress.v * Math.PI
      dummy.scale.setScalar(d.scale * (0.3 + d.progress.v * 0.7))
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[0.2, 0.05, 0.15]} />
      <meshStandardMaterial color="#c8a878" roughness={0.8} metalness={0.1} />
    </instancedMesh>
  )
}
