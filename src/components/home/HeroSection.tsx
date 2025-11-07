/**
 * Hero section component for the home page.
 *
 * @returns JSX element with hero content
 */
export default function HeroSection(): JSX.Element {
  return (
    <section className="mb-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-bones-black dark:text-bones-white mb-6">
          UX Designer & Frontend Developer
        </h1>
        <p className="text-xl text-bones-gray dark:text-bones-gainsboro mb-8 leading-relaxed">
          Creating intuitive digital experiences through thoughtful design and clean code.
        </p>
        <div className="flex gap-4">
          <a
            href="/studies"
            className="px-6 py-3 bg-bones-blue text-bones-white rounded-lg hover:bg-bones-mediumblue transition-colors font-medium"
          >
            View Portfolio
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-bones-blue text-bones-blue rounded-lg hover:bg-bones-blue hover:text-bones-white transition-colors font-medium"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
