import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import { 
  BookOpen, Sparkles, Award, ShieldCheck, ArrowRight, Download, 
  Users, Building2, Heart, CheckCircle2, FileText, Globe, Star
} from 'lucide-react';

interface HomePageProps {
  onSelectBook: (book: Book) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectBook }) => {
  const featuredBooks = BOOKS_DATA.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Banner Section */}
      <section className="relative bg-[#FAF7F2] border-b border-[#E2D9CE] overflow-hidden pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white border border-[#E2D9CE] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0F2238] shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C2410C]" />
                <span>Award-Winning Human-Created Children’s Literature</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2238] tracking-tight leading-[1.15]">
                Stories That Build Literacy & Broaden Perspectives
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                KidsWorldBooks helps children become curious, confident, lifelong learners through engaging stories, bilingual resources, and cross-curricular STEM + literacy materials designed for home, library, and classroom use.
              </p>

              {/* 2 Main Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/buy-books"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F2238] hover:bg-[#0F4C3A] text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-md"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Books Catalog</span>
                </Link>

                <Link
                  to="/kids-reading-guides"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#0F2238] border border-[#E2D9CE] hover:border-[#0F2238] px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-xs"
                >
                  <span>Find Reading Guides</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Educational Value Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs text-[#334155] font-medium border-t border-[#E2D9CE]/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                  <span>Bilingual & ESL Resources</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                  <span>Dyslexic-Friendly Fonts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                  <span>Free STEM Lesson Plans</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-white p-4 rounded-2xl border border-[#E2D9CE] shadow-xl transform rotate-1 transition-transform hover:rotate-0">
                  <img
                    src="/images/all_covers_hero.jpg"
                    alt="KidsWorldBooks Collection Covers"
                    className="rounded-xl w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/all_covers_md.jpg";
                    }}
                  />
                  <div className="mt-3 flex items-center justify-between text-xs text-[#64748B] px-1">
                    <span className="font-semibold text-[#0F2238]">Multi-Genre Children's Catalog</span>
                    <span>Grades PreK–10</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Access by Profile (Educators, Librarians & Districts, Families) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238]">
            Tailored Pathways for Your Educational Needs
          </h2>
          <p className="text-sm text-[#64748B]">
            Select your role to quickly evaluate catalog suitability and pedagogical resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Educators */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4 hover:border-[#0F4C3A] transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0F4C3A]/10 text-[#0F4C3A] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Educators & Teachers</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Access ready-to-teach STEM & literacy units, vocabulary guides, bilingual story materials, and printable classroom activities.
              </p>
            </div>
            <Link
              to="/homeschool-guide"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C3A] hover:underline pt-2"
            >
              <span>Explore Educator Guide →</span>
            </Link>
          </div>

          {/* Librarians & District Directors */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4 hover:border-[#0F2238] transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0F2238]/10 text-[#0F2238] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Librarians & District Directors</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Review verified ISBN records, Lexile/AR ratings, distributor availability (Ingram, Follett), and purchase order procedures.
              </p>
            </div>
            <Link
              to="/contact-sign-up"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2238] hover:underline pt-2"
            >
              <span>Institutional Ordering & PO Info →</span>
            </Link>
          </div>

          {/* Families */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4 hover:border-[#C2410C] transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C2410C]/10 text-[#C2410C] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Homeschoolers & Families</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Discover bedtime read-alouds, wordless picture books, fun recipes, and age-graded reading selections that make reading at home fun.
              </p>
            </div>
            <Link
              to="/early-reader-books-k2"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:underline pt-2"
            >
              <span>Browse Family Reading Selections →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Verified Book Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E2D9CE] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Featured Catalog Selections</span>
            <h2 className="font-editorial text-3xl font-bold text-[#0F2238]">
              Books Built for Curiosity & Comprehension
            </h2>
          </div>
          <Link
            to="/buy-books"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2238] hover:text-[#C2410C] transition-colors"
          >
            <span>View All Titles in Store</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
          ))}
        </div>
      </section>

      {/* Critical Reviews & Press Acclaim */}
      <section className="bg-white border-y border-[#E2D9CE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">Critical Recognition</span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238] mt-1">
              What Reviewers & Librarians Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] space-y-3">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <blockquote className="text-sm italic text-[#334155]">
                "Delightful... humorous... bright."
              </blockquote>
              <div className="text-xs font-bold text-[#0F2238]">— School Library Journal</div>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] space-y-3">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <blockquote className="text-sm italic text-[#334155]">
                "Charming... full of polish and physical comedy."
              </blockquote>
              <div className="text-xs font-bold text-[#0F2238]">— Publisher’s Weekly</div>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] space-y-3">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <blockquote className="text-sm italic text-[#334155]">
                "Suspenseful without... getting too intense for young readers."
              </blockquote>
              <div className="text-xs font-bold text-[#0F2238]">— Kirkus Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks: Bilingual, Teaching Guides, Free Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Block 1: Bilingual & ESL */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E2D9CE] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F2238] text-white flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#0F2238]">Bilingual & ESL Literacy</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Books designed with side-by-side English and Spanish text, cultural stories, and dyslexia-friendly typography to support dual-language learners.
            </p>
            <Link to="/bilingual-books-spanish" className="inline-block text-xs font-bold text-[#C2410C] hover:underline">
              Explore Bilingual Books →
            </Link>
          </div>

          {/* Block 2: Teaching Guides */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E2D9CE] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F4C3A] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#0F2238]">Teaching Guides</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Download zero-prep curriculum materials combining reading comprehension, vocabulary puzzles, and STEM activities mapped to elementary standards.
            </p>
            <Link to="/teaching-guides" className="inline-block text-xs font-bold text-[#0F4C3A] hover:underline">
              Access Teaching Guides →
            </Link>
          </div>

          {/* Block 3: Free Resources */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E2D9CE] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#C2410C] text-white flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#0F2238]">Free Resources</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Enjoy free digital ebooks, online story secret solutions, healthy children's recipes, and printable activity sheets for home or school.
            </p>
            <Link to="/free-childrens-books" className="inline-block text-xs font-bold text-[#C2410C] hover:underline">
              Browse Free Index →
            </Link>
          </div>

        </div>
      </section>

      {/* Institutional Call Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F2238] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Institutional Orders & District Purchasing</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
              Looking for Bulk Orders, School Visits, or PO Purchases?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We work directly with school districts, public libraries, homeschool co-ops, and literacy programs across the US and internationally. Contact us for bulk discounts and author visit requests.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              to="/contact-sign-up"
              className="bg-[#C2410C] hover:bg-[#9A3412] text-white text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-colors"
            >
              Contact School Sales
            </Link>
            <Link
              to="/about-kids-world-books"
              className="bg-slate-800 hover:bg-slate-700 text-white text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-colors"
            >
              About the Author & Press
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
