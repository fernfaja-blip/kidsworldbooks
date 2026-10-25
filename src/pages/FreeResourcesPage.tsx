import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import {
  Gift,
  Sparkles,
  BookOpen,
  ExternalLink,
  Search,
  Utensils,
  Calendar,
  GraduationCap,
  CheckCircle2,
  Award
} from 'lucide-react';

interface Props {
  onSelectBook?: (book: Book) => void;
}

const STORY_SECRETS_LIST = [
  {
    book: "Big Black Seed",
    secret: "The Three Sisters of Indigenous Agriculture: Corn (stalk supports beans), Beans (fix nitrogen in soil), and Squash (broad leaves shade soil and retain moisture).",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/big-black-seed"
  },
  {
    book: "Laughter, Laughter – Now & After",
    secret: "Hidden Visual Challenge: Count 24 hidden circles and spheres across the 40-cover 20th-anniversary compilation pages!",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/laughter-laughter-now-after"
  },
  {
    book: "Samuel Sailing: The True Story of an Immigrant Boy",
    secret: "Historical Clues: Find all 7 modes of 19th-century transportation used on Samuel's journey from England to New Orleans and up the Mississippi River (walking, horse cart, sailing ship, rowboat, steamboat, train, covered wagon).",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/samuel-sailing-the-true-story-of-an-immigrant-boy"
  },
  {
    book: "Agnes's Rescue: Biography of an Immigrant Girl",
    secret: "True History Note: Agnes Caldwell traveled with the 1856 Willie Handcart Company across the Rocky Mountains and was rescued in deep Wyoming snow.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-biography-of-an-immigrant-girl"
  },
  {
    book: "Crumbs on the Stairs / Migas en las escaleras",
    secret: "Visual Counting Clue: Follow the tiny butterfly and the trail of crumbs from 1 to 10 in Spanish and English to discover who shared the snack!",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery-in-spanish-english"
  },
  {
    book: "GROW: How We Get Food from Our Garden",
    secret: "Garden Ecology Clue: Spot the pollinators (bees, butterflies, earthworms) working in the soil and blossoms on every spread.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/grow-how-we-get-food-from-our-garden"
  }
];

const HEALTHFUL_ACTIVITIES = [
  "1. Start a sunny windowsill or backyard container herb & vegetable garden with your child.",
  "2. Measure ingredients together using fractional cups (1/4, 1/3, 1/2) to build hands-on kitchen math.",
  "3. Turn overripe brown bananas into healthy banana bread or smoothies using Bad Bananas: A Story Cookbook for Kids.",
  "4. Visit a local farmers' market and let children interview a grower about how seeds sprout.",
  "5. Compare plant parts we eat: roots (carrots), stems (celery), leaves (spinach), flowers (broccoli), and seeds (corn/beans).",
  "6. Read dual-language food vocabulary in Spanish and English while setting the family table.",
  "7. Create a compost jar to observe how organic matter nourishes garden soil.",
  "8. Track daily water and sunshine needs on a student garden observation chart.",
  "9. Pair active outdoor games (Gopher Golf, Polar Bear Bowler) with nutritious homemade snacks.",
  "10. Share homegrown produce with a neighbor to connect gardening with community kindness."
];

const HOLIDAY_CALENDAR = [
  {
    holiday: "New Year's & Fresh Starts (January)",
    book: "Laughter, Laughter – Now & After",
    desc: "Celebrate the new year with 20 years of joyful illustrations and hidden picture challenges.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/laughter-laughter-now-after"
  },
  {
    holiday: "Groundhog Day & Golf / Animal Fun (February 2)",
    book: "Gopher Golf: A Wordless Picture Book",
    desc: "Burrowing critter antics that get kids laughing and narrating their own story.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/gopher-golf-a-wordless-picture-book"
  },
  {
    holiday: "Valentine's Day & Family Kindness (February 14)",
    book: "Crumbs on the Stairs / Migas en las escaleras",
    desc: "A warm bilingual mystery about sharing treats with someone you love.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery-in-spanish-english"
  },
  {
    holiday: "St. Patrick's Day & Colors (March 17)",
    book: "Great Cape o' Colors: Career Costumes for Kids",
    desc: "Explore every color of the rainbow and discover your child's bright talents.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/great-cape-o-colors-career-costumes-for-kids"
  },
  {
    holiday: "Easter & Spring Bunnies (March / April)",
    book: "The Case of the Missing Carrot Cake",
    desc: "Detectives Wilcox & Griswold track down a missing carrot cake on the farm!",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/the-case-of-the-missing-carrot-cake-a-wilcox-and-griswold-mystery"
  },
  {
    holiday: "Earth Day & Spring Gardening (April 22)",
    book: "GROW: How We Get Food from Our Garden & Butterfly Blink",
    desc: "Celebrate nature, pollinators, and planting seeds with USDA & Library of Congress selected titles.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/grow-how-we-get-food-from-our-garden"
  },
  {
    holiday: "Juneteenth & Cultural Heritage (June 19)",
    book: "4 Stories of Immigrant Kids & Multicultural Mysteries",
    desc: "Celebrate diverse American voices, courage, and cross-cultural friendship.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/4-stories-of-immigrant-kids"
  },
  {
    holiday: "Independence Day – Happy Birthday America 250! (July 4)",
    book: "Samuel Sailing & Agnes's Rescue (Young American Immigrants)",
    desc: "True stories of young immigrants who helped build the United States.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/samuel-sailing-the-true-story-of-an-immigrant-boy"
  },
  {
    holiday: "Pioneer Day (July 24)",
    book: "Agnes's Rescue: Biography of an Immigrant Girl",
    desc: "The inspiring true 1856 pioneer handcart rescue story.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-biography-of-an-immigrant-girl"
  },
  {
    holiday: "Labor Day & Career Exploration (September)",
    book: "The Bridge of the Golden Wood",
    desc: "A parable on how to earn a living, build skills, and serve the community.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/the-bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living"
  },
  {
    holiday: "Halloween & Spooky-Fun Mysteries (October 31)",
    book: "Sounds in the House: A Mystery & Milo's Dog Says 'Moink!'",
    desc: "Suspenseful (but not too scary!) nocturnal sounds and funny monster-free mysteries.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/sounds-in-the-house-a-mystery"
  },
  {
    holiday: "Thanksgiving, Harvest & Gratitude (November)",
    book: "Big Black Seed & Bad Bananas: A Story Cookbook",
    desc: "Celebrate the Three Sisters harvest (corn, beans, squash) and family baking.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/big-black-seed"
  },
  {
    holiday: "Christmas, Winter & Starlight (December)",
    book: "Bright Star, Night Star & Polar Bear Bowler",
    desc: "Gaze at winter stars and enjoy snowy polar bear bowling adventures.",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/bright-star-night-star-an-astronomy-story"
  }
];

export const FreeResourcesPage: React.FC<Props> = ({ onSelectBook }) => {
  const { pathname } = useLocation();

  // Sub-navigation tabs across all 5 resource routes
  const RESOURCE_TABS = [
    { label: "Free Children's Books", href: "/free-childrens-books" },
    { label: "Online Story Secrets", href: "/online-story-secrets" },
    { label: "Easy Children's Recipes", href: "/easy-childrens-recipes" },
    { label: "Learning Resources", href: "/learning-resources" },
    { label: "Holiday Books Calendar", href: "/childrens-holiday-books" }
  ];

  const matchingBooks = BOOKS_DATA.filter((b) =>
    b.linkedPages?.includes(pathname) ||
    (pathname === '/free-childrens-books' && b.format.includes('Free Ebooks'))
  ).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      <Breadcrumbs
        items={[
          { label: 'Free Resources', href: '/free-childrens-books' },
          ...(pathname !== '/free-childrens-books'
            ? [{ label: RESOURCE_TABS.find((t) => t.href === pathname)?.label || 'Resource' }]
            : [])
        ]}
      />

      {/* Sub-navigation bar */}
      <div className="flex flex-wrap gap-2 border-b border-[#E2D9CE] pb-4">
        {RESOURCE_TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                active
                  ? 'bg-[#0F2238] text-white shadow-xs'
                  : 'bg-white border border-[#E2D9CE] text-[#0F2238] hover:border-[#C2410C]'
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* VIEW 1: /online-story-secrets */}
      {pathname === '/online-story-secrets' && (
        <div className="space-y-8">
          <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              <Search className="w-3.5 h-3.5 text-[#C2410C]" />
              Interactive Reader Clues
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
              Online Story Secrets & Hidden Picture Clues
            </h1>
            <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
              Did you find the hidden clues inside Karl Beckstrand’s books? Every KidsWorldBooks story includes visual Easter eggs, historical secrets, or nature puzzles to reward observant readers!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STORY_SECRETS_LIST.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2410C]">
                    Story Secret #{idx + 1}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-[#0F2238]">{item.book}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{item.secret}</p>
                </div>
                <div className="pt-3 border-t border-[#E2D9CE]">
                  <a
                    href={item.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C3A] hover:underline"
                  >
                    <span>Get the Book on KidsWorldBooks.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: /easy-childrens-recipes */}
      {pathname === '/easy-childrens-recipes' && (
        <div className="space-y-8">
          <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5 text-[#0F4C3A]" />
              Garden-to-Table & Kitchen Math
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
              Easy Children’s Recipes, Gardening Tips & 10 Healthful Activities
            </h1>
            <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
              Inspired by <em>GROW: How We Get Food from Our Garden</em> (selected by the Georgia Farm Bureau, USDA via Virginia Tech, and the Library of Congress) and <em>Bad Bananas: A Story Cookbook for Kids</em> (praised by <em>The Horn Book</em>).
            </p>
          </div>

          <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl space-y-4">
            <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">
              10 Activities for Healthful Learning & Family Cooking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HEALTHFUL_ACTIVITIES.map((act, i) => (
                <div key={i} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#334155] leading-relaxed">{act}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: /learning-resources */}
      {pathname === '/learning-resources' && (
        <div className="space-y-8">
          <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-[#0F4C3A]" />
              Curriculum & Dyslexic-Friendly Resources
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
              Learning Resources: Career, Financial Literacy & Accessible Reading
            </h1>
            <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
              Practical classroom and home learning tools featuring state-recognized financial literacy parables, STEM astronomy guides, and books printed in dyslexic-friendly typography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
              <span className="bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F4C3A] text-xs font-bold px-2.5 py-1 rounded">
                State of Vermont Curriculum Selection
              </span>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                Financial Literacy: The Bridge of the Golden Wood
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Selected by the State of Vermont for primary school financial literacy curriculum! Helps students understand how skills, problem-solving, and service create value in a community.
              </p>
              <a
                href="https://kidsworldbooks.com/buy-books/ols/products/the-bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:underline pt-2"
              >
                <span>Order Book & Lesson Plan</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
              <span className="bg-[#FAF7F2] border border-[#E2D9CE] text-[#C2410C] text-xs font-bold px-2.5 py-1 rounded">
                Dyslexic-Friendly Typography
              </span>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                Ma MacDonald Flees the Farm (Dyslexic Edition)
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Available in specialized dyslexic-friendly font to reduce letter reversal and visual crowding while giving emerging readers a hilarious twist on a classic farm tale.
              </p>
              <a
                href="https://kidsworldbooks.com/buy-books/ols/products/ma-macdonald-flees-the-farm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:underline pt-2"
              >
                <span>View Dyslexic-Friendly Edition</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: /childrens-holiday-books */}
      {pathname === '/childrens-holiday-books' && (
        <div className="space-y-8">
          <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#C2410C]" />
              Year-Round Seasonal Reading
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
              Children’s Holiday & Seasonal Books Calendar
            </h1>
            <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
              Pair every major holiday and seasonal classroom celebration—including America's 250th Birthday, Earth Day, Thanksgiving, and Christmas—with an engaging KidsWorldBooks story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOLIDAY_CALENDAR.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="inline-block bg-[#FAF7F2] border border-[#E2D9CE] text-[#C2410C] text-[11px] font-bold px-2.5 py-1 rounded">
                    {item.holiday}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#0F2238]">{item.book}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-[#E2D9CE]">
                  <a
                    href={item.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2238] hover:text-[#C2410C] transition-colors"
                  >
                    <span>Buy Book for This Holiday</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 5 (Default): /free-childrens-books */}
      {pathname === '/free-childrens-books' && (
        <div className="space-y-8">
          <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5 text-[#C2410C]" />
              Verified Free Books & Ebooks
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
              Free Children’s Books, Permafree Ebooks & Classroom Resources
            </h1>
            <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
              Enjoy our verified free ebooks, free K–10 STEM + Literacy lesson plans, and interactive story resources. Remember: every print book purchased on KidsWorldBooks.com also includes a FREE companion ebook or lesson plan!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="bg-emerald-50 border border-emerald-200 text-[#0F4C3A] text-xs font-bold px-2.5 py-1 rounded">
                  Free Ebook Edition ($0.00)
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                  Agnes's Rescue: Biography of an Immigrant Girl (Ebook)
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Based on a true 1856 pioneer story from the Young American Immigrants series. Available free on major ebook platforms and in our store.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E2D9CE] flex flex-wrap gap-2">
                <a
                  href="https://kidsworldbooks.com/buy-books/ols/products/agness-rescue-ebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0F4C3A] hover:bg-[#0F2238] text-white text-xs px-4 py-2 rounded-lg font-bold transition-colors"
                >
                  <span>Get Free Ebook on Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="bg-emerald-50 border border-emerald-200 text-[#0F4C3A] text-xs font-bold px-2.5 py-1 rounded">
                  Free Ebook Edition ($0.00)
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                  Why Juan Can't Sleep: A Mystery (Ebook)
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Multicultural mystery picture book with Spanish-English vocabulary and surprising family humor.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E2D9CE] flex flex-wrap gap-2">
                <a
                  href="https://kidsworldbooks.com/buy-books/ols/products/why-juan-cant-sleep-ebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0F4C3A] hover:bg-[#0F2238] text-white text-xs px-4 py-2 rounded-lg font-bold transition-colors"
                >
                  <span>Get Free Ebook on Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Matching Books Section with Direct Checkout */}
      {matchingBooks.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-[#E2D9CE] pb-3">
            <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">
              Featured Books for This Resource
            </h2>
            <Link to="/buy-books" className="text-xs font-bold text-[#C2410C] hover:underline">
              Browse Full Store Catalog →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onSelectBook={onSelectBook || (() => {})}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
