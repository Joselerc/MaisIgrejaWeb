const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/contacto',
        destination: '/contato',
      },
      {
        source: '/política-de-privacidade',
        destination: '/politica-de-privacidade',
      },
      {
        source: '/pol%C3%ADtica-de-privacidade',
        destination: '/politica-de-privacidade',
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
