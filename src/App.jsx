import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { NavBar } from './components/layout/NavBar'
import { PageTransition } from './components/layout/PageTransition'
import { LoadingScreen } from './components/ui/LoadingScreen'
import './styles/global.css'

const Home = lazy(() => import('./pages/Home'))
const Experience = lazy(() => import('./pages/Experience'))
const ShopCannoli = lazy(() => import('./pages/ShopCannoli'))
const ShopCookies = lazy(() => import('./pages/ShopCookies'))

export default function App() {
  const location = useLocation()
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingScreen />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/shop-cannoli" element={<PageTransition><ShopCannoli /></PageTransition>} />
            <Route path="/shop-cookies" element={<PageTransition><ShopCookies /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  )
}
