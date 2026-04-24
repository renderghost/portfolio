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
    '@type': 'CollectionPage',
    name: 'Writing by Barry Prendergast',
    description:
      'Articles and writing on design strategy, product design, and design operations.',
    url: 'https://renderg.host/writing',
    author: {
      '@type': 'Person',
      name: 'Barry Prendergast',
      url: 'https://renderg.host',
    },
  };

  return (
    <>
      <SeoHead
        title='Writing | Barry Prendergast, UX Designer Berlin'
        description='Articles on UX strategy, product design, design systems, and systems thinking by Barry Prendergast, independent designer based in Berlin, Germany.'
        canonical={`${SITE_URL}/writing`}
      />
      <Helmet>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className="bg-whitesmoke min-h-screen flex flex-col">
        <PageHeader />

        <main className="flex flex-col gap-32 items-start px-24 pt-32 pb-128 flex-1">
          <SectionHeader title="My Writing" />
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
