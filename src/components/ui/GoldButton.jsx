import { motion } from 'framer-motion'

export function GoldButton({ children, href, onClick, variant = 'outline', style = {} }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 28px',
    borderRadius: 999,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    border: '1px solid #c9a84c',
    ...style,
  }

  const styles = {
    outline: {
      ...base,
      background: 'transparent',
      color: '#c9a84c',
    },
    filled: {
      ...base,
      background: '#c9a84c',
      color: '#0f0e0c',
      fontWeight: 600,
    },
  }

  const El = motion[href ? 'a' : 'button']
  return (
    <El
      href={href}
      onClick={onClick}
      style={styles[variant]}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      {...(href ? { target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
    >
      {children}
    </El>
  )
}
