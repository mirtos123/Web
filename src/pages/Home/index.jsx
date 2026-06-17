import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HeroCanvas } from './HeroCanvas'
import { BrandStatement } from './sections/BrandStatement'
import { ServicesGrid } from './sections/ServicesGrid'
import { ContactBanner } from './sections/ContactBanner'
import { Footer } from '../../components/layout/Footer'
import { LoadingScreen } from '../../components/ui/LoadingScreen'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const HERO_HEIGHT = '400vh'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [animStep, setAnimStep] = useState(0)
  const [showPortals, setShowPortals] = useState(false)
  const scrollRef = useRef()
  const isMobile = useBreakpoint(820)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (loading) return

    // Auto-cycle through acts every 4s when not scrolling
    let step = 0
    const interval = setInterval(() => {
      step = (step + 1) % 3
      setAnimStep(step)
      if (step === 2) setShowPortals(true)
      else setShowPortals(false)
    }, 4000)

    // Scroll-based override
    const trigger = ScrollTrigger.create({
      trigger: scrollRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress
        if (progress < 0.33) {
          setAnimStep(progress * 3)
          setShowPortals(false)
        } else if (progress < 0.66) {
          setAnimStep(1 + (progress - 0.33) * 3)
          setShowPortals(false)
        } else {
          setAnimStep(2 + (progress - 0.66) * 3)
          setShowPortals(progress > 0.85)
        }
        clearInterval(interval)
      },
    })

    return () => {
      clearInterval(interval)
      trigger.kill()
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Hero section — full height scroll container */}
      <div ref={scrollRef} style={{ height: HERO_HEIGHT, position: 'relative' }}>
        {/* Sticky 3D canvas */}
        <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%' }}>
          <HeroCanvas animStep={animStep} showPortals={showPortals} isMobile={isMobile} />

          {/* Text overlay */}
          <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
            <BrandStatement animStep={animStep} visible={!loading} />
          </div>

          {/* Mobile CTA portals (instead of 3D rings) */}
          {isMobile && showPortals && (
            <div style={{
              position: 'absolute',
              bottom: 100,
              left: 0, right: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: '0 24px',
              zIndex: 20,
            }}>
              {[
                { to: '/experience', label: 'Experiencia Catering', color: '#c9a84c' },
                { to: '/shop-cannoli', label: 'Tienda Cannolis', color: '#e8c96a' },
                { to: '/shop-cookies', label: 'NY Cookies', color: '#c9a84c' },
              ].map(({ to, label, color }) => (
                <a
                  key={to}
                  href={to}
                  style={{
                    display: 'block',
                    padding: '14px 24px',
                    border: `1px solid ${color}`,
                    borderRadius: 999,
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color,
                    textAlign: 'center',
                    background: 'rgba(15,14,12,0.6)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Below-fold content */}
      <div style={{ position: 'relative', zIndex: 5, background: '#0f0e0c' }}>
        <ServicesGrid />
        <ContactBanner />
        <Footer />
      </div>
    </>
  )
}
