import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { READING_GUIDES_LIVE_CONTENT } from '../data/readingGuidesData';

export const SITE_URL = 'https://kidwb.com';
export const SITE_NAME = 'KidsWorldBooks | Premio Publishing & Gozo Books';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/covers/she-doesnt-want-the-worms-ella-no-quiere-los-gusanos.jpg`;

interface RouteMeta {
  title: string;
  description: string;
  faqs?: { q: string; a: string }[];
}

const STATIC_ROUTES_META: Record<string, RouteMeta> = {
  '/': {
    title: 'KidsWorldBooks (KidWB.com) | Bilingual, STEM & Multicultural Children’s Books for K–10 Schools, Libraries & Families',
    description:
      'Explore 60+ award-winning bilingual Spanish-English, STEM, multicultural, and wordless children’s books plus K–10 lesson plans by Karl Beckstrand (Premio Publishing & Gozo Books). School POs accepted.',
  },
  '/buy-books': {
    title: 'Bookstore & K–10 Catalog (167 Print Books, Bilingual Sets, Ebooks & Lesson Plans) | KidsWorldBooks',
    description:
      'Browse and order 167 children’s books, bilingual Spanish-English classroom sets, ebooks, and STEM + literacy lesson plans for K–10 educators, libraries, and families.',
  },
  '/kids-reading-guides': {
    title: '22 Curated Kids Reading Guides by Grade Level, Language & Theme | KidsWorldBooks',
    description:
      'Find the right children’s books for K–2 beginning readers, phonics, reluctant readers, ESL/ELL bilingual Spanish-English programs, STEM nature studies, and America 250 history.',
  },
  '/teaching-guides': {
    title: 'K–10 STEM + Literacy Teaching Guides & Curriculum | KidsWorldBooks',
    description:
      'Low-prep K–10 STEM, Spanish/ESL, and literacy lesson plans aligned with classroom standards for teachers, school librarians, and homeschool educators.',
  },
  '/homeschool-spanish-esl': {
    title: 'Homeschool Spanish, ESL & ELL Bilingual Books & Curriculum (K–10) | KidsWorldBooks',
    description:
      'Dual-language Spanish-English picture books, mysteries, and cognates-rich readers designed for homeschool families, ESL/ELL teachers, and bilingual classrooms.',
    faqs: [
      {
        q: 'Do I need to speak fluent Spanish to use these bilingual books at home or in class?',
        a: 'No. Every bilingual title includes side-by-side or paired English and Spanish text, natural cognates, and pronunciation/vocabulary support so non-fluent parents and teachers can read alongside students confidently.',
      },
      {
        q: 'Can schools, districts, and charter homeschool programs order with a Purchase Order (PO)?',
        a: 'Yes. Premio Publishing & Gozo Books accepts institutional Purchase Orders (POs), library orders, and bulk classroom requests through our Contact page or via Baker & Taylor, Ingram, Brodart, Follett, and Mackin.',
      },
    ],
  },
  '/free-resources': {
    title: 'Free K–10 Literacy Activities, Coloring Pages & Bilingual Printables | KidsWorldBooks',
    description:
      'Download free classroom printables, bilingual vocabulary sheets, STEM activity guides, and free ebook/lesson plan bonuses for teachers, librarians, and parents.',
  },
  '/about': {
    title: 'About Premio Publishing & Gozo Books | Multicultural & Bilingual Children’s Publisher Since 2004',
    description:
      'Founded in 2004, Premio Publishing & Gozo Books creates human-authored, culturally inclusive children’s books, bilingual Spanish-English stories, and K–10 STEM literacy resources.',
  },
  '/author': {
    title: 'Karl Beckstrand | Award-Winning Children’s Author, Illustrator & Speaker (School Visits)',
    description:
      'Meet Karl Beckstrand, bestselling author and media professor of 28+ multicultural and bilingual books and 60+ ebooks. Book in-person or virtual K–12 school author visits.',
  },
  '/reviews': {
    title: 'Editorial Reviews: Kirkus, School Library Journal, ForeWord & Horn Book | KidsWorldBooks',
    description:
      'Read verified reviews from Kirkus, School Library Journal, ForeWord Reviews, The Horn Book blog, and K–10 educators for Karl Beckstrand and Premio Publishing titles.',
  },
  '/press': {
    title: 'Press Kit, Media Coverage & Institutional Distribution | KidsWorldBooks',
    description:
      'Media kit, press releases, ISBN/distributor information (Ingram, Baker & Taylor, Brodart, Follett), and interview inquiries for Karl Beckstrand & Premio Publishing.',
  },
  '/ai-policy': {
    title: '100% Human-Created Books Policy & Editorial Standards | KidsWorldBooks',
    description:
      'Our commitment to 100% human-authored, human-illustrated storytelling and educator-tested K–10 classroom literacy materials.',
  },
  '/contact-us': {
    title: 'Contact Us, School PO Inquiries & Free K–10 Lesson Plan Sign-Up | KidsWorldBooks',
    description:
      'Request free K–10 STEM + literacy lesson plans, submit school or library Purchase Orders (POs), inquire about bulk classroom discounts, or schedule an author visit.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy & Terms of Service | KidsWorldBooks',
    description:
      'Privacy policy, COPPA-conscious family and educator data practices, and institutional ordering terms for KidsWorldBooks and Premio Publishing.',
  },
};

function setOrCreateMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export const SEOHead: React.FC<{ selectedBook: Book | null }> = ({ selectedBook }) => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    const liveGuide = READING_GUIDES_LIVE_CONTENT[pathname];
    const staticMeta = STATIC_ROUTES_META[pathname];

    let title = staticMeta?.title || SITE_NAME;
    let description =
      staticMeta?.description ||
      'Award-winning bilingual Spanish-English, STEM, and multicultural children’s books and K–10 lesson plans by Karl Beckstrand.';
    let ogImage = DEFAULT_OG_IMAGE;

    if (liveGuide) {
      title = `${liveGuide.h1} | K–10 Educator & Family Guide | KidsWorldBooks`;
      description = liveGuide.intro
        ? liveGuide.intro.slice(0, 160)
        : `Curated ${liveGuide.h1} for classrooms, libraries, ESL/ELL programs, and families by Karl Beckstrand.`;
    }

    if (selectedBook) {
      title = `${selectedBook.title}${selectedBook.subtitle ? ` – ${selectedBook.subtitle}` : ''} | KidsWorldBooks`;
      description = selectedBook.description.slice(0, 160);
      ogImage = `${SITE_URL}${selectedBook.coverImage}`;
    }

    document.title = title;
    setOrCreateMeta('name', 'description', description);
    setOrCreateMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setOrCreateLink('canonical', canonicalUrl);

    // Open Graph
    setOrCreateMeta('property', 'og:site_name', SITE_NAME);
    setOrCreateMeta('property', 'og:type', selectedBook ? 'book' : 'website');
    setOrCreateMeta('property', 'og:url', canonicalUrl);
    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', description);
    setOrCreateMeta('property', 'og:image', ogImage);

    // Twitter Cards
    setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('name', 'twitter:title', title);
    setOrCreateMeta('name', 'twitter:description', description);
    setOrCreateMeta('name', 'twitter:image', ogImage);

    // Build JSON-LD Graph for SEO & GEO (AI Search Engines)
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'EducationalOrganization',
        '@id': `${SITE_URL}/#organization`,
        name: 'KidsWorldBooks (Premio Publishing & Gozo Books)',
        alternateName: ['KidWB', 'Premio Publishing', 'Gozo Books'],
        url: SITE_URL,
        foundingDate: '2004',
        founder: {
          '@type': 'Person',
          name: 'Karl Beckstrand',
          url: `${SITE_URL}/author`,
        },
        description:
          'Independent children’s book publisher specializing in human-created multicultural, bilingual Spanish-English, wordless, and STEM picture books, YA mysteries, and K–10 lesson plans.',
        email: 'info@premiopublishing.com',
        sameAs: [
          'https://kidsworldbooks.com',
          'https://www.amazon.com/Karl-Beckstrand/e/B002BM2I3I',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'KidsWorldBooks Institutional & Educator Portal',
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/buy-books?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ];

    if (pathname !== '/') {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: liveGuide?.h1 || staticMeta?.title?.split('|')[0]?.trim() || 'Page',
            item: canonicalUrl,
          },
        ],
      });
    }

    const faqs = liveGuide?.faqs || staticMeta?.faqs;
    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      });
    }

    if (selectedBook) {
      graph.push({
        '@type': 'Book',
        name: selectedBook.title,
        alternativeHeadline: selectedBook.subtitle || undefined,
        isbn: selectedBook.isbn || undefined,
        author: {
          '@type': 'Person',
          name: selectedBook.author,
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
        image: `${SITE_URL}${selectedBook.coverImage}`,
        description: selectedBook.description,
        inLanguage: selectedBook.language,
        typicalAgeRange: selectedBook.ages.replace('Ages ', ''),
        offers: {
          '@type': 'Offer',
          price: selectedBook.price.toFixed(2),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: selectedBook.storeUrl,
        },
      });
    } else if (pathname === '/buy-books' || pathname === '/') {
      const sampleBooks = BOOKS_DATA.slice(0, 20);
      graph.push({
        '@type': 'ItemList',
        name: 'Featured KidsWorldBooks Catalog for K–10 Schools & Families',
        numberOfItems: BOOKS_DATA.length,
        itemListElement: sampleBooks.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Book',
            name: b.title,
            author: { '@type': 'Person', name: b.author },
            image: `${SITE_URL}${b.coverImage}`,
            description: b.description.slice(0, 180),
            offers: {
              '@type': 'Offer',
              price: b.price.toFixed(2),
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: b.storeUrl,
            },
          },
        })),
      });
    }

    let scriptEl = document.getElementById('dynamic-json-ld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'dynamic-json-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [location.pathname, selectedBook]);

  return null;
};
