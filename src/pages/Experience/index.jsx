import { motion } from 'framer-motion'
import { Footer } from '../../components/layout/Footer'
import { GoldButton } from '../../components/ui/GoldButton'
import { COPY } from '../../constants/copy'

const STATS = [
  { value: '+300', label: 'Eventos celebrados' },
  { value: '4,5€', label: 'Por persona (desde)' },
  { value: '50+', label: 'Invitados mínimo' },
  { value: '100%', label: 'Satisfacción garantizada' },
]

const FLAVORS = COPY.experience.flavors

function ProcessStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        display: 'flex',
        gap: 28,
        alignItems: 'flex-start',
        padding: '32px 0',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        border: '1px solid #c9a84c',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'Syne, sans-serif',
        fontStyle: 'italic',
        fontSize: 20,
        color: '#c9a84c',
      }}>
        {step.n}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#f5ede0',
          marginBottom: 8,
        }}>
          {step.h}
        </h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 15,
          color: '#9a8f7e',
          lineHeight: 1.6,
        }}>
          {step.b}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <div style={{ background: '#0f0e0c', minHeight: '100vh', paddingTop: 72 }}>

      {/* Hero */}
      <section style={{
        position: 'relative',
        height: '80vh',
        minHeight: 500,
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        <img
          src="/tower-3.jpg"
          alt="Show catering cannolis"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45,
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15,14,12,1) 20%, rgba(15,14,12,0.3) 100%)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 48px 72px',
          maxWidth: 900,
        }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: 20,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c' }} />
            {COPY.experience.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 800,
              color: '#f5ede0',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            {COPY.experience.h1}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <GoldButton href="https://wa.me/34679166062" variant="filled">
              Reservar por WhatsApp
            </GoldButton>
            <GoldButton href="#proceso" variant="outline">
              Cómo funciona
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '48px',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '0 24px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(201,168,76,0.15)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 44,
                fontWeight: 800,
                color: '#c9a84c',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6b6055',
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          {/* Process */}
          <div id="proceso">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                display: 'block',
                marginBottom: 16,
              }}
            >
              El proceso
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: 800,
                color: '#f5ede0',
                letterSpacing: '-0.02em',
                marginBottom: 8,
              }}
            >
              Del contacto al<br />
              <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>espectáculo.</span>
            </motion.h2>
            <div style={{ marginTop: 32 }}>
              {COPY.experience.process.map((step, i) => (
                <ProcessStep key={i} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Lead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 17,
                lineHeight: 1.7,
                color: '#9a8f7e',
                marginBottom: 40,
              }}
            >
              {COPY.experience.lead}
            </motion.p>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 20,
                padding: '32px',
                marginBottom: 40,
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 56,
                  fontWeight: 800,
                  color: '#c9a84c',
                  lineHeight: 1,
                }}>
                  {COPY.experience.price}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 16,
                  color: '#6b6055',
                  marginLeft: 8,
                }}>
                  {COPY.experience.priceUnit}
                </span>
              </div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: '#9a8f7e',
                marginBottom: 20,
              }}>
                {COPY.experience.minGuests} · Precio variable según menú y servicio.
              </p>
              <GoldButton href="https://wa.me/34679166062" variant="filled" style={{ width: '100%', justifyContent: 'center' }}>
                {COPY.experience.bookingCta}
              </GoldButton>
            </motion.div>

            {/* Flavors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#f5ede0',
                marginBottom: 16,
              }}>
                Sabores disponibles
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {FLAVORS.map((f, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid rgba(201,168,76,0.25)',
                      borderRadius: 999,
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 13,
                      color: '#d4c4a8',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: 40, borderRadius: 16, overflow: 'hidden', aspectRatio: '16/9' }}
            >
              <img
                src="/tower-1.jpg"
                alt="Cannoli show en evento"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ marginTop: 80 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#f5ede0',
              letterSpacing: '-0.02em',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Para cualquier <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>celebración.</span>
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}>
            {COPY.experience.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '28px 32px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  borderRadius: 16,
                }}
              >
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#f5ede0',
                  marginBottom: 10,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: '#9a8f7e',
                  lineHeight: 1.6,
                }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section style={{
        textAlign: 'center',
        padding: '80px 48px 100px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.04))',
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            color: '#f5ede0',
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          Tu evento,<br />
          <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>nuestro espectáculo.</span>
        </motion.h2>
        <GoldButton href="https://wa.me/34679166062" variant="filled">
          Reservar por WhatsApp · +34 679 166 062
        </GoldButton>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 820px) {
          section, div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
