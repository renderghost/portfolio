import { CardGridArticle } from '@/components/CardGridArticle/CardGridArticle';
import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { useLeaflet } from '@/hooks/atproto';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

export default function WritingPage(): JSX.Element {
  const { data: documents, loading, error } = useLeaflet();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Writing — Barry Prendergast',
    description:
      'A collection of articles exploring UX design, systems thinking, and product strategy, focused on solving complex problems and making better decisions in real-world teams.',
    url: 'https://renderg.host/writing',
    author: {
      '@type': 'Person',
      name: 'Barry Prendergast',
      url: 'https://renderg.host',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Berlin',
        addressCountry: 'Germany',
      },
      sameAs: [
        'https://bsky.app/profile/renderg.host',
        'https://linkedin.com/in/barrymprendergast',
        'https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM',
        'https://calendly.com/barry-prendergast',
      ],
      knowsAbout: [
        'UX Strategy',
        'Outcome-Driven Design',
        'Product Design',
        'Service Design',
        'User Research',
        'Systems Thinking',
        'Design Systems',
        'Design Operations',
        'Interaction Design',
        'Rapid Prototyping',
        'Usability Testing',
        'Information Architecture',
      ],
    },

    // 🔑 This is the critical addition
    blogPost:
      documents?.map((doc, index) => ({
        '@type': 'BlogPosting',
        headline: doc.title,
        description: doc.description || '',
        url: doc.articleUrl,
        datePublished: doc.publishedAt,
        author: {
          '@type': 'Person',
          name: 'Barry Prendergast',
        },
        position: index + 1,
      })) ?? [],
  };

  return (
    <>
      <SeoHead
        title='Writing — Barry Prendergast | UX, Systems & Product Thinking'
        description='Articles by Barry Prendergast on UX, systems thinking, and product design. Practical perspectives on solving complex problems, making better decisions, and navigating the messy reality of building digital products.'
        canonical={`${SITE_URL}/writing`}
      />
      <Helmet>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-whitesmoke">
        <PageHeader />

       <main className='flex flex-col items-start flex-1 max-w-[1920px] px-24 pt-24 gap-24 pb-128'>
          <SectionHeader title="My Writing" statement="Field notes, opinions, and reflections on UX, systems, and product design, shaped by real work with teams trying to make sense of complex problems and make better decisions." />
          {loading && <Paragraph size="lg">Loading posts...</Paragraph>}

          {error && (
            <Paragraph size="lg">Error loading posts: {error}</Paragraph>
          )}

          {!loading && !error && (!documents || documents.length === 0) && (
            <Paragraph size="lg">No posts found.</Paragraph>
          )}

          {!loading && !error && documents && (
            <CardGridArticle
              cards={documents.map((doc) => ({
                article: {
                  title: doc.title,
                  subtitle: doc.description || '',
                  coverImage: doc.coverImage || '',
                  articleUrl: doc.articleUrl,
                  publication: doc.publication.name,
                  publicationIcon: doc.publication.icon,
                  published: doc.publishedAt,
                },
              }))}
            />
          )}
        </main>

        <PageFooter />
      </div>
    </>
  );
}
