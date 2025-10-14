import type { Metadata } from 'next'
import Link from 'next/link'
import { getCaseStudies } from '@/lib/data/getData'

export const metadata: Metadata = {
  title: 'Case Studies | Barry Prendergast',
  description: 'Detailed case studies of UX design and frontend development projects.',
}

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies()

  // Sort case studies by date, most recent first
  const sortedStudies = studies.sort(
    (a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
  )

  // Get unique project types for filtering
  const projectTypes = Array.from(
    new Set(studies.map((study) => study.type))
  )

  return (
    <main className="min-h-screen bg-bones-white dark:bg-bones-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-bones-black dark:text-bones-white mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-bones-dimgray dark:text-bones-whitesmoke">
            A selection of projects showcasing my approach to solving design and development challenges.
          </p>
        </section>

        {/* Project Type Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-4">
            {projectTypes.map((type) => (
              <span
                key={type}
                className="bg-bones-whitesmoke dark:bg-bones-dimgray px-4 py-2 rounded-full text-sm text-bones-dimgray dark:text-bones-whitesmoke cursor-pointer hover:bg-bones-blue/10 hover:text-bones-blue dark:hover:bg-bones-blue/20 dark:hover:text-bones-cyan transition-colors capitalize"
              >
                {type.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedStudies.map((study) => (
              <Link
                href={`/studies/${study.slug}`}
                key={study.slug}
                className="group block"
              >
                <article className="h-full bg-bones-whitesmoke dark:bg-bones-dimgray rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform">
                  {study.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={study.coverImage}
                        alt={study.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-bones-blue/10 text-bones-blue dark:bg-bones-blue/20 dark:text-bones-cyan mb-4 capitalize">
                      {study.type.replace(/-/g, ' ')}
                    </span>
                    <h2 className="text-2xl font-serif text-bones-black dark:text-bones-white mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors">
                      {study.name}
                    </h2>
                    <p className="text-bones-dimgray dark:text-bones-whitesmoke mb-4">
                      {study.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.relevantSkills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="bg-bones-blue/5 text-bones-dimgray dark:bg-bones-blue/10 dark:text-bones-whitesmoke px-2 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      {study.relevantSkills.length > 3 && (
                        <span className="bg-bones-blue/5 text-bones-dimgray dark:bg-bones-blue/10 dark:text-bones-whitesmoke px-2 py-1 rounded-full text-sm">
                          +{study.relevantSkills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

