import { Badge, Card, CardContent, CardImage, Heading, Text } from '@/components/ui';
import { getLatestCaseStudies } from '@/lib/data/getData';
import { Link } from 'react-router-dom';

export default async function CaseStudiesGrid() {
  const latestCaseStudies = await getLatestCaseStudies(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {latestCaseStudies.map((study) => (
        <Link
          key={study.slug}
          to={`/studies/${study.slug}`}
          className="group block h-full focus:outline-none focus:ring-2 focus:ring-bones-blue dark:focus:ring-bones-cyan focus:ring-offset-2 rounded-lg"
        >
          <Card className="h-full transition duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-bones-blue/10">
            {study.coverImage && <CardImage src={study.coverImage} alt={study.name} />}
            <CardContent>
              <Badge className="mb-3" variant="outline">
                {study.type}
              </Badge>
              <Heading
                level={3}
                className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors"
              >
                {study.name}
              </Heading>
              <Text>{study.summary}</Text>
              <div className="flex flex-wrap gap-2 mt-4">
                {study.relevantSkills.slice(0, 3).map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
                {study.relevantSkills.length > 3 && (
                  <Badge variant="outline">+{study.relevantSkills.length - 3} more</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
