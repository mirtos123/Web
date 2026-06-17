import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Footer } from '../../components/layout/Footer'
import { GoldButton } from '../../components/ui/GoldButton'
import { COPY } from '../../constants/copy'

function FlavorCard({ flavor, index, selected, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(flavor.id)}
      style={{
        position: 'relative',
        padding: '28px',
        border: `1px solid ${selected ? '#c9a84c' : 'rgba(201,168,76,0.12)'}`,
        borderRadius: 20,
        cursor: 'pointer',
        background: selected ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.01)',
        transition: 'all 0.3s',
      }}
    >
      {flavor.badge && (
        <span style={{
          position: 'absolute',
          top: 16, right: 16,
          padding: '4px 10px',
          borderRadius: 999,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 9,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          background: flavor.badge === 'LIMITED' ? 'rgba(201,168,76,0.15)' : '#c9a84c',
          color: flavor.badge === 'LIMITED' ? '#c9a84c' : '#0f0e0c',
          border: flavor.badge === 'LIMITED' ? '1px solid #c9a84c' : 'none',
          fontWeight: 600,
        }}>
          {flavor.badge}
        </span>
      )}

      <div style={{
        width: 56, height: 56,
        borderRadius: 14,
        background: 'rgba(201,168,76,0.1)',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
      }}>
        🍪
      </div>

      <h3 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 20,
        fontWeight: 800,
        color: '#f5ede0',
        marginBottom: 8,
        paddingRight: flavor.badge ? 60 : 0,
      }}>
        {flavor.name}
      </h3>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 14,
        color: '#6b6055',
        lineHeight: 1.6,
      }}>
        {flavor.desc}
      </p>

      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: 'absolute',
            bottom: 20, right: 20,
            width: 24, height: 24,
            borderRadius: '50%',
            background: '#c9a84c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#0f0e0c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function ShopCookies() {
  const [selected, setSelected] = useState('choc')
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const waMessage = encodeURIComponent(
    `Hola, quiero información sobre las New York Cookies — sabor ${COPY.shopCookies.flavors.find(f => f.id === selected)?.name}. ¿Cuándo es el próximo drop?`
  )

  const handleWaitlist = (e) => {
    e.preventDefault()
    if (waitlistEmail) {
      setJoined(true)
    }
  }

  return (
    <div style={{ background: '#0f0e0c', minHeight: '100vh', paddingTop: 72 }}>

      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 48px',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <img
          src="/cannoli-6.jpg"
          alt="New York Cookies"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.2,
            filter: 'grayscale(30%)',
          }}
        />
        {/* Gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at right, rgba(201,168,76,0.08), transparent 60%), linear-gradient(to right, #0f0e0c 50%, transparent)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 650 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: 24,
              padding: '8px 16px',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 999,
              background: 'rgba(201,168,76,0.06)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c', animation: 'pulse 2s infinite' }} />
            {COPY.shopCookies.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(40px, 7vw, 88px)',
              fontWeight: 800,
              color: '#f5ede0',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: 24,
            }}
          >
            {COPY.shopCookies.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 17,
              color: '#9a8f7e',
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            {COPY.shopCookies.lead}
          </motion.p>

          {/* Waitlist form */}
          <AnimatePresence mode="wait">
            {!joined ? (
              <motion.form
                key="form"
                onSubmit={handleWaitlist}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  display: 'flex',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={waitlistEmail}
                  onChange={e => setWaitlistEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    minWidth: 220,
                    padding: '14px 20px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: 999,
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 14,
                    color: '#f5ede0',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '14px 28px',
                    background: '#c9a84c',
                    border: 'none',
                    borderRadius: 999,
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#0f0e0c',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {COPY.shopCookies.dropCta}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '16px 24px',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: 16,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 15,
                  color: '#c9a84c',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ¡Ya estás en la lista! Te avisamos en el próximo drop.
              </motion.div>
            )}
          </AnimatePresence>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12,
            color: '#4a4540',
            marginTop: 16,
          }}>
            {COPY.shopCookies.dropDesc}
          </p>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </section>

      {/* Flavor grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            display: 'block',
            marginBottom: 12,
          }}>
            El menú
          </span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            color: '#f5ede0',
            letterSpacing: '-0.02em',
          }}>
            Elige tu favorita.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {COPY.shopCookies.flavors.map((f, i) => (
            <FlavorCard
              key={f.id}
              flavor={f}
              index={i}
              selected={selected === f.id}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: 48,
            padding: '40px',
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#6b6055', marginBottom: 6 }}>Seleccionado</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, color: '#f5ede0' }}>
              {COPY.shopCookies.flavors.find(f => f.id === selected)?.name}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <GoldButton href={`https://wa.me/34679166062?text=${waMessage}`} variant="filled">
              Preguntar disponibilidad
            </GoldButton>
            <GoldButton href="#waitlist" variant="outline">
              Unirse al waitlist
            </GoldButton>
          </div>
        </motion.div>
      </section>

      {/* Drop system explainer */}
      <section style={{
        background: 'rgba(201,168,76,0.03)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        padding: '80px 48px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            ¿Cómo funcionan<br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>los drops?</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', title: 'Apúntate al waitlist', desc: 'Regístrate con tu email y te avisamos antes de cada drop.' },
              { n: '02', title: 'Recibe el aviso', desc: '24h antes del drop recibirás un email con el enlace exclusivo.' },
              { n: '03', title: 'Compra antes de que vuelen', desc: 'Los drops se agotan rápido. Los primeros en pedir ganan.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  width: 64, height: 64,
                  borderRadius: '50%',
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'Syne, sans-serif',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: '#c9a84c',
                }}>
                  {s.n}
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#f5ede0', marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6b6055', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 820px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
