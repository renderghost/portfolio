import type { Metadata } from 'next'
import { getCaseStudies } from '@/lib/data/getData'
import { notFound } from 'next/navigation'
import BackButton from '@/components/Navigation/BackButton'

interface Props {
  params: {
    slug: string
  }
}

// Generate metadata for each case study page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const studies = await getCaseStudies()
  const study = studies.find((s) => s.slug === params.slug)

  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.name} | Case Study`,
    description: study.summary,
  }
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const studies = await getCaseStudies()
  
  return studies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: Props) {
  const studies = await getCaseStudies()
  const study = studies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-bones-white dark:bg-bones-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <BackButton />
        </div>
        
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-bones-blue/10 text-bones-blue dark:bg-bones-blue/20 dark:text-bones-cyan mb-4 capitalize">
              {study.type.replace(/-/g, ' ')}
            <h1 className="text-4xl md:text-6xl font-serif text-bones-black dark:text-bones-white mb-4">
              {study.name}
            </h1>
            <p className="text-xl text-bones-dimgray dark:text-bones-whitesmoke mb-8">
              {study.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-sm uppercase tracking-wider text-bones-slategray dark:text-bones-whitesmoke mb-2">
                  Role
                </h2>
                <p className="text-bones-black dark:text-bones-white">
                  {study.role}
                </p>
              </div>
              <div>
                <h2 className="text-sm uppercase tracking-wider text-bones-slategray dark:text-bones-whitesmoke mb-2">
                  Company
                </h2>
                <p className="text-bones-black dark:text-bones-white">
                  {study.company}
                </p>
              </div>
              <div>
                <h2 className="text-sm uppercase tracking-wider text-bones-slategray dark:text-bones-whitesmoke mb-2">
                  Timeline
                </h2>
                <p className="text-bones-black dark:text-bones-white">
                  Completed {new Date(study.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {study.coverImage && (
          <section className="mb-16">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={study.coverImage}
                alt={study.name}
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            {study.body && (
              <div dangerouslySetInnerHTML={{ __html: study.body }} />
            )}
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-bones-black dark:text-bones-white mb-4">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.relevantSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-bones-blue/10 text-bones-blue dark:bg-bones-blue/20 dark:text-bones-cyan px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

