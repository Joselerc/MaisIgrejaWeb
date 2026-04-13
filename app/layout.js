import Link from 'next/link';
import './globals.css';
import { footerLinks } from '../lib/site-content';

export const metadata = {
  title: 'Mais Igreja',
  description: 'O aplicativo que conecta sua igreja com o futuro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-row">
            {footerLinks.slice(0, 4).map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <a className="footer-email" href="mailto:support@maisigreja.io">
              support@maisigreja.io
            </a>
          </div>
          <div className="footer-row footer-row-small">
            {footerLinks.slice(4).map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <p>Mais Igreja App © 2025. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
