import React from 'react';
import ReactMarkdown from 'react-markdown';
import { mergeClasses } from '@/lib/utils/mergeClasses';
import * as styles from './Markdown.styles';
import type { MarkdownProps } from './Markdown.types';

export const Markdown: React.FC<MarkdownProps> = ({ children, className }) => {
  return (
    <div className={mergeClasses(styles.wrapper, className)}>
      <ReactMarkdown
        components={{
          p: ({ children: c }) => <p className={styles.paragraph}>{c}</p>,
          strong: ({ children: c }) => <strong className={styles.strong}>{c}</strong>,
          em: ({ children: c }) => <em className={styles.em}>{c}</em>,
          a: ({ href, children: c }) => (
            <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
              {c}
            </a>
          ),
          ul: ({ children: c }) => <ul className={styles.ul}>{c}</ul>,
          ol: ({ children: c }) => <ol className={styles.ol}>{c}</ol>,
          li: ({ children: c }) => <li className={styles.li}>{c}</li>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
