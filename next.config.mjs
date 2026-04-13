const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/contacto',
        destination: '/contato',
      },
      {
        source: '/política-de-privacidad',
        destination: '/politica-privacidad-es',
      },
      {
        source: '/pol%C3%ADtica-de-privacidad',
        destination: '/politica-privacidad-es',
      },
      {
        source: '/segurança-infantil',
        destination: '/seguranca-infantil',
      },
      {
        source: '/seguran%C3%A7a-infantil',
        destination: '/seguranca-infantil',
      },
      {
        source: '/seguridad-infantil',
        destination: '/politica-seguridad-infantil-es',
      },
      {
        source: '/eliminación-cuenta-datos',
        destination: '/eliminacion-cuenta-datos',
      },
      {
        source: '/eliminaci%C3%B3n-cuenta-datos',
        destination: '/eliminacion-cuenta-datos',
      },
    ];
  },
};

export default nextConfig;
