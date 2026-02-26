export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Turkish Food in London',
    url: 'https://turkishfoodinlondon.com',
    description: 'The definitive guide to Turkish food in London. From Green Lanes institutions to Dalston ocakbaşı.',
    inLanguage: 'en-GB',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://turkishfoodinlondon.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Turkish Food in London',
    url: 'https://turkishfoodinlondon.com',
    logo: 'https://turkishfoodinlondon.com/logo.png',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@turkishfoodinlondon.com',
      contactType: 'customer service',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: 'Turkish Food in London',
      url: 'https://turkishfoodinlondon.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Turkish Food in London',
      url: 'https://turkishfoodinlondon.com',
    },
    inLanguage: 'en-GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessListSchema({
  businesses,
}: {
  businesses: {
    name: string
    address: string
    description: string
    priceRange: string
  }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: businesses.map((business, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Restaurant',
        name: business.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address,
          addressLocality: 'London',
          addressCountry: 'GB',
        },
        description: business.description,
        priceRange: business.priceRange,
        servesCuisine: 'Turkish',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
