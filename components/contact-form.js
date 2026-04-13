'use client';

import { useState } from 'react';

export default function ContactForm({
  subject = 'Contato Mais Igreja',
  messageLabel = 'Mensagem',
  messagePlaceholder = '',
  successMessage = 'Mensagem enviada com sucesso.',
}) {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assunto: subject,
          nome: data.get('nome'),
          sobrenome: data.get('sobrenome'),
          email: data.get('email'),
          mensagem: data.get('mensagem'),
        }),
      });

      setLoading(false);

      if (!response.ok) {
        setStatus('Não foi possível enviar sua mensagem. Tente novamente.');
        return;
      }

      event.currentTarget.reset();
      setStatus(successMessage);
    } catch {
      setLoading(false);
      setStatus('Não foi possível enviar sua mensagem. Tente novamente.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Nome</span>
        <input name="nome" required />
      </label>
      <label>
        <span>Sobrenome</span>
        <input name="sobrenome" />
      </label>
      <label>
        <span>Email *</span>
        <input name="email" type="email" required />
      </label>
      <label className="full">
        <span>{messageLabel}</span>
        <textarea name="mensagem" placeholder={messagePlaceholder} required />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
