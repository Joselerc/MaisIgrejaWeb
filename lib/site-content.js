export const footerLinks = [
  ['Home', '/'],
  ['Política de Privacidade', '/política-de-privacidade'],
  ['Termos de Uso', '/termos-de-uso'],
  ['Segurança Infantil', '/segurança-infantil'],
  ['Contato', '/contacto'],
  ['Suporte', '/suporte'],
];

export const pages = {
  contato: { kind: 'contact', title: 'Contato' },
  suporte: { kind: 'contact', title: 'Suporte' },
  'politica-de-privacidade': {
    kind: 'legal',
    title: 'Política de Privacidade',
    updated: 'Última atualização: 30/07/2025',
    intro:
      'A Mais Igreja App valoriza a sua privacidade e está comprometida em proteger os dados pessoais de seus usuários e visitantes. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações ao acessar nosso site.',
    sections: [
      {
        title: '1. Coleta de Informações',
        paragraphs: [
          'Coletamos informações fornecidas voluntariamente por você ao entrar em contato conosco por meio de formulários, email ou WhatsApp. Os dados coletados podem incluir nome, sobrenome, email, telefone e mensagem.',
        ],
      },
      {
        title: '2. Uso das Informações',
        items: [
          'Responder dúvidas e solicitações dos usuários',
          'Melhorar nossos serviços e comunicação',
          'Cumprir obrigações legais',
        ],
      },
      {
        title: '3. Compartilhamento de Dados',
        paragraphs: [
          'Seus dados NÃO serão vendidos ou compartilhados com terceiros, exceto quando necessário para cumprir obrigações legais ou mediante sua autorização expressa.',
        ],
      },
      {
        title: '4. Armazenamento e Segurança',
        paragraphs: [
          'Seus dados são armazenados de forma segura e protegidos contra acesso não autorizado, uso indevido ou divulgação.',
        ],
      },
      {
        title: '5. Cookies',
        paragraphs: [
          'Utilizamos cookies apenas para melhorar a experiência de navegação em nosso site. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades.',
        ],
      },
      {
        title: '6. Direitos do Usuário',
        paragraphs: [
          'Você pode solicitar, a qualquer momento, acesso, atualização ou exclusão de seus dados pessoais entrando em contato pelo email: support@maisigreja.io',
        ],
      },
      {
        title: '7. Alterações nesta Política',
        paragraphs: [
          'Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Mudanças entrarão em vigor assim que publicadas neste site.',
        ],
      },
      {
        title: '8. Contato',
        paragraphs: [
          'Para dúvidas sobre esta política, entre em contato:',
          'Email: maisigreja.io',
          'WhatsApp: (11) 9864-6373',
        ],
      },
    ],
  },
  'termos-de-uso': {
    kind: 'legal',
    title: 'Termos de Uso',
    updated: 'Última atualização: 30/07/2025',
    intro:
      'Ao acessar o site da Mais Igreja App, você concorda com os seguintes termos e condições de uso. Leia atentamente antes de utilizar nossos serviços.',
    sections: [
      {
        title: '1. Aceitação dos Termos',
        paragraphs: [
          'Ao navegar em nosso site, você concorda automaticamente com estes Termos de Uso e com a Política de Privacidade.',
        ],
      },
      {
        title: '2. Uso do Site',
        paragraphs: [
          'O conteúdo do site é destinado a apresentar informações sobre nossos serviços de desenvolvimento de aplicativos para igrejas. Não é permitido copiar, reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia por escrito.',
        ],
      },
      {
        title: '3. Responsabilidade',
        paragraphs: [
          'Fazemos o possível para manter as informações do site atualizadas e corretas, mas não garantimos a ausência de erros ou omissões. Não nos responsabilizamos por danos decorrentes do uso ou da incapacidade de uso do site.',
        ],
      },
      {
        title: '4. Links Externos',
        paragraphs: [
          'Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou políticas desses sites.',
        ],
      },
      {
        title: '5. Modificações nos Termos',
        paragraphs: [
          'A Mais Igreja App pode alterar estes Termos de Uso a qualquer momento. Alterações passam a valer a partir de sua publicação no site.',
        ],
      },
      {
        title: '6. Contato',
        paragraphs: [
          'Em caso de dúvidas sobre estes Termos, entre em contato:',
          'Email: support@maisigreja.io',
          'WhatsApp: (11) 9864-6373',
        ],
      },
    ],
  },
  'seguranca-infantil': {
    kind: 'legal',
    title: 'Padrões de Segurança Infantil',
    intro:
      'A Mais Igreja App se compromete a manter um ambiente seguro para todas as idades, especialmente para crianças e adolescentes.',
    sections: [
      {
        paragraphs: [
          'Não toleramos qualquer forma de exploração ou abuso sexual infantil (EASI) dentro de nossos serviços ou conteúdos.',
        ],
      },
      {
        title: 'Como reportar',
        paragraphs: [
          'Caso identifique qualquer comportamento suspeito ou conteúdo inapropriado, entre em contato através do e-mail: support@maisigreja.io.',
          'Nosso time está preparado para receber denúncias e tomar medidas imediatas.',
        ],
      },
      {
        title: 'Procedimento de denúncia',
        items: [
          'Recebemos e analisamos a denúncia imediatamente.',
          'Se necessário, comunicamos o caso às autoridades competentes.',
          'Cooperamos integralmente com investigações oficiais.',
        ],
      },
      {
        title: 'Compromissos',
        items: [
          'Cumprir todas as leis e regulamentos nacionais e internacionais aplicáveis à segurança infantil.',
          'Fornecer canais acessíveis e eficazes de denúncia.',
          'Remover rapidamente qualquer conteúdo prejudicial identificado.',
        ],
      },
      {
        paragraphs: [
          'Esta política se aplica a todos os aplicativos e serviços oferecidos pela Mais Igreja App.',
        ],
      },
    ],
  },
};

export const contactPage = {
  heading: 'Fale Conosco',
  description:
    'Estamos aqui para ajudar sua igreja a evoluir. Preencha o formulário abaixo ou envie um e-mail diretamente para:',
  email: 'support@maisigreja.io',
};

export const getPage = (slug) => pages[slug];
