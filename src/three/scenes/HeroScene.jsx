import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { HeroLighting } from '../lighting/HeroLighting'
import { CameraRig } from '../camera/CameraRig'
import { GoldDustParticles } from '../particles/GoldDustParticles'
import { Act1_CannoliCream } from './Act1_CannoliCream'
import { Act2_CookieExplosion } from './Act2_CookieExplosion'
import { Act3_CannoliStorm } from './Act3_CannoliStorm'
import { PortalRing } from '../objects/PortalRing'
import { COPY } from '../../constants/copy'

export function HeroScene({ animStep = 0, showPortals = false, isMobile = false }) {
  const act1Active = animStep >= 0 && animStep < 1
  const act2Active = animStep >= 1 && animStep < 2
  const act3Active = animStep >= 2

  return (
    <>
      <HeroLighting />
      <CameraRig animStep={animStep} />
      <GoldDustParticles count={isMobile ? 80 : 200} isMobile={isMobile} />

      <Act1_CannoliCream active={act1Active} />
      <Act2_CookieExplosion active={act2Active} />
      <Act3_CannoliStorm active={act3Active} />

      {showPortals && !isMobile && (
        <>
          <PortalRing
            position={[-4.5, 0, 1]}
            label={COPY.portals.experience.label}
            title={COPY.portals.experience.title}
            desc={COPY.portals.experience.desc}
            to="/experience"
            index={0}
          />
          <PortalRing
            position={[0, -2.5, 1]}
            label={COPY.portals.shopCannoli.label}
            title={COPY.portals.shopCannoli.title}
            desc={COPY.portals.shopCannoli.desc}
            to="/shop-cannoli"
            index={1}
          />
          <PortalRing
            position={[4.5, 0, 1]}
            label={COPY.portals.shopCookies.label}
            title={COPY.portals.shopCookies.title}
            desc={COPY.portals.shopCookies.desc}
            to="/shop-cookies"
            index={2}
          />
        </>
      )}
    </>
  )
}
