export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  illustrator?: string;
  coverImage: string;
  readerLevel: string[]; // "Beginning Readers (K–2)", "Elementary (Grades 3–5)", "Chapter Books & YA (Ages 7–14)", "Bilingual & ESL"
  theme: string[]; // "Character, Career & Life Skills", "History, Culture & Biography", "STEM, Nature & Food", "Humor, Mystery & Adventure", "Bedtime, Faith & Family"
  format: string[]; // "Hardcover", "Paperback", "Ebook", "Bundles & Series", "Free Ebooks"
  ages: string;
  grades: string;
  language: string;
  isbn: string;
  price: number;
  originalPrice?: number | null;
  isFree?: boolean;
  description: string;
  educationalBenefits: string[];
  reviews?: { quote: string; source: string }[];
  storeUrl: string; // Direct link to complete purchase on https://kidsworldbooks.com/buy-books/ols/products/...
  ebookStoreUrl?: string | null;
  lessonPlanStoreUrl?: string | null;
  teachingGuideUrl?: string;
  linkedPages?: string[];
}

export const BOOKS_DATA: Book[] = [
  {
    "id": "she-doesnt-want-the-worms-ella-no-quiere-los-gusanos",
    "slug": "she-doesnt-want-the-worms-ella-no-quiere-los-gusanos",
    "title": "She Doesn't Want the Worms - Ella no quiere los gusanos",
    "subtitle": "A Mystery in English & Spanish (3-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/she-doesnt-want-the-worms-ella-no-quiere-los-gusan.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-0985398828",
    "price": 11.99,
    "originalPrice": null,
    "isFree": false,
    "description": "\u201cDelightful book\u2026humorous rhyming text\u2026bright illustrations.\u201d \u2013 Ana Rodriguez for School Library Journal A STEM book about a biracial girl who responds to unusual gifts\u2014that happen to be alive! Includes full text and a pronunciation guide in both Spanish and English. Top 10 Best Books of 2011, \u201cWorks effortlessly on every level\u2026museum-quality, collage-like artwork; this title raises the bar for all children\u2019s...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [
      {
        "quote": "Delightful\u2026 humorous\u2026 bright.",
        "source": "School Library Journal"
      },
      {
        "quote": "Works effortlessly on every level\u2026 museum-quality artwork\u2026 raises the bar for all children\u2019s picture books. (Top 10 Best Books)",
        "source": "ForeWord Reviews Magazine"
      },
      {
        "quote": "Especially recommended.",
        "source": "School Library Connection"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/she-doesnt-want-the-worms-ella-no-quiere-los-gusanos",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/she-doesnt-want-the-worms-ella-no-quiere-los-gusanos-a-mystery-in-english-spanish",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/she-doesnt-want-the-worms-spanish-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/stem-literacy-units",
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/folktales-fables-kids",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/bilingual-books-spanish",
      "/bedtime-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/elementary-books-3-4",
      "/media-press-releases",
      "/read-aloud-books-kids",
      "/stem-nature-books-kids"
    ]
  },
  {
    "id": "crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery",
    "slug": "crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery",
    "title": "Crumbs on the Stairs - Migas en las escaleras",
    "subtitle": "A Mystery (English-Spanish pronunciation guide, 2-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/crumbs-on-the-stairs-migas-en-las-escaleras-a-myst.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2+",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-0977606504",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "Where are the crumbs coming from? \u00bfDe d\u00f3nde vienen estas migajas? Includes English-Spanish pronunciation guide. A Latino child leads a counting search for the crumb culprit. Build kids\u2019 minds today! Children value learning how to ask questions in another language (interrogatives), bear finding, and online SECRETS. Bedtime peace. The perfect length picture book for young children (not too long for adults): 24...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [
      {
        "quote": "An engaging bilingual mystery that builds counting and vocabulary effortlessly.",
        "source": "Bilingual Literacy Review"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/crumbs-on-the-stairs-migas-en-las-escaleras-bilingual-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/crumbs-on-the-stairs-migas-en-las-escaleras-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/phonics-books-k2",
      "/online-story-secrets",
      "/food-books-kids",
      "/bilingual-books-spanish",
      "/sel-books-kids",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/read-aloud-books-kids"
    ]
  },
  {
    "id": "sounds-in-the-house-sonidos-en-la-casa-a-mystery-in-english-spanish",
    "slug": "sounds-in-the-house-sonidos-en-la-casa-a-mystery-in-english-spanish",
    "title": "Sounds in the House - Sonidos en la casa",
    "subtitle": "A Mystery (Spanish & English pronunciation guide, 2-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/sounds-in-the-house-sonidos-en-la-casa-a-mystery-i.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2+",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-0985398873",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "Have you ever been scared by strange noises\u2014sounds that seem to happen all by themselves? What could be causing those squeaks and bumps? A scaredy-cat dog faces his fears and finds out in this picture book with full text and a pronunciation guide in English and Spanish\u2014plus online SECRETS. Discover this bedtime story on courage and friendship (with finding activity: sounds, critters, nouns, and verbs). Humorous...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [
      {
        "quote": "Suspenseful without\u2026 getting too intense.",
        "source": "Kirkus Reviews"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/sounds-in-the-house-sonidos-en-la-casa-a-mystery-in-english-spanish",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/sounds-in-the-house-sonidos-en-la-casa-bilingual-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/sounds-in-the-house-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/phonics-books-k2",
      "/online-story-secrets",
      "/bilingual-books-spanish",
      "/sel-books-kids",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/media-press-releases",
      "/read-aloud-books-kids"
    ]
  },
  {
    "id": "it-came-from-under-the-high-chair-bilingual",
    "slug": "it-came-from-under-the-high-chair-bilingual",
    "title": "It Came from Under the High Chair/Sali\u00f3 de debajo de la silla para comer",
    "subtitle": "Mystery in English & Spanish (4-9 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/it-came-from-under-the-high-chair-bilingual.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4+",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1732069664",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "(Misterio) Learn Spanish prepositions. A mysterious visitor brings intrigue, excitement, and laughter to a biracial family. Full text & pronunciation guide in Spanish & English Finding & online SECRETS Prepositions chart Dyslexic-friendly type Explore this funny picture book of monsters, heroes, and a dog. Elena is a sensible child. Unlike her zany brother Benjamin, she sticks to reason and facts. But Elena\u2019s...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/it-came-from-under-the-high-chair-bilingual",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/it-came-from-under-the-highchair-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/it-came-from-under-the-high-chair-prepositions-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/folktales-fables-kids",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/phonics-books-k2",
      "/online-story-secrets",
      "/food-books-kids",
      "/bilingual-books-spanish",
      "/sel-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/elementary-books-3-4"
    ]
  },
  {
    "id": "arriba-up-abajo-down-at-the-boardwalk-a-picture-book-of-opposites",
    "slug": "arriba-up-abajo-down-at-the-boardwalk-a-picture-book-of-opposites",
    "title": "Arriba Up, Abajo Down at the Boardwalk",
    "subtitle": "A Picture Book of Opposites (Bilingual, 2-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-up-abajo-down-at-the-boardwalk-a-picture-bo.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1732069671",
    "price": 11.99,
    "originalPrice": null,
    "isFree": false,
    "description": "\u201cVivid colors\u2026maintain the attention of the very young.\u201d - Lee Ashford for Readers' Favorite Explore this multicultural book of contrasts and opposites in Spanish and English\u2014with full text and pronunciation guide in both languages. Kids will love finding and counting marine animals, rides, water sports, and food. Discover the historic Beach Boardwalk in Santa Cruz, California. Arriba Up includes online SECRETS,...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/arriba-up-abajo-down-at-the-boardwalk-a-picture-book-of-opposites",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/arriba-up-abajo-down-at-the-boardwalk-spanish-opposites",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/arriba-up-abajo-down-spanish-english-opposites-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/phonics-books-k2",
      "/online-story-secrets",
      "/bilingual-books-spanish",
      "/childrens-holiday-books",
      "/read-aloud-books-kids",
      "/stem-nature-books-kids"
    ]
  },
  {
    "id": "great-cape-o-colors-capa-de-colores",
    "slug": "great-cape-o-colors-capa-de-colores",
    "title": "Bilingual book",
    "subtitle": "Great Cape o' Colors / Capa de colores (English-Spanish w/pronunciation 3-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/great-cape-o-colors-capa-de-colores.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1732069619",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Explore daring jobs, count cultures, dress up. Has full text and pronunciation guide in both Spanish and English for early readers 3 \u2013 7 years, Pre-K \u2013 2nd grade. \u201c\u00c9sta es una capa de colores m\u00e1gica\u201d. Discover online SECRETS and learn some color theory with Hispanic and Black superheroes. Boys and girls value career costume ideas. Make a game of pretending to be each character. \n\nThe perfect length picture book...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/great-cape-o-colors-capa-de-colores",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/great-cape-o-colors-capa-de-colores-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/great-cape-o-colors-capa-de-colores-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/phonics-books-k2",
      "/online-story-secrets",
      "/bilingual-books-spanish",
      "/career-money-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/elementary-books-3-4",
      "/learning-resources",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "bad-bananas-a-story-cookbook-for-kids-recipes",
    "slug": "bad-bananas-a-story-cookbook-for-kids-recipes",
    "title": "Bad Bananas",
    "subtitle": "A Story Cookbook for Kids (ages 4-10)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bad-bananas-a-story-cookbook-for-kids-recipes.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-0977606542",
    "price": 12.95,
    "originalPrice": 13.99,
    "isFree": false,
    "description": "Banana characters try wild stunts in a cautionary kids\u2019 tale with simple dishes, including banana muffins, smoothies, cookies, and pancakes. What\u2019s the cure for \u201cI\u2019m bored\u201d disease? A wisecracking picture book on the short (shelf) life of a bunch of bruisers; hands-on fun for boys and girls 4 \u2013 10, preschool \u2013 5th grade. 7 easy, yummy low-sugar recipes (more online) Fun family time African-American child Free...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [
      {
        "quote": "Bizarrely funny!",
        "source": "The Horn Book"
      },
      {
        "quote": "Selected by the Georgia Farm Bureau & USDA (via Virginia Tech) for nutrition & gardening literacy.",
        "source": "National Agricultural Literacy"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/bad-bananas-a-story-cookbook-for-kids-recipes",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/bad-bananas-a-childrens-cookbook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/bad-bananas-a-story-cookbook-for-kids",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/stem-literacy-units",
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/easy-childrens-recipes",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/elementary-books-3-4",
      "/read-aloud-books-kids",
      "/stem-nature-books-kids"
    ]
  },
  {
    "id": "grow-how-we-get-food-from-our-garden",
    "slug": "grow-how-we-get-food-from-our-garden",
    "title": "GROW",
    "subtitle": "How We Get Food from Our Garden (ages 4-7)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/grow-how-we-get-food-from-our-garden.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u20137",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1951599072",
    "price": 11.95,
    "originalPrice": 12.95,
    "isFree": false,
    "description": "A child and grandfather till, plant, and harvest fruits, vegetables, flowers, and grains in a tongue-twisting picture book with online tips for starting your own garden. Selected by The Library of Congress, The USDA/Virginia Tech, Oregon Agriculture in the Classroom Foundation, The Georgia Farm Bureau, and Canada\u2019s Alberta Health Services. Children love to see how food grows. Learn basic gardening and discover...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [
      {
        "quote": "Featured resource by the Library of Congress and USDA (via Virginia Tech) for youth gardening.",
        "source": "Library of Congress / USDA"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/grow-how-we-get-food-from-our-garden",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/grow-food-gardening-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/gardening-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/stem-literacy-units",
      "/animal-books-kids",
      "/easy-childrens-recipes",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/career-money-books-kids",
      "/bedtime-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/elementary-books-3-4",
      "/media-press-releases",
      "/stem-nature-books-kids",
      "/learning-resources"
    ]
  },
  {
    "id": "bright-star-night-star-an-astronomy-story",
    "slug": "bright-star-night-star-an-astronomy-story",
    "title": "Bright Star, Night Star",
    "subtitle": "An Astronomy Story (ages 4-9)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bright-star-night-star-an-astronomy-story.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4\u20139",
    "grades": "Grades PreK\u20135",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-0985398880",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "Embark on an unforgettable journey into the wonders of the cosmos with this award-winning picture book. Explore the magic of moons, meteors, constellations, and galaxies with a Native American child on a STEM adventure called the universe. Bedtime peace. Introduce young minds to our solar system and beyond (ages 4 \u2013 9, Pre-K \u2013 4th grade); kids love star gazing and distinguishing between planets and stars....",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/bright-star-night-star-an-astronomy-story",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/bright-star-night-star-an-astronomy-book",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/bright-star-night-star-astronomy-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/stem-literacy-units",
      "/folktales-fables-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/career-money-books-kids",
      "/bedtime-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/elementary-books-3-4",
      "/media-press-releases",
      "/read-aloud-books-kids",
      "/stem-nature-books-kids",
      "/learning-resources",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "the-dancing-flamingos-of-lake-chimichanga",
    "slug": "the-dancing-flamingos-of-lake-chimichanga",
    "title": "The Dancing Flamingos of Lake Chimichanga",
    "subtitle": "Silly Birds (3-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-dancing-flamingos-of-lake-chimichanga.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599034",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "Quirky birds with a zest for life revel and feast on the shores of a shimmering lake. Music styles & dances\n  Tongue twisters\n  Online bonuses \u201cPink birds on a walk, pink flocks in pink socks\u2026Diving, dipping, drinking, dripping, flying, falling, flailing, flipping\u2026Strutting, swaying, swooping, sunning, synchronized swimming\u2014they shimmy\u2014it\u2019s stunning.\u201d 5 glowing Amazon Vine Voice reviews. Children value...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-dancing-flamingos-of-lake-chimichanga",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-dancing-flamingos-of-lake-chimichanga-silly-birds",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-dancing-flamingos-of-lake-chimichanga-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/reluctant-reader-books",
      "/folktales-fables-kids",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/sel-books-kids",
      "/bedtime-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/elementary-books-3-4",
      "/media-press-releases",
      "/read-aloud-books-kids"
    ]
  },
  {
    "id": "ma-macdonald-flees-the-farm-its-not-a-pretty-picture",
    "slug": "ma-macdonald-flees-the-farm-its-not-a-pretty-picture",
    "title": "Ma MacDonald Flees the Farm",
    "subtitle": "It's Not a Pretty Picture ... Book (animals, 4-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ma-macdonald-flees-the-farm-its-not-a-pretty-pictu.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1951599027",
    "price": 10.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "What would you do if Old MacDonald\u2019s farm animals ruined your catering business? Search\u2014and see what Ma does\u2014inside. Bedtime peace. The perfect length picture book for kids (not too long for adults): 32 full-color pages. Build young minds today! A tongue twister with diverse characters and online SECRETS (for ages 4 \u2013 8, preschool to third grade). Children love finding and naming the animals and foods (learn...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/ma-macdonald-flees-the-farm-its-not-a-pretty-picture",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/ma-macdonald-flees-the-farm-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/ma-macdonald-flees-the-farm-animal-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/folktales-fables-kids",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/sel-books-kids",
      "/career-money-books-kids",
      "/bedtime-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/elementary-books-3-4",
      "/read-aloud-books-kids",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living",
    "slug": "bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living",
    "title": "Bridge of the Golden Wood",
    "subtitle": "A Parable on How to Earn a Living (7-15 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bridge-of-the-golden-wood-a-parable-on-how-to-earn.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 7 \u2013 15",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1370287222",
    "price": 11.95,
    "originalPrice": 12.95,
    "isFree": false,
    "description": "\u201cMasterful\u2026immensely appealing\u2026readable\u2026realistic but soft Asian-style illustrations.\u201d \u2013 Crystie Cook, poet A child with a knack for solving problems helps some hungry fish and gains a reward. \u201cWhat are you looking at?\u201d asked the boy. \u201cTrouble and treasure,\u201d said the old woman. A folk tale that captivates young children; older ones want to apply the things they learn (ages 7 \u2013 15, 1st \u2013 10th grades). Launch kids\u2019...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [
      {
        "quote": "Selected by the State of Vermont for primary school financial literacy and career curriculum.",
        "source": "State of Vermont Curriculum Selection"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-bridge-of-the-golden-wood",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/free-career-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/folktales-fables-kids",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/sel-books-kids",
      "/career-money-books-kids",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/elementary-books-3-4",
      "/stem-nature-books-kids",
      "/learning-resources",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "why-juan-cant-sleep-a-mystery",
    "slug": "why-juan-cant-sleep-a-mystery",
    "title": "Why Juan Can't Sleep",
    "subtitle": "A Mystery? (4-7 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/why-juan-cant-sleep-a-mystery.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1951599041",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "\"Crosses cultural boundaries.\u2026 Lovely exploration...fabulously rich and evocative of the artistry of Shel Silverstein.\u201d \u2013 M. Condon, Unite for Literacy. Crazy day\u2014of work and play\u2014worn-out Juan \u201cMust sleep!\u201d Tonight he\u2019ll dream of dragons\u2026or will he? \u201cOriginal...intriguing...entertaining...reader-friendly.\u201d \u2013 Midwest Book Review Young and old will identify with this funny, spooky quest for rest\u2014with tongue...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/why-juan-cant-sleep-a-mystery",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/why-juan-cant-sleep-free-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/why-juan-cant-sleep-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/phonics-books-k2",
      "/online-story-secrets",
      "/bilingual-books-spanish",
      "/sel-books-kids",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/media-press-releases",
      "/read-aloud-books-kids"
    ]
  },
  {
    "id": "butterfly-blink-a-book-without-words",
    "slug": "butterfly-blink-a-book-without-words",
    "title": "Butterfly Blink! A Book Without Words (Hard/Soft, ages 2-6)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/butterfly-blink-a-book-without-words.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599010",
    "price": 11.95,
    "originalPrice": 12.95,
    "isFree": false,
    "description": "Follow the stages of a monarch, from caterpillar to chrysalis to butterfly. With each blink the butterflies multiply, until a playful dog scatters them. Bedtime peace. Early STEM book to delight kids ages 2 \u2013 6 (preschool \u2013 1st grade). It\u2019s low stimulation for autistic children. Build kids\u2019 minds today! Find the hidden picture with Pacific Islander characters. Name the animals and cement vocabulary by describing...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/butterfly-blink-a-book-without-words",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/butterfly-blink-a-book-without-words-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/butterfly-blink-wordless-story-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/stem-literacy-units",
      "/reluctant-reader-books",
      "/folktales-fables-kids",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/wordless-picture-books",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/literacy-units",
      "/media-press-releases",
      "/stem-nature-books-kids"
    ]
  },
  {
    "id": "gopher-golf-a-wordless-picture-book",
    "slug": "gopher-golf-a-wordless-picture-book",
    "title": "Gopher Golf",
    "subtitle": "A Wordless Picture Book (Hard/Soft, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/gopher-golf-a-wordless-picture-book.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599096",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Two gophers feel the joys\u2014and trials\u2014of golfing (thanks to some crafty critters). Children can find and name animals as they describe the action on the golf green. Build kids\u2019 minds! Kids cement vocabulary telling or writing what\u2019s in the pictures\u2014which can prompt the learning of new words. A colorful early picture book for beginning readers (ages 2 \u2013 6, Pre-K \u2013 first grade). Low stimulation for autistic...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/gopher-golf-a-wordless-picture-book",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/gopher-golf-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/gopher-golf-wordless-story-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/sel-books-kids",
      "/wordless-picture-books",
      "/childrens-holiday-books",
      "/media-press-releases"
    ]
  },
  {
    "id": "polar-bear-bowler-a-story-without-words",
    "slug": "polar-bear-bowler-a-story-without-words",
    "title": "Polar Bear Bowler",
    "subtitle": "A Story Without Words (Hard/Soft, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/polar-bear-bowler-a-story-without-words.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-0985398835",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "\u201cCharming.\u2026 Sanborn\u2019s cartooning is full of\u2026polish and physical comedy.\u201d \u2013 Publisher\u2019s Weekly Join the rollicking adventures of a polar bear who hitches a ride to Antarctica. He\u2019s never seen penguins before\u2014to him they look like something fun to play with! \u201cKids will delight.\u201d \u2013 Natasha Yim. A friendly snowball fight set in the South and North Poles and brought to life by illustrator Ashley Sanborn (The Dancing...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [
      {
        "quote": "Charming\u2026 full of polish and physical comedy.",
        "source": "Publisher\u2019s Weekly"
      }
    ],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/polar-bear-bowler-a-story-without-words",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/polar-bear-bowler-a-story-without-words-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/polar-bear-bowler-wordless-story-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/vocab-books-kids",
      "/wordless-picture-books"
    ]
  },
  {
    "id": "big-black-seed-a-book-with-no-words",
    "slug": "big-black-seed-a-book-with-no-words",
    "title": "Big Black Seed",
    "subtitle": "A Book with No Words (soft/hard, 1-5 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/big-black-seed-a-book-with-no-words.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 1 \u2013 5",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599249",
    "price": 11.95,
    "originalPrice": 12.95,
    "isFree": false,
    "description": "Children tell you the story! Watch as a tortoise, cat, pigs, birds, and insects plant a mysterious black seed. What will grow as the fruit of their labors? Kids\u2019 vocabulary blooms as they describe events. Older students can write on how seeds sprout. Explore this simple gardening story for pre-readers (ages 1 \u2013 5, preschool \u2013 kindergarten). It\u2019s low stimulation for autistic children. Build kids\u2019 minds today! Find...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/big-black-seed-a-book-with-no-words",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/big-black-seed-book-with-no-words-ebook",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/stem-literacy-units",
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/wordless-picture-books",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/media-press-releases",
      "/stem-nature-books-kids"
    ]
  },
  {
    "id": "boliche-polar-un-cuento-sin-palabras",
    "slug": "boliche-polar-un-cuento-sin-palabras",
    "title": "Boliche polar",
    "subtitle": "Un cuento sin palabras (Wordless picture book, Hard/Soft, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/boliche-polar-un-cuento-sin-palabras.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1951599065",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "(Arctic Humor, Spanish) El oso polar que juega a los bolos. \u201cCharming wordless story.\u2026Sanborn\u2019s cartooning is full of\u2026polish and physical comedy.\u201d \u2013 Publisher\u2019s Weekly Un oso polar va a la Ant\u00e1rtica. \u00c9l nunca ha visto a un ping\u00fcino. A \u00e9l lo ven como algo divertido con lo cual jugar. A los ni\u00f1os les encanta crear historias (contar o escribir); construyen habilidad con el vocabulario en el proceso. Para ni\u00f1os de 2...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/boliche-polar-un-cuento-sin-palabras",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/boliche-polar-un-cuento-sin-palabras-wordless",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/reluctant-reader-books",
      "/books-like-kids-classics",
      "/online-story-secrets",
      "/bilingual-books-spanish",
      "/childrens-holiday-books"
    ]
  },
  {
    "id": "agness-rescue-biography-of-an-immigrant-girl",
    "slug": "agness-rescue-biography-of-an-immigrant-girl",
    "title": "Agnes's Rescue",
    "subtitle": "The True Story of an Immigrant Girl (6-11 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/agness-rescue-biography-of-an-immigrant-girl.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "English",
    "isbn": "978-1005577032",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "*NOTICE: Inventory is limited. If you need books by Christmas, Amazon may be best. If your priority is savings--with no holiday deadline--order with us.* Embark on a true adventure through the eyes of a child who sailed, rode, and walked it (portrayed in the motion picture, 17 Miracles). Nine-year-old Agnes hopes for a better life in the USA\u2014but will she survive the journey to her new home? Leaving her brother in...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-biography-of-an-immigrant-girl",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-writing-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/food-books-kids",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/childrens-holiday-books",
      "/media-press-releases",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "samuel-sailing-the-true-story-of-an-immigrant-boy",
    "slug": "samuel-sailing-the-true-story-of-an-immigrant-boy",
    "title": "Samuel Sailing",
    "subtitle": "The True Story of an Immigrant Boy (7-10 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/samuel-sailing-the-true-story-of-an-immigrant-boy.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 7+",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1005346508",
    "price": 11.99,
    "originalPrice": 12.95,
    "isFree": false,
    "description": "Eleven-year-old Samuel can barely contain his excitement to sail with his family from South Africa to live in the United States. Then he contracts typhoid fever. World War I has broken out. Samuel\u2019s parents have sold their business, their home\u2014everything\u2014to purchase transportation on a freighter to the USA. Now their boy is in the hospital; and even if he lives, no ship will let him aboard for several weeks....",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/samuel-sailing-the-true-story-of-an-immigrant-boy",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/samuel-sailing-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/samuel-sailing-writing-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/sports-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/elementary-books-3-4",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "annas-prayer-the-true-story-of-an-immigrant-girl",
    "slug": "annas-prayer-the-true-story-of-an-immigrant-girl",
    "title": "Anna's Prayer",
    "subtitle": "The True Story of an Immigrant Girl (women's biography K-5)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/annas-prayer-the-true-story-of-an-immigrant-girl.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 5+",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-0985398866",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Discover the 1880\u2019s tale of Anna Anderson, a child living in Sweden with her mother and her sister, Ida. Though happy, the family is poor. Unable to afford passage herself, Anna\u2019s mother puts the girls on a boat to the United States, hoping they will have a better life without her. Because Ida has work in Idaho, the sisters separate and young Anna continues by train to meet an aunt in another state. Little Anna...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/annas-prayer-the-true-story-of-an-immigrant-girl",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/annas-prayer-the-true-story-of-an-immigrant-girl-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/annas-prayer-idas-witness-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/bedtime-books-kids",
      "/childrens-holiday-books",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "idas-witness-the-true-story-of-an-immigrant-girl-nonfiction",
    "slug": "idas-witness-the-true-story-of-an-immigrant-girl-nonfiction",
    "title": "Ida's Witness",
    "subtitle": "The True Story of an Immigrant Girl (women's biography, 7-12 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/idas-witness-the-true-story-of-an-immigrant-girl-n.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "English",
    "isbn": "978-0463292839",
    "price": 10.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "When young Ida contracts scarlet fever in 1880s Sweden, she nearly loses her sight. After another brush with death, Ida learns that life doesn\u2019t end, disease is finite, and small miracles happen every day. With new faith, Ida leaves her mother and brother and sails with her sister to America for a better life\u2014free from poverty and persecution. But she knows no English. How will she share what she\u2019s learned in...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/idas-witness-the-true-story-of-an-immigrant-girl-nonfiction",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/idas-witness-the-true-story-of-an-immigrant-girl-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/annas-prayer-idas-witness-lesson-plan",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/vocab-books-kids",
      "/online-story-secrets",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/childrens-holiday-books",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "muffy-and-valor-a-true-dog-story",
    "slug": "muffy-and-valor-a-true-dog-story",
    "title": "Muffy & Valor",
    "subtitle": "A True Dog Story (picture book, ages 5-8)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/muffy-and-valor-a-true-dog-story.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 5\u20138",
    "grades": "Grades PreK\u20135",
    "language": "English",
    "isbn": "978-1370601592",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "Muffy is a little dog who loves people; but after a painful injury she\u2019s wary of other dogs. Valor is a lost German Shepherd who gets hit by a car. When Muffy\u2019s family brings Valor to their home to recover, no one is sure how Muff will react to this big strange dog. Discover a sweet nonfiction picture book with a Hispanic family that teaches compassion, friendship, trust, and courage (for kids ages 5 \u2013 8,...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/muffy-and-valor-a-true-dog-story",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/muffy-valor-a-true-dog-story-ebook",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/muffy-and-valor-a-true-dog-story-writing-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/online-story-secrets",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/childrens-holiday-books",
      "/elementary-books-3-4"
    ]
  },
  {
    "id": "horse-dog-adventures-in-early-california-short-stories-poems",
    "slug": "horse-dog-adventures-in-early-california-short-stories-poems",
    "title": "Horse & Dog Adventures in Early California",
    "subtitle": "Short Stories & Poems (ages 9+)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/horse-dog-adventures-in-early-california-short-sto.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 9+",
    "grades": "Grades 3\u20138+",
    "language": "English",
    "isbn": "978-0615856162",
    "price": 8.99,
    "originalPrice": null,
    "isFree": false,
    "description": "Ransom \u201cDoc\u201d Wilcox\u2019s ventures began in Taber, Alberta, Canada in 1907. But he was soon whisked to the back country of Northern California where his family farmed, tended livestock, and sometimes survived via hunting and fishing\u2014always with dogs and horses. Once, when the hunter became the prey\u2014of a charging wild boar\u2014Wilcox stuck a pole he was carrying into the ground and climbed up! Another time his Australian...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/horse-dog-adventures-in-early-california-short-stories-poems",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/horse-and-dog-adventures-in-early-california",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/horse-and-dog-adventures-in-early-california-short-stories-and-poems-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/childrens-holiday-books",
      "/media-press-releases",
      "/stem-nature-books-kids",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "the-mystery-of-the-grinning-buddha",
    "slug": "the-mystery-of-the-grinning-buddha",
    "title": "The Mystery of the Grinning Buddha (Millerville Mysteries",
    "subtitle": "Book I, 8-12 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-mystery-of-the-grinning-buddha.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 6 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1940802220",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "The Mystery of the Grinning Buddha (Middle grade) After 10-year-old Mike\u2019s mother is sick and confined to bed his Aunt Thelma arrives, takes over the kids and the house, and seems to be searching for something. Mike must discover what she is looking for and why his mother doesn\u2019t seem to be getting better. For ages 6 - 8, (grades K \u2013 3). 31,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics);...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-mystery-of-the-grinning-buddha",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-mystery-of-the-ugly-bottle",
    "slug": "the-mystery-of-the-ugly-bottle",
    "title": "The Mystery of the Ugly Bottle (Millerville Mysteries",
    "subtitle": "Book II, 8-12 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-mystery-of-the-ugly-bottle.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 8 \u2013 12",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1940802244",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "The Mystery of the Ugly Bottle (Middle grade) Ten-year-old twins, Jeremy and Jennifer, follow a trail of clues hopefully leading to a treasure trove hidden somewhere on the Miller Estate. The treasure must be worth enough to pay off the coming-due balloon payment for the entire estate. For ages 8 - 12, (grades 3 \u2013 7). 52,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics); Book I in The...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-mystery-of-the-ugly-bottle",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-mystery-of-the-haunted-lighthouse",
    "slug": "the-mystery-of-the-haunted-lighthouse",
    "title": "The Mystery of the Haunted Lighthouse (Millerville Mysteries",
    "subtitle": "Book III, 8-12 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-mystery-of-the-haunted-lighthouse.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 8 \u2013 12",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1940802008",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "The Mystery of the Haunted Lighthouse (Middle grade) Jennifer Miller and her cousin, Nicalee, are ten years old. They hope that Jennifer\u2019s father, who has been missing at sea for weeks, is still alive. They follow clues they believe have been left by Jennifer\u2019s father in anticipation of finding him. For ages 8 - 12, (grades 3 \u2013 7). 35,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics); Book...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/the-mystery-of-the-haunted-lighthouse",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "to-swallow-the-earth",
    "slug": "to-swallow-the-earth",
    "title": "To Swallow the Earth",
    "subtitle": "A Western Thriller (ages 14+)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/to-swallow-the-earth.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 14+",
    "grades": "Grades 3\u20138+",
    "language": "English",
    "isbn": "978-1311882387",
    "price": 12.95,
    "originalPrice": 14.95,
    "isFree": false,
    "description": "\u00b7 2016 International Book Award \u00b7 Literary Classics Seal of Approval \u00b7 2016 Laramie Award Finalist (Classic western) What if you returned from a journey and your family had disappeared? What if someone had taken residence in your home, assumed control of your affairs\u2014and was trying to kill you? Wade Forester must stay in the shadows or be shot. His father has vanished and his sister won\u2019t speak. Beautiful...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/to-swallow-the-earth",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/to-swallow-the-earth-western",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/to-swallow-the-earth-composition-lesson",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/book-author-beckstrand",
      "/childrens-holiday-books",
      "/media-press-releases",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "a-sky-so-big-a-romantic-adventure",
    "slug": "a-sky-so-big-a-romantic-adventure",
    "title": "A Sky So Big",
    "subtitle": "A Romantic Adventure (ages 14+)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/a-sky-so-big-a-romantic-adventure.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 14+",
    "grades": "Grades 3\u20138+",
    "language": "English",
    "isbn": "978-1311092038",
    "price": 12.95,
    "originalPrice": null,
    "isFree": false,
    "description": "\u00b7 Winner: 2016 International Book Award \u00b7 2016 Laramie Award finalist \u00b7 Literary Classics Seal of Approval \u00b7 Multicultural cast (Clean western romance) A gusty young woman and a Latino man, both searching for missing family, clash amid a Nevada silver rush scheme that leaves each unsure who to trust\u2014and scrambling to stay alive. What if you returned from a journey to discover that your family has evaporated and...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/a-sky-so-big-a-romantic-adventure",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/a-sky-so-big",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/childrens-holiday-books"
    ]
  },
  {
    "id": "worlds-without-number",
    "slug": "worlds-without-number",
    "title": "Worlds Without Number",
    "subtitle": "YA Sci-Fi",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/worlds-without-number.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills"
    ],
    "format": [
      "Hardcover",
      "Paperback"
    ],
    "ages": "Ages 12 \u2013 18",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1940802022",
    "price": 12.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Worlds Without Number (Science Fiction) Blake and his roommate, Roger, design and build a vehicle that can travel across the universe, instantly. They each discover their own destiny as a result of the experiences they have as they interact with an advanced civilization. For ages 12 \u2013 18 (grades 7 - 12). 40,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics); 189 pages, soft cover, perfect...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/worlds-without-number",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "why-juan-cant-sleep-free-ebook",
    "slug": "why-juan-cant-sleep-free-ebook",
    "title": "Why Juan Can\u2019t Sleep",
    "subtitle": "A Funny Mystery (Free ebook, 4-7 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/why-juan-cant-sleep-free-ebook.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Free Ebooks",
      "Ebook"
    ],
    "ages": "Ages 4 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1951599041",
    "price": 0.0,
    "originalPrice": null,
    "isFree": true,
    "description": "\"Crosses cultural boundaries.\u2026 Lovely exploration...fabulously rich and evocative of the artistry of Shel Silverstein.\u201d \u2013 M. Condon, Unite for Literacy. Crazy day\u2014of work and play\u2014worn-out Juan \u201cMust sleep!\u201d Tonight he\u2019ll dream of dragons\u2026or will he? \u201cOriginal...intriguing...entertaining...reader-friendly.\u201d \u2013 Midwest Book Review Young and old will identify with this funny, spooky quest for rest\u2014with tongue...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/why-juan-cant-sleep-free-ebook",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "agness-rescue-ebook",
    "slug": "agness-rescue-ebook",
    "title": "Agnes's Rescue",
    "subtitle": "The True Story of an Immigrant Girl (free ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/agness-rescue-ebook.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Free Ebooks",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "English",
    "isbn": "978-1005577032",
    "price": 0.0,
    "originalPrice": null,
    "isFree": true,
    "description": "Embark on a true adventure through the eyes of a child who sailed, rode, and walked it (portrayed in the motion picture, 17 Miracles). Nine-year-old Agnes hopes for a better life in the USA\u2014but will she survive the journey to her new home? Leaving her brother in Scotland (her father already lost at sea), brave Agnes sails with her Scottish-Irish mother and siblings to New York in 1856. They travel by train to the...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-ebook",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "4-stem-books-for-kids",
    "slug": "4-stem-books-for-kids",
    "title": "4 STEM Books for Kids",
    "subtitle": "Fun & Learning for Families (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-stem-books-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 9",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "979-8215576861",
    "price": 33.95,
    "originalPrice": 34.95,
    "isFree": false,
    "description": "Four ready-to-use hands-on STEM lessons with built-in literacy. Bananas, Bugs, and black holes. Explore critically acclaimed adventures today (bound in one): Bad Bananas: A Story Cookbook for Kids\n   Bright Star, Night Star: An Astronomy Story\n   She Doesn\u2019t Want the Worms: A Mystery (with English & Spanish pronunciation guide)\n   Butterfly Blink: A Book Without Words.\n\nDon\u2019t miss the online SECRETS! Each...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-stem-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/stem-literacy-units",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/stem-nature-books-kids"
    ]
  },
  {
    "id": "4-spanish-english-books-for-kids",
    "slug": "4-spanish-english-books-for-kids",
    "title": "4 Spanish-English Books for Kids",
    "subtitle": "(bilingual with pronunciation guide, 3-8 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-spanish-english-books-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-0985398897",
    "price": 33.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "Four ready-to-use mini curricula for beginning language learners. Get best-selling bilingual children\u2019s books (bound in one): Crumbs on the Stairs - Migas en las escaleras: A Mystery Arriba Up, Abajo Down at the Boardwalk Sounds in the House - Sonidos en la casa: A Mystery She Doesn\u2019t Want the Worms - Ella no quiere los gusanos (humor) Each picture book has parallel text and pronunciation guide in both English...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-spanish-english-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/vocab-books-kids",
      "/bilingual-books-spanish",
      "/sel-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/read-aloud-books-kids",
      "/learning-resources"
    ]
  },
  {
    "id": "4-spanish-books-for-kids-4-libros-para-ninos",
    "slug": "4-spanish-books-for-kids-4-libros-para-ninos",
    "title": "4 Spanish Books for Kids \u2013 4 libros para ni\u00f1os (w/pronunciation guide, 3-8 years)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-spanish-books-for-kids-4-libros-para-ninos.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-1732069695",
    "price": 34.95,
    "originalPrice": 35.95,
    "isFree": false,
    "description": "\u201cA fun learning experience\u2026colorful and age appropriate.\u201d \u2013 Anna del C. Dye Includes pronunciation guide in English plus best-selling mysteries: Migas en las escaleras: Un misterio (Crumbs on the Stairs), Ella no quiere los gusanos (She Doesn\u2019t Want the Worms), Ruidos en la casa: Un misterio (Sounds in the House), and Arriba, abajo en la playa (Ups & Downs at the Boardwalk)\u2014picture books (bound in one volume)...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-spanish-books-for-kids-4-libros-para-ninos",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish",
      "/teaching-guides",
      "/literacy-units"
    ]
  },
  {
    "id": "4-stories-of-immigrant-kids",
    "slug": "4-stories-of-immigrant-kids",
    "title": "4 Stories of Immigrant Kids",
    "subtitle": "True Tales of Courage & Faith (6-12 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-stories-of-immigrant-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 6 \u2013 12",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1951599379",
    "price": 33.85,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "(Illustrated Biographies) Four ready-to-use geography and transportation lessons with built-in literacy. Discover adventures spanning sixty years\u2014telling the true stories of four children, each seeking a better life: Agnes\u2019s Rescue (1856 Scotland/Ireland) Ida\u2019s Witness (1888 Sweden) Anna\u2019s Prayer (1888 Sweden) Samuel Sailing (1916 South Africa) All touch on a universal desire: the yearning for family and the...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-stories-of-immigrant-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/sel-books-kids",
      "/christian-childrens-books",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/elementary-books-3-4",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "4-career-books-for-kids",
    "slug": "4-career-books-for-kids",
    "title": "4 Career Books for Kids",
    "subtitle": "Stories That Help Young Readers Discover Their Gifts (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-career-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201315",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1951599478",
    "price": 32.95,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Big dreams begin with great interactive stories. This all-in-one volume of four award-winning books helps children imagine what they can become while building literacy, confidence, and practical life skills. Meet an enterprising caterer. Dress up for exciting careers. Reach for the stars: The Bridge of the Golden Wood: A Parable on How to Earn a Living (selected for Vermont curriculum)\nGreat Cape o' Colors:...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-career-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/vocab-books-kids",
      "/career-money-books-kids",
      "/teaching-guides",
      "/literacy-units",
      "/chapter-books-kids-7-14"
    ]
  },
  {
    "id": "4-food-books",
    "slug": "4-food-books",
    "title": "4 Food Books for Kids",
    "subtitle": "With Recipes, Mysteries & Hidden-Picture Fun (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-food-books.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201311",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1505693805",
    "price": 32.95,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Interactive food adventures with built-in literacy. Four complete stories\u2014in one convenient volume\u2014offer laughter, colorful illustrations, and hands-on activities that keep young readers engaged page after page. Praised by The Horn Book and School Library Journal, this collection encourages observation, shared reading, and a love of learning. Inside you'll find: Bad Bananas: A Story Cookbook for Kids\n   Crumbs on...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-food-books",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/easy-childrens-recipes",
      "/wordless-picture-books",
      "/teaching-guides",
      "/literacy-units"
    ]
  },
  {
    "id": "4-food-books-for-families",
    "slug": "4-food-books-for-families",
    "title": "4 Food Books for Families",
    "subtitle": "Gardening, Cooking & Story Adventures (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-food-books-for-families.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599492",
    "price": 32.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "Four ready-to-use interactive food lessons with built-in literacy. Explore bestselling kids\u2019 books (bound in one volume): GROW: How We Get Food from Our Garden \n  The Dancing Flamingos of Lake Chimichanga \n  It Came from Under the High Chair: A Mystery\n  Big Black Seed: A Book with No Words Kids value learning how food grows and eating with family (also humor, counting, music, and mysteries with Asian, Black,...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-food-books-for-families",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/easy-childrens-recipes",
      "/teaching-guides",
      "/literacy-units"
    ]
  },
  {
    "id": "4-funny-mysteries-for-kids",
    "slug": "4-funny-mysteries-for-kids",
    "title": "4 Funny Mysteries for Kids",
    "subtitle": "Giggles, Goosebumps, Gross Ghosts & Grammar for Growing Goblins (SOFT, 2-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-funny-mysteries-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20138",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1311864079",
    "price": 32.95,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Four bestselling mysteries. One gloriously spooky collection. Sounds, stairs, slime, and sleeplessness\u2014gripping (and giggle-worthy) picture book mysteries in one volume with Filipino, Pacific Islander, White, and Latino characters: Sounds in the House\n   Crumbs on the Stairs \u2013 Migas en las escaleras (with Spanish-English pronunciation guide)\n   It Came from Under the High Chair\n   Why Juan Can\u2019t Sleep: A Funny...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-funny-mysteries-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/phonics-books-k2",
      "/sel-books-kids",
      "/teaching-guides",
      "/literacy-units",
      "/read-aloud-books-kids"
    ]
  },
  {
    "id": "4-sports-books-for-kids",
    "slug": "4-sports-books-for-kids",
    "title": "4 Sports Books for Kids",
    "subtitle": "Illustrated for Beginning Readers (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-sports-books-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1005232610",
    "price": 32.95,
    "originalPrice": 34.95,
    "isFree": false,
    "description": "Don\u2019t miss these ready-to-use concept lessons with built-in literacy. Children tell you the stories in this popular sports collection (bound as one): Polar Bear Bowler: A Story Without Words\n  Arriba Up, Abajo Down at the Boardwalk: A Picture Book of Opposites\n  Gopher Golf: A Wordless Picture Book\n  Great Cape o\u2019 Colors: Career Costumes for Kids Bedtime peace! Find the animals and count individual sports:...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-sports-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/early-reader-books-k2",
      "/vocab-books-kids",
      "/wordless-picture-books",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units"
    ]
  },
  {
    "id": "4-activity-books-for-kids",
    "slug": "4-activity-books-for-kids",
    "title": "4 Activity Books for Kids",
    "subtitle": "Interactive Adventures That Spark Curiosity (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-activity-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4 \u2013 9",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "978-1311211026",
    "price": 32.95,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Four unforgettable stories. A world of discovery. Plant a garden. Cook together. Dress up for exciting careers. Reach for the stars. This all-in-one collection of interactive picture books transforms story time into a voyage that inspires wonder, conversation, and creativity. Inside you'll enjoy: GROW: How We Get Food from Our Garden\n   Great Cape o\u2019 Colors: Career Costumes for Kids\n   Bad Bananas: A Story...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-activity-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/teaching-guides",
      "/literacy-units",
      "/elementary-books-3-4",
      "/learning-resources"
    ]
  },
  {
    "id": "4-multicultural-bedtime-stories",
    "slug": "4-multicultural-bedtime-stories",
    "title": "4 Bedtime Stories for Wide-Awake Kids",
    "subtitle": "Stories That Spark Wonder, Calm & Conversation (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-multicultural-bedtime-stories.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u20139",
    "grades": "Grades PreK\u20135",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1311251169",
    "price": 32.95,
    "originalPrice": 33.95,
    "isFree": false,
    "description": "Curiosity, connection, and a few good questions to help settle young minds\u2014four bestselling picture books bound in one volume: Bright Star, Night Star: An Astronomy Story Sounds in the House \u2013 Sonidos en la casa: A Mystery (with Spanish-English pronunciation guide) The Bridge of the Golden Wood (selected by the State of Vermont for career curriculum) Why Juan Can\u2019t Sleep: A Funny Mystery A journey into the night...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-multicultural-bedtime-stories",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bedtime-books-kids",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units"
    ]
  },
  {
    "id": "4-seasons-books-for-kids",
    "slug": "4-seasons-books-for-kids",
    "title": "4 Seasons Books for Kids",
    "subtitle": "A Wordless Collection for Beginning Readers (1-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-seasons-books-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20135",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599348",
    "price": 33.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "The child tells the story\u2014and literacy begins before a single word is read. Four award-winning wordless picture books in one volume, one for each season: WINTER \u2013 Polar Bear Bowler: A Story Without Words SPRING \u2013 Butterfly Blink: A Book Without Words SUMMER \u2013 Gopher Golf: A Wordless Picture Book AUTUMN \u2013 Big Black Seed: A Book with No Words With no text on the page, young readers narrate the story...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-seasons-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/vocab-books-kids",
      "/wordless-picture-books",
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units",
      "/media-press-releases"
    ]
  },
  {
    "id": "4-wild-animal-books-for-kids-getting-along-outside-the-zoo",
    "slug": "4-wild-animal-books-for-kids-getting-along-outside-the-zoo",
    "title": "4 Wild Animal Books for Kids",
    "subtitle": "Getting Along Outside the Zoo (SOFT. Ages 3-9)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-wild-animal-books-for-kids-getting-along-outside.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3\u20139",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599300",
    "price": 32.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "Four fun interactive stories that teach cooperation, kindness, and problem-solving Bears, birds, and bunnies come to life in popular children\u2019s stories that emphasize happy social relating\u2014all in one volume: Ma MacDonald Flees the Farm The Bridge of the Golden Wood: A Parable on How to Earn a Living (chosen by Vermont schools) Polar Bear Bowler: A Story Without Words The Dancing Flamingos of Lake Chimichanga...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-wild-animal-books-for-kids-getting-along-outside-the-zoo",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/animal-books-kids",
      "/books-like-kids-classics",
      "/phonics-books-k2",
      "/sel-books-kids",
      "/teaching-guides",
      "/literacy-units"
    ]
  },
  {
    "id": "4-tongue-twisters-for-tykes-animal-humor-for-kids",
    "slug": "4-tongue-twisters-for-tykes-animal-humor-for-kids",
    "title": "4 Tongue Twisters for Tykes",
    "subtitle": "Food & Animal Humor for Kids (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-tongue-twisters-for-tykes-animal-humor-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 5 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1951599287",
    "price": 32.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "Four ready-to-use attention and language lessons with built-in literacy. TRY to read these funny fables out loud! Explore kid favorites (bound in one volume): GROW: How We Get Food from Our Garden\n   The Dancing Flamingos of Lake Chimichanga\n She Doesn\u2019t Want the Worms - Ella no quiere los gusanos (with Spanish pronunciation guide)\n Ma MacDonald Flees the Farm: It\u2019s Not a Pretty Picture\u2026Book Find hidden pictures...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-tongue-twisters-for-tykes-animal-humor-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/teaching-guides",
      "/literacy-units",
      "/elementary-books-3-4"
    ]
  },
  {
    "id": "4-hidden-picture-books-for-kids-food-bugs-and-finding-fun",
    "slug": "4-hidden-picture-books-for-kids-food-bugs-and-finding-fun",
    "title": "4 Hidden Picture Books for Kids",
    "subtitle": "Search-and-Find & Family Fun (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-hidden-picture-books-for-kids-food-bugs-and-find.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1951599133",
    "price": 32.95,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Animals, snacks, laughter, and a monster in disguise\u2014four popular search-and-find picture books in one volume, each built around a clever observation challenge: It Came from Under the High Chair: A Mystery\n She Doesn\u2019t Want the Worms / Ella no quiere los gusanos (with Spanish pronunciation guide)\n  Ma MacDonald Flees the Farm\n    Butterfly Blink: A Book Without Words Something suspicious has emerged from under...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-hidden-picture-books-for-kids-food-bugs-and-finding-fun",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/books-like-kids-classics",
      "/teaching-guides"
    ]
  },
  {
    "id": "4-insect-books-for-kids",
    "slug": "4-insect-books-for-kids",
    "title": "4 Insect Books for Kids",
    "subtitle": "Bugs, Blossoms & Backyard Adventures (SOFT, ages 2-8)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-insect-books-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2\u20138",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599492",
    "price": 32.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "Award-winning picture books in one engaging volume\u2014packed with insects, gardens, mysteries, and opportunities for children to build vocabulary and storytelling skills. This STEM collection includes: Big Black Seed: A Book with No Words She Doesn't Want the Worms: A Mystery Butterfly Blink: A Book Without Words GROW: How We Get Food from Our Garden Young readers discover how insects help plants grow, where food...",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-insect-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/literacy-units"
    ]
  },
  {
    "id": "4-toy-stories-for-kids-multicultural-fun",
    "slug": "4-toy-stories-for-kids-multicultural-fun",
    "title": "4 Toy Stories for Kids",
    "subtitle": "Multicultural Fun (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-toy-stories-for-kids-multicultural-fun.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3\u20139",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1951599508",
    "price": 32.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "Toys, tools, and teddy bears\u2014four interactive stories bound in one vibrant volume! Mix quirky mysteries, opposites adventures, and hidden surprises with lovable characters from diverse backgrounds. Crumbs on the Stairs: A Mystery\nArriba Up, Abajo Down at the Boardwalk (with Spanish-English pronunciation guide)\nThe Bridge of the Golden Wood: A Parable on How to Earn a Living (chosen by Vermont schools)\nWhy Juan...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/4-toy-stories-for-kids-multicultural-fun",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/teaching-guides",
      "/childrens-holiday-books",
      "/literacy-units"
    ]
  },
  {
    "id": "pet-books-for-kids",
    "slug": "pet-books-for-kids",
    "title": "Pet Books for Kids",
    "subtitle": "BUNDLE",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/pet-books-for-kids.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 10",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "Verified Direct Store Edition",
    "price": 54.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Includes: It Came from Under the High Chair: A Mystery (learn prepositions); Butterfly Blink: A Book Without Words; The Bridge of the Golden Wood: A Parable on How to Earn a Living; Sounds in the House (pet dog); She Doesn't Want the Worms (insects and reptiles); Why Juan Can\u2019t Sleep (cat and dog). For ages 3 \u2013 10. Choose hard or soft covers. See online secrets.",
    "educationalBenefits": [
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/pet-books-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "fables-and-folk-tales-for-kids",
    "slug": "fables-and-folk-tales-for-kids",
    "title": "Fables & Folk Tales for Kids",
    "subtitle": "BUNDLE",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/fables-and-folk-tales-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 2 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "Verified Direct Store Edition",
    "price": 36.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Fables & Folktales for Kids Sometimes we just need a good legend, myth, fairy tale, or nursery rhyme (it doesn\u2019t hurt if you laugh or learn something too)! Includes It Came from Under the High Chair: A Mystery (learn prepositions); The Bridge of the Golden Wood: A Parable on How to Earn a Living; The Dancing Flamingos of Lake Chimichanga (learn music styles/dances and foods); Ma MacDonald Flees the Farm (learn...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/fables-and-folk-tales-for-kids",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "spanish-bundle",
    "slug": "spanish-bundle",
    "title": "Spanish Books for Kids (with pronunciation guide in English) BUNDLE",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/spanish-bundle.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "Verified Direct Store Edition",
    "price": 54.95,
    "originalPrice": null,
    "isFree": false,
    "description": "6 Spanish Books for Kids (Libros para ni\u00f1os, Language learning) in a bundle. Best-selling diverse books with pronunciation guide in English: Migas en las escaleras: Un Misterio; Ella no quiere los gusanos; Ruidos en la casa; Arriba, abajo en la playa; Capa de colores; y De la silla de Iv\u00e1n Sali\u00f3. See also: Boliche polar: Un cuento sin palabras y 4 libros para ni\u00f1os. Learn Spanish nouns, verbs, animals, opposites,...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/spanish-bundle",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "migas-en-las-escaleras-un-misterio-spanish",
    "slug": "migas-en-las-escaleras-un-misterio-spanish",
    "title": "Migas en las escaleras",
    "subtitle": "Un misterio (Spanish w/English pronunciation guide, 2-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/migas-en-las-escaleras-un-misterio-spanish.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 2 \u2013 6",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-0615443058",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "(Spanish interrogatives) \u00bfDe d\u00f3nde vienen estas migajas?\n\u00bfPor qu\u00e9 hay migas en las escaleras?\n\u00bfQui\u00e9n est\u00e1 dejando migas en todas partes?! Where did all the crumbs come from? Find out in Crumbs on the Stairs. A child leads a counting search for the crumb culprit in this humorous picture book with Spanish pronunciation guide in English. Build kids\u2019 minds today! Kids value learning how to ask questions in another...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/migas-en-las-escaleras-un-misterio-spanish",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/spanish-ebook-migas-en-las-escaleras",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "ella-no-quiere-los-gusanos-un-misterio-spanish",
    "slug": "ella-no-quiere-los-gusanos-un-misterio-spanish",
    "title": "Ella no quiere los gusanos",
    "subtitle": "Un misterio (Spanish with pronunciation guide in English, 3-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ella-no-quiere-los-gusanos-un-misterio-spanish.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 3 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-1732069640",
    "price": 12.95,
    "originalPrice": null,
    "isFree": false,
    "description": "(Insects) \u201cDelightful book\u2026humorous rhyming text\u2026bright illustrations.\u201d \u2013 Ana Rodriguez for School Library Journal A STEM book about a mixed-race girl who responds to some unusual gifts\u2014that happen to be alive. Comes with Spanish pronunciation guide in English. \u00bfQui\u00e9n regala gusanos \u2014 y POR QU\u00c9? \u00bfAsqueroso? Tiene que haber una raz\u00f3n. Mientras piensas y repiensas, cuenta los bichos. Un misterio divertido para...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/ella-no-quiere-los-gusanos-un-misterio-spanish",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/ella-no-quiere-los-gusanos-un-misterio",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "ruidos-en-la-casa-un-misterio",
    "slug": "ruidos-en-la-casa-un-misterio",
    "title": "Ruidos en la casa",
    "subtitle": "Un misterio c\u00f3mico (Spanish with pronunciation guide in English, 2-7 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ruidos-en-la-casa-un-misterio.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1951599003",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "Ever been scared by strange noises\u2014that seem to happen by themselves? What causes those squeaks and bumps? A scaredy-cat dog faces his fears and finds out in this funny bedtime story on courage and friendship. A picture book mystery with Spanish pronunciation guide (for kids ages 2 \u2013 7, preschool \u2013 2nd grade/emergent reader). \u00bfAlguna vez, has o\u00eddo en tu casa ruidos que te asustan? \u00bfDe d\u00f3nde vienen esos chirridos...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/ruidos-en-la-casa-un-misterio",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/ruidos-en-la-casa-libro-en-espanol",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "de-la-silla-de-ivan-salio",
    "slug": "de-la-silla-de-ivan-salio",
    "title": "De la silla de Iv\u00e1n, Sali\u00f3\u2026 Un misterio (Spanish picture book of prepositions, ages 4-8)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/de-la-silla-de-ivan-salio.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4\u20138",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-0463800508",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "(Humor, Partes de la oraci\u00f3n) A mysterious visitor brings intrigue, excitement, and laughs to a biracial family. Discover a rollicking picture book of monsters, heroes, and a dog. Elena is a sensible child. Unlike her zany brother Benjamin, she sticks to reason and facts\u2014but Elena\u2019s practical world has tilted thanks, in part, to her baby brother Ivan\u2026and an unusual guest. Kids love finding \u201cit,\u201d counting its...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/de-la-silla-de-ivan-salio",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/de-la-silla-de-ivan-salio-ebook",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "capa-de-colores-spanish",
    "slug": "capa-de-colores-spanish",
    "title": "Capa de colores",
    "subtitle": "Spanish careers/cultures book w/English pronunciation guide",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/capa-de-colores-spanish.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 3 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-1732069626",
    "price": 11.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "(Careers, colors, cultures) \u201c\u00c9sta es una capa de colores m\u00e1gica\u201d. Este libro sobre carreras y culturas para ni\u00f1os de 3 a 7 a\u00f1os contiene actividades de b\u00fasqueda, superh\u00e9roes hispanos y africanos, y v\u00edvidas im\u00e1genes para ayudar con la comprensi\u00f3n del vocabulario. Build kids\u2019 minds today with Great Cape o\u2019 Colors! Count careers and colors\u2014try on costumes. A children\u2019s book with Black and Hispanic superheroes and...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/capa-de-colores-spanish",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/capa-de-colores-spanish-ebook",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "arriba-abajo-en-la-playa-spanish",
    "slug": "arriba-abajo-en-la-playa-spanish",
    "title": "Arriba, abajo en la playa",
    "subtitle": "Un libro de opuestos (Spanish opposites w/pronunciation, 2-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-abajo-en-la-playa-spanish.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure"
    ],
    "format": [
      "Hardcover",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 2 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-1732069688",
    "price": 11.95,
    "originalPrice": null,
    "isFree": false,
    "description": "(Spanish picture book of opposites) \u201cHighly recommended\u201d \u2013 Midwest Book Review Arriba, abajo es un libro de opuestos y comparaciones que tiene actividades de contar y dibujos de colores vivos para ayudar con el vocabulario \u2014 diversi\u00f3n y el aprendizaje en espa\u00f1ol para toda la familia (dicha para ni\u00f1os de 2 \u2013 7 a\u00f1os). Discover marine animals, water sports, rides, foods, and online SECRETS in this ethnically diverse...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/arriba-abajo-en-la-playa-spanish",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books/ols/products/arriba-abajo-en-la-playa-opuestos",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "great-cape-o-colors-a-careers-coloring-book",
    "slug": "great-cape-o-colors-a-careers-coloring-book",
    "title": "Great Cape o' Colors",
    "subtitle": "A Careers Coloring Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/great-cape-o-colors-a-careers-coloring-book.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 7",
    "grades": "Grades PreK\u20133",
    "language": "English & Spanish (Bilingual)",
    "isbn": "978-1719025935",
    "price": 7.95,
    "originalPrice": null,
    "isFree": false,
    "description": "\u201cA magic cape!\u201d A costume coloring adventure. Discover colors\u2014daring jobs\u2014and cultures (ages 3 \u2013 7, preschool \u2013 second grade) with black and Hispanic superhero characters. \u201cExcellent for teachers.\u201d \u2013 Maritza Mejia, writer/educator. Kids in Capes! Children will love to color or dress up like the characters in the book. 100 read-aloud words in dyslexic-friendly font by best-selling, award-winning author and college...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/great-cape-o-colors-a-careers-coloring-book",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "5-essential-steps-in-learning-to-read-in-english-spanish",
    "slug": "5-essential-steps-in-learning-to-read-in-english-spanish",
    "title": "5 Essential Steps in Learning to Read (in English & Spanish)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/5-essential-steps-in-learning-to-read-in-english-s.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "Spanish (with Pronunciation Guide)",
    "isbn": "978-9992378229",
    "price": 19.95,
    "originalPrice": null,
    "isFree": false,
    "description": "(Lesson Plans, literacy) Children can learn to read in 90 days\u2014and your role as teacher will be a breeze. Children love learning through multi-sensory games and activities. Includes 100+ worksheets by Shirley Gaither and Connie Hendricks. Ages 3 \u2013 8 (Preschool \u2013 third grade). Bilingual (also in English-only. Procesos Graficos \u00a9 2006). 225 pages, 10.75\u201d x 8.5\u201d, Soft cover; LAN010000, FOR007000, EDU029020, ISBN:...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/5-essential-steps-in-learning-to-read-in-english-spanish",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "laughter-laughter-now-and-after",
    "slug": "laughter-laughter-now-and-after",
    "title": "Laughter, Laughter\u2014Now & After! The Multicultural Book Covers of Karl Beckstrand",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/laughter-laughter-now-and-after.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food",
      "Humor, Mystery & Adventure",
      "Bedtime, Faith & Family"
    ],
    "format": [
      "Hardcover",
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1951599263",
    "price": 13.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Best-selling author Karl Beckstrand has crafted (and often illustrated) scores of eclectic funny bilingual/educational stories, ebooks, and audio books. This 40-cover collection showcases design and many ethnicities\u2014not only the characters, but the collaborators (illustrators hail from Latin America, Europe, and Asia). Librarians, teachers, parents, young adults, teens, and children love the art of these popular...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Wordless visual storytelling that builds oral language, sequencing, and creative narration",
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books/ols/products/laughter-laughter-now-and-after",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/online-story-secrets"
    ]
  }
];
