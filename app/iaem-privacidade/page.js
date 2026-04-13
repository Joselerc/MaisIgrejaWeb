import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const metadata = {
  title: 'Política de Privacidade de Dados Pessoais | Mais Igreja',
  robots: { index: false, follow: false },
};

const headings = new Set([
  'O que é a nossa política de privacidade',
  'Quais nossos papéis no tratamento de dados pessoais',
  'Quais dados pessoais tratamos',
  'Atenção: nós coletamos dados pessoais sensíveis',
  'Por que nós coletamos os seus dados pessoais?',
  'Como coletamos os seus dados pessoais',
  'Com quem compartilhamos seus dados pessoais',
  'Como armazenamos seus dados pessoais',
  'Sobre a transferência internacional de dados',
  'Você sabe quais são os seus direitos sobre o tratamento de dados pessoais?',
  'Você sabe quais são as suas responsabilidades sobre a segurança dos seus dados pessoais?',
  'Por quanto tempo os seus dados pessoais ficam armazenados?',
  'Como posso solicitar a exclusão dos meus dados?',
  'Fale com a Mais Igreja App',
  'Queremos ouvir você!',
  'Mudanças na política',
  'DPO Responsável',
]);

const normalize = (text) => text.replace(/\u200b/g, '').trim();

async function getContent() {
  const filePath = path.join(process.cwd(), 'Páginas y Contenido', 'Aem-privacidade');
  const text = await readFile(filePath, 'utf8');
  return text
    .split(/\r?\n\r?\n+/)
    .map((block) =>
      normalize(
        block
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean)
          .join(' '),
      ),
    )
    .filter(Boolean);
}

export default async function IaemPrivacidadePage() {
  const [title, updated, ...blocks] = await getContent();

  return (
    <section className="content-page">
      <h1>{title}</h1>
      <p className="updated">{updated}</p>
      {blocks.map((block) =>
        headings.has(block) ? (
          <section key={block} className="legal-section">
            <h2>{block}</h2>
          </section>
        ) : (
          <p key={block}>{block}</p>
        ),
      )}
    </section>
  );
}
