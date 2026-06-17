import { motion } from 'framer-motion'
import { COPY } from '../../../constants/copy'

const ACT_LABELS = [
  { label: COPY.home.act1Label, sub: 'Farcit al moment' },
  { label: COPY.home.act2Label, sub: 'New York Style' },
  { label: COPY.home.act3Label, sub: 'L\'esplosione' },
]

export function BrandStatement({ animStep, visible }) {
  const stepIndex = Math.min(Math.floor(animStep), 2)
  const current = ACT_LABELS[stepIndex]

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      padding: '0 24px',
      zIndex: 10,
    }}>
      {/* Act label pill */}
      <motion.div
        key={stepIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        style={{
          marginBottom: 24,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: '#c9a84c', display: 'inline-block'
        }} />
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#c9a84c',
        }}>
          {current.label} — {current.sub}
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(40px, 8vw, 100px)',
          fontWeight: 800,
          color: '#f5ede0',
          textAlign: 'center',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          maxWidth: '12ch',
          marginBottom: 8,
        }}
      >
        {COPY.home.h1Line1}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(40px, 8vw, 100px)',
          fontWeight: 800,
          color: '#c9a84c',
          textAlign: 'center',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          maxWidth: '12ch',
          marginBottom: 32,
          fontStyle: 'italic',
        }}
      >
        {COPY.home.h1Line2}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 0.7 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(14px, 2vw, 18px)',
          color: '#d4c4a8',
          textAlign: 'center',
          maxWidth: '46ch',
          lineHeight: 1.6,
          marginBottom: 40,
        }}
      >
        {COPY.home.lead}
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 0.6 : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b6055' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #c9a84c, transparent)' }}
        />
      </motion.div>
    </div>
  )
}
