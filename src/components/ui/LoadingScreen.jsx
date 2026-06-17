import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0f0e0c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        gap: 32,
      }}
    >
      <img src="/logo-cannolis.png" alt="Cannoli Experience" style={{ height: 64, opacity: 0.9 }} />
      <div style={{ position: 'relative', width: 200, height: 2, background: 'rgba(201,168,76,0.2)', borderRadius: 1 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            height: '100%',
            background: '#c9a84c',
            borderRadius: 1,
          }}
        />
      </div>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.5)',
      }}>
        Preparando la experiencia
      </p>
    </motion.div>
  )
}
