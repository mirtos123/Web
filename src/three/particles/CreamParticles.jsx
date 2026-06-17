import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function CreamParticles({ active = false, count = 120 }) {
  const mesh = useRef()
  const t = useRef(0)

  const [positions, velocities, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      pos[i * 3] = 0; pos[i * 3 + 1] = 0; pos[i * 3 + 2] = 0
      vel[i * 3] = Math.sin(phi) * Math.cos(theta) * (1 + Math.random() * 2)
      vel[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * (1 + Math.random() * 2)
      vel[i * 3 + 2] = Math.cos(phi) * (0.5 + Math.random())
      sz[i] = 0.05 + Math.random() * 0.12
    }
    return [pos, vel, sz]
  }, [count])

  const posRef = useMemo(() => ({ current: positions.slice() }), [positions])

  useFrame((_, delta) => {
    if (!mesh.current || !active) {
      if (mesh.current) {
        const pos = mesh.current.geometry.attributes.position.array
        pos.fill(0)
        mesh.current.geometry.attributes.position.needsUpdate = true
      }
      return
    }
    t.current = Math.min(t.current + delta * 0.8, 3)
    const pos = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3] = velocities[i * 3] * t.current
      pos[i * 3 + 1] = velocities[i * 3 + 1] * t.current - 0.5 * t.current * t.current
      pos[i * 3 + 2] = velocities[i * 3 + 2] * t.current
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#fff8f0"
        transparent
        opacity={active ? 0.9 : 0}
        sizeAttenuation
      />
    </points>
  )
}
