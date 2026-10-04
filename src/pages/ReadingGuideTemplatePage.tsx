import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookOpen, CheckCircle, ArrowRight, Download, Sparkles, FileText } from 'lucide-react';

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
  const filteredBooks = BOOKS_DATA.filter(config.filterFn);

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
      <div className="bg-white border border-[#E2D9CE] rounded-2xl p-8 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#C2410C]" />
            {config.categoryType === 'level' ? 'Reading Level Guide' : config.categoryType === 'topic' ? 'Thematic Topic Guide' : 'Educator & Classroom Resource'}
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
            {config.title}
          </h1>

          <p className="text-base text-[#475569] leading-relaxed">
            {config.description}
          </p>

          {/* Pedagogical Bullet Points */}
          <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE] space-y-2 mt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">Key Pedagogical Goals & Learning Outcomes</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
              {config.pedagogicalGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recommended Books Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2D9CE] pb-4">
          <div>
            <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">
              Recommended Titles for {config.title}
            </h2>
            <p className="text-xs text-[#64748B]">Showing verified human-created titles matching this guide</p>
          </div>
          <Link
            to="/buy-books"
            className="text-xs font-bold text-[#C2410C] hover:underline flex items-center gap-1"
          >
            <span>View All in Store Catalog</span>
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
            <p className="text-sm text-[#64748B]">No single-match titles found in this exact category view. Explore our complete catalog filtering system.</p>
            <Link to="/buy-books" className="inline-block bg-[#0F2238] text-white px-5 py-2 rounded-lg text-xs font-semibold">
              Browse All Catalog Titles
            </Link>
          </div>
        )}
      </div>

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
