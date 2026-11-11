export interface Book {
  id: string;
  commerceId?: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  author: string;
  illustrator?: string;
  coverImage: string;
  readerLevel: string[]; // "Beginning Readers (K–2)", "Elementary (Grades 3–5)", "Chapter Books & YA (Ages 7–14)", "Bilingual & ESL"
  theme: string[]; // "Character, Career & Life Skills", "History, Culture & Biography", "STEM, Nature & Food", "Humor, Mystery & Adventure", "Bedtime, Faith & Family"
  format: string[]; // "Hardcover", "Paperback", "Ebook", "Bundles & Series", "Free Ebooks", "Lesson Plans & Curricula"
  ages: string;
  grades: string;
  language: string;
  isbn: string;
  price: number;
  priceMax?: number | null;
  originalPrice?: number | null;
  isFree?: boolean;
  description: string;
  educationalBenefits: string[];
  reviews?: { quote: string; source: string }[];
  storeUrl: string; // Direct link to complete purchase on https://kidsworldbooks.com/buy-books?product=<UUID>
  ebookStoreUrl?: string | null;
  lessonPlanStoreUrl?: string | null;
  teachingGuideUrl?: string;
  linkedPages?: string[];
}

export const BOOKS_DATA: Book[] = [
  {
    "id": "4-activity-books-for-kids",
    "commerceId": "01967da4-e70e-7551-9c51-2c25c468257b",
    "slug": "4-activity-books-for-kids",
    "title": "4 Activity Books for Kids",
    "subtitle": "Interactive Adventures That Spark Curiosity (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-activity-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Four unforgettable stories. A world of discovery. Plant a garden. Cook together. Dress up for exciting careers. Reach for the stars. This all-in-one collection of interactive picture books transforms story time into a voyage that inspires wonder, conversation, and creativity. Inside you'll enjoy: GROW: How We Get Food from Our Garden\n   Great Cape o\u2019 Colors: Career Costumes for Kids\n   Bad Bananas: A Story...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967da4-e70e-7551-9c51-2c25c468257b",
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
    "commerceId": "01967da1-4fa1-7999-ae22-69b2b7ce6e42",
    "slug": "4-multicultural-bedtime-stories",
    "title": "4 Bedtime Stories for Wide-Awake Kids",
    "subtitle": "Stories That Spark Wonder, Calm & Conversation (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-multicultural-bedtime-stories.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967da1-4fa1-7999-ae22-69b2b7ce6e42",
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
    "id": "4-career-books-for-kids",
    "commerceId": "01969373-7694-7aa4-a82c-f2c2a90fd2a2",
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
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
    "originalPrice": 33.99,
    "isFree": false,
    "description": "Big dreams begin with great interactive stories. This all-in-one volume of four award-winning books helps children imagine what they can become while building literacy, confidence, and practical life skills. Meet an enterprising caterer. Dress up for exciting careers. Reach for the stars: The Bridge of the Golden Wood: A Parable on How to Earn a Living (selected for Vermont curriculum)\nGreat Cape o' Colors:...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01969373-7694-7aa4-a82c-f2c2a90fd2a2",
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
    "id": "4-food-books-for-families",
    "commerceId": "019b32b7-4727-788d-b3c3-c8563bf6a1a2",
    "slug": "4-food-books-for-families",
    "title": "4 Food Books for Families",
    "subtitle": "Gardening, Cooking & Story Adventures (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-food-books-for-families.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019b32b7-4727-788d-b3c3-c8563bf6a1a2",
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
    "id": "4-food-books",
    "commerceId": "01967d9d-d192-7551-9c2e-d240dadf1762",
    "slug": "4-food-books",
    "title": "4 Food Books for Kids",
    "subtitle": "With Recipes, Mysteries & Hidden-Picture Fun (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-food-books.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967d9d-d192-7551-9c2e-d240dadf1762",
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
    "id": "4-funny-mysteries-for-kids",
    "commerceId": "01951bba-78f3-7001-979f-1283333de1d5",
    "slug": "4-funny-mysteries-for-kids",
    "title": "4 Funny Mysteries for Kids",
    "subtitle": "Giggles, Goosebumps, Gross Ghosts & Grammar for Growing Goblins (SOFT, 2-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-funny-mysteries-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-78f3-7001-979f-1283333de1d5",
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
    "id": "4-hidden-picture-books-for-kids-food-bugs-and-finding-fun",
    "commerceId": "01969382-5bca-7ff2-9c53-3650d0b6ca0d",
    "slug": "4-hidden-picture-books-for-kids-food-bugs-and-finding-fun",
    "title": "4 Hidden Picture Books for Kids",
    "subtitle": "Search-and-Find & Family Fun (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-hidden-picture-books-for-kids-food-bugs-and-find.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20135",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1951599133",
    "price": 32.95,
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01969382-5bca-7ff2-9c53-3650d0b6ca0d",
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
    "commerceId": "019ed36d-8dfd-768e-9290-faf15cf0c643",
    "slug": "4-insect-books-for-kids",
    "title": "4 Insect Books for Kids",
    "subtitle": "Bugs, Blossoms & Backyard Adventures (SOFT, ages 2-8)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-insect-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019ed36d-8dfd-768e-9290-faf15cf0c643",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/literacy-units"
    ]
  },
  {
    "id": "4-stem-books-for-kids",
    "commerceId": "01967da8-4831-7dd6-9266-1b5847694893",
    "slug": "4-stem-books-for-kids",
    "title": "4 STEM Books for Kids",
    "subtitle": "Fun & Learning for Families (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-stem-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967da8-4831-7dd6-9266-1b5847694893",
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
    "id": "4-seasons-books-for-kids",
    "commerceId": "01973b7e-982b-7ff4-8a8f-b9745d69f562",
    "slug": "4-seasons-books-for-kids",
    "title": "4 Seasons Books for Kids",
    "subtitle": "A Wordless Collection for Beginning Readers (1-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-seasons-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 44.99,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01973b7e-982b-7ff4-8a8f-b9745d69f562",
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
    "id": "4-spanish-books-for-kids-4-libros-para-ninos",
    "commerceId": "01967dac-852a-7dd6-9277-1c9338434c63",
    "slug": "4-spanish-books-for-kids-4-libros-para-ninos",
    "title": "4 Spanish Books for Kids \u2013 4 libros para ni\u00f1os (w/pronunciation guide, 3-8 years)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-spanish-books-for-kids-4-libros-para-ninos.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 46.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967dac-852a-7dd6-9277-1c9338434c63",
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
    "id": "4-spanish-english-books-for-kids",
    "commerceId": "01967dae-2b98-7551-9c76-8cff366ce074",
    "slug": "4-spanish-english-books-for-kids",
    "title": "4 Spanish-English Books for Kids",
    "subtitle": "(bilingual with pronunciation guide, 3-8 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-spanish-english-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 49.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967dae-2b98-7551-9c76-8cff366ce074",
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
    "id": "4-sports-books-for-kids",
    "commerceId": "01967dab-4872-7dd6-9273-3ef96431d94d",
    "slug": "4-sports-books-for-kids",
    "title": "4 Sports Books for Kids",
    "subtitle": "Illustrated for Beginning Readers (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-sports-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967dab-4872-7dd6-9273-3ef96431d94d",
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
    "id": "4-stories-of-immigrant-kids",
    "commerceId": "01951bba-738a-7002-8fcd-b2637e22ac28",
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
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography"
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
    "priceMax": 46.95,
    "originalPrice": 34.99,
    "isFree": false,
    "description": "(Illustrated Biographies) Four ready-to-use geography and transportation lessons with built-in literacy. Discover adventures spanning sixty years\u2014telling the true stories of four children, each seeking a better life: Agnes\u2019s Rescue (1856 Scotland/Ireland) Ida\u2019s Witness (1888 Sweden) Anna\u2019s Prayer (1888 Sweden) Samuel Sailing (1916 South Africa) All touch on a universal desire: the yearning for family and the...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-738a-7002-8fcd-b2637e22ac28",
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
    "id": "4-tongue-twisters-for-tykes-animal-humor-for-kids",
    "commerceId": "0196937a-22c2-7aab-a2da-24e082fe1919",
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
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0196937a-22c2-7aab-a2da-24e082fe1919",
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
    "id": "4-toy-stories-for-kids-multicultural-fun",
    "commerceId": "019b2e17-b32c-7991-bfbe-8e93a14924a7",
    "slug": "4-toy-stories-for-kids-multicultural-fun",
    "title": "4 Toy Stories for Kids",
    "subtitle": "Multicultural Fun (SOFT)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-toy-stories-for-kids-multicultural-fun.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019b2e17-b32c-7991-bfbe-8e93a14924a7",
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
    "id": "4-wild-animal-books-for-kids-getting-along-outside-the-zoo",
    "commerceId": "0196938b-65e2-7ff4-9949-5faf803de306",
    "slug": "4-wild-animal-books-for-kids-getting-along-outside-the-zoo",
    "title": "4 Wild Animal Books for Kids",
    "subtitle": "Getting Along Outside the Zoo (SOFT. Ages 3-9)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-wild-animal-books-for-kids-getting-along-outside.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0196938b-65e2-7ff4-9949-5faf803de306",
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
    "id": "5-essential-steps-in-learning-to-read-in-english-spanish",
    "commerceId": "019d632a-3a63-758e-ae6f-45af5910ed16",
    "slug": "5-essential-steps-in-learning-to-read-in-english-spanish",
    "title": "5 Essential Steps in Learning to Read (in English & Spanish)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/5-essential-steps-in-learning-to-read-in-english-s.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
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
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "(Lesson Plans, literacy) Children can learn to read in 90 days\u2014and your role as teacher will be a breeze. Children love learning through multi-sensory games and activities. Includes 100+ worksheets by Shirley Gaither and Connie Hendricks. Ages 3 \u2013 8 (Preschool \u2013 third grade). Bilingual (also in English-only. Procesos Graficos \u00a9 2006). 225 pages, 10.75\u201d x 8.5\u201d, Soft cover; LAN010000, FOR007000, EDU029020, ISBN:...",
    "educationalBenefits": [
      "Parallel Spanish\u2013English text & pronunciation support for ESL/ELL and dual-language classrooms",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-3a63-758e-ae6f-45af5910ed16",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "a-sky-so-big-a-romantic-adventure",
    "commerceId": "019d6327-3f9d-70ca-b2d5-ade19ed7b596",
    "slug": "a-sky-so-big-a-romantic-adventure",
    "title": "A Sky So Big",
    "subtitle": "A Romantic Adventure (ages 14+)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/a-sky-so-big-a-romantic-adventure.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-3f9d-70ca-b2d5-ade19ed7b596",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-ded2-700b-88ef-a53bf8720c4d",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/childrens-holiday-books"
    ]
  },
  {
    "id": "agness-rescue-biography-of-an-immigrant-girl",
    "commerceId": "019cb585-67c9-703a-ac20-242f8eaee2ad",
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
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.85,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019cb585-67c9-703a-ac20-242f8eaee2ad",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019ce37c-e752-7566-9b59-73d5111854bd",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-00cf-74e7-a06f-3e8e6d47cb63",
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
    "id": "agness-rescue-ebook",
    "commerceId": "019ce37c-e752-7566-9b59-73d5111854bd",
    "slug": "agness-rescue-ebook",
    "title": "Agnes's Rescue",
    "subtitle": "The True Story of an Immigrant Girl (free ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/agness-rescue-ebook.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019ce37c-e752-7566-9b59-73d5111854bd",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "annas-prayer-the-true-story-of-an-immigrant-girl",
    "commerceId": "01951bb9-fd4a-7001-ac6c-99b67d73c470",
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
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography"
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
    "priceMax": 16.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Discover the 1880\u2019s tale of Anna Anderson, a child living in Sweden with her mother and her sister, Ida. Though happy, the family is poor. Unable to afford passage herself, Anna\u2019s mother puts the girls on a boat to the United States, hoping they will have a better life without her. Because Ida has work in Idaho, the sisters separate and young Anna continues by train to meet an aunt in another state. Little Anna...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-fd4a-7001-ac6c-99b67d73c470",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-7be1-710b-8d4d-01ca0719ebd2",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-5fe2-70ae-a6c2-075315f2ed7b",
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
    "id": "arriba-up-abajo-down-at-the-boardwalk-a-picture-book-of-opposites",
    "commerceId": "01959af6-a150-722b-a5fb-8aec3c643470",
    "slug": "arriba-up-abajo-down-at-the-boardwalk-a-picture-book-of-opposites",
    "title": "Arriba Up, Abajo Down at the Boardwalk",
    "subtitle": "A Picture Book of Opposites (Bilingual, 2-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-up-abajo-down-at-the-boardwalk-a-picture-bo.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01959af6-a150-722b-a5fb-8aec3c643470",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f683-72be-8c12-6684fef60a55",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=0195ca04-ef52-7ff9-96a8-addc1a7543d5",
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
    "id": "arriba-abajo-en-la-playa-spanish",
    "commerceId": "0195d37d-da9d-7888-926a-d1a6ac78fd0a",
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
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0195d37d-da9d-7888-926a-d1a6ac78fd0a",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-1a57-71e9-b1e7-acdc0a0d0d9c",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "bad-bananas-a-story-cookbook-for-kids-recipes",
    "commerceId": "019cbae4-2a6e-7035-8d89-26d6ee251338",
    "slug": "bad-bananas-a-story-cookbook-for-kids-recipes",
    "title": "Bad Bananas",
    "subtitle": "A Story Cookbook for Kids (ages 4-10)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bad-bananas-a-story-cookbook-for-kids-recipes.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.75,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019cbae4-2a6e-7035-8d89-26d6ee251338",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=0194bdf8-05b2-744d-a854-6587eade5b67",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7388-73ba-80af-3baf09bfed34",
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
    "id": "big-black-seed-a-book-with-no-words",
    "commerceId": "01959afd-2fd5-722b-a617-eeba6bda2d08",
    "slug": "big-black-seed-a-book-with-no-words",
    "title": "Big Black Seed",
    "subtitle": "A Book with No Words (soft/hard, 1-5 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/big-black-seed-a-book-with-no-words.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback",
      "Hardcover"
    ],
    "ages": "Ages 1 \u2013 5",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599249",
    "price": 11.95,
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01959afd-2fd5-722b-a617-eeba6bda2d08",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-01f8-725e-8067-573df6e13077",
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
    "id": "great-cape-o-colors-capa-de-colores",
    "commerceId": "019d0c65-d9ba-73f6-b38e-cec839eb2fba",
    "slug": "great-cape-o-colors-capa-de-colores",
    "title": "Bilingual book",
    "subtitle": "Great Cape o' Colors / Capa de colores (English-Spanish w/pronunciation 3-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/great-cape-o-colors-capa-de-colores.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d0c65-d9ba-73f6-b38e-cec839eb2fba",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d0c67-bf6e-74aa-86c3-dadcaba31221",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-f6ec-7595-be79-ed7f0ea992a5",
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
    "id": "boliche-polar-un-cuento-sin-palabras",
    "commerceId": "019d632a-5406-764b-affe-982cf9027d44",
    "slug": "boliche-polar-un-cuento-sin-palabras",
    "title": "Boliche polar",
    "subtitle": "Un cuento sin palabras (Wordless picture book, Hard/Soft, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/boliche-polar-un-cuento-sin-palabras.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback",
      "Hardcover"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-1951599065",
    "price": 11.95,
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-5406-764b-affe-982cf9027d44",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-4af6-70ef-9398-7539c4d7c013",
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
    "id": "bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living",
    "commerceId": "019d0cf6-347e-743c-ae94-5cc5a98b932f",
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
      "Bedtime, Faith & Family",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d0cf6-347e-743c-ae94-5cc5a98b932f",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d0cf7-2452-706c-91b3-6a60bc2b618c",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=0195025a-6dfc-7eee-90ca-f66655d5a144",
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
    "id": "bright-star-night-star-an-astronomy-story",
    "commerceId": "019cbb21-e07e-730f-bd8d-e850a2f8de83",
    "slug": "bright-star-night-star-an-astronomy-story",
    "title": "Bright Star, Night Star",
    "subtitle": "An Astronomy Story (ages 4-9)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bright-star-night-star-an-astronomy-story.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019cbb21-e07e-730f-bd8d-e850a2f8de83",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-7ecb-76cf-9174-dae108544116",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-9d02-74f3-9fcf-70123c57beb4",
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
    "id": "butterfly-blink-a-book-without-words",
    "commerceId": "019cb58f-a76e-76ba-8cd4-5d0d6d13d77b",
    "slug": "butterfly-blink-a-book-without-words",
    "title": "Butterfly Blink! A Book Without Words (Hard/Soft, ages 2-6)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/butterfly-blink-a-book-without-words.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback",
      "Hardcover"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599010",
    "price": 11.95,
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019cb58f-a76e-76ba-8cd4-5d0d6d13d77b",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d1bcb-46bc-7022-a600-96667267c42d",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f61d-711e-97b5-fd0957b55ccc",
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
    "id": "capa-de-colores-spanish",
    "commerceId": "019d632c-4745-757d-9a40-3cc705a1fe5e",
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
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.99,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4745-757d-9a40-3cc705a1fe5e",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-53e7-774d-bf13-56f61ebe09d3",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery",
    "commerceId": "01967d9b-d0a0-7dd6-9234-fb282059d349",
    "slug": "crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery",
    "title": "Crumbs on the Stairs - Migas en las escaleras",
    "subtitle": "A Mystery (English-Spanish pronunciation guide, 2-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/crumbs-on-the-stairs-migas-en-las-escaleras-a-myst.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967d9b-d0a0-7dd6-9234-fb282059d349",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-520a-74ef-8c8c-25efece7cb1d",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=01967da2-aafb-7ff9-8bc2-c02a4b20d7df",
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
    "id": "de-la-silla-de-ivan-salio",
    "commerceId": "01951bb9-01f9-7001-96a0-6fb070da8bb9",
    "slug": "de-la-silla-de-ivan-salio",
    "title": "De la silla de Iv\u00e1n, Sali\u00f3\u2026 Un misterio (Spanish picture book of prepositions, ages 4-8)",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/de-la-silla-de-ivan-salio.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-01f9-7001-96a0-6fb070da8bb9",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-8ee8-776c-b4f6-1f8482428d20",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "ella-no-quiere-los-gusanos-un-misterio-spanish",
    "commerceId": "019d6327-813d-736a-8e83-b225bf3b926e",
    "slug": "ella-no-quiere-los-gusanos-un-misterio-spanish",
    "title": "Ella no quiere los gusanos",
    "subtitle": "Un misterio (Spanish with pronunciation guide in English, 3-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ella-no-quiere-los-gusanos-un-misterio-spanish.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-813d-736a-8e83-b225bf3b926e",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4d76-73c9-8593-71402f18a961",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "fables-and-folk-tales-for-kids",
    "commerceId": "019d632d-f86e-72bd-b482-e4bf89360255",
    "slug": "fables-and-folk-tales-for-kids",
    "title": "Fables & Folk Tales for Kids",
    "subtitle": "BUNDLE",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/fables-and-folk-tales-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback"
    ],
    "ages": "Ages 2 \u2013 8",
    "grades": "Grades PreK\u20133",
    "language": "English",
    "isbn": "Verified Direct Store Edition",
    "price": 36.95,
    "priceMax": 59.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Fables & Folktales for Kids Sometimes we just need a good legend, myth, fairy tale, or nursery rhyme (it doesn\u2019t hurt if you laugh or learn something too)! Includes It Came from Under the High Chair: A Mystery (learn prepositions); The Bridge of the Golden Wood: A Parable on How to Earn a Living; The Dancing Flamingos of Lake Chimichanga (learn music styles/dances and foods); Ma MacDonald Flees the Farm (learn...",
    "educationalBenefits": [
      "Hands-on STEM, nature observation, or healthy family recipe extensions",
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f86e-72bd-b482-e4bf89360255",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "grow-how-we-get-food-from-our-garden",
    "commerceId": "019cbffd-0751-76f4-b362-bdc82fef1693",
    "slug": "grow-how-we-get-food-from-our-garden",
    "title": "GROW",
    "subtitle": "How We Get Food from Our Garden (ages 4-7)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/grow-how-we-get-food-from-our-garden.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019cbffd-0751-76f4-b362-bdc82fef1693",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-67ae-70d0-baa6-812a4689d40a",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-989e-7154-bab3-0072fb1c65b7",
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
    "id": "gopher-golf-a-wordless-picture-book",
    "commerceId": "019c90ec-a3b7-777c-a2c0-4b1f853f3116",
    "slug": "gopher-golf-a-wordless-picture-book",
    "title": "Gopher Golf",
    "subtitle": "A Wordless Picture Book (Hard/Soft, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/gopher-golf-a-wordless-picture-book.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback",
      "Ebook"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "978-1951599096",
    "price": 11.95,
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019c90ec-a3b7-777c-a2c0-4b1f853f3116",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-8e43-771f-a695-699f2bf3a89f",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7aaf-7272-9de8-0dfdc9678048",
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
    "id": "great-cape-o-colors-a-careers-coloring-book",
    "commerceId": "0195025a-49a0-7eee-90ca-787e7519cee8",
    "slug": "great-cape-o-colors-a-careers-coloring-book",
    "title": "Great Cape o' Colors",
    "subtitle": "A Careers Coloring Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/great-cape-o-colors-a-careers-coloring-book.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0195025a-49a0-7eee-90ca-787e7519cee8",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "horse-dog-adventures-in-early-california-short-stories-poems",
    "commerceId": "019d6327-4ded-7314-ae31-09fdf08cb6a0",
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
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-4ded-7314-ae31-09fdf08cb6a0",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-0b56-7001-abff-a773344be618",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-09d1-74c0-98f4-31ee1060b1f6",
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
    "id": "idas-witness-the-true-story-of-an-immigrant-girl-nonfiction",
    "commerceId": "019d632a-4c8b-71fe-84d7-5dd8a6c6084e",
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
      "Bedtime, Faith & Family",
      "Character, Career & Life Skills",
      "History, Culture & Biography"
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
    "priceMax": 16.95,
    "originalPrice": 12.99,
    "isFree": false,
    "description": "When young Ida contracts scarlet fever in 1880s Sweden, she nearly loses her sight. After another brush with death, Ida learns that life doesn\u2019t end, disease is finite, and small miracles happen every day. With new faith, Ida leaves her mother and brother and sails with her sister to America for a better life\u2014free from poverty and persecution. But she knows no English. How will she share what she\u2019s learned in...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Authentic multicultural representation and real-world historical perspective",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-4c8b-71fe-84d7-5dd8a6c6084e",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4bfb-7799-a6ff-bbe42a6686d8",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-5fe2-70ae-a6c2-075315f2ed7b",
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
    "id": "it-came-from-under-the-high-chair-bilingual",
    "commerceId": "01951bb9-8492-7001-98b0-875f27de7e53",
    "slug": "it-came-from-under-the-high-chair-bilingual",
    "title": "It Came from Under the High Chair/Sali\u00f3 de debajo de la silla para comer",
    "subtitle": "Mystery in English & Spanish (4-9 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/it-came-from-under-the-high-chair-bilingual.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-8492-7001-98b0-875f27de7e53",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-5903-72db-ba33-e990c91c5a25",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-f313-762b-8553-b422f5c50b85",
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
    "id": "laughter-laughter-now-and-after",
    "commerceId": "019d6328-b458-73b3-bdee-a806dd25a8ce",
    "slug": "laughter-laughter-now-and-after",
    "title": "Laughter, Laughter\u2014Now & After! The Multicultural Book Covers of Karl Beckstrand",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/laughter-laughter-now-and-after.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-b458-73b3-bdee-a806dd25a8ce",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/online-story-secrets"
    ]
  },
  {
    "id": "ma-macdonald-flees-the-farm-its-not-a-pretty-picture",
    "commerceId": "01951bba-8232-7001-98ff-a718f4d6b357",
    "slug": "ma-macdonald-flees-the-farm-its-not-a-pretty-picture",
    "title": "Ma MacDonald Flees the Farm",
    "subtitle": "It's Not a Pretty Picture ... Book (animals, 4-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ma-macdonald-flees-the-farm-its-not-a-pretty-pictu.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-8232-7001-98ff-a718f4d6b357",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-4838-726f-b681-af15dda40550",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-6d11-7379-9eb3-7eb76c610d27",
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
    "id": "migas-en-las-escaleras-un-misterio-spanish",
    "commerceId": "01967da6-ead5-7551-9c56-ebdf0442f5ed",
    "slug": "migas-en-las-escaleras-un-misterio-spanish",
    "title": "Migas en las escaleras",
    "subtitle": "Un misterio (Spanish w/English pronunciation guide, 2-6 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/migas-en-las-escaleras-un-misterio-spanish.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967da6-ead5-7551-9c56-ebdf0442f5ed",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d3076-5d71-73d0-8e6f-8cff3268fb6d",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "muffy-and-valor-a-true-dog-story",
    "commerceId": "01951bb9-7a25-7001-ad8c-a569bb72577f",
    "slug": "muffy-and-valor-a-true-dog-story",
    "title": "Muffy & Valor",
    "subtitle": "A True Dog Story (picture book, ages 5-8)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/muffy-and-valor-a-true-dog-story.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-7a25-7001-ad8c-a569bb72577f",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-8442-7332-b31a-29396ddcbe9f",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-edab-7002-8508-4a1a143b3a41",
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
    "id": "pet-books-for-kids",
    "commerceId": "019d632c-5d9e-743a-8b5d-6954466ddc68",
    "slug": "pet-books-for-kids",
    "title": "Pet Books for Kids",
    "subtitle": "BUNDLE",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/pet-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Hardcover",
      "Paperback"
    ],
    "ages": "Ages 3 \u2013 10",
    "grades": "Grades PreK\u20133",
    "language": "Wordless / Universal Visual Narrative",
    "isbn": "Verified Direct Store Edition",
    "price": 54.95,
    "priceMax": 89.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-5d9e-743a-8b5d-6954466ddc68",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "polar-bear-bowler-a-story-without-words",
    "commerceId": "019d632c-57ef-71b8-861a-adc52cf9c1be",
    "slug": "polar-bear-bowler-a-story-without-words",
    "title": "Polar Bear Bowler",
    "subtitle": "A Story Without Words (Hard/Soft, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/polar-bear-bowler-a-story-without-words.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Paperback",
      "Hardcover"
    ],
    "ages": "Ages 2\u20136",
    "grades": "Grades PreK\u20133",
    "language": "Wordless (Bilingual Title/Notes)",
    "isbn": "978-0985398835",
    "price": 11.95,
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-57ef-71b8-861a-adc52cf9c1be",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-1056-703c-bc71-a6f9188407f5",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f22f-71af-92de-446ed2b70c13",
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/reluctant-reader-books",
      "/animal-books-kids",
      "/vocab-books-kids",
      "/wordless-picture-books"
    ]
  },
  {
    "id": "ruidos-en-la-casa-un-misterio",
    "commerceId": "01951bba-7b3f-7001-9738-7a2118e6e8cd",
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
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-7b3f-7001-9738-7a2118e6e8cd",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-42f3-7586-a5a6-2a028353c3f5",
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": [
      "/bilingual-books-spanish"
    ]
  },
  {
    "id": "samuel-sailing-the-true-story-of-an-immigrant-boy",
    "commerceId": "01951bba-f31d-7001-ae01-00c167a03c08",
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
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-f31d-7001-ae01-00c167a03c08",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-6232-7351-9d9f-98f91288fb7f",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-4916-763a-9d00-6c08d15d0ac1",
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
    "id": "she-doesnt-want-the-worms-ella-no-quiere-los-gusanos",
    "commerceId": "019ce813-7df4-72ca-82a6-7b24960b2e7e",
    "slug": "she-doesnt-want-the-worms-ella-no-quiere-los-gusanos",
    "title": "She Doesn't Want the Worms - Ella no quiere los gusanos",
    "subtitle": "A Mystery in English & Spanish (3-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/she-doesnt-want-the-worms-ella-no-quiere-los-gusan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "price": 12.95,
    "priceMax": 15.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019ce813-7df4-72ca-82a6-7b24960b2e7e",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-61a2-744e-81cb-7dd3d182eaaa",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-ec72-7018-a320-ede4f7dd0cad",
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
    "id": "sounds-in-the-house-sonidos-en-la-casa-a-mystery-in-english-spanish",
    "commerceId": "01951bb9-90d5-7002-8496-c283fa0b01a0",
    "slug": "sounds-in-the-house-sonidos-en-la-casa-a-mystery-in-english-spanish",
    "title": "Sounds in the House - Sonidos en la casa",
    "subtitle": "A Mystery (Spanish & English pronunciation guide, 2-8 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/sounds-in-the-house-sonidos-en-la-casa-a-mystery-i.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-90d5-7002-8496-c283fa0b01a0",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-ebb3-7566-85fa-a4bea76f5d0f",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7f30-700d-bdb9-e4b5129a1fb7",
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
    "id": "spanish-bundle",
    "commerceId": "019d632e-147d-75cd-ac6d-9ac202c23364",
    "slug": "spanish-bundle",
    "title": "Spanish Books for Kids (with pronunciation guide in English) BUNDLE",
    "subtitle": "Human-Created Multicultural Children's Book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/spanish-bundle.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 89.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-147d-75cd-ac6d-9ac202c23364",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-dancing-flamingos-of-lake-chimichanga",
    "commerceId": "019cba6f-f9a5-75cf-985f-ec6a219a944f",
    "slug": "the-dancing-flamingos-of-lake-chimichanga",
    "title": "The Dancing Flamingos of Lake Chimichanga",
    "subtitle": "Silly Birds (3-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-dancing-flamingos-of-lake-chimichanga.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019cba6f-f9a5-75cf-985f-ec6a219a944f",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d404f-e231-7458-a45a-7dae8335d2c6",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-854d-777a-9f17-c002cfaac6a5",
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
    "id": "the-mystery-of-the-grinning-buddha",
    "commerceId": "019d6327-5b6a-7786-8755-20f41ecd5134",
    "slug": "the-mystery-of-the-grinning-buddha",
    "title": "The Mystery of the Grinning Buddha (Millerville Mysteries",
    "subtitle": "Book I, 8-12 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-mystery-of-the-grinning-buddha.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills"
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
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "The Mystery of the Grinning Buddha (Middle grade) After 10-year-old Mike\u2019s mother is sick and confined to bed his Aunt Thelma arrives, takes over the kids and the house, and seems to be searching for something. Mike must discover what she is looking for and why his mother doesn\u2019t seem to be getting better. For ages 6 - 8, (grades K \u2013 3). 31,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics);...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-5b6a-7786-8755-20f41ecd5134",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-mystery-of-the-haunted-lighthouse",
    "commerceId": "019d632d-be25-771c-a2ec-480e8a2e403a",
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
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills"
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
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "The Mystery of the Haunted Lighthouse (Middle grade) Jennifer Miller and her cousin, Nicalee, are ten years old. They hope that Jennifer\u2019s father, who has been missing at sea for weeks, is still alive. They follow clues they believe have been left by Jennifer\u2019s father in anticipation of finding him. For ages 8 - 12, (grades 3 \u2013 7). 35,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics); Book...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-be25-771c-a2ec-480e8a2e403a",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-mystery-of-the-ugly-bottle",
    "commerceId": "019d632c-5d04-7181-b93a-9c147994bac2",
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
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills"
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
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "The Mystery of the Ugly Bottle (Middle grade) Ten-year-old twins, Jeremy and Jennifer, follow a trail of clues hopefully leading to a treasure trove hidden somewhere on the Miller Estate. The treasure must be worth enough to pay off the coming-due balloon payment for the entire estate. For ages 8 - 12, (grades 3 \u2013 7). 52,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics); Book I in The...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-5d04-7181-b93a-9c147994bac2",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "to-swallow-the-earth",
    "commerceId": "019d632c-4a6d-733e-82a1-36605e91e77c",
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
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4a6d-733e-82a1-36605e91e77c",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019b7149-8a41-7000-92cd-3fec5db23b28",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-6399-7002-b783-243143c536ff",
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
    "id": "why-juan-cant-sleep-a-mystery",
    "commerceId": "019d632c-3f7f-74d9-83fd-bd827065fe49",
    "slug": "why-juan-cant-sleep-a-mystery",
    "title": "Why Juan Can't Sleep",
    "subtitle": "A Mystery? (4-7 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/why-juan-cant-sleep-a-mystery.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": 16.95,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-3f7f-74d9-83fd-bd827065fe49",
    "ebookStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-7592-70dd-9913-4e54a09bf8da",
    "lessonPlanStoreUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-a059-76f9-988f-4562c1da64e3",
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
    "id": "why-juan-cant-sleep-free-ebook",
    "commerceId": "019d6327-7592-70dd-9913-4e54a09bf8da",
    "slug": "why-juan-cant-sleep-free-ebook",
    "title": "Why Juan Can\u2019t Sleep",
    "subtitle": "A Funny Mystery (Free ebook, 4-7 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/why-juan-cant-sleep-free-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "Humor, Mystery & Adventure",
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
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
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-7592-70dd-9913-4e54a09bf8da",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "worlds-without-number",
    "commerceId": "019d6327-796d-7069-8ba8-585d412d5420",
    "slug": "worlds-without-number",
    "title": "Worlds Without Number",
    "subtitle": "YA Sci-Fi",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/worlds-without-number.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
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
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Worlds Without Number (Science Fiction) Blake and his roommate, Roger, design and build a vehicle that can travel across the universe, instantly. They each discover their own destiny as a result of the experiences they have as they interact with an advanced civilization. For ages 12 \u2013 18 (grades 7 - 12). 40,000 words by David R. Christensen (cover by Bud Spencer/SUMO Graphics); 189 pages, soft cover, perfect...",
    "educationalBenefits": [
      "Career exploration, financial literacy, or Social-Emotional Learning (SEL) discussion prompts",
      "Includes a FREE companion ebook or low-prep lesson plan with every physical book purchased on KidsWorldBooks.com"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-796d-7069-8ba8-585d412d5420",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "4-concept-learning-activities",
    "commerceId": "019d632a-5c10-7645-bafb-a327c696730a",
    "slug": "4-concept-learning-activities",
    "title": "4 Concept learning activities - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-concept-learning-activities.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 13.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "4 Concept learning activities - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-5c10-7645-bafb-a327c696730a",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "4-food-books-for-kids-ebook",
    "commerceId": "019d632d-e0ae-753b-8dbb-a5faa78f2c9a",
    "slug": "4-food-books-for-kids-ebook",
    "title": "4 Food Books for Kids",
    "subtitle": "With Recipes & Finding Activities (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-food-books-for-kids-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "4 Food Books for Kids: With Recipes & Finding Activities (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-e0ae-753b-8dbb-a5faa78f2c9a",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "4-spanish-ebooks-for-kids-4-libros-para-ninos",
    "commerceId": "019ce325-4589-733d-ac3c-6e25d4612da8",
    "slug": "4-spanish-ebooks-for-kids-4-libros-para-ninos",
    "title": "4 Spanish eBooks for Kids - 4 libros para ni\u00f1os",
    "subtitle": "With Pronunciation Guide (3-8 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-spanish-ebooks-for-kids-4-libros-para-ninos.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Ebook"
    ],
    "ages": "3-8 years",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 10.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "4 Spanish eBooks for Kids - 4 libros para ni\u00f1os: With Pronunciation Guide (3-8 years) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019ce325-4589-733d-ac3c-6e25d4612da8",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "4-spanish-english-books-for-kids-ebook",
    "commerceId": "019d632c-60cc-7560-8b36-47a5be0fdf72",
    "slug": "4-spanish-english-books-for-kids-ebook",
    "title": "4 Spanish-English eBooks for Kids - 4 libros biling\u00fces para ni\u00f1os (w/pronunciation guide, 3-8 yrs)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-spanish-english-books-for-kids-ebook.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Ebook"
    ],
    "ages": "3-8 yrs",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 10.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "4 Spanish-English eBooks for Kids - 4 libros biling\u00fces para ni\u00f1os (w/pronunciation guide, 3-8 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-60cc-7560-8b36-47a5be0fdf72",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "5-easy-steps-to-reading",
    "commerceId": "019d632d-cfbf-734b-a343-6771281ef337",
    "slug": "5-easy-steps-to-reading",
    "title": "5 Easy Steps to Reading",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/5-easy-steps-to-reading.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 14.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "5 Easy Steps to Reading \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-cfbf-734b-a343-6771281ef337",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "5-learning-activities",
    "commerceId": "019d632b-07fc-73ff-bb4d-9a0ba4b0d897",
    "slug": "5-learning-activities",
    "title": "5 Sports/Games/Activities Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/5-learning-activities.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 17.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "5 Sports/Games/Activities Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-07fc-73ff-bb4d-9a0ba4b0d897",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "career-and-money-books-for-kids",
    "commerceId": "019d632e-0e06-7279-8f97-c56de849858c",
    "slug": "career-and-money-books-for-kids",
    "title": "6 Career & Money Books for Kids - ebook BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/career-and-money-books-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 21.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "6 Career & Money Books for Kids - ebook BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-0e06-7279-8f97-c56de849858c",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "7-emotions-and-feelings-ebooks",
    "commerceId": "019d632c-54c1-75dd-b1f1-0335c4341e70",
    "slug": "7-emotions-and-feelings-ebooks",
    "title": "7 Emotions & Feelings ebooks - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/7-emotions-and-feelings-ebooks.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 24.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "7 Emotions & Feelings ebooks - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-54c1-75dd-b1f1-0335c4341e70",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "a-sky-so-big",
    "commerceId": "019d632d-ded2-700b-88ef-a53bf8720c4d",
    "slug": "a-sky-so-big",
    "title": "A Sky So Big",
    "subtitle": "A Romantic Adventure (Y.A. ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/a-sky-so-big.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 8.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "A Sky So Big: A Romantic Adventure (Y.A. ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-ded2-700b-88ef-a53bf8720c4d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "arc-more",
    "commerceId": "019d6328-7906-716d-880b-d3961c1ed48d",
    "slug": "arc-more",
    "title": "ARC More",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/all_covers_hero.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback",
      "Free Ebooks"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "ARC More \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7906-716d-880b-d3961c1ed48d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "read-childrens-ebooks",
    "commerceId": "019d632b-03f8-750c-9430-ad6618fb488c",
    "slug": "read-childrens-ebooks",
    "title": "All children's ebooks (all individual books, not \"4 Kids Books\" or bundles)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/read-childrens-ebooks.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 69.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "All children's ebooks (all individual books, not \"4 Kids Books\" or bundles) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-03f8-750c-9430-ad6618fb488c",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "annas-prayer-the-true-story-of-an-immigrant-girl-ebook",
    "commerceId": "019d6327-7be1-710b-8d4d-01ca0719ebd2",
    "slug": "annas-prayer-the-true-story-of-an-immigrant-girl-ebook",
    "title": "Anna\u2019s Prayer",
    "subtitle": "The True Story of an Immigrant Girl (ebook, 5-10 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/annas-prayer-the-true-story-of-an-immigrant-girl-e.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "5-10 yrs",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.55,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Anna\u2019s Prayer: The True Story of an Immigrant Girl (ebook, 5-10 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-7be1-710b-8d4d-01ca0719ebd2",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "arriba-up-abajo-down-at-the-boardwalk-spanish-opposites",
    "commerceId": "019d632d-f683-72be-8c12-6684fef60a55",
    "slug": "arriba-up-abajo-down-at-the-boardwalk-spanish-opposites",
    "title": "Arriba Up, Abajo Down at the Boardwalk",
    "subtitle": "A Picture Book of Opposites (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-up-abajo-down-at-the-boardwalk-spanish-oppo.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Arriba Up, Abajo Down at the Boardwalk: A Picture Book of Opposites (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f683-72be-8c12-6684fef60a55",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "arriba-abajo-en-la-playa-opuestos",
    "commerceId": "019d632b-1a57-71e9-b1e7-acdc0a0d0d9c",
    "slug": "arriba-abajo-en-la-playa-opuestos",
    "title": "Arriba, abajo en la playa",
    "subtitle": "Un libro de opuestos (with pronunciation guide in English)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-abajo-en-la-playa-opuestos.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Arriba, abajo en la playa: Un libro de opuestos (with pronunciation guide in English) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-1a57-71e9-b1e7-acdc0a0d0d9c",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "bad-bananas-a-childrens-cookbook",
    "commerceId": "0194bdf8-05b2-744d-a854-6587eade5b67",
    "slug": "bad-bananas-a-childrens-cookbook",
    "title": "BAD Bananas",
    "subtitle": "A Story Cookbook for Kids (ebook, ages 4-10)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bad-bananas-a-childrens-cookbook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)",
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "ages 4-10",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 4.45,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "BAD Bananas: A Story Cookbook for Kids (ebook, ages 4-10) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0194bdf8-05b2-744d-a854-6587eade5b67",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "bad-bananas-a-story-cookbook-for-kids",
    "commerceId": "019d6328-7388-73ba-80af-3baf09bfed34",
    "slug": "bad-bananas-a-story-cookbook-for-kids",
    "title": "Bad Banana Cooking Lesson",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bad-bananas-a-story-cookbook-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Bad Banana Cooking Lesson \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7388-73ba-80af-3baf09bfed34",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "big-black-seed-book-with-no-words-ebook",
    "commerceId": "019d632b-01f8-725e-8067-573df6e13077",
    "slug": "big-black-seed-book-with-no-words-ebook",
    "title": "Big Black Seed",
    "subtitle": "A Book with No Words (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/big-black-seed-book-with-no-words-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Big Black Seed: A Book with No Words (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-01f8-725e-8067-573df6e13077",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "boliche-polar-un-cuento-sin-palabras-wordless",
    "commerceId": "019d6327-4af6-70ef-9398-7539c4d7c013",
    "slug": "boliche-polar-un-cuento-sin-palabras-wordless",
    "title": "Boliche polar",
    "subtitle": "Un cuento sin palabras (wordless picture book)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/boliche-polar-un-cuento-sin-palabras-wordless.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Boliche polar: Un cuento sin palabras (wordless picture book) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-4af6-70ef-9398-7539c4d7c013",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "boxed-sets-2024",
    "commerceId": "01967381-28a7-7660-b7ff-de31543fba88",
    "slug": "boxed-sets-2024",
    "title": "Boxed Sets 2024",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/boxed-sets-2024.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Free Ebooks"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "Boxed Sets 2024 \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967381-28a7-7660-b7ff-de31543fba88",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "bright-star-night-star-an-astronomy-book",
    "commerceId": "019d6327-7ecb-76cf-9174-dae108544116",
    "slug": "bright-star-night-star-an-astronomy-book",
    "title": "Bright Star, Night Star",
    "subtitle": "An Astronomy Story (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bright-star-night-star-an-astronomy-book.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Bright Star, Night Star: An Astronomy Story (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-7ecb-76cf-9174-dae108544116",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "butterfly-blink-a-book-without-words-ebook",
    "commerceId": "019d1bcb-46bc-7022-a600-96667267c42d",
    "slug": "butterfly-blink-a-book-without-words-ebook",
    "title": "Butterfly Blink! A Book Without Words (ebook)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/butterfly-blink-a-book-without-words-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Butterfly Blink! A Book Without Words (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d1bcb-46bc-7022-a600-96667267c42d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "campfire-cats",
    "commerceId": "019d632b-e798-7638-80eb-0cb1e9c75c5a",
    "slug": "campfire-cats",
    "title": "Campfire Cats",
    "subtitle": "Feline Fun in the Forest PREORDER",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/campfire-cats.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Campfire Cats: Feline Fun in the Forest PREORDER \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-e798-7638-80eb-0cb1e9c75c5a",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "capa-de-colores-spanish-ebook",
    "commerceId": "019d6327-53e7-774d-bf13-56f61ebe09d3",
    "slug": "capa-de-colores-spanish-ebook",
    "title": "Capa de Colores",
    "subtitle": "Spanish careers/cultures ebook with English pronunciation guide",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/capa-de-colores-spanish-ebook.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Capa de Colores: Spanish careers/cultures ebook with English pronunciation guide \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-53e7-774d-bf13-56f61ebe09d3",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "career-books-for-kids-bundle",
    "commerceId": "019d6327-6584-7149-a3ae-89404e7abaa5",
    "slug": "career-books-for-kids-bundle",
    "title": "Career Books for Kids - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/career-books-for-kids-bundle.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 54.95,
    "priceMax": 89.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Career Books for Kids - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-6584-7149-a3ae-89404e7abaa5",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "compound-words",
    "commerceId": "019d632d-f9b1-737a-9dcf-828c549893e1",
    "slug": "compound-words",
    "title": "Compound Words",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/compound-words.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 14.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Compound Words \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f9b1-737a-9dcf-828c549893e1",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "crumbs-on-the-stairs-migas-en-las-escaleras-bilingual-ebook",
    "commerceId": "019d632a-520a-74ef-8c8c-25efece7cb1d",
    "slug": "crumbs-on-the-stairs-migas-en-las-escaleras-bilingual-ebook",
    "title": "Crumbs on the Stairs \u2013 Migas en las escaleras",
    "subtitle": "A Mystery (English & Spanish ebook w/pronunciation guide, 7-9 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/crumbs-on-the-stairs-migas-en-las-escaleras-biling.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "7-9 yrs",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Crumbs on the Stairs \u2013 Migas en las escaleras: A Mystery (English & Spanish ebook w/pronunciation guide, 7-9 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-520a-74ef-8c8c-25efece7cb1d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "de-la-silla-de-ivan-salio-ebook",
    "commerceId": "019d6327-8ee8-776c-b4f6-1f8482428d20",
    "slug": "de-la-silla-de-ivan-salio-ebook",
    "title": "De la silla de Iv\u00e1n, sali\u00f3\u2026 Un misterio (Spanish prepositions ebook, 4-7 years)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/de-la-silla-de-ivan-salio-ebook.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "4-7 years",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "De la silla de Iv\u00e1n, sali\u00f3\u2026 Un misterio (Spanish prepositions ebook, 4-7 years) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-8ee8-776c-b4f6-1f8482428d20",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "send-books-to-kids-in-need",
    "commerceId": "01951bba-0571-7001-a785-fe58f7043987",
    "slug": "send-books-to-kids-in-need",
    "title": "Donate or send books to kids in need",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/send-books-to-kids-in-need.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 10.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Donate or send books to kids in need \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-0571-7001-a785-fe58f7043987",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "food-books-for-kids-bundle",
    "commerceId": "019d632a-4453-706d-a86f-57154dccaeb1",
    "slug": "food-books-for-kids-bundle",
    "title": "Food Books for Kids - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/food-books-for-kids-bundle.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 54.95,
    "priceMax": 89.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Food Books for Kids - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-4453-706d-a86f-57154dccaeb1",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "grow-food-gardening-ebook",
    "commerceId": "019d632c-67ae-70d0-baa6-812a4689d40a",
    "slug": "grow-food-gardening-ebook",
    "title": "GROW",
    "subtitle": "How We Get Food from Our Garden (ebook, ages 4-7)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/grow-food-gardening-ebook.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "ages 4-7",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "GROW: How We Get Food from Our Garden (ebook, ages 4-7) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-67ae-70d0-baa6-812a4689d40a",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "god-adores-you-ebook",
    "commerceId": "019d632b-05c4-719c-adde-7921d9978d51",
    "slug": "god-adores-you-ebook",
    "title": "God Adores You/More Than 2/Abundant Paths (ebook)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/god-adores-you-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "God Adores You/More Than 2/Abundant Paths (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-05c4-719c-adde-7921d9978d51",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "gopher-golf-ebook",
    "commerceId": "019d6328-8e43-771f-a695-699f2bf3a89f",
    "slug": "gopher-golf-ebook",
    "title": "Gopher Golf",
    "subtitle": "A Wordless Picture Book (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/gopher-golf-ebook.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Gopher Golf: A Wordless Picture Book (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-8e43-771f-a695-699f2bf3a89f",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "great-cape-o-colors-capa-de-colores-ebook",
    "commerceId": "019d0c67-bf6e-74aa-86c3-dadcaba31221",
    "slug": "great-cape-o-colors-capa-de-colores-ebook",
    "title": "Great Cape o\u2019 Colors / Capa de colores (bilingual ebook with pronunciation guide)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/great-cape-o-colors-capa-de-colores-ebook.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Great Cape o\u2019 Colors / Capa de colores (bilingual ebook with pronunciation guide) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d0c67-bf6e-74aa-86c3-dadcaba31221",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "horse-and-dog-adventures-in-early-california",
    "commerceId": "01951bb9-0b56-7001-abff-a773344be618",
    "slug": "horse-and-dog-adventures-in-early-california",
    "title": "Horse & Dog Adventures in Early California",
    "subtitle": "Short Stories & Poems (ebook, 9-15 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/horse-and-dog-adventures-in-early-california.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "9-15 yrs",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 5.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Horse & Dog Adventures in Early California: Short Stories & Poems (ebook, 9-15 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bb9-0b56-7001-abff-a773344be618",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "idas-witness-the-true-story-of-an-immigrant-girl-ebook",
    "commerceId": "019d632c-4bfb-7799-a6ff-bbe42a6686d8",
    "slug": "idas-witness-the-true-story-of-an-immigrant-girl-ebook",
    "title": "Ida\u2019s Witness",
    "subtitle": "The True Story of an Immigrant Girl (ebook, 7-12 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/idas-witness-the-true-story-of-an-immigrant-girl-e.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "7-12 yrs",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Ida\u2019s Witness: The True Story of an Immigrant Girl (ebook, 7-12 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4bfb-7799-a6ff-bbe42a6686d8",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "it-aint-flat-a-memorizable-book-of-countries-free-ebook",
    "commerceId": "0195ca02-4489-7445-97ab-3f56314e44b1",
    "slug": "it-aint-flat-a-memorizable-book-of-countries-free-ebook",
    "title": "It Ain't Flat",
    "subtitle": "A Memorizable Book of Countries (free)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/it-aint-flat-a-memorizable-book-of-countries-free-.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Free Ebooks",
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "It Ain't Flat: A Memorizable Book of Countries (free) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0195ca02-4489-7445-97ab-3f56314e44b1",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "it-came-from-under-the-highchair-ebook",
    "commerceId": "019d6328-5903-72db-ba33-e990c91c5a25",
    "slug": "it-came-from-under-the-highchair-ebook",
    "title": "It Came from Under the High Chair \u2013 Sali\u00f3 de debajo de la silla para comer",
    "subtitle": "A Mystery (Spanish-English ebook, 4-8 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/it-came-from-under-the-highchair-ebook.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "4-8 years",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "It Came from Under the High Chair \u2013 Sali\u00f3 de debajo de la silla para comer: A Mystery (Spanish-English ebook, 4-8 years) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-5903-72db-ba33-e990c91c5a25",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "kidsworldbooks-foreign-language-books",
    "commerceId": "019784a3-720f-7001-943b-71f32e7176f6",
    "slug": "kidsworldbooks-foreign-language-books",
    "title": "KidsWorldBooks Foreign Language Titles",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/kidsworldbooks-foreign-language-books.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook",
      "Free Ebooks"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "KidsWorldBooks Foreign Language Titles \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019784a3-720f-7001-943b-71f32e7176f6",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "multicultural-kids-books-meta-data",
    "commerceId": "01966fcc-0de9-7330-aab6-a83f305b81ff",
    "slug": "multicultural-kids-books-meta-data",
    "title": "KidsWorldBooks Full Meta Data",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/multicultural-kids-books-meta-data.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback",
      "Free Ebooks"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "KidsWorldBooks Full Meta Data \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01966fcc-0de9-7330-aab6-a83f305b81ff",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ma-macdonald-flees-the-farm-ebook",
    "commerceId": "019d6327-4838-726f-b681-af15dda40550",
    "slug": "ma-macdonald-flees-the-farm-ebook",
    "title": "Ma MacDonald Flees the Farm",
    "subtitle": "It\u2019s not a pretty picture\u2026book",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ma-macdonald-flees-the-farm-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Ma MacDonald Flees the Farm: It\u2019s not a pretty picture\u2026book \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-4838-726f-b681-af15dda40550",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "spanish-ebook-migas-en-las-escaleras",
    "commerceId": "019d3076-5d71-73d0-8e6f-8cff3268fb6d",
    "slug": "spanish-ebook-migas-en-las-escaleras",
    "title": "Migas en las escaleras",
    "subtitle": "Un misterio (ebook w/pronunciation guide in English, 2-6 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/spanish-ebook-migas-en-las-escaleras.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "2-6 years",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Migas en las escaleras: Un misterio (ebook w/pronunciation guide in English, 2-6 years) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d3076-5d71-73d0-8e6f-8cff3268fb6d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "muffy-valor-a-true-dog-story-ebook",
    "commerceId": "019d6328-8442-7332-b31a-29396ddcbe9f",
    "slug": "muffy-valor-a-true-dog-story-ebook",
    "title": "Muffy & Valor",
    "subtitle": "A True Dog Story (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/muffy-valor-a-true-dog-story-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Muffy & Valor: A True Dog Story (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-8442-7332-b31a-29396ddcbe9f",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "retail-catalog",
    "commerceId": "0194b86e-346b-7335-a1f2-b022dad0e62f",
    "slug": "retail-catalog",
    "title": "Multicultural Kids' Books Retail Catalog",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/retail-catalog.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Free Ebooks"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "Multicultural Kids' Books Retail Catalog \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0194b86e-346b-7335-a1f2-b022dad0e62f",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "no-offense-communication-guaranteed-not-to-offend",
    "commerceId": "01951bba-ef55-7001-97ba-286a3e5a23c1",
    "slug": "no-offense-communication-guaranteed-not-to-offend",
    "title": "No Offense",
    "subtitle": "Communication Guaranteed Not to Offend",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/no-offense-communication-guaranteed-not-to-offend.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 8.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "No Offense: Communication Guaranteed Not to Offend \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-ef55-7001-97ba-286a3e5a23c1",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "orange-room",
    "commerceId": "019d632e-01f7-717c-b150-49fc1b175e97",
    "slug": "orange-room",
    "title": "Orange Room - PREORDER",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/orange-room.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Orange Room - PREORDER \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-01f7-717c-b150-49fc1b175e97",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "polar-bear-bowler-a-story-without-words-ebook",
    "commerceId": "019d632a-1056-703c-bc71-a6f9188407f5",
    "slug": "polar-bear-bowler-a-story-without-words-ebook",
    "title": "Polar Bear Bowler",
    "subtitle": "A Story Without Words (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/polar-bear-bowler-a-story-without-words-ebook.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Polar Bear Bowler: A Story Without Words (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-1056-703c-bc71-a6f9188407f5",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "publishing-consultation-with-karl-beckstrand",
    "commerceId": "019d632c-5fa8-76c8-89ed-d93a25c4cb99",
    "slug": "publishing-consultation-with-karl-beckstrand",
    "title": "Publishing Consultation with Karl Beckstrand (1 hour)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/publishing-consultation-with-karl-beckstrand.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 165.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Publishing Consultation with Karl Beckstrand (1 hour) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-5fa8-76c8-89ed-d93a25c4cb99",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "purple-pigs-in-the-popcorn",
    "commerceId": "019d632d-edb3-727b-b529-7e3a387e49d6",
    "slug": "purple-pigs-in-the-popcorn",
    "title": "Purple Pigs in the Popcorn",
    "subtitle": "A Colorful Course in Corn Cuisine - PREORDER",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/purple-pigs-in-the-popcorn.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Purple Pigs in the Popcorn: A Colorful Course in Corn Cuisine - PREORDER \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-edb3-727b-b529-7e3a387e49d6",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ruidos-en-la-casa-libro-en-espanol",
    "commerceId": "019d632c-42f3-7586-a5a6-2a028353c3f5",
    "slug": "ruidos-en-la-casa-libro-en-espanol",
    "title": "Ruidos en la casa",
    "subtitle": "Un misterio c\u00f3mico (Spanish ebook w/pronunciation guide, 2-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ruidos-en-la-casa-libro-en-espanol.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "2-7 yrs",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Ruidos en la casa: Un misterio c\u00f3mico (Spanish ebook w/pronunciation guide, 2-7 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-42f3-7586-a5a6-2a028353c3f5",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "samuel-sailing-ebook",
    "commerceId": "019d6328-6232-7351-9d9f-98f91288fb7f",
    "slug": "samuel-sailing-ebook",
    "title": "Samuel Sailing",
    "subtitle": "The True Story of an Immigrant Boy (ebook, 6-11 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/samuel-sailing-ebook.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "6-11 yrs",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Samuel Sailing: The True Story of an Immigrant Boy (ebook, 6-11 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-6232-7351-9d9f-98f91288fb7f",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "school-library-catalog",
    "commerceId": "0195025a-61d8-7bbf-bc78-46a4a71e3606",
    "slug": "school-library-catalog",
    "title": "School / Library Catalog",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/school-library-catalog.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Free Ebooks"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "School / Library Catalog \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0195025a-61d8-7bbf-bc78-46a4a71e3606",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "she-doesnt-want-the-worms-ella-no-quiere-los-gusanos-a-mystery-in-english-spanish",
    "commerceId": "019d6327-61a2-744e-81cb-7dd3d182eaaa",
    "slug": "she-doesnt-want-the-worms-ella-no-quiere-los-gusanos-a-mystery-in-english-spanish",
    "title": "She Doesn't Want the Worms \u2013 Ella no quiere los gusanos",
    "subtitle": "A Mystery in English & Spanish (ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/she-doesnt-want-the-worms-ella-no-quiere-los-gusan.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "She Doesn't Want the Worms \u2013 Ella no quiere los gusanos: A Mystery in English & Spanish (ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-61a2-744e-81cb-7dd3d182eaaa",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "sounds-in-the-house-sonidos-en-la-casa-bilingual-ebook",
    "commerceId": "019d632a-ebb3-7566-85fa-a4bea76f5d0f",
    "slug": "sounds-in-the-house-sonidos-en-la-casa-bilingual-ebook",
    "title": "Sounds in the House \u2013 Sonidos en la casa",
    "subtitle": "A Mystery (English & Spanish ebook, 2-7 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/sounds-in-the-house-sonidos-en-la-casa-bilingual-e.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "2-7 yrs",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Sounds in the House \u2013 Sonidos en la casa: A Mystery (English & Spanish ebook, 2-7 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-ebb3-7566-85fa-a4bea76f5d0f",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "bilingual-bundle",
    "commerceId": "019d6328-a2d1-729d-91a0-277428efbadb",
    "slug": "bilingual-bundle",
    "title": "Spanish-English Books for Kids (with pronunciation guide) Bilingual BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bilingual-bundle.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 54.95,
    "priceMax": 89.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Spanish-English Books for Kids (with pronunciation guide) Bilingual BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-a2d1-729d-91a0-277428efbadb",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-bridge-of-the-golden-wood",
    "commerceId": "019d0cf7-2452-706c-91b3-6a60bc2b618c",
    "slug": "the-bridge-of-the-golden-wood",
    "title": "The Bridge of the Golden Wood",
    "subtitle": "A Parable on How to Earn a Living (ebook, 7-15 yrs)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-bridge-of-the-golden-wood.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "7-15 yrs",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "The Bridge of the Golden Wood: A Parable on How to Earn a Living (ebook, 7-15 yrs) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d0cf7-2452-706c-91b3-6a60bc2b618c",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-dancing-flamingos-of-lake-chimichanga-silly-birds",
    "commerceId": "019d404f-e231-7458-a45a-7dae8335d2c6",
    "slug": "the-dancing-flamingos-of-lake-chimichanga-silly-birds",
    "title": "The Dancing Flamingos of Lake Chimichanga",
    "subtitle": "Silly Birds (ebook, 3-7 years)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-dancing-flamingos-of-lake-chimichanga-silly-bi.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "3-7 years",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "The Dancing Flamingos of Lake Chimichanga: Silly Birds (ebook, 3-7 years) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d404f-e231-7458-a45a-7dae8335d2c6",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "tivolis-christmas",
    "commerceId": "019d632b-00d0-73ec-b047-6643ad70e9b3",
    "slug": "tivolis-christmas",
    "title": "Tivoli's Christmas",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/tivolis-christmas.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 8.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Tivoli's Christmas \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-00d0-73ec-b047-6643ad70e9b3",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "to-swallow-the-earth-western",
    "commerceId": "019b7149-8a41-7000-92cd-3fec5db23b28",
    "slug": "to-swallow-the-earth-western",
    "title": "To Swallow the Earth",
    "subtitle": "A Western Thriller (Y.A. ebook)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/to-swallow-the-earth-western.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 8.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "To Swallow the Earth: A Western Thriller (Y.A. ebook) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019b7149-8a41-7000-92cd-3fec5db23b28",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "tongue-twisters-for-tykes",
    "commerceId": "019d6328-6d9e-76ec-8f6b-1a42f5e303f1",
    "slug": "tongue-twisters-for-tykes",
    "title": "Tongue Twisters for Tykes - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/tongue-twisters-for-tykes.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 54.95,
    "priceMax": 89.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Tongue Twisters for Tykes - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-6d9e-76ec-8f6b-1a42f5e303f1",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "trains-transport-travel-tales-for-tots",
    "commerceId": "019d6327-75ca-757a-a294-c4f9edc0d1b8",
    "slug": "trains-transport-travel-tales-for-tots",
    "title": "Trains, Transport & Travel Tales for Tots - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/trains-transport-travel-tales-for-tots.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 72.95,
    "priceMax": 119.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Trains, Transport & Travel Tales for Tots - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-75ca-757a-a294-c4f9edc0d1b8",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "true-pet-stories",
    "commerceId": "01951bba-08f2-7001-9713-8a47a9bf094c",
    "slug": "true-pet-stories",
    "title": "True Pet Stories for Kids - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/true-pet-stories.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 17.95,
    "priceMax": 21.95,
    "originalPrice": null,
    "isFree": false,
    "description": "True Pet Stories for Kids - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-08f2-7001-9713-8a47a9bf094c",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ts-time-travel-treasure-trunk",
    "commerceId": "019d632c-4f9e-7601-b93c-e564766d5c22",
    "slug": "ts-time-travel-treasure-trunk",
    "title": "T\u2019s Time Travel Treasure Trunk \u2013 A Portal to the Past - PREORDER",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ts-time-travel-treasure-trunk.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Paperback"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "T\u2019s Time Travel Treasure Trunk \u2013 A Portal to the Past - PREORDER \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4f9e-7601-b93c-e564766d5c22",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "zoo-animals-for-kids",
    "commerceId": "019d6328-79b1-7776-9766-8cf5c9c39bea",
    "slug": "zoo-animals-for-kids",
    "title": "Zoo Animals for Kids - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/zoo-animals-for-kids.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 54.95,
    "priceMax": 89.95,
    "originalPrice": null,
    "isFree": false,
    "description": "Zoo Animals for Kids - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-79b1-7776-9766-8cf5c9c39bea",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ella-no-quiere-los-gusanos-un-misterio",
    "commerceId": "019d632c-4d76-73c9-8593-71402f18a961",
    "slug": "ella-no-quiere-los-gusanos-un-misterio",
    "title": "\u00a1Ella no quiere los gusanos! Un misterio (Spanish ebook with pronunciation guide in English)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ella-no-quiere-los-gusanos-un-misterio.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Ebook"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "\u00a1Ella no quiere los gusanos! Un misterio (Spanish ebook with pronunciation guide in English) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632c-4d76-73c9-8593-71402f18a961",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "3-animal-lesson-plans",
    "commerceId": "019d6328-91ef-73a6-a505-2932800522e7",
    "slug": "3-animal-lesson-plans",
    "title": "3 Animal Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/3-animal-lesson-plans.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 10.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "3 Animal Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-91ef-73a6-a505-2932800522e7",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "3-grammar-lessons",
    "commerceId": "019d632e-10c7-77ee-9216-f9dc8f3602ed",
    "slug": "3-grammar-lessons",
    "title": "3 Grammar/Parts of Speech Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/3-grammar-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 10.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "3 Grammar/Parts of Speech Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-10c7-77ee-9216-f9dc8f3602ed",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "listening-speaking-lessons",
    "commerceId": "019d6328-7ee5-74f6-9171-50e50387b10d",
    "slug": "listening-speaking-lessons",
    "title": "3 Listening/Speaking Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/listening-speaking-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 10.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "3 Listening/Speaking Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7ee5-74f6-9171-50e50387b10d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "4-stem-lessons",
    "commerceId": "019d632b-11bf-704d-8384-3e7634142ce8",
    "slug": "4-stem-lessons",
    "title": "4 STEM Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/4-stem-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 13.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "4 STEM Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-11bf-704d-8384-3e7634142ce8",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "5-food-lessons",
    "commerceId": "019d6327-6e2e-72b1-8d8e-d26743b4a406",
    "slug": "5-food-lessons",
    "title": "5 Food Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/5-food-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 17.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "5 Food Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-6e2e-72b1-8d8e-d26743b4a406",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "writing-lessons",
    "commerceId": "019d632a-7743-736f-b7ac-bc2b61e56dba",
    "slug": "writing-lessons",
    "title": "6 Writing Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/writing-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 21.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "6 Writing Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-7743-736f-b7ac-bc2b61e56dba",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "7-emotions-and-feelings-lessons",
    "commerceId": "019d632a-fbea-70f0-ae5d-300a726e59a0",
    "slug": "7-emotions-and-feelings-lessons",
    "title": "7 Emotions & Feelings lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/7-emotions-and-feelings-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 24.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "7 Emotions & Feelings lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-fbea-70f0-ae5d-300a726e59a0",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "7-cultural-lessons",
    "commerceId": "019d632b-2006-76b7-8224-b2a9efa445da",
    "slug": "7-cultural-lessons",
    "title": "7 Geography, Travel & Culture lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/7-cultural-lessons.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 23.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "7 Geography, Travel & Culture lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-2006-76b7-8224-b2a9efa445da",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "spanish-language-lessons",
    "commerceId": "019d632a-6acb-716a-b492-06c1d0879497",
    "slug": "spanish-language-lessons",
    "title": "7 Spanish/Language Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/spanish-language-lessons.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 24.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "7 Spanish/Language Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-6acb-716a-b492-06c1d0879497",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "agness-rescue-writing-lesson-plan",
    "commerceId": "019d632b-00cf-74e7-a06f-3e8e6d47cb63",
    "slug": "agness-rescue-writing-lesson-plan",
    "title": "Agnes's Rescue",
    "subtitle": "Young American Immigrants (writing lesson plan)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/agness-rescue-writing-lesson-plan.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Agnes's Rescue: Young American Immigrants (writing lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-00cf-74e7-a06f-3e8e6d47cb63",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "annas-prayer-idas-witness-lesson-plan",
    "commerceId": "019d632a-5fe2-70ae-a6c2-075315f2ed7b",
    "slug": "annas-prayer-idas-witness-lesson-plan",
    "title": "Anna's Prayer/Ida's Witness",
    "subtitle": "Young American Immigrants (writing lesson plan)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/annas-prayer-idas-witness-lesson-plan.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Anna's Prayer/Ida's Witness: Young American Immigrants (writing lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-5fe2-70ae-a6c2-075315f2ed7b",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "annas-prayer-nonfiction-writing-lesson",
    "commerceId": "019d6328-7549-71dc-84eb-0968f0c27f7d",
    "slug": "annas-prayer-nonfiction-writing-lesson",
    "title": "Anna\u2019s Prayer",
    "subtitle": "The True Story of an Immigrant Girl (writing lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/annas-prayer-nonfiction-writing-lesson.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 2.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Anna\u2019s Prayer: The True Story of an Immigrant Girl (writing lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7549-71dc-84eb-0968f0c27f7d",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "arriba-up-abajo-down-spanish-english-opposites-lesson",
    "commerceId": "0195ca04-ef52-7ff9-96a8-addc1a7543d5",
    "slug": "arriba-up-abajo-down-spanish-english-opposites-lesson",
    "title": "Arriba Up, Abajo Down at the Boardwalk (Spanish-English opposites lesson)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-up-abajo-down-spanish-english-opposites-les.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Arriba Up, Abajo Down at the Boardwalk (Spanish-English opposites lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0195ca04-ef52-7ff9-96a8-addc1a7543d5",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "arriba-abajo-spanish-lesson",
    "commerceId": "01967383-72e6-700a-b2d2-725b00a2e1b6",
    "slug": "arriba-abajo-spanish-lesson",
    "title": "Arriba, abajo en la playa",
    "subtitle": "Un libro de opuestos (Spanish opposites lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/arriba-abajo-spanish-lesson.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Arriba, abajo en la playa: Un libro de opuestos (Spanish opposites lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967383-72e6-700a-b2d2-725b00a2e1b6",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "boliche-polar-un-cuento-sin-palabras-wordless-lesson",
    "commerceId": "019d632e-02d3-755b-903f-05e93cd05314",
    "slug": "boliche-polar-un-cuento-sin-palabras-wordless-lesson",
    "title": "Boliche polar",
    "subtitle": "Un cuento sin palabras (Spanish wordless story lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/boliche-polar-un-cuento-sin-palabras-wordless-less.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)",
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Boliche polar: Un cuento sin palabras (Spanish wordless story lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-02d3-755b-903f-05e93cd05314",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "bright-star-night-star-astronomy-lesson-plan",
    "commerceId": "019d6327-9d02-74f3-9fcf-70123c57beb4",
    "slug": "bright-star-night-star-astronomy-lesson-plan",
    "title": "Bright Star, Night Star - Astronomy lesson",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/bright-star-night-star-astronomy-lesson-plan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Bright Star, Night Star - Astronomy lesson \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-9d02-74f3-9fcf-70123c57beb4",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "butterfly-blink-wordless-story-lesson",
    "commerceId": "019d632d-f61d-711e-97b5-fd0957b55ccc",
    "slug": "butterfly-blink-wordless-story-lesson",
    "title": "Butterfly Blink! Wordless story lesson",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/butterfly-blink-wordless-story-lesson.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Butterfly Blink! Wordless story lesson \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f61d-711e-97b5-fd0957b55ccc",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "capa-de-colores-spanish-careers-cultures-lesson",
    "commerceId": "019d6327-9c80-7349-bf65-babf6bd39dc4",
    "slug": "capa-de-colores-spanish-careers-cultures-lesson",
    "title": "Capa de Colores",
    "subtitle": "Spanish colors/careers/cultures lesson in English",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/capa-de-colores-spanish-careers-cultures-lesson.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Capa de Colores: Spanish colors/careers/cultures lesson in English \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-9c80-7349-bf65-babf6bd39dc4",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "career-money-lesson-plans",
    "commerceId": "019d632e-15c6-73bf-a730-8b66c0aee45c",
    "slug": "career-money-lesson-plans",
    "title": "Career & Money Lessons - BUNDLE",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/career-money-lesson-plans.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Bundles & Series",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 9.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Career & Money Lessons - BUNDLE \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-15c6-73bf-a730-8b66c0aee45c",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "crumbs-on-the-stairs-migas-en-las-escaleras-lesson",
    "commerceId": "01967da2-aafb-7ff9-8bc2-c02a4b20d7df",
    "slug": "crumbs-on-the-stairs-migas-en-las-escaleras-lesson",
    "title": "Crumbs on the Stairs \u2013 Migas en las escaleras (English & Spanish grammar lesson)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/crumbs-on-the-stairs-migas-en-las-escaleras-lesson.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Crumbs on the Stairs \u2013 Migas en las escaleras (English & Spanish grammar lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01967da2-aafb-7ff9-8bc2-c02a4b20d7df",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "de-la-silla-de-ivan-salio-spanish-lesson-plan",
    "commerceId": "019d632d-f52b-769a-b5bd-ca6f247d10a7",
    "slug": "de-la-silla-de-ivan-salio-spanish-lesson-plan",
    "title": "De la silla de Iv\u00e1n, sali\u00f3\u2026 Un misterio (Spanish prepositions lesson plan)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/de-la-silla-de-ivan-salio-spanish-lesson-plan.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "De la silla de Iv\u00e1n, sali\u00f3\u2026 Un misterio (Spanish prepositions lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f52b-769a-b5bd-ca6f247d10a7",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "free-career-lesson-plan",
    "commerceId": "0195025a-6dfc-7eee-90ca-f66655d5a144",
    "slug": "free-career-lesson-plan",
    "title": "Free Career/Money Curriculum (State of Vermont)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/free-career-lesson-plan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "STEM, Nature & Food"
    ],
    "format": [
      "Free Ebooks",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "Free Career/Money Curriculum (State of Vermont) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=0195025a-6dfc-7eee-90ca-f66655d5a144",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "grow-salsa-garden-lesson-plan",
    "commerceId": "019d632d-fd10-72de-990b-5ffd02d5d619",
    "slug": "grow-salsa-garden-lesson-plan",
    "title": "GROW - FREE Salsa Garden Lesson Plan (VA Tech/USDA)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/grow-salsa-garden-lesson-plan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Free Ebooks",
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 0.0,
    "priceMax": null,
    "originalPrice": null,
    "isFree": true,
    "description": "GROW - FREE Salsa Garden Lesson Plan (VA Tech/USDA) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-fd10-72de-990b-5ffd02d5d619",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "gardening-lesson-plan",
    "commerceId": "019d6327-989e-7154-bab3-0072fb1c65b7",
    "slug": "gardening-lesson-plan",
    "title": "GROW - Gardening Lesson Plan (1 of 3)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/gardening-lesson-plan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "GROW - Gardening Lesson Plan (1 of 3) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-989e-7154-bab3-0072fb1c65b7",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "gopher-golf-wordless-story-lesson-plan",
    "commerceId": "019d6328-7aaf-7272-9de8-0dfdc9678048",
    "slug": "gopher-golf-wordless-story-lesson-plan",
    "title": "Gopher Golf",
    "subtitle": "A Wordless Story (lesson plan)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/gopher-golf-wordless-story-lesson-plan.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Gopher Golf: A Wordless Story (lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7aaf-7272-9de8-0dfdc9678048",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "great-cape-o-colors-capa-de-colores-lesson",
    "commerceId": "019d632a-f6ec-7595-be79-ed7f0ea992a5",
    "slug": "great-cape-o-colors-capa-de-colores-lesson",
    "title": "Great Cape o\u2019 Colors \u2013 Capa de colores (English-Spanish career/cultures lesson)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/great-cape-o-colors-capa-de-colores-lesson.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Character, Career & Life Skills",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Great Cape o\u2019 Colors \u2013 Capa de colores (English-Spanish career/cultures lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-f6ec-7595-be79-ed7f0ea992a5",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "horse-and-dog-adventures-in-early-california-short-stories-and-poems-lesson",
    "commerceId": "019d632e-09d1-74c0-98f4-31ee1060b1f6",
    "slug": "horse-and-dog-adventures-in-early-california-short-stories-and-poems-lesson",
    "title": "Horse & Dog Adventures in Early California",
    "subtitle": "Short Stories & Poems (writing lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/horse-and-dog-adventures-in-early-california-short.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Horse & Dog Adventures in Early California: Short Stories & Poems (writing lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632e-09d1-74c0-98f4-31ee1060b1f6",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "idas-witness-nonfiction-writing-lesson",
    "commerceId": "019d632d-e873-7307-88c6-1bbae6a825ef",
    "slug": "idas-witness-nonfiction-writing-lesson",
    "title": "Ida\u2019s Witness",
    "subtitle": "The True Story of an Immigrant Girl (nonfiction writing lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/idas-witness-nonfiction-writing-lesson.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Ida\u2019s Witness: The True Story of an Immigrant Girl (nonfiction writing lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-e873-7307-88c6-1bbae6a825ef",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "it-came-from-under-the-high-chair-prepositions-lesson-plan",
    "commerceId": "019d632a-f313-762b-8553-b422f5c50b85",
    "slug": "it-came-from-under-the-high-chair-prepositions-lesson-plan",
    "title": "It Came from Under the High Chair (bilingual prepositions lesson plan)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/it-came-from-under-the-high-chair-prepositions-les.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "It Came from Under the High Chair (bilingual prepositions lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-f313-762b-8553-b422f5c50b85",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ma-macdonald-flees-the-farm-animal-lesson-plan",
    "commerceId": "019d6328-6d11-7379-9eb3-7eb76c610d27",
    "slug": "ma-macdonald-flees-the-farm-animal-lesson-plan",
    "title": "Ma MacDonald Flees the Farm (animal lesson plan)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ma-macdonald-flees-the-farm-animal-lesson-plan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Ma MacDonald Flees the Farm (animal lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-6d11-7379-9eb3-7eb76c610d27",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "migas-en-las-escaleras-un-misterio-grammar-lesson",
    "commerceId": "019d632b-08cb-7489-9c5c-9dcbf796a7cf",
    "slug": "migas-en-las-escaleras-un-misterio-grammar-lesson",
    "title": "Migas en las escaleras",
    "subtitle": "Un misterio (parts of speech lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/migas-en-las-escaleras-un-misterio-grammar-lesson.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Migas en las escaleras: Un misterio (parts of speech lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632b-08cb-7489-9c5c-9dcbf796a7cf",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "muffy-and-valor-a-true-dog-story-writing-lesson",
    "commerceId": "01951bba-edab-7002-8508-4a1a143b3a41",
    "slug": "muffy-and-valor-a-true-dog-story-writing-lesson",
    "title": "Muffy & Valor",
    "subtitle": "A True Dog Story (writing lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/muffy-and-valor-a-true-dog-story-writing-lesson.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Muffy & Valor: A True Dog Story (writing lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=01951bba-edab-7002-8508-4a1a143b3a41",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "polar-bear-bowler-wordless-story-lesson",
    "commerceId": "019d632d-f22f-71af-92de-446ed2b70c13",
    "slug": "polar-bear-bowler-wordless-story-lesson",
    "title": "Polar Bear Bowler",
    "subtitle": "Wordless story lesson",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/polar-bear-bowler-wordless-story-lesson.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Polar Bear Bowler: Wordless story lesson \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f22f-71af-92de-446ed2b70c13",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "polar-bear-bowler-language-lesson",
    "commerceId": "019d632d-f317-7580-92ce-c2319255f84f",
    "slug": "polar-bear-bowler-language-lesson",
    "title": "Polar Bear Bowler",
    "subtitle": "Wordless story lesson (languages, ages 2-6)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/polar-bear-bowler-language-lesson.jpg",
    "readerLevel": [
      "Beginning Readers (K\u20132)"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "ages 2-6",
    "grades": "Grades PreK\u20136",
    "language": "Wordless (Universal)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Polar Bear Bowler: Wordless story lesson (languages, ages 2-6) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-f317-7580-92ce-c2319255f84f",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ruidos-en-la-casa-un-misterio-comico",
    "commerceId": "019d632a-f404-70ef-8885-c98a3be6d6e3",
    "slug": "ruidos-en-la-casa-un-misterio-comico",
    "title": "Ruidos en la casa",
    "subtitle": "Un misterio c\u00f3mico (Feelings lesson plan)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ruidos-en-la-casa-un-misterio-comico.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Ruidos en la casa: Un misterio c\u00f3mico (Feelings lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-f404-70ef-8885-c98a3be6d6e3",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "samuel-sailing-writing-lesson-plan",
    "commerceId": "019d632a-4916-763a-9d00-6c08d15d0ac1",
    "slug": "samuel-sailing-writing-lesson-plan",
    "title": "Samuel Sailing",
    "subtitle": "Young American Immigrants (Writing lesson plan)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/samuel-sailing-writing-lesson-plan.jpg",
    "readerLevel": [
      "Chapter Books & YA (Ages 7\u201314)"
    ],
    "theme": [
      "History, Culture & Biography",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Samuel Sailing: Young American Immigrants (Writing lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-4916-763a-9d00-6c08d15d0ac1",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "she-doesnt-want-the-worms-spanish-lesson-plan",
    "commerceId": "019d632d-ec72-7018-a320-ede4f7dd0cad",
    "slug": "she-doesnt-want-the-worms-spanish-lesson-plan",
    "title": "She Doesn't Want the Worms - Spanish-English insect/animal lesson",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/she-doesnt-want-the-worms-spanish-lesson-plan.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "She Doesn't Want the Worms - Spanish-English insect/animal lesson \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632d-ec72-7018-a320-ede4f7dd0cad",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "sounds-in-the-house-lesson-plan",
    "commerceId": "019d6328-7f30-700d-bdb9-e4b5129a1fb7",
    "slug": "sounds-in-the-house-lesson-plan",
    "title": "Sounds in the House \u2013 Sonidos en la casa",
    "subtitle": "A Mystery (English & Spanish lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/sounds-in-the-house-lesson-plan.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Bilingual (English / Spanish)",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Sounds in the House \u2013 Sonidos en la casa: A Mystery (English & Spanish lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6328-7f30-700d-bdb9-e4b5129a1fb7",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "the-dancing-flamingos-of-lake-chimichanga-lesson",
    "commerceId": "019d632a-854d-777a-9f17-c002cfaac6a5",
    "slug": "the-dancing-flamingos-of-lake-chimichanga-lesson",
    "title": "The Dancing Flamingos of Lake Chimichanga",
    "subtitle": "Silly Birds (Counting/Music lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/the-dancing-flamingos-of-lake-chimichanga-lesson.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "The Dancing Flamingos of Lake Chimichanga: Silly Birds (Counting/Music lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-854d-777a-9f17-c002cfaac6a5",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "to-swallow-the-earth-composition-lesson",
    "commerceId": "019d632a-6399-7002-b783-243143c536ff",
    "slug": "to-swallow-the-earth-composition-lesson",
    "title": "To Swallow the Earth/A Sky So Big (Writing lesson)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/to-swallow-the-earth-composition-lesson.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.95,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "To Swallow the Earth/A Sky So Big (Writing lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-6399-7002-b783-243143c536ff",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "why-juan-cant-sleep-lesson-plan",
    "commerceId": "019d6327-a059-76f9-988f-4562c1da64e3",
    "slug": "why-juan-cant-sleep-lesson-plan",
    "title": "Why Juan Can\u2019t Sleep",
    "subtitle": "A Funny Mystery (insomnia lesson)",
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/why-juan-cant-sleep-lesson-plan.jpg",
    "readerLevel": [
      "Elementary (Grades 3\u20135)"
    ],
    "theme": [
      "Bedtime, Faith & Family",
      "Humor, Mystery & Adventure",
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "English",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "Why Juan Can\u2019t Sleep: A Funny Mystery (insomnia lesson) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d6327-a059-76f9-988f-4562c1da64e3",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  },
  {
    "id": "ella-no-quiere-los-gusanos-spanish-lesson",
    "commerceId": "019d632a-482c-769e-ad3d-a2930fb9acc4",
    "slug": "ella-no-quiere-los-gusanos-spanish-lesson",
    "title": "\u00a1Ella no quiere los gusanos! Un misterio (Spanish insect/animal lesson plan)",
    "subtitle": null,
    "author": "Karl Beckstrand",
    "coverImage": "/images/covers/ella-no-quiere-los-gusanos-spanish-lesson.jpg",
    "readerLevel": [
      "Bilingual & ESL"
    ],
    "theme": [
      "STEM, Nature & Food"
    ],
    "format": [
      "Lesson Plans & Curricula"
    ],
    "ages": "Ages 4\u201310",
    "grades": "Grades PreK\u20136",
    "language": "Spanish",
    "isbn": "Premio Publishing Direct",
    "price": 3.99,
    "priceMax": null,
    "originalPrice": null,
    "isFree": false,
    "description": "\u00a1Ella no quiere los gusanos! Un misterio (Spanish insect/animal lesson plan) \u2014 Human-created educational title from KidsWorldBooks (Premio Publishing & Gozo Books).",
    "educationalBenefits": [
      "100% human-created text and educational content by Karl Beckstrand",
      "Supports reading comprehension, vocabulary acquisition, and critical thinking",
      "Ideal for K\u201310 classrooms, ESL/ELL learners, libraries, and homeschool families"
    ],
    "reviews": [],
    "storeUrl": "https://kidsworldbooks.com/buy-books?product=019d632a-482c-769e-ad3d-a2930fb9acc4",
    "ebookStoreUrl": null,
    "lessonPlanStoreUrl": null,
    "teachingGuideUrl": "/teaching-guides",
    "linkedPages": []
  }
];
