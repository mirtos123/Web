import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function GoldDustParticles({ count = 200, isMobile = false }) {
  const mesh = useRef()
  const n = isMobile ? 100 : count

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(n * 3)
    const spd = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      spd[i] = 0.1 + Math.random() * 0.3
    }
    return [pos, spd]
  }, [n])

  useFrame((_, delta) => {
    if (!mesh.current) return
    const pos = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < n; i++) {
      pos[i * 3 + 1] += speeds[i] * delta * 0.4
      if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c9a84c"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}
