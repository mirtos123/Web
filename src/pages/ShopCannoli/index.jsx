import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Footer } from '../../components/layout/Footer'
import { GoldButton } from '../../components/ui/GoldButton'
import { COPY } from '../../constants/copy'

const PHOTOS = ['/cannoli-4.jpg', '/cannoli-5.jpg', '/cannoli-6.jpg', '/cannoli-1.jpg']

export default function ShopCannoli() {
  const [selectedFlavor, setSelectedFlavor] = useState(COPY.shopCannoli.flavors[0].id)
  const [selectedBox, setSelectedBox] = useState(COPY.shopCannoli.boxes[0].id)
  const [photoIdx, setPhotoIdx] = useState(0)
  const flavor = COPY.shopCannoli.flavors.find(f => f.id === selectedFlavor)
  const box = COPY.shopCannoli.boxes.find(b => b.id === selectedBox)

  const waMessage = encodeURIComponent(
    `Hola, quiero pedir ${box?.label} de cannolis sabor ${flavor?.name}. ¿Podéis enviarme información sobre envío?`
  )

  return (
    <div style={{ background: '#0f0e0c', minHeight: '100vh', paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ padding: '80px 48px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              aspectRatio: '4/5',
              borderRadius: 24,
              overflow: 'hidden',
              position: 'relative',
              background: '#1a1610',
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIdx}
                  src={PHOTOS[photoIdx]}
                  alt="Cannolis artesanos"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
              </AnimatePresence>

              {/* Gold overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(15,14,12,0.8), transparent)',
              }} />

              {/* Thumb nav */}
              <div style={{
                position: 'absolute',
                bottom: 20, left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex', gap: 8,
              }}>
                {PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPhotoIdx(i)}
                    style={{
                      width: i === photoIdx ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === photoIdx ? '#c9a84c' : 'rgba(201,168,76,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute',
              top: 24, right: 24,
              background: 'rgba(15,14,12,0.9)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 12,
              padding: '10px 16px',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', marginBottom: 2 }}>Artesano</div>
              <div style={{ fontSize: 13, color: '#f5ede0', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Farcit al moment</div>
            </div>
          </motion.div>

          {/* Product details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'DM Sans, sans-serif', fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#c9a84c', marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c' }} />
              {COPY.shopCannoli.eyebrow}
            </span>

            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800,
              color: '#f5ede0',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 20,
            }}>
              {COPY.shopCannoli.h1}
            </h1>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16,
              color: '#9a8f7e',
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
              {COPY.shopCannoli.lead}
            </p>

            {/* Flavor selector */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6b6055',
                marginBottom: 14,
              }}>
                Elige tu sabor
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {COPY.shopCannoli.flavors.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFlavor(f.id)}
                    style={{
                      padding: '14px 16px',
                      border: `1px solid ${selectedFlavor === f.id ? '#c9a84c' : 'rgba(201,168,76,0.15)'}`,
                      borderRadius: 12,
                      background: selectedFlavor === f.id ? 'rgba(201,168,76,0.1)' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700, color: '#f5ede0', marginBottom: 3 }}>{f.name}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#6b6055', lineHeight: 1.4 }}>{f.desc}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#c9a84c', marginTop: 6, fontWeight: 500 }}>{f.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Box selector */}
            <div style={{ marginBottom: 36 }}>
              <h3 style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6b6055',
                marginBottom: 14,
              }}>
                Tamaño de la caja
              </h3>
              <div style={{ display: 'flex', gap: 10 }}>
                {COPY.shopCannoli.boxes.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBox(b.id)}
                    style={{
                      flex: 1,
                      padding: '16px 12px',
                      border: `1px solid ${selectedBox === b.id ? '#c9a84c' : 'rgba(201,168,76,0.15)'}`,
                      borderRadius: 12,
                      background: selectedBox === b.id ? 'rgba(201,168,76,0.1)' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 800, color: '#c9a84c' }}>{b.count}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#9a8f7e', marginTop: 2 }}>uds</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: '#f5ede0', marginTop: 8 }}>{b.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 16,
              padding: '20px 24px',
              marginBottom: 24,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#6b6055', marginBottom: 4 }}>Tu selección</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: '#f5ede0' }}>
                  {box?.label} · {flavor?.name}
                </div>
              </div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, color: '#c9a84c' }}>
                {box?.price}
              </div>
            </div>

            <GoldButton
              href={`https://wa.me/34679166062?text=${waMessage}`}
              variant="filled"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Pedir por WhatsApp
            </GoldButton>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 12,
              color: '#4a4540',
              textAlign: 'center',
              marginTop: 12,
            }}>
              Envío en 24-48h · Packaging premium
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '60px 48px 100px',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { icon: '🇮🇹', title: 'Ingredientes de Sicilia', desc: 'Ricotta auténtica, pistacho di Bronte, limones de Sicilia. Nada de sustitutos.' },
            { icon: '📦', title: 'Packaging premium', desc: 'Cajas diseñadas para proteger cada cannolo durante el transporte.' },
            { icon: '⚡', title: 'Envío exprés', desc: 'Entrega en 24-48h en toda España. Frescos, crujientes, perfectos.' },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '32px 24px',
                border: '1px solid rgba(201,168,76,0.1)',
                borderRadius: 16,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#f5ede0', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6b6055', lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 820px) {
          section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          section > div > div:first-child { order: -1; }
        }
      `}</style>
    </div>
  )
}
