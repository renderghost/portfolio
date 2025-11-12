import { CardArticle } from '@/components/CardArticle/CardArticle';
import { Divider } from '@/components/Divider/Divider';
import { Heading } from '@/components/Heading/Heading';
import { Aside, Layout, Main } from '@/components/Layout/Layout';
import { Link } from '@/components/Link/Link';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import TLDRProfile from '@/components/TLDRProfile/TLDRProfile';
import { useLeaflet } from '@/hooks/atproto';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Writing page component - displays blog posts from AT Protocol PDS
 *
 * @returns JSX element with writing page content
 */

export default function WritingPage(): JSX.Element {
  const { data: documents, loading, error } = useLeaflet();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Writing by Barry Prendergast',
    description: 'Articles and writing on design strategy, product design, and design operations.',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <Layout theme="default">
        <Main>
          <div className="flex flex-col gap-12">
            <Heading level={2} size="md">
              writing / <Link href="/">renderg.host</Link>
            </Heading>

            <Paragraph size="lg">Thoughts on design strategy, product design, and building better products.</Paragraph>

            {loading && <Paragraph size="lg">Loading posts...</Paragraph>}

            {error && <Paragraph size="lg">Error loading posts: {error}</Paragraph>}

            {!loading && !error && (!documents || documents.length === 0) && (
              <Paragraph size="lg">No posts found.</Paragraph>
            )}

            {!loading && !error && documents && documents.length > 0 && (
              <div className="grid grid-cols-1 border-2 border-bones-black-20 dark:border-bones-white-20">
                {documents.map((doc, index) => (
                  <>
                    <CardArticle
                      key={doc.uri}
                      article={{
                        title: doc.title,
                        subtitle: doc.description || '',
                        coverImage: '',
                        articleUrl: doc.articleUrl,
                        publication: doc.publication.name,
                        publicationIcon: doc.publication.icon,
                        published: doc.publishedAt,
                      }}
                    />
                    {index < documents.length - 1 && <Divider />}
                  </>
                ))}
              </div>
            )}

            <Paragraph size="lg">
              <Link href="/">← Back to Home</Link>
            </Paragraph>
          </div>
        </Main>

        <Aside>
          <TLDRProfile />
        </Aside>
      </Layout>
    </>
  );
}
