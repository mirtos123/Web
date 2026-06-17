import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/layout/Footer'
import { LoadingScreen } from '../../components/ui/LoadingScreen'

/* ── Grain overlay ── */
function Grain() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      pointerEvents: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      opacity: 0.45,
    }} />
  )
}

/* ── Custom cursor ── */
function Cursor() {
  const pos = useRef({ x: -100, y: -100 })
  const dot = useRef()
  const ring = useRef()

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }
    window.addEventListener('mousemove', move)
    let raf
    const lerp = () => {
      raf = requestAnimationFrame(lerp)
    }
    lerp()
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', top: 0, left: 0,
        width: 10, height: 10,
        borderRadius: '50%',
        background: '#c9a84c',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.05s linear',
        willChange: 'transform',
      }} />
    </>
  )
}

/* ── Marquee ── */
function Marquee({ text, speed = 30, inverted = false }) {
  const items = Array(8).fill(text).join(' · ')
  return (
    <div style={{
      overflow: 'hidden',
      background: inverted ? '#c9a84c' : '#0f0e0c',
      borderTop: `1px solid ${inverted ? 'rgba(0,0,0,0.1)' : 'rgba(201,168,76,0.2)'}`,
      borderBottom: `1px solid ${inverted ? 'rgba(0,0,0,0.1)' : 'rgba(201,168,76,0.2)'}`,
      padding: '18px 0',
      whiteSpace: 'nowrap',
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'inline-block' }}
      >
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: inverted ? '#0f0e0c' : '#c9a84c',
          paddingRight: '40px',
        }}>
          {items} · {items}
        </span>
      </motion.div>
    </div>
  )
}

/* ── Hero ── */
function Hero() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#0f0e0c' }}>
      {/* Parallax photo */}
      <motion.div style={{ position: 'absolute', inset: '-10%', y, scale }}>
        <img
          src="/cannoli-1.jpg"
          alt="Cannoli Experience"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
        />
      </motion.div>

      {/* Gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, #0f0e0c 15%, rgba(15,14,12,0.5) 60%, rgba(15,14,12,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(15,14,12,0.6) 100%)',
      }} />

      {/* Text */}
      <motion.div style={{ opacity }} className="hero-content" style2={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(32px, 5vw, 72px)',
        paddingBottom: 'clamp(48px, 8vw, 100px)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(32px, 5vw, 72px)',
          paddingBottom: 'clamp(48px, 8vw, 100px)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'DM Sans, sans-serif', fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#c9a84c', marginBottom: 20,
            }}
          >
            <span style={{ width: 28, height: 1, background: '#c9a84c', display: 'inline-block' }} />
            Sicilian Authenticity · Modern Spectacle
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(56px, 11vw, 160px)',
                fontWeight: 800,
                color: '#f5ede0',
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
                margin: 0,
              }}
            >
              The Gold
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(56px, 11vw, 160px)',
                fontWeight: 800,
                fontStyle: 'italic',
                color: '#c9a84c',
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
                margin: 0,
              }}
            >
              Standard.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              display: 'flex', alignItems: 'flex-end',
              justifyContent: 'space-between', flexWrap: 'wrap',
              gap: 24, marginTop: 32,
            }}
          >
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#9a8f7e', lineHeight: 1.65,
              maxWidth: '44ch', margin: 0,
            }}>
              Cannolis sicilianos artesanos. Cookies de Nueva York. Catering show-cooking para eventos. <em style={{ color: '#d4c4a8' }}>Farcit al moment.</em>
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="https://wa.me/34679166062" target="_blank" rel="noopener noreferrer" style={{
                padding: '14px 28px', background: '#c9a84c', borderRadius: 999,
                fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f0e0c',
                textDecoration: 'none', transition: 'all 0.3s',
              }}>
                Reservar evento
              </a>
              <a href="#mundo" style={{
                padding: '14px 28px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: 999,
                fontFamily: 'DM Sans, sans-serif', fontSize: 12, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#d4c4a8', textDecoration: 'none',
              }}>
                Explorar
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #c9a84c, transparent)' }}
        />
      </motion.div>
    </section>
  )
}

/* ── Manifesto section (cream) ── */
function Manifesto() {
  return (
    <section style={{ background: '#f5ede0', padding: 'clamp(64px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'end' }} className="manifesto-grid">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 10,
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: '#8a6e2e', display: 'block', marginBottom: 20,
              }}
            >
              Nuestra filosofía
            </motion.span>
            <div style={{
              width: 1, height: 80,
              background: 'linear-gradient(to bottom, #c9a84c, transparent)',
              margin: '0 0 24px',
            }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(26px, 3.5vw, 48px)',
              fontWeight: 700,
              color: '#1a1208',
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              margin: '0 0 28px',
            }}>
              No vendemos postres.<br />
              Vendemos el momento en que la <em style={{ color: '#8a6e2e', fontStyle: 'italic' }}>crema explota</em> dentro de la scorza crujiente.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16, color: '#6b5d4a', lineHeight: 1.75,
              maxWidth: '55ch',
            }}>
              Cada cannolo se rellena en el momento exacto en que lo vas a comer. Ni antes, ni después. Eso es lo que lo hace diferente. Eso es lo que lo hace inolvidable.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, marginTop: 80,
          borderTop: '1px solid rgba(138,110,46,0.2)',
        }} className="stats-grid">
          {[
            { n: '+300', l: 'Eventos en España' },
            { n: '6', l: 'Sabores de crema' },
            { n: '100%', l: 'Ricotta auténtica' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '40px 0',
                borderRight: i < 2 ? '1px solid rgba(138,110,46,0.2)' : 'none',
                paddingLeft: i > 0 ? 40 : 0,
              }}
            >
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 800, color: '#8a6e2e', lineHeight: 1,
                letterSpacing: '-0.03em', marginBottom: 10,
              }}>{s.n}</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9a8276',
              }}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Three worlds (dark) ── */
function ThreeWorlds() {
  const [hovered, setHovered] = useState(null)

  const worlds = [
    {
      to: '/experience',
      num: '01',
      label: 'Show Catering',
      title: 'La Experiencia',
      sub: 'Bodas · Corporativos · Celebraciones',
      desc: 'Show-cooking de cannolis sicilianos en vivo para tu evento. El espectáculo que recuerdan todos.',
      img: '/tower-3.jpg',
      cta: 'Reservar evento',
    },
    {
      to: '/shop-cannoli',
      num: '02',
      label: 'Tienda Online',
      title: 'Cannoli Box',
      sub: 'Envío 24-48h · Packaging premium',
      desc: 'Scorze crujientes, cremas de ricotta auténtica. Cajas artesanas directas a tu puerta.',
      img: '/cannoli-4.jpg',
      cta: 'Pedir ahora',
    },
    {
      to: '/shop-cookies',
      num: '03',
      label: 'Limited Drops',
      title: 'NY Cookies',
      sub: 'Edición limitada · Waitlist',
      desc: 'Las cookies de Nueva York que cambiarán tu vida. Solo en drops. Solo para los que saben.',
      img: '/cannoli-6.jpg',
      cta: 'Unirse al drop',
    },
  ]

  return (
    <section id="mundo" style={{ background: '#0f0e0c', padding: 'clamp(64px, 8vw, 120px) 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 4vw, 64px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}
        >
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 800, color: '#f5ede0',
            letterSpacing: '-0.03em', lineHeight: 1.0,
          }}>
            Tres mundos,<br /><span style={{ color: '#c9a84c', fontStyle: 'italic' }}>una obsesión.</span>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 15,
            color: '#6b6055', lineHeight: 1.7, maxWidth: '38ch',
          }}>
            Cada línea tiene su propia identidad, su propio ritual, su propio nivel de intensidad.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="worlds-grid">
          {worlds.map((w, i) => (
            <motion.div
              key={w.to}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => window.location.href = w.to}
            >
              {/* Image */}
              <div style={{ aspectRatio: '3/4', position: 'relative', background: '#1a1610' }}>
                <motion.img
                  src={w.img}
                  alt={w.title}
                  animate={{ scale: hovered === i ? 1.06 : 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', opacity: 0.6,
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(15,14,12,0.97) 35%, rgba(15,14,12,${hovered === i ? '0.3' : '0.15'}) 100%)`,
                  transition: 'background 0.5s',
                }} />

                {/* Number */}
                <div style={{
                  position: 'absolute', top: 24, left: 24,
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.2em', color: 'rgba(201,168,76,0.5)',
                }}>
                  {w.num}
                </div>

                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 32px' }}>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 10,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: '#c9a84c', display: 'block', marginBottom: 8,
                  }}>
                    {w.label}
                  </span>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 800, color: '#f5ede0',
                    letterSpacing: '-0.01em', marginBottom: 6, lineHeight: 1.1,
                  }}>
                    {w.title}
                  </h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                    color: '#6b6055', marginBottom: 16, letterSpacing: '0.06em',
                  }}>
                    {w.sub}
                  </p>
                  <motion.p
                    animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                      color: '#9a8f7e', lineHeight: 1.6, marginBottom: 20,
                    }}
                  >
                    {w.desc}
                  </motion.p>
                  <motion.div
                    animate={{ opacity: hovered === i ? 1 : 0.4 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                      letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9a84c',
                    }}
                  >
                    {w.cta}
                    <motion.svg
                      animate={{ x: hovered === i ? 4 : 0 }}
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                    >
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Photo strip (cream) ── */
function PhotoStrip() {
  const photos = [
    { src: '/cannoli-4.jpg', caption: 'Ricotta clásica' },
    { src: '/tower-1.jpg', caption: 'Show en vivo' },
    { src: '/cannoli-5.jpg', caption: 'Pistacho di Bronte' },
    { src: '/cannoli-6.jpg', caption: 'Cookie NYC' },
    { src: '/tower-3.jpg', caption: 'Farcit al moment' },
  ]

  return (
    <section style={{ background: '#f5ede0', padding: 'clamp(64px, 8vw, 100px) 0', overflow: 'hidden' }}>
      <div style={{ padding: '0 clamp(24px, 4vw, 64px)', marginBottom: 40 }}>
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 10,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: '#8a6e2e', display: 'block', marginBottom: 12,
          }}
        >
          En imágenes
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 800, color: '#1a1208',
            letterSpacing: '-0.02em', lineHeight: 1.05,
          }}
        >
          El arte del <em style={{ color: '#8a6e2e', fontStyle: 'italic' }}>cannolo perfecto.</em>
        </motion.h2>
      </div>

      {/* Horizontal scroll */}
      <div style={{ display: 'flex', gap: 16, paddingLeft: 'clamp(24px, 4vw, 64px)', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {photos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{
              flexShrink: 0,
              width: 'clamp(220px, 28vw, 360px)',
              aspectRatio: '3/4',
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              background: '#e8d8c0',
            }}
          >
            <img src={p.src} alt={p.caption}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.6s ease' }}
            />
            <div style={{
              position: 'absolute', bottom: 16, left: 16,
              background: 'rgba(245,237,224,0.92)',
              backdropFilter: 'blur(8px)',
              borderRadius: 8, padding: '6px 12px',
              fontFamily: 'DM Sans, sans-serif', fontSize: 11,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a1208',
            }}>
              {p.caption}
            </div>
          </motion.div>
        ))}
        <div style={{ flexShrink: 0, width: 24 }} />
      </div>
    </section>
  )
}

/* ── Final CTA (dark) ── */
function FinalCta() {
  return (
    <section style={{
      background: '#0f0e0c',
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src="/cannoli-5.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 11,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: '#c9a84c', marginBottom: 24,
          }}
        >
          +34 679 166 062 · WhatsApp
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(40px, 7vw, 100px)',
            fontWeight: 800, color: '#f5ede0',
            letterSpacing: '-0.03em', lineHeight: 1.0,
            marginBottom: 40, maxWidth: '14ch', margin: '0 auto 40px',
          }}
        >
          Tu evento merece<br />
          <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>lo mejor.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="https://wa.me/34679166062" target="_blank" rel="noopener noreferrer" style={{
            padding: '16px 36px', background: '#c9a84c', borderRadius: 999,
            fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f0e0c',
            textDecoration: 'none',
          }}>
            Contactar por WhatsApp
          </a>
          <a href="mailto:info@chocolatefondue.es" style={{
            padding: '16px 36px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: 999,
            fontFamily: 'DM Sans, sans-serif', fontSize: 13,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4c4a8',
            textDecoration: 'none',
          }}>
            Enviar email
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Main export ── */
export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <Grain />
      <Cursor />

      <Hero />
      <Marquee text="Farcit al moment · Ricotta di Sicilia · The Gold Standard · Handmade in Barcelona · Cannoli Experience" speed={25} />
      <Manifesto />
      <Marquee text="New York Cookies · Limited Drops · Cookie Experience · NYC Style · Chocolate · Pistachio · Caramel" speed={20} inverted />
      <ThreeWorlds />
      <PhotoStrip />
      <FinalCta />
      <Footer />

      <style>{`
        @media (max-width: 820px) {
          .manifesto-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .worlds-grid { grid-template-columns: 1fr !important; }
        }
        * { cursor: none; }
        a, button { cursor: none; }
        @media (hover: none) {
          * { cursor: auto !important; }
          a, button { cursor: auto !important; }
        }
      `}</style>
    </>
  )
}
