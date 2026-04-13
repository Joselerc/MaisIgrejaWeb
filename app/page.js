import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Mais Igreja</h1>
          <h2>O aplicativo que conecta sua igreja com o futuro</h2>
          <p>Leve sua comunidade para o próximo nível com tecnologia feita sob medida.</p>
          <p>
            Desenvolvemos apps intuitivos e completos, pensados para facilitar a gestão, a
            comunicação e o engajamento dos membros Tudo para a realidade das igrejas
            brasileiras.
          </p>
          <Link className="primary-button" href="/contato">
            Quero conhecer a solução
          </Link>
        </div>
        <div className="hero-art">
          <img
            className="hero-image"
            src="/header-image"
            alt="Ilustração do aplicativo Mais Igreja"
          />
        </div>
      </section>
      <div className="wave-band" />
    </>
  );
}
