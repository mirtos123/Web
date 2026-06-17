import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function CannoliMesh({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, animate = false, color = '#b8935a' }) {
  const group = useRef()
  const t = useRef(Math.random() * Math.PI * 2)

  useFrame((_, delta) => {
    if (!group.current || !animate) return
    t.current += delta * 0.5
    group.current.rotation.y += delta * 0.3
    group.current.position.y = position[1] + Math.sin(t.current) * 0.08
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* Main tube body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.28, 0.28, 2.2, 24, 1, true]} />
        <meshStandardMaterial
          color={color}
          roughness={0.75}
          metalness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ridged texture overlay */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={i} castShadow>
          <torusGeometry args={[0.285, 0.012, 8, 24]} />
          <meshStandardMaterial color="#9a7040" roughness={0.9} />
          <group rotation={[0, 0, 0]} position={[0, -1.0 + i * 0.18, 0]} />
        </mesh>
      ))}

      {/* Cream fills at each end */}
      <mesh position={[0, 1.05, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#fff8f0" roughness={0.4} metalness={0.0} />
      </mesh>
      <mesh position={[0, -1.05, 0]} rotation={[Math.PI, 0, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#fff8f0" roughness={0.4} metalness={0.0} />
      </mesh>

      {/* Pistachio crumbles */}
      {[0.15, -0.05, 0.08, -0.15].map((offset, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 0.2,
            1.0 + offset,
            (Math.random() - 0.5) * 0.15,
          ]}
          castShadow
        >
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshStandardMaterial color="#5a7a3a" roughness={0.8} />
        </mesh>
      ))}
    </group>
  )
}
