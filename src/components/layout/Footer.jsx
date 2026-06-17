import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer style={{
      background: '#080807',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '64px 48px 32px',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <img src="/logo-cannolis.png" alt="Cannoli Experience" style={{ height: 40, marginBottom: 20 }} />
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              lineHeight: 1.7,
              color: '#9a8f7e',
              maxWidth: 280,
              marginBottom: 20,
            }}>
              Cannoli Experience — Catering show-cooking de cannolis sicilianos artesanos. Farcit al moment. La autenticidad en cada bocado.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {['Instagram', 'TikTok', 'WhatsApp'].map(s => (
                <a
                  key={s}
                  href={s === 'WhatsApp' ? 'https://wa.me/34679166062' :
                    s === 'Instagram' ? 'https://www.instagram.com/cannolisexperience/' :
                    'https://www.tiktok.com/@cannolisexperience'}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#6b6055',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#c9a84c'}
                  onMouseLeave={e => e.target.style.color = '#6b6055'}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h5 style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 20, fontWeight: 500 }}>
              Productos
            </h5>
            {[
              { to: '/experience', label: 'Show Catering' },
              { to: '/shop-cannoli', label: 'Cannoli Box' },
              { to: '/shop-cookies', label: 'NY Cookies' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{ display: 'block', fontSize: 14, color: '#6b6055', padding: '5px 0', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#d4c4a8'}
                onMouseLeave={e => e.target.style.color = '#6b6055'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Empresa */}
          <div>
            <h5 style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 20, fontWeight: 500 }}>
              Empresa
            </h5>
            {['Nosotros', 'Franquicia', 'Blog', 'Prensa'].map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: '#6b6055', padding: '5px 0', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#d4c4a8'}
                onMouseLeave={e => e.target.style.color = '#6b6055'}
              >{l}</a>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <h5 style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 20, fontWeight: 500 }}>
              Contacto
            </h5>
            <a href="https://wa.me/34679166062" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', fontSize: 14, color: '#6b6055', padding: '5px 0', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = '#d4c4a8'}
              onMouseLeave={e => e.target.style.color = '#6b6055'}
            >
              +34 679 166 062
            </a>
            <a href="mailto:info@chocolatefondue.es"
              style={{ display: 'block', fontSize: 14, color: '#6b6055', padding: '5px 0', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = '#d4c4a8'}
              onMouseLeave={e => e.target.style.color = '#6b6055'}
            >
              info@chocolatefondue.es
            </a>
            <span style={{ display: 'block', fontSize: 13, color: '#4a4540', padding: '5px 0', lineHeight: 1.4 }}>
              Eduard Toldrà, 15 bajos<br />08950 Barcelona
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24,
          borderTop: '1px solid rgba(201,168,76,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.1em', color: '#4a4540' }}>
            © 2026 Cannoli Experience · Gestionado por Chocolate Fondue S.L.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Política de privacidad', 'Cookies', 'Aviso legal'].map(l => (
              <a key={l} href="#" style={{ fontSize: 11, color: '#4a4540', letterSpacing: '0.08em', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#9a8f7e'}
                onMouseLeave={e => e.target.style.color = '#4a4540'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          footer > div > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  )
}
