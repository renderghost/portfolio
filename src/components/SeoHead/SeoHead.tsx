import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AUTHOR,
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  SITE_NAME,
} from './SeoHead.constants';
import type { SeoHeadProps } from './SeoHead.types';

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = OG_IMAGE,
  noIndex = false,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel='canonical' href={canonical} />
    <meta name='author' content={AUTHOR} />
    <meta
      name='robots'
      content={noIndex ? 'noindex, nofollow' : 'index, follow'}
    />

    <meta property='og:site_name' content={SITE_NAME} />
    <meta property='og:type' content={ogType} />
    <meta property='og:url' content={canonical} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={ogImage} />
    <meta property='og:image:width' content={OG_IMAGE_WIDTH} />
    <meta property='og:image:height' content={OG_IMAGE_HEIGHT} />
    <meta property='og:locale' content={OG_LOCALE} />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={ogImage} />
  </Helmet>
);
