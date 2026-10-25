import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookDetailModal } from './components/BookDetailModal';
import { Book } from './data/books';

// Pages
import { HomePage } from './pages/HomePage';
import { BuyBooksPage } from './pages/BuyBooksPage';
import { KidsReadingGuidesPage } from './pages/KidsReadingGuidesPage';
import { ReadingGuideTemplatePage } from './pages/ReadingGuideTemplatePage';
import { HomeschoolGuidePage } from './pages/HomeschoolGuidePage';
import { TeachingGuidesPage } from './pages/TeachingGuidesPage';
import { FreeResourcesPage } from './pages/FreeResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { AuthorPage } from './pages/AuthorPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { PressPage } from './pages/PressPage';
import { AIPolicyPage } from './pages/AIPolicyPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export const App: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-1">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage onSelectBook={handleSelectBook} />} />

          {/* Shop Catalog */}
          <Route path="/buy-books" element={<BuyBooksPage onSelectBook={handleSelectBook} />} />

          {/* Reading Guides Index */}
          <Route path="/kids-reading-guides" element={<KidsReadingGuidesPage />} />

          {/* Permanent 301 Redirect: /classroom-book-lists -> /kids-reading-guides */}
          <Route path="/classroom-book-lists" element={<Navigate to="/kids-reading-guides" replace />} />

          {/* Individual Reading Level Guides */}
          <Route 
            path="/early-reader-books-k2" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Beginning Readers (K–2)",
                  subtitle: "Phonics, sight words, and simple bilingual storybooks.",
                  categoryType: "level",
                  description: "Help kindergarten through 2nd-grade children build early decoding skills, sound recognition, and sight word confidence with engaging human-created stories.",
                  pedagogicalGoals: [
                    "Develop phonemic decoding and letter-sound association",
                    "Master high-frequency sight words in context",
                    "Build confidence through predictable, rhythmic sentence structures",
                    "Support early dual-language immersion"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/early-reader-books-k2")) || b.readerLevel.includes("Beginning Readers (K–2)"),
                  relatedRoutes: [
                    { label: "Phonics & Decoding", href: "/phonics-books-k2" },
                    { label: "Vocabulary Builders", href: "/vocab-books-kids" },
                    { label: "Bilingual Spanish", href: "/bilingual-books-spanish" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/phonics-books-k2" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Phonics & Decoding",
                  subtitle: "Rhyming cadence, vowel patterns, and articulation fun.",
                  categoryType: "level",
                  description: "Phonics-focused books that reinforce letter sounds, vowel blends, and articulation through tongue twisters and rhyming bedtime tales.",
                  pedagogicalGoals: [
                    "Reinforce short and long vowel sound differentiation",
                    "Enhance auditory discrimination through tongue twisters",
                    "Improve oral reading fluency"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/phonics-books-k2")) || b.readerLevel.includes("Phonics & Decoding") || b.title.toLowerCase().includes("twister"),
                  relatedRoutes: [
                    { label: "Beginning Readers K–2", href: "/early-reader-books-k2" },
                    { label: "Wordless Books", href: "/wordless-picture-books" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/vocab-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Vocabulary Builders",
                  subtitle: "Contextual vocabulary acquisition and career exploration.",
                  categoryType: "level",
                  description: "Expand children's Tier 2 and Tier 3 vocabulary through real-world context, mystery investigations, and career talent stories.",
                  pedagogicalGoals: [
                    "Learn new academic words through visual story context",
                    "Encourage oral explanation and discussion",
                    "Dyslexic-friendly text support for varied reading abilities"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/vocab-books-kids")) || b.theme.includes("Character, Career & Life Skills"),
                  relatedRoutes: [
                    { label: "Elementary Grades 3–5", href: "/elementary-books-3-4" },
                    { label: "Reluctant Readers", href: "/reluctant-reader-books" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/elementary-books-3-4" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Elementary (Grades 3–5)",
                  subtitle: "Interdisciplinary reading for 3rd, 4th, and 5th graders.",
                  categoryType: "level",
                  description: "Engaging fiction, mystery, and STEM stories mapped to upper elementary reading levels and social-emotional growth.",
                  pedagogicalGoals: [
                    "Strengthen paragraph comprehension and inference skills",
                    "Introduce basic economic parables and financial literacy",
                    "Promote independent reading habit formation"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/elementary-books-3-4")) || b.readerLevel.includes("Elementary (Grades 3–5)"),
                  relatedRoutes: [
                    { label: "Chapter Books (Ages 7–14)", href: "/chapter-books-kids-7-14" },
                    { label: "STEM & Literacy Units", href: "/stem-literacy-units" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/chapter-books-kids-7-14" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Chapter Books (Ages 7–14)",
                  subtitle: "Mysteries, history, and narrative chapter books.",
                  categoryType: "level",
                  description: "Snappy chapter books featuring detectives Wilcox & Griswold, true pet rescues, and historical Young American Immigrants.",
                  pedagogicalGoals: [
                    "Sustain narrative focus across longer chapter structures",
                    "Analyze character motivations and plot suspense",
                    "Primary source historical empathy and geographical awareness"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/chapter-books-kids-7-14")) || b.readerLevel.includes("Chapter Books & YA (Ages 7–14)"),
                  relatedRoutes: [
                    { label: "Reluctant Readers", href: "/reluctant-reader-books" },
                    { label: "History & Culture", href: "/history-culture-books-kids" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/bilingual-books-spanish" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Bilingual & ESL Books",
                  subtitle: "Dual-language English/Spanish picture books.",
                  categoryType: "level",
                  description: "Side-by-side English and Spanish text celebrating cross-cultural heritage, counting games, and dual-language vocabulary.",
                  pedagogicalGoals: [
                    "Support English Language Learners (ELL / ESL)",
                    "Maintain native language literacy while expanding English acquisition",
                    "Promote cross-cultural family reading sessions"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/bilingual-books-spanish")) || b.readerLevel.includes("Bilingual & ESL") || b.language.includes("Bilingual") || b.language.includes("Spanish"),
                  relatedRoutes: [
                    { label: "Beginning Readers K–2", href: "/early-reader-books-k2" },
                    { label: "Spanish Tongue Twisters", href: "/buy-books?search=trabalenguas" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/reluctant-reader-books" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Reluctant Readers",
                  subtitle: "Fast-paced, humorous books that hook reluctant readers.",
                  categoryType: "level",
                  description: "High-interest, low-frustration books loaded with deadpan humor, animal rescue true stories, and visual mysteries that keep readers hooked.",
                  pedagogicalGoals: [
                    "Overcome reading anxiety through fast pacing and humor",
                    "Leverage visual clues to assist decoding",
                    "Foster positive reading self-concept"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/reluctant-reader-books")) || b.theme.includes("Humor, Mystery & Adventure"),
                  relatedRoutes: [
                    { label: "Chapter Books (7–14)", href: "/chapter-books-kids-7-14" },
                    { label: "Wordless Books", href: "/wordless-picture-books" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/wordless-picture-books" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Wordless Picture Books",
                  subtitle: "Visual storytelling & creative writing prompts.",
                  categoryType: "level",
                  description: "Wordless visual narratives that invite children to formulate their own spoken or written story sequence without text barriers.",
                  pedagogicalGoals: [
                    "Encourage creative oral storytelling and sequence mapping",
                    "Eliminate decoding pressure for ESL or struggling readers",
                    "Develop detailed visual observation and dialogue writing"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/wordless-picture-books")) || b.title.toLowerCase().includes("wordless") || b.language.includes("Wordless"),
                  relatedRoutes: [
                    { label: "Beginning Readers K–2", href: "/early-reader-books-k2" },
                    { label: "Reluctant Readers", href: "/reluctant-reader-books" }
                  ]
                }}
              />
            } 
          />

          {/* Shared Canonical Route: STEM & Literacy Units */}
          <Route 
            path="/stem-literacy-units" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "STEM & Literacy Units",
                  subtitle: "Cross-curricular science, math, and literacy integration.",
                  categoryType: "topic",
                  description: "Mini-units combining children's literature with hands-on science experiments, financial math parables, and nature exploration.",
                  pedagogicalGoals: [
                    "Integrate Next Generation Science Standards (NGSS) with ELA",
                    "Apply math counting and basic economic parables to real life",
                    "Foster environmental curiosity and observation"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/stem-literacy-units")) || b.theme.includes("STEM, Nature & Food"),
                  relatedRoutes: [
                    { label: "Teaching Guides", href: "/teaching-guides" },
                    { label: "Ready-to-Use Literacy Units", href: "/literacy-units" },
                    { label: "Nature & Science", href: "/stem-nature-books-kids" }
                  ]
                }}
              />
            } 
          />

          {/* Dedicated Route: Ready-to-Use Literacy Units ("4 Books for Kids" Bundles) */}
          <Route 
            path="/literacy-units" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Ready-to-Use Literacy Units (4 Books for Kids Collections)",
                  subtitle: "Themed 4-book bundles paired with low-prep classroom & homeschool literacy units.",
                  categoryType: "pedagogy",
                  description: "Save with our curated '4 Books for Kids' themed collections—covering Mysteries, STEM, Bilingual Spanish-English, Careers, Food, Animals, Bedtime, and US Immigrant Biographies.",
                  pedagogicalGoals: [
                    "Provide cohesive 4-book thematic text sets for classroom stations",
                    "Save on multi-title bundles with included lesson plans",
                    "Support differentiated reading across PreK–Grade 8"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/literacy-units")) || b.format.includes("Bundles & Series") || b.slug.startsWith("4-"),
                  relatedRoutes: [
                    { label: "Teaching Guides (K–10)", href: "/teaching-guides" },
                    { label: "STEM & Literacy Units", href: "/stem-literacy-units" },
                    { label: "Homeschool Guide", href: "/homeschool-guide" }
                  ]
                }}
              />
            } 
          />

          {/* Individual Topic Guides */}
          <Route 
            path="/stem-nature-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Nature & Science Books",
                  subtitle: "Astronomy, habitats, and garden ecology.",
                  categoryType: "topic",
                  description: "Science-focused children's books covering night sky constellations, garden life cycles, and animal biology.",
                  pedagogicalGoals: [
                    "Develop observational curiosity about the natural world",
                    "Learn elementary space and environmental science terms"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/stem-nature-books-kids")) || b.theme.includes("STEM, Nature & Food"),
                  relatedRoutes: [
                    { label: "STEM & Literacy Units", href: "/stem-literacy-units" },
                    { label: "Animals & Pets", href: "/animal-books-kids" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/food-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Food & Cooking Books",
                  subtitle: "Story cookbooks and kitchen math fun.",
                  categoryType: "topic",
                  description: "Books featuring story recipes, kitchen measurement math, and healthy nutrition awareness.",
                  pedagogicalGoals: [
                    "Combine reading comprehension with practical cooking activities",
                    "Reinforce kitchen safety, fractions, and measurements"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/food-books-kids")) || b.description.toLowerCase().includes("recipe") || b.title.toLowerCase().includes("food") || b.title.toLowerCase().includes("banana") || b.title.toLowerCase().includes("grow"),
                  relatedRoutes: [
                    { label: "Easy Children's Recipes", href: "/easy-childrens-recipes" },
                    { label: "STEM & Literacy Units", href: "/stem-literacy-units" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/career-money-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Career & Financial Literacy Books",
                  subtitle: "Parables on earning a living, trade, and unique talents.",
                  categoryType: "topic",
                  description: "Financial literacy parables and career talent exploration books that teach value creation, entrepreneurship, and self-esteem.",
                  pedagogicalGoals: [
                    "Understand basic trade, value creation, and money management",
                    "Explore diverse community careers and self-worth"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/career-money-books-kids")) || b.theme.includes("Character, Career & Life Skills"),
                  relatedRoutes: [
                    { label: "Elementary Grades 3–5", href: "/elementary-books-3-4" },
                    { label: "SEL & Character", href: "/sel-books-kids" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/animal-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Animals & Pet Stories",
                  subtitle: "True pet rescues and animal adventures.",
                  categoryType: "topic",
                  description: "Inspirational true stories about courageous dogs, animal rescues, and wildlife habitats.",
                  pedagogicalGoals: [
                    "Build empathy and compassion for animals",
                    "Engage readers through high-interest non-fiction narrative"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/animal-books-kids")) || b.title.toLowerCase().includes("animal") || b.title.toLowerCase().includes("dog") || b.title.toLowerCase().includes("gopher") || b.title.toLowerCase().includes("polar bear") || b.title.toLowerCase().includes("butterfly"),
                  relatedRoutes: [
                    { label: "Reluctant Readers", href: "/reluctant-reader-books" },
                    { label: "Chapter Books (7–14)", href: "/chapter-books-kids-7-14" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/sports-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Sports & Active Fun",
                  subtitle: "Teamwork, movement, and physical activity stories.",
                  categoryType: "topic",
                  description: "Active storybooks promoting teamwork, sportsmanship, and physical movement.",
                  pedagogicalGoals: [
                    "Reinforce fair play, sportsmanship, and persistence",
                    "Connect active play with reading"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/sports-books-kids")) || b.title.toLowerCase().includes("golf") || b.title.toLowerCase().includes("bowler"),
                  relatedRoutes: [
                    { label: "SEL & Character", href: "/sel-books-kids" },
                    { label: "Wordless Books", href: "/wordless-picture-books" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/folktales-fables-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Folktales & Parables",
                  subtitle: "Cross-cultural stories and character fables.",
                  categoryType: "topic",
                  description: "Timeless parables and folklore stories that pass on character lessons and cross-cultural appreciation.",
                  pedagogicalGoals: [
                    "Analyze fable morals and character choices",
                    "Compare cross-cultural storytelling traditions"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/folktales-fables-kids")) || Boolean(b.subtitle?.toLowerCase().includes("parable")) || b.theme.includes("History, Culture & Biography"),
                  relatedRoutes: [
                    { label: "Bilingual Books", href: "/bilingual-books-spanish" },
                    { label: "Books Like Classics", href: "/books-like-kids-classics" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/sel-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Social-Emotional Learning (SEL)",
                  subtitle: "Empathy, self-worth, and overcoming bedtime fear.",
                  categoryType: "topic",
                  description: "SEL-focused picture books addressing emotional regulation, bedtime anxiety, self-worth, and kindness.",
                  pedagogicalGoals: [
                    "Develop emotional awareness and empathy",
                    "Provide strategies for bedtime fear and anxiety"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/sel-books-kids")) || b.theme.includes("Character, Career & Life Skills") || b.theme.includes("Bedtime, Faith & Family"),
                  relatedRoutes: [
                    { label: "Bedtime & Read-Aloud", href: "/bedtime-books-kids" },
                    { label: "Christian & Faith-Based", href: "/christian-childrens-books" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/bedtime-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Bedtime & Read-Aloud Books",
                  subtitle: "Rhyming cadence and calming night tales.",
                  categoryType: "topic",
                  description: "Humorous rhyming stories and soothing bedtime tales perfect for family read-aloud routines.",
                  pedagogicalGoals: [
                    "Calm nighttime routine through rhythmic reading cadence",
                    "Build family bonding and literacy enjoyment"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/bedtime-books-kids")) || Boolean(b.linkedPages?.includes("/read-aloud-books-kids")) || b.theme.includes("Bedtime, Faith & Family"),
                  relatedRoutes: [
                    { label: "Beginning Readers K–2", href: "/early-reader-books-k2" },
                    { label: "SEL & Character", href: "/sel-books-kids" }
                  ]
                }}
              />
            } 
          />

          <Route 
            path="/read-aloud-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Read-Aloud Books for Kids",
                  subtitle: "Interactive stories, tongue twisters, and mysteries for classroom & family read-alouds.",
                  categoryType: "topic",
                  description: "Engaging picture books with rhythm, surprise endings, and visual clues that captivate groups during circle time or bedtime.",
                  pedagogicalGoals: [
                    "Build active listening and oral prediction skills",
                    "Spark group discussion and shared laughter"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/read-aloud-books-kids")) || Boolean(b.linkedPages?.includes("/bedtime-books-kids")) || b.theme.includes("Bedtime, Faith & Family"),
                  relatedRoutes: [
                    { label: "Bedtime Books", href: "/bedtime-books-kids" },
                    { label: "Beginning Readers K–2", href: "/early-reader-books-k2" }
                  ]
                }}
              />
            } 
          />

          {/* Shared Canonical Route: Christian & Faith-Based */}
          <Route 
            path="/christian-childrens-books" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Christian & Faith-Based Reading Guide",
                  subtitle: "Faith-inspired parables, family values, and moral building.",
                  categoryType: "topic",
                  description: "Values-based stories and parables that teach integrity, family love, faith, and moral character in clean, wholesome formats.",
                  pedagogicalGoals: [
                    "Instill core moral values (honesty, kindness, stewardship)",
                    "Encourage family discussion on faith and community responsibility"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/christian-childrens-books")) || b.theme.includes("Bedtime, Faith & Family") || Boolean(b.subtitle?.toLowerCase().includes("parable")),
                  relatedRoutes: [
                    { label: "Homeschool Guide", href: "/homeschool-guide" },
                    { label: "SEL & Character", href: "/sel-books-kids" }
                  ]
                }}
              />
            } 
          />

          {/* History, Culture & Biography */}
          <Route 
            path="/history-culture-books-kids" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "History, Culture & Biography",
                  subtitle: "Young American Immigrants & historical journeys.",
                  categoryType: "topic",
                  description: "Historical non-fiction and biography stories exploring US immigration, diverse cultural roots, and courage across eras.",
                  pedagogicalGoals: [
                    "Connect primary historical source accounts with engaging story narrative",
                    "Promote cultural empathy and historical geography"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/history-culture-books-kids")) || b.theme.includes("History, Culture & Biography"),
                  relatedRoutes: [
                    { label: "Chapter Books (7–14)", href: "/chapter-books-kids-7-14" },
                    { label: "Bilingual Books", href: "/bilingual-books-spanish" }
                  ]
                }}
              />
            } 
          />

          {/* Shared Canonical Route: Books Like Classics */}
          <Route 
            path="/books-like-kids-classics" 
            element={
              <ReadingGuideTemplatePage
                onSelectBook={handleSelectBook}
                config={{
                  title: "Books Like Children's Classics",
                  subtitle: "Modern alternatives to classic nursery rhymes & mysteries.",
                  categoryType: "topic",
                  description: "Fresh contemporary spins on classic nursery rhymes, farm stories, and detective mysteries tailored for today's diverse kids.",
                  pedagogicalGoals: [
                    "Compare classical rhyme structures with modern humorous twists",
                    "Provide accessible entry points into literary genre conventions"
                  ],
                  filterFn: (b) => Boolean(b.linkedPages?.includes("/books-like-kids-classics")) || b.theme.includes("Humor, Mystery & Adventure"),
                  relatedRoutes: [
                    { label: "Reading Guides Index", href: "/kids-reading-guides" },
                    { label: "Homeschool Guide", href: "/homeschool-guide" }
                  ]
                }}
              />
            } 
          />

          {/* Nav 3: Homeschool & Classroom */}
          <Route path="/homeschool-guide" element={<HomeschoolGuidePage />} />
          <Route path="/teaching-guides" element={<TeachingGuidesPage />} />
          <Route path="/learning-resources" element={<FreeResourcesPage onSelectBook={handleSelectBook} />} />

          {/* Nav 4: Free Resources */}
          <Route path="/free-childrens-books" element={<FreeResourcesPage onSelectBook={handleSelectBook} />} />
          <Route path="/online-story-secrets" element={<FreeResourcesPage onSelectBook={handleSelectBook} />} />
          <Route path="/easy-childrens-recipes" element={<FreeResourcesPage onSelectBook={handleSelectBook} />} />
          <Route path="/childrens-holiday-books" element={<FreeResourcesPage onSelectBook={handleSelectBook} />} />

          {/* Nav 5: About */}
          <Route path="/about-kids-world-books" element={<AboutPage />} />
          <Route path="/book-author-beckstrand" element={<AuthorPage />} />
          <Route path="/kids-book-reviews-awards" element={<ReviewsPage />} />
          <Route path="/media-press-releases" element={<PressPage />} />
          <Route path="/ai-policy" element={<AIPolicyPage />} />
          <Route path="/contact-sign-up" element={<ContactPage />} />
          <Route path="/privacy-policy-faq" element={<PrivacyPolicyPage />} />
          <Route path="/store-policies-faq" element={<PrivacyPolicyPage />} />

          {/* Fallback Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Book Details Modal */}
      <BookDetailModal book={selectedBook} onClose={handleCloseModal} />
    </div>
  );
};
