import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { HeroScene } from '../../three/scenes/HeroScene'

export function HeroCanvas({ animStep, showPortals, isMobile }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1,
      pointerEvents: showPortals ? 'auto' : 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#0f0e0c' }}
      >
        <Suspense fallback={null}>
          <HeroScene
            animStep={animStep}
            showPortals={showPortals}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
