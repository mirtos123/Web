import { motion } from 'framer-motion'
import { GoldButton } from '../../../components/ui/GoldButton'

export function ContactBanner() {
  return (
    <section style={{
      padding: '80px 48px 120px',
      background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.05), transparent)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#c9a84c',
          display: 'block',
          marginBottom: 20,
        }}>
          Sicilian Authenticity · Modern Spectacle
        </span>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(28px, 5vw, 56px)',
          fontWeight: 800,
          color: '#f5ede0',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          ¿Listos para el<br />
          <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>espectáculo?</span>
        </h2>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 16,
          color: '#9a8f7e',
          lineHeight: 1.7,
          marginBottom: 40,
          maxWidth: '50ch',
          margin: '0 auto 40px',
        }}>
          Cuéntanos sobre tu evento y te enviamos una propuesta personalizada en menos de 24 horas.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <GoldButton href="https://wa.me/34679166062" variant="filled">
            Contactar por WhatsApp
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.6 2.4A7.87 7.87 0 0 0 8 0C3.58 0 0 3.58 0 8c0 1.41.37 2.79 1.06 4L0 16l4.14-1.08A8 8 0 0 0 16 8c0-2.14-.83-4.15-2.4-5.6zM8 14.67c-1.2 0-2.37-.32-3.4-.92l-.24-.14-2.46.64.66-2.4-.16-.25a6.67 6.67 0 0 1 10.36-8.4 6.67 6.67 0 0 1-4.76 11.47zm3.66-5c-.2-.1-1.18-.58-1.37-.65-.18-.06-.32-.1-.45.1-.13.2-.5.65-.62.78-.11.14-.23.15-.42.05a5.28 5.28 0 0 1-2.64-2.3c-.2-.34.2-.32.57-1.06.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.33-.45-.34h-.38c-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.62s.7 1.88.8 2.01c.1.13 1.37 2.09 3.32 2.93.46.2.82.32 1.1.4.46.15.88.13 1.21.08.37-.06 1.14-.47 1.3-.92.16-.45.16-.84.11-.92-.05-.08-.18-.13-.38-.23z"/>
            </svg>
          </GoldButton>
          <GoldButton href="mailto:info@chocolatefondue.es" variant="outline">
            Enviar email
          </GoldButton>
        </div>
      </motion.div>
    </section>
  )
}
