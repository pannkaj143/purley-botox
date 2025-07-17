import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  structuredData?: Record<string, unknown>;
}

const SEO = ({
  title = 'Facial Aesthetics in Purley, Banstead, Kenley and Caterham | Expert Anti-Wrinkle Treatments | Confidental Clinic',
  description = 'Premium facial aesthetics and anti-wrinkle treatments in Purley. Transform your look with our expert cosmetic procedures at Confidental Clinic. Non-invasive, natural-looking results with minimal downtime.',
  canonicalUrl = 'https://yourwebsite.com',
  ogType = 'website',
  ogImage = '/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png',
  ogImageAlt = 'Confidental Clinic - Facial Aesthetics in Purley',
  structuredData
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
