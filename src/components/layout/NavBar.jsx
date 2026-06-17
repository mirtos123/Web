import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { COLORS } from '../../constants/theme'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const navLinks = [
    { to: '/experience', label: 'Experiencia' },
    { to: '/shop-cannoli', label: 'Cannolis' },
    { to: '/shop-cookies', label: 'Cookies' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 32px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(15,14,12,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo-cannolis.png" alt="Cannoli Experience" style={{ height: 36, width: 'auto' }} />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-desktop">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: location.pathname === to ? '#c9a84c' : '#d4c4a8',
                transition: 'color 0.3s',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/34679166062"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 22px',
              border: '1px solid #c9a84c',
              borderRadius: 999,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = '#c9a84c'; e.target.style.color = '#0f0e0c' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#c9a84c' }}
          >
            Reservar
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 24,
              height: 1.5,
              background: '#c9a84c',
              transition: 'all 0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' :
                menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' :
                menuOpen && i === 1 ? 'scaleX(0)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 72, left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(15,14,12,0.97)',
              backdropFilter: 'blur(20px)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 24,
                  fontWeight: 700,
                  color: location.pathname === to ? '#c9a84c' : '#f5ede0',
                  letterSpacing: '-0.01em',
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/34679166062"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                background: '#c9a84c',
                borderRadius: 999,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: '#0f0e0c',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                alignSelf: 'flex-start',
                marginTop: 8,
              }}
            >
              Reservar evento
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
