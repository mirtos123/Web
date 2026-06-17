import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from '../../components/layout/Footer'
import { LoadingScreen } from '../../components/ui/LoadingScreen'

/* ── Grain texture ── */
const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`

/* ── Slow marquee ── */
function Marquee({ items, speed = 60, dark = true }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div style={{
      background: dark ? '#0f0e0c' : '#c9a84c',
      borderTop: `1px solid ${dark ? 'rgba(201,168,76,0.15)' : 'rgba(0,0,0,0.08)'}`,
      borderBottom: `1px solid ${dark ? 'rgba(201,168,76,0.15)' : 'rgba(0,0,0,0.08)'}`,
      padding: '14px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'inline-flex', gap: 0 }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12, fontWeight: 500,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: dark ? 'rgba(201,168,76,0.7)' : 'rgba(15,14,12,0.7)',
            padding: '0 28px',
          }}>
            {item}
            <span style={{ marginLeft: 28, opacity: 0.4 }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ── HERO: editorial split ── */
function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section style={{
      height: '100vh', minHeight: 600,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: '#0f0e0c',
      position: 'relative',
    }} className="hero-section">

      {/* LEFT — text */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(32px, 4vw, 64px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
        position: 'relative', zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 28,
          }}
        >
          <span style={{ width: 24, height: 1, background: '#c9a84c' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase', color: '#c9a84c',
          }}>
            Barcelona · Sicilia · Nueva York
          </span>
        </motion.div>

        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(52px, 7.5vw, 120px)',
              fontWeight: 800, color: '#f0e4d0',
              letterSpacing: '-0.04em', lineHeight: 0.9, margin: 0,
            }}
          >
            The Gold
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(52px, 7.5vw, 120px)',
              fontWeight: 800, fontStyle: 'italic',
              color: '#c9a84c',
              letterSpacing: '-0.04em', lineHeight: 0.9, margin: 0,
            }}
          >
            Standard.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            color: '#7a6e60', lineHeight: 1.75,
            maxWidth: '36ch', marginBottom: 36,
          }}
        >
          Cannolis sicilianos artesanos. Cookies de Nueva York.<br />
          Show-cooking para eventos. <em style={{ color: '#b89a5a' }}>Farcit al moment.</em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
        >
          <a href="https://wa.me/34679166062" target="_blank" rel="noopener noreferrer" style={{
            padding: '13px 26px', background: '#c9a84c', borderRadius: 999,
            fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#0f0e0c',
            textDecoration: 'none',
          }}>
            Reservar evento
          </a>
          <a href="#mundo" style={{
            padding: '13px 26px', border: '1px solid rgba(240,228,208,0.2)', borderRadius: 999,
            fontFamily: 'DM Sans, sans-serif', fontSize: 11,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7a6e60',
            textDecoration: 'none',
          }}>
            Explorar
          </a>
        </motion.div>
      </div>

      {/* RIGHT — big photo */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.img
          src="/cannoli-1.jpg"
          alt="Cannoli Experience"
          onLoad={() => setImgLoaded(true)}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: imgLoaded ? 1 : 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }}
        />
        {/* Very light vignette only on left edge to blend with text panel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,14,12,0.5) 0%, transparent 30%)',
        }} />

        {/* Floating label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            position: 'absolute', bottom: 32, right: 28,
            background: 'rgba(15,14,12,0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: 12, padding: '12px 18px',
          }}
        >
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 3 }}>
            Farcit al moment
          </div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700, color: '#f0e4d0' }}>
            Ricotta di Sicilia
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #c9a84c55, transparent)' }}
        />
      </motion.div>
    </section>
  )
}

/* ── About strip (cream) ── */
function AboutStrip() {
  return (
    <section style={{
      background: '#f5ede0',
      backgroundImage: grainSvg,
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 72px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'end' }} className="about-grid">
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#8a6e2e', display: 'block', marginBottom: 28 }}
            >
              01 — Nuestra filosofía
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(30px, 3.5vw, 52px)',
                fontWeight: 800, color: '#1a1208',
                letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0,
              }}
            >
              No vendemos postres.<br />
              Vendemos el <em style={{ color: '#8a6e2e' }}>momento.</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          >
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 17,
              color: '#5a4e3e', lineHeight: 1.8, marginBottom: 32,
            }}>
              Cada cannolo se rellena en el instante exacto en que lo vas a comer. La scorza crujiente, la ricotta fresca, la crema a temperatura perfecta. Eso es lo que lo hace diferente. Eso es lo que lo hace <strong style={{ color: '#1a1208' }}>inolvidable</strong>.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 40, borderTop: '1px solid rgba(138,110,46,0.2)', paddingTop: 28 }}>
              {[
                { v: '+300', l: 'Eventos' },
                { v: '6', l: 'Sabores' },
                { v: '100%', l: 'Artesano' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#8a6e2e', lineHeight: 1, marginBottom: 4 }}>{s.v}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9a8276' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Three worlds ── */
function ThreeWorlds() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)

  const worlds = [
    { to: '/experience', num: '01', label: 'Show Catering', title: 'La Experiencia', desc: 'Show-cooking de cannolis sicilianos para tu boda o evento.', img: '/tower-3.jpg', cta: 'Reservar' },
    { to: '/shop-cannoli', num: '02', label: 'Tienda Online', title: 'Cannoli Box', desc: 'Cajas artesanas con envío 24-48h a toda España.', img: '/cannoli-4.jpg', cta: 'Pedir' },
    { to: '/shop-cookies', num: '03', label: 'Limited Drops', title: 'NY Cookies', desc: 'Cookies de Nueva York. Edición limitada. Solo en drops.', img: '/cannoli-6.jpg', cta: 'Descubrir' },
  ]

  return (
    <section id="mundo" style={{ background: '#0f0e0c', padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 72px)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4.5vw, 64px)', fontWeight: 800, color: '#f0e4d0', letterSpacing: '-0.03em', lineHeight: 1.0, margin: 0 }}
          >
            Tres mundos,<br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>una obsesión.</span>
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#4a4540', letterSpacing: '0.04em', maxWidth: '28ch', lineHeight: 1.6 }}
          >
            Cada línea tiene su propio ritual, su propia intensidad.
          </motion.span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="worlds-grid">
          {worlds.map((w, i) => (
            <motion.article
              key={w.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(w.to)}
              style={{ cursor: 'pointer', borderRadius: 18, overflow: 'hidden', background: '#1a1610' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <motion.img
                  src={w.img} alt={w.title}
                  animate={{ scale: hovered === i ? 1.05 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.75 }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(15,14,12,0.92) 30%, rgba(15,14,12,0.1) 70%)',
                }} />
                {/* Number */}
                <span style={{
                  position: 'absolute', top: 20, left: 20,
                  fontFamily: 'DM Sans, sans-serif', fontSize: 10,
                  letterSpacing: '0.2em', color: 'rgba(201,168,76,0.4)',
                }}>
                  {w.num}
                </span>

                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 24px 28px' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: 6 }}>
                    {w.label}
                  </span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 800, color: '#f0e4d0', letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.1 }}>
                    {w.title}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#6b6055', lineHeight: 1.55, marginBottom: 18 }}>
                    {w.desc}
                  </p>
                  <motion.div
                    animate={{ gap: hovered === i ? 10 : 6 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9a84c' }}
                  >
                    {w.cta}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Photo feature (cream) ── */
function PhotoFeature() {
  return (
    <section style={{ background: '#f0e8d8', backgroundImage: grainSvg }}>
      {/* Full-width photo */}
      <div style={{ position: 'relative', height: 'clamp(320px, 50vw, 600px)', overflow: 'hidden' }}>
        <img
          src="/cannoli-5.jpg" alt="Cannoli artesano"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(240,232,216,0.8) 100%)' }} />
      </div>

      {/* Text below photo */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(40px, 5vw, 72px) clamp(24px, 5vw, 72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="feature-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(24px, 3vw, 44px)',
              fontWeight: 800, color: '#1a1208', letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              La scorza.<br />
              La crema.<br />
              <em style={{ color: '#8a6e2e' }}>El momento.</em>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
          >
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#5a4e3e', lineHeight: 1.8, marginBottom: 28 }}>
              Scorze importadas de Sicilia, cremas elaboradas con ricotta fresca, pistachos de Bronte y limones de las laderas del Etna. La receta de siempre, farcida en el momento justo.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['Ricotta clásica', 'Pistachio di Bronte', 'Chocolate 70%', 'Limón de Sicilia'].map(f => (
                <span key={f} style={{
                  padding: '7px 14px',
                  border: '1px solid rgba(138,110,46,0.3)',
                  borderRadius: 999, fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12, color: '#5a4e3e',
                }}>
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Gallery row (dark) ── */
function GalleryRow() {
  const photos = [
    { src: '/tower-1.jpg', label: 'Show en vivo' },
    { src: '/cannoli-4.jpg', label: 'Cannoli Box' },
    { src: '/tower-3.jpg', label: 'Eventos' },
    { src: '/cannoli-6.jpg', label: 'NY Cookies' },
  ]
  return (
    <section style={{ background: '#0a0907', padding: 'clamp(48px, 6vw, 80px) 0' }}>
      <div style={{ display: 'flex', gap: 8, paddingLeft: 'clamp(24px, 5vw, 72px)', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {photos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            style={{
              flexShrink: 0, width: 'clamp(200px, 24vw, 320px)',
              borderRadius: 14, overflow: 'hidden', position: 'relative',
              aspectRatio: '2/3',
            }}
          >
            <img src={p.src} alt={p.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(10,9,7,0.7), transparent)',
              padding: '20px 16px 14px',
              fontFamily: 'DM Sans, sans-serif', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)',
            }}>
              {p.label}
            </div>
          </motion.div>
        ))}
        <div style={{ flexShrink: 0, width: 24 }} />
      </div>
    </section>
  )
}

/* ── CTA final ── */
function Cta() {
  return (
    <section style={{
      background: '#f5ede0', backgroundImage: grainSvg,
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 72px)',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ maxWidth: 700, margin: '0 auto' }}
      >
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#8a6e2e', display: 'block', marginBottom: 20 }}>
          +34 679 166 062
        </span>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(36px, 6vw, 80px)',
          fontWeight: 800, color: '#1a1208',
          letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 28,
        }}>
          Tu evento merece<br />
          <em style={{ color: '#8a6e2e' }}>lo mejor.</em>
        </h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#6b5d4a', lineHeight: 1.75, marginBottom: 36 }}>
          Cuéntanos tu celebración y te enviamos propuesta en menos de 24h.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/34679166062" target="_blank" rel="noopener noreferrer" style={{
            padding: '15px 32px', background: '#1a1208', borderRadius: 999,
            fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#f0e4d0',
            textDecoration: 'none',
          }}>
            WhatsApp
          </a>
          <a href="mailto:info@chocolatefondue.es" style={{
            padding: '15px 32px', border: '1px solid rgba(26,18,8,0.25)', borderRadius: 999,
            fontFamily: 'DM Sans, sans-serif', fontSize: 12,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6b5d4a',
            textDecoration: 'none',
          }}>
            Email
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Export ── */
export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  const marqueeItems = ['Farcit al moment', 'Ricotta di Sicilia', 'The Gold Standard', 'Handmade', 'Desde 2020', 'Barcelona']
  const cookieItems  = ['New York Cookies', 'Limited Drops', 'Double Chocolate', 'Pistachio Dream', 'Salted Caramel', 'NYC Classic']

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <Hero />
      <Marquee items={marqueeItems} speed={55} dark />
      <AboutStrip />
      <Marquee items={cookieItems} speed={45} dark={false} />
      <ThreeWorlds />
      <PhotoFeature />
      <GalleryRow />
      <Cta />
      <Footer />

      <style>{`
        @media (max-width: 820px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-section > div:last-child { height: 45vh; }
          .about-grid, .feature-grid, .worlds-grid { grid-template-columns: 1fr !important; }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  )
}
