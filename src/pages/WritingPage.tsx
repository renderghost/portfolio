import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { SectionArticle } from '@/components/SectionArticle/SectionArticle';
import { useLeaflet } from '@/hooks/atproto';
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
      <Helmet>
        <title>Writing | Barry Prendergast</title>
        <meta
          name="description"
          content="Articles and writing on design strategy, product design, and design operations by Barry Prendergast."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className="bg-whitesmoke min-h-screen flex flex-col">
        <PageHeader pageTitle="My Writing" />

        <main className="flex flex-col gap-32 items-start px-24 pt-32 pb-128 flex-1">
          {loading && <Paragraph size="lg">Loading posts...</Paragraph>}

          {error && (
            <Paragraph size="lg">Error loading posts: {error}</Paragraph>
          )}

          {!loading && !error && (!documents || documents.length === 0) && (
            <Paragraph size="lg">No posts found.</Paragraph>
          )}

          {!loading &&
            !error &&
            documents &&
            documents.map((doc) => (
              <SectionArticle
                key={doc.uri}
                usecase="2/3"
                article={{
                  title: doc.title,
                  subtitle: doc.description || '',
                  coverImage: doc.coverImage || '',
                  articleUrl: doc.articleUrl,
                  publication: doc.publication.name,
                  publicationIcon: doc.publication.icon,
                  published: doc.publishedAt,
                }}
              />
            ))}
        </main>

        <PageFooter />
      </div>
    </>
  );
}
