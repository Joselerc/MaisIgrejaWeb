import { notFound } from 'next/navigation';
import ContactForm from '../../components/contact-form';
import { contactPage, getPage, pages } from '../../lib/site-content';

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  return page ? { title: `${page.title} | Mais Igreja` } : {};
}

export default async function SlugPage({ params }) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) notFound();

  if (page.kind === 'contact') {
    return (
      <section className="contact-page">
        <div className="contact-intro">
          <h1>{contactPage.heading}</h1>
          <p>{contactPage.description}</p>
        </div>
        <p className="contact-email-label">Email</p>
        <a className="contact-email" href={`mailto:${contactPage.email}`}>
          {contactPage.email}
        </a>
        <ContactForm />
      </section>
    );
  }

  return (
    <section className="content-page">
      <h1>{page.title}</h1>
      {page.updated && <p className="updated">{page.updated}</p>}
      <p>{page.intro}</p>
      {page.sections.map((section, index) => (
        <section key={`${section.title || 'section'}-${index}`} className="legal-section">
          {section.title && <h2>{section.title}</h2>}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.items?.length ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </section>
  );
}
