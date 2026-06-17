import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const SERVICES = [
  {
    to: '/experience',
    label: '01 · Show Catering',
    title: 'La Experiencia',
    desc: 'Show-cooking de cannolis sicilianos para bodas, eventos corporativos y celebraciones. El espectáculo que todos recuerdan.',
    image: '/tower-3.jpg',
    cta: 'Reservar evento',
    accent: '#c9a84c',
  },
  {
    to: '/shop-cannoli',
    label: '02 · Tienda Online',
    title: 'Cannoli Box',
    desc: 'Cajas artesanas con los mejores cannolis de Sicilia, enviadas directamente a tu puerta. Selecciona tus sabores favoritos.',
    image: '/cannoli-4.jpg',
    cta: 'Pedir cannolis',
    accent: '#e8c96a',
  },
  {
    to: '/shop-cookies',
    label: '03 · Limited Drops',
    title: 'New York Cookies',
    desc: 'Las mejores cookies de Nueva York. Receta auténtica, ingredientes premium, disponibilidad limitada. ¿Estás listo?',
    image: '/cannoli-1.jpg',
    cta: 'Ver drops',
    accent: '#c9a84c',
  },
]

export function ServicesGrid() {
  const navigate = useNavigate()
  return (
    <section style={{
      padding: '120px 48px',
      maxWidth: 1400,
      margin: '0 auto',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: 64, textAlign: 'center' }}
      >
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#c9a84c',
          display: 'block',
          marginBottom: 16,
        }}>
          Tres mundos, una obsesión
        </span>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 800,
          color: '#f5ede0',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
        }}>
          Elige tu experiencia.
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.to}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            onClick={() => navigate(s.to)}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 20,
              cursor: 'pointer',
              aspectRatio: '3/4',
              background: '#1a1610',
            }}
          >
            {/* Background image */}
            <img
              src={s.image}
              alt={s.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
                transition: 'transform 0.6s ease, opacity 0.4s ease',
              }}
              className={`card-img-${i}`}
            />

            {/* Gold gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15,14,12,0.95) 40%, rgba(15,14,12,0.2) 100%)',
            }} />

            {/* Border glow on hover */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 20,
              border: '1px solid rgba(201,168,76,0.2)',
              transition: 'border-color 0.3s',
            }} />

            {/* Content */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '32px',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: s.accent,
                display: 'block',
                marginBottom: 10,
              }}>
                {s.label}
              </span>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 28,
                fontWeight: 800,
                color: '#f5ede0',
                letterSpacing: '-0.01em',
                marginBottom: 12,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                color: '#9a8f7e',
                lineHeight: 1.6,
                marginBottom: 20,
              }}>
                {s.desc}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: s.accent,
              }}>
                {s.cta}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 820px) {
          section > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
