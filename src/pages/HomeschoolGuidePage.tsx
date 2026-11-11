import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Sparkles,
  Globe
} from 'lucide-react';

const HOMESCHOOL_FAQS = [
  {
    q: "What age range do KidsWorldBooks titles cover?",
    a: "Ages 2–15 (preschool through high school). Wordless picture books and beginning readers start at age 2. Chapter books and young adult titles extend through age 15 and beyond."
  },
  {
    q: "Are KidsWorldBooks titles aligned to homeschool curriculum standards?",
    a: "Yes. Titles support English Language Arts (ELA), STEM, social studies, SEL, and world languages. Teaching guides include vocabulary activities, discussion questions, STEM extensions, writing prompts, and sequencing exercises aligned to common learning objectives."
  },
  {
    q: "Do I need to buy a lesson plan separately?",
    a: "No. Free teaching guides are available for most titles, and every print book purchase includes a FREE companion ebook or lesson plan. Every book also has a built-in activity (finding, counting, narration, cooking, stargazing, or geography)."
  },
  {
    q: "Are there bilingual options for Spanish-speaking families or ESL learners?",
    a: "Yes. KidsWorldBooks publishes bilingual Spanish-English titles with pronunciation guides in both languages. Wordless picture books are also ideal for multilingual families since they require no reading in any language to use."
  },
  {
    q: "Can I use these books across multiple children at different levels?",
    a: "Yes — that's one of the primary design goals. Wordless books work for ages 2–10 simultaneously (older students can write about what they see). The '4 Books for Kids' bundles include built-in differentiation for mixed-level classrooms and families."
  },
  {
    q: "Are the books available as ebooks?",
    a: "Yes. Most titles are available in ebook format through our direct store, Amazon Kindle, Apple Books, Barnes & Noble, Kobo, and OverDrive (library lending). Agnes's Rescue: The True Story of an Immigrant Girl is permanently free on Kindle."
  }
];

export const HomeschoolGuidePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Best Books for Homeschool Families (Start Here)' }]} />

      {/* Hero Banner */}
      <div className="bg-white border border-[#E2D9CE] p-8 sm:p-10 rounded-2xl shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#0F4C3A]" />
            Start Here • 22 Years • 300+ Literacy Products
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
            What Books Make Homeschool Kids Love Learning — Without a Battle?
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            KidsWorldBooks titles are built to feel like a game, a mystery, or an adventure — never a lesson — so children ask for them instead of having to be pushed. Because the learning is hidden inside the fun, children who resist reading engage anyway.
          </p>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Trusted by the Library of Congress, the USDA, Vermont schools, and Follett school distributors — used in classrooms, libraries, and homeschool programs worldwide.
          </p>
          <blockquote className="bg-[#FAF7F2] border-l-4 border-[#C2410C] p-4 rounded-r-xl text-xs italic text-[#334155]">
            “If someone could just deliver the best content without me having to sort through it.” — <strong className="not-italic text-[#0F2238]">Homeschool Parent</strong>
          </blockquote>
        </div>

        <div className="lg:col-span-5">
          <img
            src="/images/airo/pages_homeschool-guide_hero.jpg"
            alt="Homeschool reading with KidsWorldBooks"
            className="w-full h-auto rounded-xl border border-[#E2D9CE] shadow-md object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/all_covers_hero.jpg";
            }}
          />
        </div>
      </div>

      {/* Which of these sounds most like you right now? */}
      <div className="space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-[#0F2238] border-b border-[#E2D9CE] pb-3">
          Which of These Sounds Most Like You Right Now?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/reluctant-reader-books"
            className="bg-white p-6 rounded-xl border border-[#E2D9CE] hover:border-[#C2410C] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <span className="text-2xl">📚</span>
              <h3 className="font-editorial text-lg font-bold text-[#0F2238] group-hover:text-[#C2410C]">
                “My child resists reading or learning”
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Fast-paced mysteries, visual clues, and wordless books that remove decoding frustration.
              </p>
            </div>
            <span className="text-xs font-bold text-[#C2410C] flex items-center gap-1">
              <span>Start with reluctant reader & humor titles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            to="/kids-reading-guides"
            className="bg-white p-6 rounded-xl border border-[#E2D9CE] hover:border-[#0F4C3A] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <span className="text-2xl">🌍</span>
              <h3 className="font-editorial text-lg font-bold text-[#0F2238] group-hover:text-[#0F4C3A]">
                “I want curriculum-connected books by subject”
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Explore STEM, nature, gardening, career & financial literacy, and US immigrant history guides.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0F4C3A] flex items-center gap-1">
              <span>Browse by topic & reading level</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            to="/literacy-units"
            className="bg-white p-6 rounded-xl border border-[#E2D9CE] hover:border-[#0F2238] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <span className="text-2xl">✨</span>
              <h3 className="font-editorial text-lg font-bold text-[#0F2238]">
                “I’m building a complete homeschool reading list”
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Browse our themed “4 Books for Kids” collections and full 167-product store catalog.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0F2238] flex items-center gap-1">
              <span>See all book collections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Fastest Paths by Level, Subject & Format */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4">
          <h3 className="font-editorial text-xl font-bold text-[#0F2238] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#0F4C3A]" />
            <span>By Reading Level (Ages 2–15)</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-[#334155]">
            <li>
              <strong className="text-[#0F2238] block">Just starting out (Ages 2–6):</strong>
              <Link to="/wordless-picture-books" className="text-[#0F4C3A] hover:underline">Wordless Picture Books</Link> •{' '}
              <Link to="/early-reader-books-k2" className="text-[#0F4C3A] hover:underline">Beginning Readers (K–2)</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Building confidence (Ages 5–9):</strong>
              <Link to="/phonics-books-k2" className="text-[#0F4C3A] hover:underline">Phonics & Decoding</Link> •{' '}
              <Link to="/vocab-books-kids" className="text-[#0F4C3A] hover:underline">Vocabulary Builders</Link> •{' '}
              <Link to="/bedtime-books-kids" className="text-[#0F4C3A] hover:underline">Read-Aloud Books</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Growing independence (Ages 7–12):</strong>
              <Link to="/elementary-books-3-4" className="text-[#0F4C3A] hover:underline">Elementary (Grades 3–5)</Link> •{' '}
              <Link to="/reluctant-reader-books" className="text-[#0F4C3A] hover:underline">Reluctant Readers</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Ready for longer reads (Ages 10+):</strong>
              <Link to="/chapter-books-kids-7-14" className="text-[#0F4C3A] hover:underline">Chapter Books & YA (Ages 7–14)</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Dual-language learning:</strong>
              <Link to="/bilingual-books-spanish" className="text-[#0F4C3A] hover:underline">Bilingual Spanish-English Titles</Link>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4">
          <h3 className="font-editorial text-xl font-bold text-[#0F2238] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#C2410C]" />
            <span>By Subject or Unit Theme</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-[#334155]">
            <li>
              <strong className="text-[#0F2238] block">Science, nature, and food:</strong>
              <Link to="/stem-nature-books-kids" className="text-[#C2410C] hover:underline">STEM & Nature</Link> •{' '}
              <Link to="/food-books-kids" className="text-[#C2410C] hover:underline">Food & Cooking</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">History, cultures, and biography:</strong>
              <Link to="/history-culture-books-kids" className="text-[#C2410C] hover:underline">History, Culture & Biography</Link> •{' '}
              <Link to="/folktales-fables-kids" className="text-[#C2410C] hover:underline">Folktales & Fables</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Character, career, and life skills:</strong>
              <Link to="/career-money-books-kids" className="text-[#C2410C] hover:underline">Career & Money</Link> •{' '}
              <Link to="/sel-books-kids" className="text-[#C2410C] hover:underline">SEL & Character</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Faith and family:</strong>
              <Link to="/christian-childrens-books" className="text-[#C2410C] hover:underline">Christian & Faith-Based</Link> •{' '}
              <Link to="/bedtime-books-kids" className="text-[#C2410C] hover:underline">Bedtime & Read-Aloud</Link>
            </li>
            <li>
              <strong className="text-[#0F2238] block">Humor, mystery, and active fun:</strong>
              <Link to="/sports-books-kids" className="text-[#C2410C] hover:underline">Sports</Link> •{' '}
              <Link to="/animal-books-kids" className="text-[#C2410C] hover:underline">Animals & Pets</Link>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4">
          <h3 className="font-editorial text-xl font-bold text-[#0F2238] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0F4C3A]" />
            <span>By Format & Bundles</span>
          </h3>
          <ul className="space-y-3 text-xs text-[#334155]">
            <li className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E2D9CE]">
              <strong className="text-[#0F2238] block">Four books in one volume:</strong>
              <span>Browse themed “4 Books for Kids” collections for sustained learning.</span>
              <Link to="/literacy-units" className="block font-bold text-[#0F4C3A] hover:underline mt-1">
                Browse “4 Books for Kids” Units →
              </Link>
            </li>
            <li className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E2D9CE]">
              <strong className="text-[#0F2238] block">Free to start:</strong>
              <span>Free children’s ebooks, story secrets, and K–10 lesson plans.</span>
              <Link to="/free-childrens-books" className="block font-bold text-[#0F4C3A] hover:underline mt-1">
                Get Free Children’s Books →
              </Link>
            </li>
            <li className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E2D9CE]">
              <strong className="text-[#0F2238] block">Complete Store Catalog:</strong>
              <span>Shop all 167 individual picture books, chapter books, and lesson plans.</span>
              <Link to="/buy-books" className="block font-bold text-[#C2410C] hover:underline mt-1">
                Shop All Books →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* A Note from Karl Beckstrand */}
      <div className="bg-[#0F2238] text-white p-8 sm:p-10 rounded-2xl space-y-4">
        <h2 className="font-editorial text-2xl font-bold">A Note from Karl Beckstrand</h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
          <p>
            “I spent eleven years teaching college media and years before that teaching English to immigrants in California and Utah. Before that I was a recruiter in Silicon Valley, watching talented people struggle to communicate their value. What I learned in all three jobs is the same thing: people — children especially — don’t resist learning. They resist being taught.”
          </p>
          <p>
            “Every book I’ve written since 2004 is built around that idea. The mystery is a grammar lesson. The wordless picture book is a vocabulary lesson. The fish fable is a career lesson. None of them announce what they’re doing. They just work. That’s what I want for your child.”
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold text-amber-300">
            — Karl Beckstrand, Founder, Premio Publishing / KidsWorldBooks
          </span>
          <Link
            to="/book-author-beckstrand"
            className="bg-white text-[#0F2238] px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors"
          >
            Learn More About Karl →
          </Link>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">
            <HelpCircle className="w-4 h-4" />
            <span>Homeschool FAQ</span>
          </span>
          <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-[#E2D9CE] border border-[#E2D9CE] rounded-xl overflow-hidden">
          {HOMESCHOOL_FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors"
                >
                  <span className="font-editorial font-bold text-sm sm:text-base text-[#0F2238]">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C2410C] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#475569] leading-relaxed bg-[#FAF7F2]/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
