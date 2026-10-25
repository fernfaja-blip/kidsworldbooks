import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import { 
  BookOpen, Sparkles, ArrowRight, Download, 
  Users, Building2, Heart, CheckCircle2, FileText, Globe, Star, Flag, Mail
} from 'lucide-react';

interface HomePageProps {
  onSelectBook: (book: Book) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectBook }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredBooks = BOOKS_DATA.slice(0, 6);
  const america250Books = BOOKS_DATA.filter((b) =>
    ['4-stories-of-immigrant-kids', 'agness-rescue-biography-of-an-immigrant-girl', 'samuel-sailing-the-true-story-of-an-immigrant-boy', 'horse-dog-adventures-in-early-california-short-stories-poems'].includes(b.slug)
  );

  const handleGuideSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

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
                <span>Award-Winning Kids’ Books & Literacy Resources • Since 2004</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2238] tracking-tight leading-[1.15]">
                KidsWorldBooks Helps Children Become Curious, Confident, Lifelong Learners
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                Family-friendly, human-created stories and learning materials across cultures, languages, and interactive formats—built for home, library, and classroom use.
              </p>

              {/* 2 Main Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/buy-books"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F2238] hover:bg-[#0F4C3A] text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-md"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Books</span>
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
                  <span>100% Human-Created</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                  <span>Built for Literacy & ESL</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                  <span>Ready-to-Teach K–10 Units</span>
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
                    <span className="font-semibold text-[#0F2238]">60+ Books & 300+ Literacy Products</span>
                    <span>Grades PreK–10</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Free STEM + Literacy Lesson Plans for K-10 Lead Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">
              Ready-to-Teach Mini-Units
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238]">
              Free STEM + Literacy Lesson Plans for K–10
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Save prep time with ready-to-use mini-units that combine reading, science, and vocabulary—used by teachers, parents, libraries, and ESL programs.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {subscribed ? (
              <div className="bg-[#FAF7F2] border border-[#0F4C3A] text-[#0F4C3A] px-5 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You can also browse all free guides directly on our Teaching Guides page.</span>
                <Link to="/teaching-guides" className="underline ml-1">Open Guides →</Link>
              </div>
            ) : (
              <form onSubmit={handleGuideSignup} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-96">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for free K–10 guides..."
                    className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl py-2.5 pl-10 pr-3 text-xs text-[#0F2238] focus:outline-none focus:ring-2 focus:ring-[#0F2238]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#0F4C3A] hover:bg-[#0F2238] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                >
                  GET GUIDES
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Find the right books based on how your child learns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Children’s Reading Guides</span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238]">
            Find the Right Books Based on How Your Child Learns
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Click below to explore curated children’s reading guides by learning stage and language need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/early-reader-books-k2" className="bg-white hover:bg-[#FAF7F2] border border-[#E2D9CE] hover:border-[#0F2238] p-5 rounded-xl flex items-center justify-between group transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#0F4C3A] block">Grades K–2</span>
              <span className="font-editorial font-bold text-base text-[#0F2238] group-hover:text-[#C2410C]">Learn to Read: K–2 Books</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/vocab-books-kids" className="bg-white hover:bg-[#FAF7F2] border border-[#E2D9CE] hover:border-[#0F2238] p-5 rounded-xl flex items-center justify-between group transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#0F4C3A] block">Language Growth</span>
              <span className="font-editorial font-bold text-base text-[#0F2238] group-hover:text-[#C2410C]">Build Reading & Communication Skills</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/bilingual-books-spanish" className="bg-white hover:bg-[#FAF7F2] border border-[#E2D9CE] hover:border-[#0F2238] p-5 rounded-xl flex items-center justify-between group transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#0F4C3A] block">Spanish–English</span>
              <span className="font-editorial font-bold text-base text-[#0F2238] group-hover:text-[#C2410C]">Bilingual & ESL Books</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/reluctant-reader-books" className="bg-white hover:bg-[#FAF7F2] border border-[#E2D9CE] hover:border-[#0F2238] p-5 rounded-xl flex items-center justify-between group transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#C2410C] block">Hi-Lo Ages 5–10</span>
              <span className="font-editorial font-bold text-base text-[#0F2238] group-hover:text-[#C2410C]">Engage Reluctant Readers</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/wordless-picture-books" className="bg-white hover:bg-[#FAF7F2] border border-[#E2D9CE] hover:border-[#0F2238] p-5 rounded-xl flex items-center justify-between group transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#C2410C] block">Visual Storytelling</span>
              <span className="font-editorial font-bold text-base text-[#0F2238] group-hover:text-[#C2410C]">Wordless Picture Books (K–5)</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/kids-reading-guides" className="bg-[#0F2238] hover:bg-[#0F4C3A] text-white p-5 rounded-xl flex items-center justify-between group transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase text-amber-300 block">Complete Directory</span>
              <span className="font-editorial font-bold text-base">Browse All Classroom Book Lists & Guides</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Quick Access by Profile (Educators, Librarians & Districts, Families) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Educators */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2D9CE] space-y-4 hover:border-[#0F4C3A] transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0F4C3A]/10 text-[#0F4C3A] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Educators & Teachers</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Access ready-to-teach STEM & literacy mini-units, vocabulary guides, bilingual story materials, and printable classroom activities.
              </p>
            </div>
            <Link
              to="/homeschool-guide"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C3A] hover:underline pt-2"
            >
              <span>Start Here: Educator & Homeschool Guide →</span>
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
                Selected by the State of Vermont, USDA (via Virginia Tech), Library of Congress, and Georgia Farm Bureau. Available via Ingram, Follett, Baker & Taylor, Brodart, and EBSCO.
              </p>
            </div>
            <Link
              to="/contact-sign-up"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2238] hover:underline pt-2"
            >
              <span>Institutional Ordering & Catalog Info →</span>
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
                Discover bedtime read-alouds, 4-book themed bundles, wordless picture books, healthy kid recipes, and online story secrets.
              </p>
            </div>
            <Link
              to="/literacy-units"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:underline pt-2"
            >
              <span>Explore 4-Book Family Collections →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Verified Book Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E2D9CE] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Browse Kids' Books by Age, Reading Level & Topic</span>
            <h2 className="font-editorial text-3xl font-bold text-[#0F2238]">
              Featured KidsWorldBooks Titles
            </h2>
          </div>
          <Link
            to="/buy-books"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2238] hover:text-[#C2410C] transition-colors"
          >
            <span>See All 60+ Kids World Books</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
          ))}
        </div>
      </section>

      {/* Happy Birthday America - 250! Section (Synced from live site) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2D9CE] pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                <Flag className="w-3.5 h-3.5" />
                <span>American History & Heritage</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238]">
                Happy Birthday America – 250!
              </h2>
              <p className="text-xs sm:text-sm text-[#475569]">
                See true historical biographies and stories that help tell the story of the United States (1856–1926):
              </p>
            </div>
            <Link
              to="/history-culture-books-kids"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2238] hover:text-[#C2410C] shrink-0"
            >
              <span>Explore History, Culture & Biography Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {america250Books.map((book) => (
              <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
            ))}
          </div>
        </div>
      </section>

      {/* Stories That Build Literacy and Broaden Perspectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E2D9CE] rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">Why Families and Educators Choose KidsWorldBooks</span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238]">
              Stories That Build Literacy and Broaden Perspectives
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Books that reflect multiple languages and world cultures help children build stronger reading and communication skills while expanding how they see the planet. These thoughtfully created books focus on meaningful storytelling, engaging illustrations, and human connection.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#334155]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                <span>Strengthen vocabulary through real-world context</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                <span>Encourage cultural awareness, values, and family</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                <span>Support bilingual and dual-language learners</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                <span>Help all children engage more deeply with fiction & nonfiction</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE]">
              <h4 className="font-bold text-xs text-[#0F2238] uppercase tracking-wider">Human-Created</h4>
              <p className="text-xs text-[#475569] mt-1">Interactive stories children enjoy—100% authored and illustrated by human creators.</p>
            </div>
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE]">
              <h4 className="font-bold text-xs text-[#0F4C3A] uppercase tracking-wider">Built for Literacy</h4>
              <p className="text-xs text-[#475569] mt-1">Vocabulary, phonics, comprehension, discussion, and dyslexic-friendly typography.</p>
            </div>
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE]">
              <h4 className="font-bold text-xs text-[#C2410C] uppercase tracking-wider">Ready to Teach</h4>
              <p className="text-xs text-[#475569] mt-1">Free lesson plans, reading guides, and hands-on STEM activities for K–10.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Reviews & Press Acclaim */}
      <section className="bg-white border-y border-[#E2D9CE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">National Recognition</span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238] mt-1">
              Praise from Trade Reviewers & Library Journals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE] space-y-2.5">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
              </div>
              <blockquote className="text-xs italic text-[#334155]">
                "Delightful… humorous… bright."
              </blockquote>
              <div className="text-[11px] font-bold text-[#0F2238]">— School Library Journal</div>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE] space-y-2.5">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
              </div>
              <blockquote className="text-xs italic text-[#334155]">
                "Charming… full of polish and physical comedy."
              </blockquote>
              <div className="text-[11px] font-bold text-[#0F2238]">— Publisher’s Weekly</div>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE] space-y-2.5">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
              </div>
              <blockquote className="text-xs italic text-[#334155]">
                "Suspenseful without… getting too intense."
              </blockquote>
              <div className="text-[11px] font-bold text-[#0F2238]">— Kirkus Reviews</div>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE] space-y-2.5">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
              </div>
              <blockquote className="text-xs italic text-[#334155]">
                "Works effortlessly on every level… museum-quality artwork… raises the bar."
              </blockquote>
              <div className="text-[11px] font-bold text-[#0F2238]">— ForeWord Reviews</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/kids-book-reviews-awards" className="text-xs font-bold text-[#C2410C] hover:underline">
              Read All Reviews, Literary Awards & Institutional Selections →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Blocks: Bilingual, Teaching Guides, Free Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Block 1: Bilingual & ESL */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F2238] text-white flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#0F2238]">Bilingual & ESL Literacy</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Parallel English–Spanish text, pronunciation guides, and cultural stories designed for K–5 dual-language immersion, ESL/ELL classrooms, and family reading.
            </p>
            <Link to="/bilingual-books-spanish" className="inline-block text-xs font-bold text-[#C2410C] hover:underline">
              Explore Bilingual Books →
            </Link>
          </div>

          {/* Block 2: Teaching Guides */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F4C3A] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#0F2238]">Free Teaching Guides</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Low-prep K–10 curriculum materials combining reading comprehension, vocabulary puzzles, wordless storytelling, and hands-on STEM extensions.
            </p>
            <Link to="/teaching-guides" className="inline-block text-xs font-bold text-[#0F4C3A] hover:underline">
              Access Teaching Guides →
            </Link>
          </div>

          {/* Block 3: Free Resources */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#C2410C] text-white flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#0F2238]">Free Resources</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Enjoy free downloadable ebooks, online story secret keys, healthy children's recipes, and gardening tips selected by the USDA & Library of Congress.
            </p>
            <Link to="/free-childrens-books" className="inline-block text-xs font-bold text-[#C2410C] hover:underline">
              Browse Free Resources →
            </Link>
          </div>

        </div>
      </section>

      {/* Institutional Call Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F2238] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Today's Curious Readers Become Tomorrow's Thoughtful Citizens
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
              School District Orders, Library Catalogs & Author Visits
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Prices on KidsWorldBooks.com are for individuals, families, and non-profit schools/libraries. Others order via Amazon, Apple, B&N, Ingram, Follett, Hertzberg, Target, and Walmart.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="https://kidsworldbooks.com/buy-books/ols/products/retail-catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C2410C] hover:bg-[#9A3412] text-white text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-colors"
            >
              View Retail / School Catalog
            </a>
            <Link
              to="/contact-sign-up"
              className="bg-slate-800 hover:bg-slate-700 text-white text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-colors"
            >
              Contact & Sign Up
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
