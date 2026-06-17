import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uHover;
  varying vec2 vUv;

  void main() {
    float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
    float sweep = mod(angle + uTime * 1.5, 6.283);
    float glow = smoothstep(0.0, 1.8, sweep) * (1.0 - smoothstep(1.8, 6.283, sweep));
    float base = 0.4 + uHover * 0.4;
    gl_FragColor = vec4(uColor * (base + glow * 0.6), 0.85 + uHover * 0.1);
  }
`

export function PortalRing({ position = [0, 0, 0], label = '', title = '', desc = '', to = '/', index = 0 }) {
  const ringRef = useRef()
  const matRef = useRef()
  const navigate = useNavigate()
  const hover = useRef(0)

  useFrame((_, delta) => {
    if (!matRef.current) return
    matRef.current.uniforms.uTime.value += delta
    hover.current += (hover.current < 0.5 ? -1 : 1) * delta * 0
    matRef.current.uniforms.uHover.value += (hover.current - matRef.current.uniforms.uHover.value) * 0.1
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2 * (index % 2 === 0 ? 1 : -1)
    }
  })

  const uniforms = useRef({
    uTime: { value: index * 2 },
    uColor: { value: new THREE.Color('#c9a84c') },
    uHover: { value: 0 },
  })

  return (
    <group position={position}>
      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.4, 0.04, 16, 100]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
          transparent
        />
      </mesh>

      {/* Inner ring */}
      <mesh>
        <torusGeometry args={[1.2, 0.02, 8, 80]} />
        <meshStandardMaterial color="#8a6e2e" transparent opacity={0.4} />
      </mesh>

      {/* Interactive label */}
      <Html center distanceFactor={8} position={[0, 0, 0.1]}>
        <div
          onClick={() => navigate(to)}
          onMouseEnter={() => { hover.current = 1 }}
          onMouseLeave={() => { hover.current = 0 }}
          style={{
            cursor: 'pointer',
            textAlign: 'center',
            padding: '20px 24px',
            width: '180px',
            userSelect: 'none',
          }}
        >
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '8px',
          }}>
            {label}
          </div>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#f5ede0',
            lineHeight: 1.2,
            marginBottom: '6px',
          }}>
            {title}
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            color: '#9a8f7e',
            lineHeight: 1.4,
          }}>
            {desc}
          </div>
        </div>
      </Html>
    </group>
  )
}
