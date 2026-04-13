import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const metadata = {
  title: 'Política de Estándares de Seguridad Infantil | Mais Igreja',
  robots: { index: false, follow: false },
};

const headings = new Set([
  '1. Estándares contra la explotación y el abuso sexual infantil (EASI)',
  '2. Supervisión y moderación de contenido',
  '3. Mecanismo para comentarios o reportes de usuarios',
  '4. Cumplimiento legal y cooperación con las autoridades',
  '5. Educación y concienciación',
  '6. Persona de contacto para temas de seguridad infantil',
  '7. Actualizaciones de la política',
  '8. Compromiso público',
]);

const bulletLines = new Set([
  'La publicación, difusión o posesión de material que involucre abuso sexual infantil.',
  'Cualquier intento de contactar, persuadir o explotar a menores dentro de la aplicación.',
  'El uso de nuestra plataforma para solicitar, compartir o almacenar contenido inapropiado o ilegal.',
  'Lei nº 8.069/1990 (Estatuto da Criança e do Adolescente – Brasil)',
  'Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD)',
  'Convenio Internacional sobre los Derechos del Niño (ONU)',
  'Estándares de Seguridad Infantil de Google Play',
]);

const normalize = (text) => text.replace(/\u200b/g, '').replace(/📩|📱/g, '').trim();

async function getContent() {
  const filePath = path.join(
    process.cwd(),
    'Páginas y Contenido',
    'politica de estandares de seguridad infantil',
  );
  const text = await readFile(filePath, 'utf8');
  return text
    .split(/\r?\n+/)
    .map((line) => normalize(line))
    .filter(Boolean);
}

export default async function PoliticaSeguridadInfantilEsPage() {
  const lines = await getContent();
  const title = lines[0];
  const updated = lines[1];
  const intro = lines.slice(2, 5);
  const body = lines.slice(5);
  const items = [];

  for (let i = 0; i < body.length; i += 1) {
    const line = body[i];

    if (headings.has(line)) {
      const paragraphs = [];
      const bullets = [];
      let j = i + 1;

      while (j < body.length && !headings.has(body[j])) {
        const current = body[j];
        if (bulletLines.has(current)) bullets.push(current);
        else paragraphs.push(current);
        j += 1;
      }

      items.push({ type: 'section', title: line, paragraphs, bullets });
      i = j - 1;
      continue;
    }

    items.push({ type: 'paragraph', content: line });
  }

  return (
    <section className="content-page">
      <h1>{title}</h1>
      <p className="updated">{updated}</p>
      {intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {items.map((item, index) =>
        item.type === 'section' ? (
          <section key={`${item.title}-${index}`} className="legal-section">
            <h2>{item.title}</h2>
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {item.bullets.length ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : (
          <p key={`${item.content}-${index}`}>{item.content}</p>
        ),
      )}
    </section>
  );
}
