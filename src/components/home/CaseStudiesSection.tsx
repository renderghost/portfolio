import casestudies from '@/data/json/casestudies.json';

/**
 * Case studies section component for the home page.
 *
 * @returns JSX element displaying featured case studies
 */
export default function CaseStudiesSection(): JSX.Element {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-bones-black dark:text-bones-white">Latest Work</h2>
        <a href="/studies" className="text-bones-blue hover:text-bones-mediumblue transition-colors">
          View All Work
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {casestudies.slice(0, 3).map((study, index) => (
          <div key={study.slug || index}>
            <a href={`/studies/${study.slug}`} className="group block h-full">
              <div className="h-full border border-bones-gainsboro dark:border-bones-dimgray rounded-lg p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-bones-blue/10">
                {study.coverImage && (
                  <img src={study.coverImage} alt={study.title} className="w-full h-48 object-cover rounded mb-4" />
                )}
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-bones-blue/10 text-bones-blue text-xs rounded">
                    {study.type || 'Case Study'}
                  </span>
                </div>
                <h3 className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors font-semibold">
                  {study.title}
                </h3>
                <p className="text-bones-gray dark:text-bones-gainsboro mb-4">{study.summary}</p>
                {study.relevantSkills && study.relevantSkills.filter((skill) => skill !== '').length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {study.relevantSkills
                      .filter((skill) => skill !== '')
                      .slice(0, 3)
                      .map((skill: string) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-bones-gainsboro dark:bg-bones-dimgray text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    {study.relevantSkills.filter((skill) => skill !== '').length > 3 && (
                      <span className="px-2 py-1 bg-bones-gainsboro dark:bg-bones-dimgray text-xs rounded">
                        +{study.relevantSkills.filter((skill) => skill !== '').length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
