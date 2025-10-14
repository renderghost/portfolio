
import { Heading, Text, Button, Motion } from '@/components/ui'

export default function HeroSection() {
  return (
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
  )
}

