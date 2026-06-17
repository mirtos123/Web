export function HeroLighting() {
  return (
    <>
      <ambientLight intensity={0.3} color="#1a1510" />
      <pointLight position={[5, 8, 5]} intensity={2} color="#c9a84c" castShadow />
      <pointLight position={[-6, 4, 3]} intensity={1.2} color="#fff5e0" />
      <pointLight position={[0, -4, 6]} intensity={0.6} color="#8a6e2e" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} color="#c9a84c" />
    </>
  )
}
