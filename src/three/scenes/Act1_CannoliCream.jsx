import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { CannoliMesh } from '../objects/CannoliMesh'
import { CreamParticles } from '../particles/CreamParticles'
import { gsap } from '../../lib/gsap'

export function Act1_CannoliCream({ active = false }) {
  const groupRef = useRef()
  const creamScale = useRef({ v: 0 })
  const creamBlobRef = useRef()

  useEffect(() => {
    if (!active) {
      creamScale.current.v = 0
      return
    }
    gsap.fromTo(creamScale.current, { v: 0 }, {
      v: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3,
    })
    gsap.fromTo(groupRef.current?.rotation || {}, { y: -0.5 }, {
      y: 0.3,
      duration: 2,
      ease: 'power2.out',
    })
  }, [active])

  useFrame(() => {
    if (creamBlobRef.current) {
      const s = creamScale.current.v
      creamBlobRef.current.scale.set(s, s, s)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main cannoli, rotated horizontally */}
      <CannoliMesh
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0.3]}
        scale={1.4}
        animate={active}
      />

      {/* Cream blob erupting from end */}
      <group ref={creamBlobRef} position={[0.5, 0, 0]} scale={0}>
        <mesh castShadow>
          <sphereGeometry args={[0.6, 20, 20]} />
          <meshStandardMaterial color="#fff8f0" roughness={0.3} metalness={0} />
        </mesh>
        {/* Cream tendrils */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <mesh
              key={i}
              position={[
                Math.cos(rad) * 0.6,
                Math.sin(rad) * 0.6,
                0,
              ]}
              rotation={[0, 0, rad]}
              castShadow
            >
              <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
              <meshStandardMaterial color="#fff5e8" roughness={0.4} />
            </mesh>
          )
        })}
      </group>

      <CreamParticles active={active} count={150} />
    </group>
  )
}
