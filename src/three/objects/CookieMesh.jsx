import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ChocolateChip({ position }) {
  return (
    <mesh position={position} castShadow>
      <cylinderGeometry args={[0.055, 0.07, 0.06, 8]} />
      <meshStandardMaterial color="#1a0f08" roughness={0.4} metalness={0.1} />
    </mesh>
  )
}

export function CookieMesh({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, animate = false }) {
  const group = useRef()
  const t = useRef(Math.random() * Math.PI * 2)

  const chipPositions = useMemo(() => {
    return Array.from({ length: 14 }, () => {
      const r = 0.3 + Math.random() * 0.55
      const a = Math.random() * Math.PI * 2
      return [
        Math.cos(a) * r,
        0.08 + Math.random() * 0.04,
        Math.sin(a) * r,
      ]
    })
  }, [])

  useFrame((_, delta) => {
    if (!group.current || !animate) return
    t.current += delta * 0.4
    group.current.rotation.y += delta * 0.15
    group.current.position.y = position[1] + Math.sin(t.current * 0.7) * 0.06
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* Cookie base */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 1.0, 0.22, 32]} />
        <meshStandardMaterial color="#c8894a" roughness={0.85} metalness={0.0} />
      </mesh>

      {/* Slightly lighter top surface */}
      <mesh position={[0, 0.12, 0]} castShadow>
        <cylinderGeometry args={[1.08, 1.08, 0.04, 32]} />
        <meshStandardMaterial color="#d4a06a" roughness={0.8} />
      </mesh>

      {/* Edge bumps for texture */}
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 1.0, 0, Math.sin(a) * 1.0]} castShadow>
            <sphereGeometry args={[0.12, 8, 6]} />
            <meshStandardMaterial color="#b87840" roughness={0.9} />
          </mesh>
        )
      })}

      {/* Chocolate chips */}
      {chipPositions.map((pos, i) => (
        <ChocolateChip key={i} position={pos} />
      ))}
    </group>
  )
}
