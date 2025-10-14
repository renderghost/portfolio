'use client'

import { Suspense } from 'react'
import { Heading, Button, Motion } from '@/components/ui'
import AnimatedWrapper from '@/components/ui/AnimatedWrapper'
import { LoadingArticle, LoadingGrid } from './LoadingStates'
import ArticlesGrid from './grids/ArticlesGrid'

export default function ArticlesSection() {
  return (
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
      <Suspense 
        fallback={
          <LoadingGrid 
            count={4} 
            Component={LoadingArticle} 
            className="grid grid-cols-1 md:grid-cols-2 gap-8" 
          />
        }
      >
        <AnimatedWrapper delay={100}>
          <ArticlesGrid />
        </AnimatedWrapper>
      </Suspense>
    </section>
  )
}
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

export default function ArticlesSection() {
  return (
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
      <Suspense fallback={
        <LoadingGrid 
          count={4} 
          Component={LoadingArticle} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8" 
        />
      }>
        <ArticlesGrid />
      </Suspense>
    </section>
  )
}

