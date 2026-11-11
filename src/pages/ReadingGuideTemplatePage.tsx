import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { READING_GUIDES_LIVE_CONTENT } from '../data/readingGuidesData';
import { BookCard } from '../components/BookCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Users,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ReadingGuideConfig {
  title: string;
  subtitle: string;
  categoryType: 'level' | 'topic' | 'pedagogy';
  description: string;
  pedagogicalGoals: string[];
  filterFn: (book: Book) => boolean;
  relatedRoutes: { label: string; href: string }[];
}

interface Props {
  config: ReadingGuideConfig;
  onSelectBook: (book: Book) => void;
}

export const ReadingGuideTemplatePage: React.FC<Props> = ({ config, onSelectBook }) => {
  const { pathname } = useLocation();
  const liveContent = READING_GUIDES_LIVE_CONTENT[pathname];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filter main books first (prefer books/bundles over standalone $2.50 lesson plans in guide showcases unless fewer than 6)
  const allMatching = BOOKS_DATA.filter(config.filterFn);
  const primaryBooks = allMatching.filter((b) => !b.format.includes('Lesson Plans & Curricula'));
  const filteredBooks = (primaryBooks.length >= 4 ? primaryBooks : allMatching).slice(0, 18);

  const heading = liveContent?.h1 || config.title;
  const subheading = liveContent?.subheading || config.subtitle;
  const introText = liveContent?.intro || config.description;
  const featuresList =
    liveContent && liveContent.whatMakesStrongFeatures.length > 0
      ? liveContent.whatMakesStrongFeatures
      : config.pedagogicalGoals;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Reading Guides', href: '/kids-reading-guides' },
          { label: config.title }
        ]} 
      />

      {/* Hero Section */}
      <div className="bg-white border border-[#E2D9CE] rounded-2xl p-8 sm:p-10 shadow-xs space-y-5">
        <div className="max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#C2410C]" />
            {config.categoryType === 'level'
              ? 'Reading Level Guide'
              : config.categoryType === 'topic'
              ? 'Thematic Topic Guide'
              : 'Educator & Classroom Resource'}
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
            {heading}
          </h1>

          {subheading && (
            <p className="font-editorial text-lg font-semibold text-[#C2410C]">
              {subheading}
            </p>
          )}

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            {introText}
          </p>

          {/* Pedagogical Bullet Points */}
          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] space-y-3 mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">
              {liveContent?.whatMakesStrongHeading || 'Key Pedagogical Goals & Learning Outcomes'}
            </h2>
            {liveContent?.whatMakesStrongIntro && (
              <p className="text-xs text-[#475569] leading-relaxed">
                {liveContent.whatMakesStrongIntro}
              </p>
            )}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#334155]">
              {featuresList.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Why Teachers & Parents Choose These Books (if present in live content) */}
      {liveContent?.whyBody && (
        <div className="bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#0F2238]">
            {liveContent.whyHeading || 'Why Educators, Librarians & Parents Choose These Books'}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {liveContent.whyBody}
          </p>
        </div>
      )}

      {/* Recommended Books Section */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2D9CE] pb-4">
          <div>
            <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">
              Recommended Titles for {config.title}
            </h2>
            <p className="text-xs text-[#64748B]">
              Click <strong>Buy Now</strong> on any book to complete checkout directly on KidsWorldBooks.com
            </p>
          </div>
          <Link
            to="/buy-books"
            className="text-xs font-bold text-[#C2410C] hover:underline flex items-center gap-1"
          >
            <span>View Full 167-Item Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl border border-[#E2D9CE] text-center space-y-3">
            <p className="text-sm text-[#64748B]">
              Explore our complete catalog filtering system to find titles for this level.
            </p>
            <Link
              to="/buy-books"
              className="inline-block bg-[#0F2238] text-white px-5 py-2 rounded-lg text-xs font-semibold"
            >
              Browse All Catalog Titles
            </Link>
          </div>
        )}
      </div>

      {/* Low-Prep Classroom & Home Strategies + Learner Levels */}
      {liveContent && (liveContent.tips.length > 0 || liveContent.learnerLevels.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {liveContent.tips.length > 0 && (
            <div className="lg:col-span-7 bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Low-Prep Implementation</span>
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                {liveContent.tipsHeading || 'How to Use These Books (Low-Prep Strategies)'}
              </h3>
              <ul className="space-y-2.5 text-xs text-[#334155]">
                {liveContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-[#FAF7F2] p-3 rounded-lg border border-[#E2D9CE]">
                    <span className="font-bold text-[#C2410C] shrink-0">{idx + 1}.</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {liveContent.learnerLevels.length > 0 && (
            <div className="lg:col-span-5 bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#0F2238] text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#C2410C]" />
                <span>Differentiated Instruction</span>
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                Supporting Different Learners
              </h3>
              <div className="space-y-3">
                {liveContent.learnerLevels.map((lv, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] p-3.5 rounded-lg border border-[#E2D9CE] space-y-1">
                    <div className="text-xs font-bold text-[#0F2238]">{lv.level}</div>
                    <p className="text-xs text-[#475569] leading-relaxed">{lv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Editorial Press Quotes (if present) */}
      {liveContent && liveContent.pressQuotes.length > 0 && (
        <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#C2410C] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Verified Critical Praise</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {liveContent.pressQuotes.map((pq, idx) => (
              <blockquote
                key={idx}
                className="bg-white p-4 rounded-xl border border-[#E2D9CE] space-y-2 flex flex-col justify-between"
              >
                <p className="text-xs italic text-[#334155] leading-relaxed">“{pq.quote}”</p>
                <footer className="text-[11px] font-bold text-[#0F2238]">
                  — {pq.source}
                  {pq.title ? <span className="font-normal text-[#64748B]"> ({pq.title})</span> : null}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}

      {/* Frequently Asked Questions (FAQ) from Live Site */}
      {liveContent && liveContent.faqs.length > 0 && (
        <div className="bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">
              <HelpCircle className="w-4 h-4" />
              <span>Educator & Parent FAQ</span>
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E2D9CE] border border-[#E2D9CE] rounded-xl overflow-hidden">
            {liveContent.faqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
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
      )}

      {/* Cross Links to Related Guides */}
      <div className="bg-[#FAF7F2] border border-[#E2D9CE] p-6 rounded-xl space-y-4">
        <h3 className="font-editorial text-lg font-bold text-[#0F2238]">
          Explore Related Reading Guides & Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {config.relatedRoutes.map((route, i) => (
            <Link
              key={i}
              to={route.href}
              className="bg-white border border-[#E2D9CE] text-[#0F2238] hover:border-[#C2410C] hover:text-[#C2410C] px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              {route.label} →
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
