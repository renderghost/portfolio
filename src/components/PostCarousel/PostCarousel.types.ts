export interface PostCarouselProps {
  posts: {
    key: number;
    title: string;
    slug: string;
    summary: string;
    coverImage: string;
    canonicalURL: string;
    published: string;
    affiliationName: string;
    affiliationURL?: string;
  }[];
  title?: string;
}
