import ContactForm from '../../components/contact-form';

export const metadata = {
  title: 'Solicitação de Exclusão de Conta e Dados | Mais Igreja',
};

const bullets = [
  'Sua conta e todos os dados pessoais fornecidos serão removidos permanentemente dos nossos sistemas.',
  'Dados que somos obrigados a manter por lei (ex.: registros de transações ou doações) serão retidos pelo período legal mínimo e depois excluídos.',
  'Uma vez concluída a exclusão, não será possível recuperar sua conta ou informações.',
];

const partialBullets = [
  'Seu nome completo e e-mail da conta.',
  'Quais dados deseja excluir (ex.: foto de perfil, dados de contato, mensagens em grupos específicos, histórico de atividades, etc.)',
];

const removableBullets = [
  'Foto e dados de perfil (exceto e-mail de login).',
  'Mensagens e mídias quando tecnicamente viável.',
  'Histórico de eventos/inscrições do usuário.',
];

const retainedBullets = [
  'Dados necessários para o funcionamento da conta (e-mail/login, permissões, IDs técnicos).',
  'Registros exigidos por lei (ex.: doações/transações) - retidos pelo prazo legal mínimo e depois excluídos.',
];

const deadlines = [
  'Confirmação do pedido: até 7 dias úteis.',
  'Conclusão da exclusão (parcial ou total): até 30 dias corridos, salvo exceções legais/técnicas.',
];

export default function ExclusaoDeContaPage() {
  return (
    <section className="content-page deletion-page">
      <div className="deletion-intro">
        <h1>Solicitação de Exclusão de Conta e Dados</h1>
        <p>
          Você pode solicitar a exclusão da sua conta do Mais Igreja App e dos dados
          pessoais associados a qualquer momento.
        </p>
        <p>Preencha o formulário abaixo ou envie um e-mail diretamente para:</p>
        <p className="contact-email-label">Email</p>
        <a className="contact-email" href="mailto:support@maisigreja.io">
          support@maisigreja.io
        </a>
      </div>

      <section className="legal-section">
        <h2>Ao solicitar a exclusão:</h2>
        <ul>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <ContactForm
        subject="Solicitação de exclusão de conta"
        messageLabel="Mensagem *"
        messagePlaceholder='ex.: "Quero excluir minha conta e todos os meus dados"'
        successMessage="Solicitação enviada com sucesso."
      />

      <section className="legal-section">
        <h2>Solicitação de exclusão parcial de dados</h2>
        <p>
          Se você deseja excluir apenas alguns dos seus dados pessoais, sem apagar sua
          conta do Mais Igreja App, solicite pelo formulário acima ou envie um e-mail
          para support@maisigreja.io com as seguintes informações:
        </p>
        <ul>
          {partialBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-section">
        <p>O que podemos excluir parcialmente:</p>
        <ul>
          {removableBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-section">
        <p>O que pode ser mantido:</p>
        <ul>
          {retainedBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-section">
        <p>Prazos:</p>
        <ul>
          {deadlines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
