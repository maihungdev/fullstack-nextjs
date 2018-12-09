import React from 'react';
import NextSeo from 'next-seo';

export default () => (
  <>
    <NextSeo
      config={{
        title: 'Title B',
        description: 'Description B',
        canonical: 'https://www.canonical.ie/b',
        openGraph: {
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title B',
          description: 'Open Graph Description B',
          // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
          images: [
            {
              url: 'https://www.example.ie/og-image-b-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt B',
            },
            {
              url: 'https://www.example.ie/og-image-b-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt B Second',
            },
            { url: 'https://www.example.ie/og-image-b-03.jpg' },
            { url: 'https://www.example.ie/og-image-b-04.jpg' },
          ],
          site_name: 'SiteName B',
        },
        twitter: {
          handle: '@handleb',
          site: '@siteb',
          cardType: 'summary_large_image',
        },
      }}
    />
    <p>All of our SEO properties are now updated.</p>
  </>
);