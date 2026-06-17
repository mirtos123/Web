import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { CannoliMesh } from '../objects/CannoliMesh'
import { gsap } from '../../lib/gsap'

const CANNOLI_CONFIG = [
  { start: [0, 0, -20], end: [0, 0, 2], rotation: [Math.PI / 2, 0.2, 0.1], delay: 0 },
  { start: [-4, 2, -18], end: [-2.5, 1.2, 1], rotation: [Math.PI / 2, -0.3, 0.3], delay: 0.1 },
  { start: [4, -2, -18], end: [2.5, -1.2, 1], rotation: [Math.PI / 2, 0.4, -0.2], delay: 0.15 },
  { start: [-2, -3, -16], end: [-1.8, -2, 0], rotation: [Math.PI / 2.5, -0.1, 0.5], delay: 0.2 },
  { start: [3, 3, -16], end: [2, 2.2, 0], rotation: [Math.PI / 2.5, 0.2, -0.4], delay: 0.25 },
  { start: [0, 4, -14], end: [0.5, 3, -0.5], rotation: [Math.PI / 3, 0.5, 0.1], delay: 0.3 },
]

function FlyingCannoli({ config, active }) {
  const groupRef = useRef()
  const posProgress = useRef({ x: config.start[0], y: config.start[1], z: config.start[2] })
  const scaleProgress = useRef({ v: 0 })

  useEffect(() => {
    if (!active) {
      gsap.to(posProgress.current, {
        x: config.start[0], y: config.start[1], z: config.start[2],
        duration: 0.5, ease: 'power2.in',
      })
      gsap.to(scaleProgress.current, { v: 0, duration: 0.3 })
      return
    }
    gsap.to(scaleProgress.current, {
      v: 1, duration: 0.4, ease: 'back.out(1.4)', delay: config.delay,
    })
    gsap.fromTo(posProgress.current,
      { x: config.start[0], y: config.start[1], z: config.start[2] },
      {
        x: config.end[0], y: config.end[1], z: config.end[2],
        duration: 1.2,
        ease: 'power3.out',
        delay: config.delay,
      }
    )
    return () => {
      gsap.killTweensOf(posProgress.current)
      gsap.killTweensOf(scaleProgress.current)
    }
  }, [active, config])

  useFrame(() => {
    if (!groupRef.current) return
    const { x, y, z } = posProgress.current
    groupRef.current.position.set(x, y, z)
    const s = scaleProgress.current.v
    groupRef.current.scale.set(s, s, s)
  })

  return (
    <group ref={groupRef} position={config.start} scale={0}>
      <CannoliMesh
        rotation={config.rotation}
        scale={0.9}
        animate={false}
      />
    </group>
  )
}

export function Act3_CannoliStorm({ active = false }) {
  return (
    <group>
      {CANNOLI_CONFIG.map((config, i) => (
        <FlyingCannoli key={i} config={config} active={active} />
      ))}
    </group>
  )
}
