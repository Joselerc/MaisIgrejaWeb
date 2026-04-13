import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const metadata = {
  title: 'Política de Privacidad | Mais Igreja',
  robots: { index: false, follow: false },
};

const headings = new Set([
  '1. Recopilación de información',
  '2. Uso de la información',
  '3. Compartición de datos',
  '4. Almacenamiento y seguridad',
  '5. Cookies',
  '6. Derechos del usuario',
  '7. Cambios en esta política',
  '8. Contato',
]);

const listIntro = new Set([
  'La información recopilada se utiliza para:',
]);

const normalize = (text) => text.replace(/\u200b/g, '').trim();

async function getContent() {
  const filePath = path.join(process.cwd(), 'Páginas y Contenido', 'privacidad-español');
  const text = await readFile(filePath, 'utf8');
  return text
    .split(/\r?\n+/)
    .map((line) => normalize(line))
    .filter(Boolean);
}

export default async function PoliticaPrivacidadEsPage() {
  const lines = await getContent();
  const title = lines[0];
  const updated = lines[1];
  const body = lines.slice(2);
  const items = [];

  for (let i = 0; i < body.length; i += 1) {
    const line = body[i];

    if (headings.has(line)) {
      const paragraphs = [];
      const bullets = [];
      let j = i + 1;

      while (j < body.length && !headings.has(body[j])) {
        const current = body[j];
        if (current === 'Responder preguntas y solicitudes de los usuarios') bullets.push(current);
        else if (current === 'Mejorar nuestros servicios y comunicación') bullets.push(current);
        else if (current === 'Cumplir con obligaciones legales') bullets.push(current);
        else paragraphs.push(current);
        j += 1;
      }

      items.push({ type: 'section', title: line, paragraphs, bullets });
      i = j - 1;
      continue;
    }

    if (listIntro.has(line)) {
      items.push({ type: 'paragraph', content: line });
      continue;
    }

    items.push({ type: 'paragraph', content: line });
  }

  return (
    <section className="content-page">
      <h1>{title}</h1>
      <p className="updated">{updated}</p>
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
