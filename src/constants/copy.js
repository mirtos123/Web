export const COPY = {
  brand: 'Cannoli Experience',
  tagline: 'The Gold Standard of Cannolis',
  sub: 'Farcit al moment. La autenticidad siciliana en cada bocado.',

  nav: {
    experience: 'Experiencia',
    shopCannoli: 'Cannolis',
    shopCookies: 'Cookies',
    cta: 'Reserva',
  },

  home: {
    eyebrow: 'Artesano · Espectacular · Siciliano',
    h1Line1: 'The Gold Standard',
    h1Line2: 'of Cannolis.',
    lead: 'Tres mundos, una obsesión: el sabor perfecto. Catering show-cooking, cannolis artesanos y cookies de Nueva York que te dejarán sin palabras.',
    scrollCta: 'Descubre los mundos',
    act1Label: 'El relleno',
    act2Label: 'La cookie',
    act3Label: 'El momento',
  },

  portals: {
    experience: {
      label: 'Catering Show',
      title: 'La Experiencia',
      desc: 'Show-cooking en vivo para bodas y eventos',
      cta: 'Reservar evento',
    },
    shopCannoli: {
      label: 'Tienda Online',
      title: 'Cannoli Box',
      desc: 'Cajas artesanas enviadas a tu puerta',
      cta: 'Pedir cannolis',
    },
    shopCookies: {
      label: 'Limited Drops',
      title: 'NY Cookies',
      desc: 'Cookies de Nueva York. Edición limitada.',
      cta: 'Entrar a la tienda',
    },
  },

  experience: {
    eyebrow: 'Show Catering · Eventos Premium',
    h1: 'Un espectáculo de sabor para tu evento.',
    lead: 'Llevamos el show-cooking de cannolis sicilianos directamente a tu celebración. Farcit al moment frente a tus invitados.',
    price: '4,50€',
    priceUnit: 'por persona',
    minGuests: 'Mínimo 50 personas',
    bookingCta: 'Reservar por WhatsApp',
    services: [
      { title: 'Bodas', desc: 'El momento más dulce de tu gran día. El show que recuerdan todos.' },
      { title: 'Corporativos', desc: 'Experiencias gastronómicas para equipos y clientes.' },
      { title: 'Comuniones', desc: 'Un rincón dulce único que encanta a grandes y pequeños.' },
      { title: 'Fiestas Privadas', desc: 'Cumpleaños, fiestas de cumpleaños, celebraciones especiales.' },
    ],
    process: [
      { n: '01', h: 'Contacto', b: 'Nos cuentas tu evento: fecha, lugar y número de invitados.' },
      { n: '02', h: 'Propuesta', b: 'Te enviamos presupuesto personalizado en menos de 24 horas.' },
      { n: '03', h: 'Reserva', b: 'Confirmas con señal y nosotros lo preparamos todo.' },
      { n: '04', h: 'El Show', b: 'Llegamos, montamos y empezamos el espectáculo. Farcit al moment.' },
    ],
    flavors: ['Ricotta clásica', 'Chocolate negro', 'Pistacho de Bronte', 'Limón de Sicilia', 'Nutella', 'Frutas del bosque'],
  },

  shopCannoli: {
    eyebrow: 'Tienda Online · Envío a domicilio',
    h1: 'Cannolis artesanos. En tu casa.',
    lead: 'Scorze crujientes, cremas de ricotta auténtica. Elegimos los mejores ingredientes de Sicilia y los enviamos directamente a tu puerta.',
    flavors: [
      { id: 'ricotta', name: 'Ricotta Clásica', desc: 'La receta original. Suave, delicada, perfecta.', price: '4,50€/ud' },
      { id: 'pistacho', name: 'Pistacho di Bronte', desc: 'El pistacho más famoso del mundo, en crema.', price: '5,20€/ud' },
      { id: 'chocolate', name: 'Chocolate Negro 70%', desc: 'Intenso, profundo. Para los amantes del chocolate.', price: '4,80€/ud' },
      { id: 'limon', name: 'Limón de Sicilia', desc: 'Fresco y cítrico. El sabor del mediterráneo.', price: '4,80€/ud' },
    ],
    boxes: [
      { id: 'box6', count: 6, price: '26€', label: 'Caja de 6', desc: 'Perfecta para una ocasión especial' },
      { id: 'box12', count: 12, price: '48€', label: 'Caja de 12', desc: 'Para compartir en familia o con amigos' },
      { id: 'box24', count: 24, price: '89€', label: 'Caja de 24', desc: 'El regalo perfecto para cualquier celebración' },
    ],
  },

  shopCookies: {
    eyebrow: 'New York Style · Limited Drops',
    h1: 'Las cookies que cambiarán tu vida.',
    lead: 'Receta auténtica de Nueva York. Bordes crujientes, interior lávico de chocolate. Solo disponibles en drops limitados.',
    flavors: [
      { id: 'choc', name: 'Double Chocolate', desc: 'Masa de cacao, chips de chocolate negro 70% y blanco.', badge: 'BESTSELLER' },
      { id: 'caramel', name: 'Salted Caramel', desc: 'Caramelo artesano, fleur de sel, chocolate con leche.', badge: null },
      { id: 'pistacho', name: 'Pistachio Dream', desc: 'Pistachio di Bronte, chocolate blanco, polvo de frambuesa.', badge: 'LIMITED' },
      { id: 'nyc', name: 'NYC Classic', desc: 'La original. Vainilla bourbon, chips de chocolate 66%.', badge: null },
    ],
    dropCta: 'Únete al waitlist',
    dropDesc: 'Los drops se agotan en horas. Regístrate para ser el primero en saber cuándo está disponible el próximo.',
  },
}
