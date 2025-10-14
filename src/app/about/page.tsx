import type { Metadata } from 'next'
import { getJobs, getSkills } from '@/lib/data/getData'

export const metadata: Metadata = {
  title: 'About | Barry Prendergast',
  description: 'Professional experience and skills in UX design and frontend development.',
}

export default async function AboutPage() {
  const [jobs, skills] = await Promise.all([
    getJobs(),
    getSkills(),
  ])

  // Sort jobs by start date, most recent first
  const sortedJobs = jobs.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  // Group skills by type
  const groupedSkills = skills.reduce((acc, skill) => {
    const type = skill.type || 'technical'
    if (!acc[type]) {
      acc[type] = []
    }
    acc[type].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <main className="min-h-screen bg-bones-white dark:bg-bones-black">
      <div className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-bones-black dark:text-bones-white mb-8">
            About Me
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl text-bones-dimgray dark:text-bones-whitesmoke">
              I'm a UX designer and frontend developer with a passion for creating intuitive and accessible digital experiences. 
              My approach combines user-centered design principles with modern web technologies to build products that are both 
              beautiful and functional.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-bones-black dark:text-bones-white mb-8">
            Experience
          </h2>
          <div className="space-y-12">
            {sortedJobs.map((job) => (
              <article key={job.slug} className="border-l-4 border-bones-blue dark:border-bones-cyan pl-6">
                <h3 className="text-2xl font-serif text-bones-black dark:text-bones-white mb-2">
                  {job.jobTitle}
                </h3>
                <p className="text-bones-dimgray dark:text-bones-whitesmoke mb-2">
                  {job.company} • {job.employmentType}
                </p>
                <p className="text-sm text-bones-slategray dark:text-bones-whitesmoke mb-4">
                  {new Date(job.startDate).toLocaleDateString()} - {
                    job.endDate 
                      ? new Date(job.endDate).toLocaleDateString()
                      : 'Present'
                  }
                </p>
                <p className="text-bones-dimgray dark:text-bones-whitesmoke mb-4">
                  {job.jobDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-bones-blue/10 text-bones-blue dark:bg-bones-blue/20 dark:text-bones-cyan px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-serif text-bones-black dark:text-bones-white mb-8">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([type, skills]) => (
              <div key={type} className="bg-bones-whitesmoke dark:bg-bones-dimgray p-6 rounded-lg">
                <h3 className="text-xl font-serif text-bones-black dark:text-bones-white mb-4 capitalize">
                  {type}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill.slug}
                      className="bg-bones-blue/10 text-bones-blue dark:bg-bones-blue/20 dark:text-bones-cyan px-3 py-1 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

