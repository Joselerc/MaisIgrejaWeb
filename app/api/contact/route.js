import nodemailer from 'nodemailer';

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

export async function POST(request) {
  const body = await request.json();
  const nome = String(body?.nome || '').trim();
  const sobrenome = String(body?.sobrenome || '').trim();
  const email = String(body?.email || '').trim();
  const mensagem = String(body?.mensagem || '').trim();

  if (!nome || !email || !mensagem) {
    return Response.json({ error: 'Dados inválidos.' }, { status: 400 });
  }

  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length) {
    return Response.json(
      { error: `Variáveis ausentes: ${missing.join(', ')}` },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'support@maisigreja.io',
      replyTo: email,
      subject: `Contato Mais Igreja: ${nome} ${sobrenome}`.trim(),
      text: [
        `Nome: ${nome}`,
        `Sobrenome: ${sobrenome || '-'}`,
        `Email: ${email}`,
        '',
        'Mensagem:',
        mensagem,
      ].join('\n'),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Falha ao enviar email.' }, { status: 500 });
  }
}
