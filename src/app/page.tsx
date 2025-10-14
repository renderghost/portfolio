import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import HeroSection from '@/components/home/HeroSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import ArticlesSection from '@/components/home/ArticlesSection'

export const metadata: Metadata = {
  title: 'Barry Prendergast | UX Designer & Frontend Developer',
  description: 'Digital product designer specializing in user experience design and frontend development.',
}

export default function HomePage() {
  return (
    <Container className="py-8">
      <HeroSection />
      <CaseStudiesSection />
      <ArticlesSection />
    </Container>
  )
}


import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import HeroSection from '@/components/home/HeroSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import ArticlesSection from '@/components/home/ArticlesSection'

export const metadata: Metadata = {
  title: 'Barry Prendergast | UX Designer & Frontend Developer',
  description: 'Digital product designer specializing in user experience design and frontend development.',
}

export default function HomePage() {
  return (
    <Container className="py-8">
      <HeroSection />
      <CaseStudiesSection />
      <ArticlesSection />
    </Container>
  )
}

          >
            <article className="h-full border-l-4 border-bones-blue dark:border-bones-cyan pl-6 py-4 transition duration-300 hover:pl-8 hover:bg-bones-blue/5 dark:hover:bg-bones-cyan/5 rounded">
              <Heading level={3} className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors">
                {article.title}
              </Heading>
              {article.subtitle && (
                <Text>
                  {article.subtitle}
                </Text>
              )}
              <Text variant="small" className="text-bones-dimgray dark:text-bones-whitesmoke">
                Published in {article.publication} • {new Date(article.published).toLocaleDateString()}
              </Text>
            </article>
          </a>
        </Motion>
      ))}
    </div>
  )
}

import type { Metadata } from 'next'
import { getFeaturedArticles, getLatestCaseStudies } from '@/lib/data/getData'
import { Heading, Text, Card, CardImage, CardContent, Badge, Container, Button, Motion } from '@/components/ui'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Barry Prendergast | UX Designer & Frontend Developer',
  description: 'Digital product designer specializing in user experience design and frontend development.',
}

export default async function HomePage() {
  const [featuredArticles, latestCaseStudies] = await Promise.all([
    getFeaturedArticles(),
    getLatestCaseStudies(3),
  ])

  return (
    <Container className="py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <Motion>
          <div className="max-w-3xl">
            <Heading level={1}>
              UX Designer & Frontend Developer
            </Heading>
            <Text variant="lead" className="mb-8">
              Creating intuitive digital experiences through thoughtful design and clean code.
            </Text>
            <div className="flex gap-4">
              <Button href="/studies" size="lg">
                View Portfolio
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Motion>
      </section>

      {/* Featured Case Studies */}
      <section className="mb-16">
        <Motion>
          <div className="flex items-center justify-between mb-8">
            <Heading level={2}>
              Latest Work
            </Heading>
            <Button href="/studies" variant="outline">
              View All Work
            </Button>
          </div>
        </Motion>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestCaseStudies.map((study, index) => (
            <Motion key={study.slug} delay={index * 200}>
              <Link href={`/studies/${study.slug}`} className="group block h-full">
              <Card className="h-full transition duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-bones-blue/10">
                {study.coverImage && (
                  <CardImage
                    src={study.coverImage}
                    alt={study.name}
                  />
                )}
                <CardContent>
                  <Badge className="mb-3" variant="outline">
                    {study.type}
                  </Badge>
                  <Heading level={3} className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors">
                    {study.name}
                  </Heading>
                  <Text>
                    {study.summary}
                  </Text>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.relevantSkills.slice(0, 3).map((skill) => (
                      <Badge key={skill}>
                        {skill}
                      </Badge>
                    ))}
                    {study.relevantSkills.length > 3 && (
                      <Badge variant="outline">
                        +{study.relevantSkills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
              </Link>
            </Motion>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section>
        <Motion>
          <div className="flex items-center justify-between mb-8">
            <Heading level={2}>
              Featured Articles
            </Heading>
            <Button href="/articles" variant="outline">
              Read More Articles
            </Button>
          </div>
        </Motion>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article, index) => (
            <Motion key={article.slug} delay={index * 200}>
              <a
                href={article.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <article className="h-full border-l-4 border-bones-blue dark:border-bones-cyan pl-6 py-4 transition duration-300 hover:pl-8 hover:bg-bones-blue/5 dark:hover:bg-bones-cyan/5">
                  <Heading level={3} className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors">
                    {article.title}
                  </Heading>
                  {article.subtitle && (
                    <Text>
                      {article.subtitle}
                    </Text>
                  )}
                  <Text variant="small" className="text-bones-dimgray dark:text-bones-whitesmoke">
                    Published in {article.publication} • {new Date(article.published).toLocaleDateString()}
                  </Text>
                </article>
              </a>
            </Motion>
          ))}
        </div>
      </section>
    </Container>
  )
}
