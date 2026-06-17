import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export function CameraRig({ animStep = 0 }) {
  const { camera } = useThree()
  const t = useRef(0)

  const positions = [
    [0, 0, 8],
    [1.5, 0.5, 7],
    [-1, 0, 6],
  ]

  useFrame((_, delta) => {
    t.current += delta * 0.4
    const step = Math.min(Math.floor(animStep), 2)
    const [tx, ty, tz] = positions[step]

    camera.position.x += (tx + Math.sin(t.current * 0.3) * 0.15 - camera.position.x) * 0.03
    camera.position.y += (ty + Math.cos(t.current * 0.4) * 0.1 - camera.position.y) * 0.03
    camera.position.z += (tz - camera.position.z) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}
