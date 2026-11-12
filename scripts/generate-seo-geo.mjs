import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

const SITE_URL = 'https://kidwb.com';
const SITE_NAME = 'KidsWorldBooks (KidWB.com) | Premio Publishing & Gozo Books';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/covers/she-doesnt-want-the-worms-ella-no-quiere-los-gusanos.jpg`;

function extractJsonFromTs(filePath, marker) {
  const text = fs.readFileSync(filePath, 'utf-8');
  const idx = text.indexOf(marker);
  if (idx === -1) throw new Error(`Marker ${marker} not found in ${filePath}`);
  const eqIdx = text.indexOf('=', idx);
  const jsonStart = text.indexOf(marker.includes('Record') ? '{' : '[', eqIdx);
  let jsonStr = text.slice(jsonStart).trim();
  if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1).trim();
  return JSON.parse(jsonStr);
}

const books = extractJsonFromTs(path.join(rootDir, 'src/data/books.ts'), 'export const BOOKS_DATA');
const guides = extractJsonFromTs(
  path.join(rootDir, 'src/data/readingGuidesData.ts'),
  'export const READING_GUIDES_LIVE_CONTENT: Record'
);

const STATIC_ROUTES = {
  '/': {
    title:
      'KidsWorldBooks (KidWB.com) | Bilingual, STEM & Multicultural Children’s Books for K–10 Schools, Libraries & Families',
    description:
      'Explore 60+ award-winning bilingual Spanish-English, STEM, multicultural, and wordless children’s books plus K–10 lesson plans by Karl Beckstrand (Premio Publishing & Gozo Books). School POs accepted.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/buy-books': {
    title: 'Bookstore & K–10 Catalog (167 Print Books, Bilingual Sets, Ebooks & Lesson Plans) | KidsWorldBooks',
    description:
      'Browse and order 167 children’s books, bilingual Spanish-English classroom sets, ebooks, and STEM + literacy lesson plans for K–10 educators, libraries, and families.',
    priority: '0.95',
    changefreq: 'weekly',
  },
  '/kids-reading-guides': {
    title: '22 Curated Kids Reading Guides by Grade Level, Language & Theme | KidsWorldBooks',
    description:
      'Find the right children’s books for K–2 beginning readers, phonics, reluctant readers, ESL/ELL bilingual Spanish-English programs, STEM nature studies, and America 250 history.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/teaching-guides': {
    title: 'K–10 STEM + Literacy Teaching Guides & Curriculum | KidsWorldBooks',
    description:
      'Low-prep K–10 STEM, Spanish/ESL, and literacy lesson plans aligned with classroom standards for teachers, school librarians, and homeschool educators.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/homeschool-spanish-esl': {
    title: 'Homeschool Spanish, ESL & ELL Bilingual Books & Curriculum (K–10) | KidsWorldBooks',
    description:
      'Dual-language Spanish-English picture books, mysteries, and cognates-rich readers designed for homeschool families, ESL/ELL teachers, and bilingual classrooms.',
    priority: '0.9',
    changefreq: 'weekly',
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
    priority: '0.85',
    changefreq: 'monthly',
  },
  '/about': {
    title: 'About Premio Publishing & Gozo Books | Multicultural & Bilingual Children’s Publisher Since 2004',
    description:
      'Founded in 2004, Premio Publishing & Gozo Books creates human-authored, culturally inclusive children’s books, bilingual Spanish-English stories, and K–10 STEM literacy resources.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/author': {
    title: 'Karl Beckstrand | Award-Winning Children’s Author, Illustrator & Speaker (School Visits)',
    description:
      'Meet Karl Beckstrand, bestselling author and media professor of 28+ multicultural and bilingual books and 60+ ebooks. Book in-person or virtual K–12 school author visits.',
    priority: '0.85',
    changefreq: 'monthly',
  },
  '/reviews': {
    title: 'Editorial Reviews: Kirkus, School Library Journal, ForeWord & Horn Book | KidsWorldBooks',
    description:
      'Read verified reviews from Kirkus, School Library Journal, ForeWord Reviews, The Horn Book blog, and K–10 educators for Karl Beckstrand and Premio Publishing titles.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/press': {
    title: 'Press Kit, Media Coverage & Institutional Distribution | KidsWorldBooks',
    description:
      'Media kit, press releases, ISBN/distributor information (Ingram, Baker & Taylor, Brodart, Follett), and interview inquiries for Karl Beckstrand & Premio Publishing.',
    priority: '0.75',
    changefreq: 'monthly',
  },
  '/ai-policy': {
    title: '100% Human-Created Books Policy & Editorial Standards | KidsWorldBooks',
    description:
      'Our commitment to 100% human-authored, human-illustrated storytelling and educator-tested K–10 classroom literacy materials.',
    priority: '0.7',
    changefreq: 'yearly',
  },
  '/contact-us': {
    title: 'Contact Us, School PO Inquiries & Free K–10 Lesson Plan Sign-Up | KidsWorldBooks',
    description:
      'Request free K–10 STEM + literacy lesson plans, submit school or library Purchase Orders (POs), inquire about bulk classroom discounts, or schedule an author visit.',
    priority: '0.85',
    changefreq: 'monthly',
  },
  '/privacy-policy': {
    title: 'Privacy Policy & Terms of Service | KidsWorldBooks',
    description:
      'Privacy policy, COPPA-conscious family and educator data practices, and institutional ordering terms for KidsWorldBooks and Premio Publishing.',
    priority: '0.5',
    changefreq: 'yearly',
  },
};

const ALL_ROUTES = { ...STATIC_ROUTES };
for (const [routePath, g] of Object.entries(guides)) {
  ALL_ROUTES[routePath] = {
    title: `${g.h1} | K–10 Educator & Family Guide | KidsWorldBooks`,
    description: g.intro
      ? g.intro.slice(0, 160)
      : `Curated ${g.h1} for classrooms, libraries, ESL/ELL programs, and families by Karl Beckstrand.`,
    priority: '0.85',
    changefreq: 'weekly',
    ogImage: DEFAULT_OG_IMAGE,
    faqs: g.faqs || [],
    heading: g.h1,
  };
}

// 1. Generate robots.txt (SEO + GEO AI crawlers explicitly allowed)
const robotsTxt = `# KidsWorldBooks Institutional Portal (${SITE_URL})
# SEO + GEO (Generative Engine Optimization) Robots Policy

User-agent: *
Allow: /

# Explicitly welcome AI Search & Answer Engines (GEO)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
# LLM Knowledge Files (GEO standard)
# ${SITE_URL}/llms.txt
# ${SITE_URL}/llms-full.txt
`;

// 2. Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(ALL_ROUTES)
  .map(([routePath, meta]) => {
    const loc = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

// 3. Generate llms.txt (Concise GEO Index for AI Search Engines)
const llmsTxt = `# KidsWorldBooks (${SITE_URL}) — Premio Publishing & Gozo Books

> Institutional & Educator Portal for K–10 Schools, Libraries, ESL/ELL Programs, and Families. Featuring 60+ 100% human-created multicultural, bilingual (Spanish-English), STEM, and wordless books plus ready-to-teach lesson plans by bestselling author Karl Beckstrand. All 167 catalog items link directly to official checkout at https://kidsworldbooks.com.

## Key Institutional Facts (For Educators, Librarians & AI Assistants)
- **Publisher**: Premio Publishing & Gozo Books (Founded 2004)
- **Primary Author**: Karl Beckstrand (28+ print titles, 60+ ebooks, 167 total store items including bilingual bundles and K–10 STEM + literacy lesson plans)
- **Audience**: Pre-K through Grade 10 (Ages 2–16+), Dual-Language / Spanish Immersion, ESL/ELL, Reluctant Readers, Title I & III Programs, Public & School Libraries, Homeschool Families
- **Editorial Reviews**: Praised by *Kirkus Reviews*, *School Library Journal*, *ForeWord Reviews*, and *The Horn Book* blog
- **Institutional Ordering**: School & Library Purchase Orders (POs) accepted directly via ${SITE_URL}/contact-us or major library wholesalers (Ingram, Baker & Taylor, Brodart, Follett, Mackin). Direct online checkout is hosted at https://kidsworldbooks.com/buy-books
- **Contact**: info@premiopublishing.com | ${SITE_URL}/contact-us
- **Complete LLM Catalog & FAQ Dump**: ${SITE_URL}/llms-full.txt

## Core Portal Sections
- [Home Portal](${SITE_URL}/): Overview of K–10 bilingual, STEM, and multicultural collections
- [Full Bookstore & Catalog (167 Products)](${SITE_URL}/buy-books): Filterable catalog of print books, classroom bundles, ebooks, and K–10 lesson plans
- [22 Kids Reading Guides Hub](${SITE_URL}/kids-reading-guides): Curated book lists by grade, reading level, language, and theme
- [K–10 STEM + Literacy Teaching Guides](${SITE_URL}/teaching-guides): Low-prep curriculum units pairing stories with hands-on science and vocabulary
- [Homeschool Spanish & ESL Guide](${SITE_URL}/homeschool-spanish-esl): Dual-language Spanish-English guidance for families and co-ops
- [Free Literacy Resources](${SITE_URL}/free-resources): Free classroom activities, coloring pages, and bonus lesson plan claims
- [Author Karl Beckstrand & School Visits](${SITE_URL}/author): In-person and virtual K–12 author assemblies and writing workshops
- [Editorial Reviews](${SITE_URL}/reviews): Verified reviews from Kirkus, School Library Journal, and educators
- [Press & Wholesale Info](${SITE_URL}/press): Distributor details and media kit
- [100% Human-Created Policy](${SITE_URL}/ai-policy): Commitment to human authorship and illustration
- [Contact & School PO Inquiries](${SITE_URL}/contact-us): Request free K–10 lesson plans or submit school purchase orders

## 22 Curated Reading Guides (With Educator FAQs & Book Lists)
${Object.entries(guides)
  .map(([routePath, g]) => `- [${g.h1}](${SITE_URL}${routePath}): ${g.subheading || g.intro?.slice(0, 120) || ''}`)
  .join('\n')}
`;

// 4. Generate llms-full.txt (Comprehensive GEO Knowledge Base: All 22 Guides + FAQs + All 167 Products)
const llmsFullTxt = `${llmsTxt}

---

# Detailed Reading Guides & Educator FAQs (22 Guides)

${Object.entries(guides)
  .map(([routePath, g]) => {
    const faqSection =
      g.faqs && g.faqs.length > 0
        ? `\n### Frequently Asked Questions (${g.h1})\n` +
          g.faqs.map((f) => `- **Q: ${f.q}**\n  A: ${f.a}`).join('\n')
        : '';
    const whySection =
      g.whatMakesStrongFeatures && g.whatMakesStrongFeatures.length > 0
        ? `\n### Key Pedagogical Features\n` + g.whatMakesStrongFeatures.map((w) => `- ${w}`).join('\n')
        : '';
    const tipsSection =
      g.tips && g.tips.length > 0
        ? `\n### Low-Prep Classroom & Home Tips\n` + g.tips.map((t) => `- ${t}`).join('\n')
        : '';
    return `## ${g.h1} (${SITE_URL}${routePath})
${g.subheading ? `*${g.subheading}*\n` : ''}
${g.intro || ''}${whySection}${tipsSection}${faqSection}
`;
  })
  .join('\n---\n\n')}

---

# Complete Catalog of 167 Products (Print Books, Bilingual Bundles, Ebooks & Lesson Plans)

${books
  .map((b, i) => {
    const priceStr =
      b.priceMax && b.priceMax > b.price
        ? `$${b.price.toFixed(2)} – $${b.priceMax.toFixed(2)} USD`
        : `$${b.price.toFixed(2)} USD`;
    return `### ${i + 1}. ${b.title}${b.subtitle ? ` — ${b.subtitle}` : ''}
- **Product ID**: \`${b.commerceId || b.id}\`
- **Author**: ${b.author}
- **Price**: ${priceStr}
- **Ages**: ${b.ages} | **Grades**: ${b.grades} | **Levels**: ${b.readerLevel.join(', ')}
- **Languages**: ${b.language} | **Formats**: ${b.format.join(', ')}
- **Themes**: ${b.theme.join(', ')}
- **Direct Buy Now Checkout URL**: ${b.storeUrl}
${b.ebookStoreUrl ? `- **Ebook Checkout URL**: ${b.ebookStoreUrl}\n` : ''}${b.lessonPlanStoreUrl ? `- **Lesson Plan Checkout URL**: ${b.lessonPlanStoreUrl}\n` : ''}- **Description**: ${b.description}`;
  })
  .join('\n\n')}
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt);
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFullTxt);

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildJsonLdForRoute(routePath, meta) {
  const canonicalUrl = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
  const graph = [
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
      sameAs: ['https://kidsworldbooks.com', 'https://www.amazon.com/Karl-Beckstrand/e/B002BM2I3I'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/buy-books?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  if (routePath !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: meta.heading || meta.title.split('|')[0].trim(),
          item: canonicalUrl,
        },
      ],
    });
  }

  if (meta.faqs && meta.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: meta.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  if (routePath === '/' || routePath === '/buy-books') {
    const topBooks = books.slice(0, 25);
    graph.push({
      '@type': 'ItemList',
      name: 'KidsWorldBooks K–10 Bilingual, STEM & Multicultural Catalog',
      numberOfItems: books.length,
      itemListElement: topBooks.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Book',
          name: b.title,
          author: { '@type': 'Person', name: b.author },
          image: `${SITE_URL}${b.coverImage}`,
          description: b.description.slice(0, 180),
          inLanguage: b.language,
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

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}

// 5. If dist/ exists, copy static files and pre-render per-route HTML with SEO + GEO JSON-LD
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(distDir, 'llms.txt'), llmsTxt);
  fs.writeFileSync(path.join(distDir, 'llms-full.txt'), llmsFullTxt);

  const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  for (const [routePath, meta] of Object.entries(ALL_ROUTES)) {
    const canonicalUrl = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
    const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;
    const jsonLd = buildJsonLdForRoute(routePath, meta);

    const seoTags = `
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:image" content="${escapeHtml(ogImage)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImage)}" />
    <link rel="alternate" type="text/markdown" title="LLM Summary (GEO)" href="${SITE_URL}/llms.txt" />
    <script id="dynamic-json-ld" type="application/ld+json">${jsonLd}</script>`;

    let routeHtml = baseHtml
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
      .replace(
        /<meta name="description" content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${escapeHtml(meta.description)}" />`
      )
      .replace('</head>', `${seoTags}\n  </head>`);

    if (routePath === '/') {
      fs.writeFileSync(path.join(distDir, 'index.html'), routeHtml);
    } else {
      const targetDir = path.join(distDir, routePath.slice(1));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml);
    }
  }
  console.log(
    `SEO + GEO pre-rendering complete: ${Object.keys(ALL_ROUTES).length} static route HTML files, sitemap.xml, robots.txt, llms.txt, and llms-full.txt generated for ${SITE_URL}`
  );
}
