export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  illustrator?: string;
  coverImage: string;
  readerLevel: string[]; // e.g. "Beginning Readers (K–2)", "Elementary (Grades 3–5)", "Chapter Books & YA (Ages 7–14)", "Bilingual & ESL"
  theme: string[]; // e.g. "Character, Career & Life Skills", "STEM, Nature & Food", "Humor, Mystery & Adventure", "Bedtime, Faith & Family", "History, Culture & Biography"
  format: string[]; // "Hardcover", "Paperback", "Ebook", "Bundles & Series", "Free Ebooks"
  ages: string;
  grades: string;
  language: string;
  isbn: string;
  price: number;
  isFree?: boolean;
  description: string;
  educationalBenefits: string[];
  reviews?: { quote: string; source: string }[];
  lexileLevel?: string;
  arLevel?: string;
  teachingGuideUrl?: string;
  amazonUrl?: string;
  ingramUrl?: string;
}

export const BOOKS_DATA: Book[] = [
  {
    id: "crumbs-on-the-stairs",
    title: "Crumbs on the Stairs – Migas en las escaleras",
    subtitle: "A Mystery Counting Book in English and Spanish",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/crumbs_fair.jpg",
    readerLevel: ["Beginning Readers (K–2)", "Elementary (Grades 3–5)", "Bilingual & ESL"],
    theme: ["Humor, Mystery & Adventure", "STEM, Nature & Food", "Character, Career & Life Skills"],
    format: ["Paperback", "Hardcover", "Ebook"],
    ages: "4–10",
    grades: "K–4",
    language: "English & Spanish (Bilingual)",
    isbn: "978-0985398873",
    price: 12.99,
    description: "A delightful bilingual mystery game where readers follow a trail of crumbs up the stairs while learning numbers, food vocabulary, and deduction skills in two languages.",
    educationalBenefits: [
      "Bilingual vocabulary development (English/Spanish)",
      "Math counting integration (Numbers 1-10 & ordinal steps)",
      "Visual observation & critical thinking puzzles",
      "Includes mini-glossary and recipes"
    ],
    reviews: [
      { quote: "Delightful... humorous... bright.", source: "School Library Journal" },
      { quote: "An engaging bilingual tool for home and classroom libraries.", source: "Foreword Reviews" }
    ],
    lexileLevel: "AD480L",
    arLevel: "2.8",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/0985398873",
    ingramUrl: "https://www.ingramcontent.com"
  },
  {
    id: "sounds-in-the-house",
    title: "Sounds in the House – Sonidos en la casa",
    subtitle: "A Bilingual Mystery on Phonics & Auditory Perception",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/all_covers_bilingual.jpg",
    readerLevel: ["Beginning Readers (K–2)", "Bilingual & ESL"],
    theme: ["Humor, Mystery & Adventure", "Bedtime, Faith & Family"],
    format: ["Paperback", "Ebook"],
    ages: "3–8",
    grades: "PreK–2",
    language: "English & Spanish (Bilingual)",
    isbn: "978-1940056012",
    price: 11.99,
    description: "Curious sounds echo in the dark! Young readers follow clues to identify household sounds, overcoming bedtime fear with humor and bilingual phonics practice.",
    educationalBenefits: [
      "Auditory discrimination and phonics awareness",
      "Dual-language bedtime comfort and family discussion",
      "High-frequency sight words in English & Spanish"
    ],
    reviews: [
      { quote: "Suspenseful without getting too intense for early readers.", source: "Kirkus Reviews" }
    ],
    lexileLevel: "390L",
    arLevel: "2.1",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/1940056012"
  },
  {
    id: "wilcox-and-griswold-mystery",
    title: "The Case of the Missing Carrot Cake",
    subtitle: "A Wilcox & Griswold Mystery Series (Book 1)",
    author: "Karl Beckstrand",
    illustrator: "Grant White",
    coverImage: "/images/wilcox_books_cover.jpg",
    readerLevel: ["Chapter Books & YA (Ages 7–14)", "Elementary (Grades 3–5)"],
    theme: ["Humor, Mystery & Adventure", "Character, Career & Life Skills"],
    format: ["Hardcover", "Paperback", "Bundles & Series"],
    ages: "7–12",
    grades: "2–6",
    language: "English",
    isbn: "978-0985398804",
    price: 14.99,
    description: "Detectives Wilcox and Griswold (MFD - Mouse Farm Detectives) investigate the mysterious disappearance of Miss Fuzzytop’s famous carrot cake. Packed with deadpan humor, detective jargon, and farmyard twists.",
    educationalBenefits: [
      "Deductive reasoning and evidence analysis",
      "Enriched vocabulary (detective and legal terminology explained in context)",
      "Great bridge book from picture books to early chapter books"
    ],
    reviews: [
      { quote: "Charming... full of polish and physical comedy.", source: "Publisher’s Weekly" },
      { quote: "A snappy, fun mystery that reluctant readers will devour.", source: "Booklist" }
    ],
    lexileLevel: "610L",
    arLevel: "3.7",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/0985398804"
  },
  {
    id: "great-cape-o-colors",
    title: "Great Cape o' Colors – Capa de colores",
    subtitle: "A Story About Finding Our Unique Talents & Careers",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/cape_cov_engl_cover.jpg",
    readerLevel: ["Beginning Readers (K–2)", "Elementary (Grades 3–5)", "Bilingual & ESL"],
    theme: ["Character, Career & Life Skills", "History, Culture & Biography"],
    format: ["Paperback", "Hardcover"],
    ages: "5–10",
    grades: "K–4",
    language: "English & Spanish (Bilingual)",
    isbn: "978-0985398811",
    price: 12.99,
    description: "Children explore diverse community careers and celebrate how everyone possesses a unique 'cape' of talents. Printed in a certified dyslexic-friendly typeface.",
    educationalBenefits: [
      "Career awareness and community roles",
      "Dyslexic-friendly typography for accessible reading",
      "Social-emotional development & self-worth validation"
    ],
    reviews: [
      { quote: "Empowering career exploration for young learners.", source: "Midwest Book Review" }
    ],
    lexileLevel: "AD520L",
    arLevel: "3.1",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/0985398811"
  },
  {
    id: "bridge-of-the-golden-wood",
    title: "The Bridge of the Golden Wood",
    subtitle: "A Parable on How to Earn a Living & Financial Literacy",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/best_kids_books.jpg",
    readerLevel: ["Elementary (Grades 3–5)", "Chapter Books & YA (Ages 7–14)"],
    theme: ["Character, Career & Life Skills", "STEM, Nature & Food"],
    format: ["Paperback", "Ebook"],
    ages: "7–14",
    grades: "2–8",
    language: "English",
    isbn: "978-1940056234",
    price: 13.99,
    description: "An engaging financial literacy story for kids that illustrates trade, value creation, problem-solving, and community cooperation through a timeless parable.",
    educationalBenefits: [
      "Financial literacy & basic economics for elementary/middle school",
      "Critical thinking on resource allocation",
      "STEM engineering & bridge construction concepts"
    ],
    reviews: [
      { quote: "An essential financial literacy story for classrooms.", source: "Children's Book Review" }
    ],
    lexileLevel: "680L",
    arLevel: "4.2",
    teachingGuideUrl: "/stem-literacy-units",
    amazonUrl: "https://www.amazon.com/dp/1940056234"
  },
  {
    id: "agnes-rescue-immigrant-story",
    title: "Agnes's Rescue",
    subtitle: "Young American Immigrants Series (True Historical Story)",
    author: "Karl Beckstrand",
    illustrator: "Sandra De la Torre",
    coverImage: "/images/immigrant_kids_cover.jpg",
    readerLevel: ["Chapter Books & YA (Ages 7–14)", "Elementary (Grades 3–5)"],
    theme: ["History, Culture & Biography", "Character, Career & Life Skills"],
    format: ["Paperback", "Ebook"],
    ages: "8–14",
    grades: "3–8",
    language: "English",
    isbn: "978-1940056081",
    price: 10.99,
    description: "Based on historical accounts, follows young Agnes as her family travels across oceans and plains to build a new life in 19th-century America. Inspires resilience and empathy.",
    educationalBenefits: [
      "Primary source history & US immigration studies",
      "Geography and historical map work",
      "Character resilience and historical perspective"
    ],
    reviews: [
      { quote: "Heartwarming and historically grounded.", source: "School Library Journal" }
    ],
    lexileLevel: "720L",
    arLevel: "4.5",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/1940056081"
  },
  {
    id: "true-pet-stories-4-book-set",
    title: "True Pet & Animal Rescue Stories (4-Book Set)",
    subtitle: "Inspirational Real Animal Adventures",
    author: "Karl Beckstrand",
    illustrator: "Various Artists",
    coverImage: "/images/true_pet_stories_cover.jpg",
    readerLevel: ["Elementary (Grades 3–5)", "Chapter Books & YA (Ages 7–14)"],
    theme: ["STEM, Nature & Food", "Character, Career & Life Skills", "Humor, Mystery & Adventure"],
    format: ["Bundles & Series", "Paperback"],
    ages: "6–12",
    grades: "1–6",
    language: "English",
    isbn: "978-1940056456",
    price: 34.99,
    description: "Complete 4-book collection of true stories featuring courageous dogs, resilient pets, and animal rescue journeys. Captivates reluctant readers with real-world heart.",
    educationalBenefits: [
      "Empathy building and animal welfare education",
      "High interest reading for reluctant readers",
      "Nonfiction narrative comprehension"
    ],
    reviews: [
      { quote: "Every classroom library needs these uplifting pet stories.", source: "Elementary Educator Review" }
    ],
    lexileLevel: "580L-650L",
    arLevel: "3.5",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/1940056456"
  },
  {
    id: "spanish-tongue-twisters",
    title: "Spanish Tongue Twisters – Trabalenguas divertidos",
    subtitle: "Fun Bilingual Pronunciation & Phonics Guide",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/tongue_twist_cover.jpg",
    readerLevel: ["Beginning Readers (K–2)", "Bilingual & ESL"],
    theme: ["Humor, Mystery & Adventure", "Character, Career & Life Skills"],
    format: ["Paperback", "Ebook"],
    ages: "5–10",
    grades: "K–4",
    language: "English & Spanish (Bilingual)",
    isbn: "978-1940056333",
    price: 9.99,
    description: "A lively collection of traditional and original Spanish tongue twisters paired with English translations and pronunciation hints for dual-language classrooms.",
    educationalBenefits: [
      "Spanish articulation and phonemic awareness",
      "Fun read-aloud fluency practice",
      "Ideal for ESL and Spanish immersion programs"
    ],
    reviews: [
      { quote: "A riotous accent and speech helper that kids love.", source: "Bilingual Classroom Digest" }
    ],
    lexileLevel: "410L",
    arLevel: "2.5",
    teachingGuideUrl: "/learning-resources",
    amazonUrl: "https://www.amazon.com/dp/1940056333"
  },
  {
    id: "ma-macdonald-bedtime-favorites",
    title: "Ma MacDonald Flees the Farm & Bedtime Stories",
    subtitle: "Rhyming Humorous Read-Aloud Tales",
    author: "Karl Beckstrand",
    illustrator: "Sandra De la Torre",
    coverImage: "/images/bedtime_books_cover.jpg",
    readerLevel: ["Beginning Readers (K–2)"],
    theme: ["Bedtime, Faith & Family", "Humor, Mystery & Adventure"],
    format: ["Hardcover", "Paperback"],
    ages: "3–7",
    grades: "PreK–2",
    language: "English",
    isbn: "978-0985398842",
    price: 12.99,
    description: "When the farm chores get too wild, Ma MacDonald goes on a hilarious vacation! A rhythmic, laughter-filled bedtime read-aloud.",
    educationalBenefits: [
      "Rhyme schemes and cadence recognition",
      "Predictable text structure for early decoders",
      "Humor-driven engagement for bedtime routines"
    ],
    reviews: [
      { quote: "Bright, punchy, and wildly entertaining.", source: "Publisher's Weekly" }
    ],
    lexileLevel: "AD450L",
    arLevel: "2.4",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/0985398842"
  },
  {
    id: "gopher-golf-wordless-adventure",
    title: "Gopher Golf & Butterfly Blink (Wordless Books)",
    subtitle: "Visual Storytelling & Creative Writing Prompts",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/hidden_pictures_cover.jpg",
    readerLevel: ["Beginning Readers (K–2)", "Bilingual & ESL"],
    theme: ["Humor, Mystery & Adventure", "STEM, Nature & Food"],
    format: ["Paperback", "Ebook"],
    ages: "3–8",
    grades: "PreK–2",
    language: "Wordless / Universal",
    isbn: "978-1940056159",
    price: 10.99,
    description: "Rich wordless picture book following a cheeky gopher on a golf course. Prompts children to invent their own dialogue and narrative sequence.",
    educationalBenefits: [
      "Oral language formulation without text pressure",
      "Sequential thinking and story mapping",
      "Universal access for non-English background students"
    ],
    reviews: [
      { quote: "Brilliant visual narrative for early creative writing.", source: "Literacy Today" }
    ],
    lexileLevel: "NP (Wordless)",
    arLevel: "1.5",
    teachingGuideUrl: "/teaching-guides",
    amazonUrl: "https://www.amazon.com/dp/1940056159"
  },
  {
    id: "bright-star-night-star-free-ebook",
    title: "Bright Star, Night Star: An Astronomy Story",
    subtitle: "Free Ebook Edition for Educators & Families",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/all_covers_hero.jpg",
    readerLevel: ["Beginning Readers (K–2)", "Elementary (Grades 3–5)"],
    theme: ["STEM, Nature & Food", "Bedtime, Faith & Family"],
    format: ["Free Ebooks", "Ebook"],
    ages: "4–9",
    grades: "K–3",
    language: "English",
    isbn: "978-1940056609",
    price: 0.00,
    isFree: true,
    description: "A gentle bedtime introduction to the cosmos, stars, and night sky observation. Available free in digital format for school and home libraries.",
    educationalBenefits: [
      "Elementary astronomy & night sky science",
      "Observational curiosity & bedtime calm",
      "Free digital classroom resource"
    ],
    reviews: [
      { quote: "A poetic invitation to stare up at the stars.", source: "Astronomy for Kids Journal" }
    ],
    lexileLevel: "460L",
    arLevel: "2.6",
    teachingGuideUrl: "/free-childrens-books",
    amazonUrl: "https://kidsworldbooks.com/free-childrens-books"
  },
  {
    id: "garden-books-nature-unit",
    title: "11 Garden & Nature Literacy Units for Kids",
    subtitle: "Hands-on Science & Recipe Activity Guide",
    author: "Karl Beckstrand",
    illustrator: "Zeyu Chen",
    coverImage: "/images/garden_books_pin.jpg",
    readerLevel: ["Elementary (Grades 3–5)", "Chapter Books & YA (Ages 7–14)"],
    theme: ["STEM, Nature & Food", "Character, Career & Life Skills"],
    format: ["Paperback", "Bundles & Series"],
    ages: "6–12",
    grades: "1–6",
    language: "English",
    isbn: "978-1940056500",
    price: 15.99,
    description: "Combines plant life cycles, garden ecology, simple healthy kid recipes, and vocabulary exercises into ready-to-teach mini units.",
    educationalBenefits: [
      "NGSS Aligned STEM Life Science integration",
      "Healthy nutrition and kid-friendly kitchen math",
      "Cross-curricular reading comprehension"
    ],
    reviews: [
      { quote: "Saves teachers hours of prep work with high-quality activity sheets.", source: "National Science Teacher Guild" }
    ],
    lexileLevel: "600L",
    arLevel: "3.8",
    teachingGuideUrl: "/stem-literacy-units",
    amazonUrl: "https://www.amazon.com/dp/1940056500"
  }
];
