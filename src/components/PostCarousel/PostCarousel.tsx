'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
// Components
import { Button } from '../Button/Button';
import { CardArticle } from '../Card/CardArticle';
import { Heading } from '../Typography/Heading/Heading';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
// Styles & Types
import * as styles from './PostCarousel.styles';
import { PostCarouselProps } from './PostCarousel.types';

export default function PostCarousel({ posts, title = 'Latest Posts' }: PostCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [announcement, setAnnouncement] = useState('');

  // Resize Logic (Detect How Many Cards to Show)
  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      let newCount = width < 640 ? 1 : width < 1024 ? 2 : 3;
      setVisibleCount(newCount);
      setCurrentIndex((prevIndex) => Math.min(prevIndex, Math.max(0, posts.length - newCount)));
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateVisibleCount, 100);
    };

    updateVisibleCount();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [posts.length]);

  // Navigation Logic
  const goToPrevious = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - visibleCount));
  };

  const goToNext = () => {
    if (currentIndex + visibleCount >= posts.length) return;
    setCurrentIndex((prevIndex) => Math.min(posts.length - visibleCount, prevIndex + visibleCount));
  };

  // Announce Navigation for Screen Readers
  useEffect(() => {
    setAnnouncement(
      `Showing posts ${currentIndex + 1} to ${Math.min(currentIndex + visibleCount, posts.length)} of ${posts.length}`,
    );
  }, [
    currentIndex,
    visibleCount,
    posts.length,
  ]);

  return (
    <section
      className={styles.carouselContainer}
      aria-labelledby="carousel-heading"
      role="region"
      aria-roledescription="carousel"
    >
      {title && (
        <Heading level={2} className={styles.carouselTitle}>
          {title}
        </Heading>
      )}

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Main Carousel Container */}
      <div className={styles.carouselWrapper} ref={containerRef}>
        <div className="relative mx-[-5%] px-[5%]">
          <div
            ref={carouselRef}
            className={styles.carouselTrack}
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% + ${currentIndex > 0 ? '5%' : '0%'}))`,
            }}
            aria-live="polite"
          >
            {posts.map((post) => (
              <div
                key={post.key}
                className={`px-2 flex-shrink-0 transition-all duration-300`}
                style={{ width: `${100 / visibleCount}%` }}
                aria-hidden={post.key < currentIndex || post.key >= currentIndex + visibleCount} // ✅ post.key is now correctly used as a number
              >
                <CardArticle
                  article={{
                    title: post.title,
                    subtitle: post.summary,
                    coverImage: post.coverImage,
                    articleUrl: post.canonicalURL,
                    publication: post.affiliationName,
                    published: post.published,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className={styles.navigationWrapper}>
        <Paragraph className="text-sm text-muted-foreground">
          Showing {currentIndex + 1}-{Math.min(currentIndex + visibleCount, posts.length)} of {posts.length} posts
        </Paragraph>
        <div className={styles.buttonGroup} role="group" aria-label="Carousel navigation">
          <Button className={styles.navButton} onClick={goToPrevious} disabled={currentIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            className={styles.navButton}
            onClick={goToNext}
            disabled={currentIndex + visibleCount >= posts.length}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
