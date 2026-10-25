import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Award, BookOpen, Users, Star, Calendar, ExternalLink, Briefcase, Mic } from 'lucide-react';

export const AuthorPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Karl Beckstrand, Author & Illustrator' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 sm:p-10 rounded-2xl shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-4 space-y-4">
          <img
            src="/images/karl_classroom.jpg"
            alt="Karl Beckstrand in classroom school visit"
            className="rounded-xl shadow-md border border-[#E2D9CE] w-full h-auto object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/all_covers_hero.jpg";
            }}
          />
          <div className="text-center text-xs text-[#64748B]">
            Author Karl Beckstrand engaging students during a school literacy visit
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#C2410C]" />
            Award-Winning Author, Illustrator & Media Professor
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
            Karl Beckstrand
          </h1>

          <p className="text-sm text-[#475569] leading-relaxed">
            Karl Beckstrand is the bestselling, award-winning author and illustrator of more than 50 multicultural, bilingual, and educational books (and over 300 learning resources, ebooks, audiobooks, and lesson plans) for children and young adults.
          </p>

          <p className="text-sm text-[#475569] leading-relaxed">
            Raised in San Jose, California, Karl has lived abroad in Taiwan and South America, studied Russian, and holds a bachelor’s degree in journalism (BYU) and a master’s degree in conflict resolution. A former college media professor, radio/TV journalist, and Silicon Valley technical writer, he founded Premio Publishing & Gozo Books in 2004 to showcase diverse characters and joyful learning.
          </p>

          <p className="text-sm text-[#475569] leading-relaxed">
            His titles have earned praise from <em>Publisher’s Weekly</em>, <em>The Horn Book</em>, <em>Kirkus Reviews</em>, <em>School Library Journal</em>, and <em>ForeWord Reviews</em>, and have been featured by the Library of Congress, USDA, State of Vermont, and major school districts nationwide.
          </p>

          <div className="pt-4 border-t border-[#E2D9CE] flex flex-wrap gap-3">
            <Link
              to="/contact-sign-up"
              className="bg-[#0F2238] hover:bg-[#0F4C3A] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Book Author School Visit / Speaking →
            </Link>
            <a
              href="https://kidsworldbooks.com/buy-books/ols/products/publishing-consultation-with-karl-beckstrand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>Publishing Consultation ($165/hr)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/buy-books"
              className="bg-white border border-[#E2D9CE] text-[#0F2238] text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#FAF7F2] transition-colors"
            >
              View Complete Book Catalog
            </Link>
          </div>
        </div>

      </div>

      {/* Speaking & Consultation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <div className="flex items-center gap-2 text-[#0F4C3A] font-bold text-xs uppercase tracking-wider">
            <Mic className="w-4 h-4" />
            <span>School Assemblies, Library Visits & Workshops</span>
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
            Interactive Student & Educator Presentations
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Karl conducts lively in-person and virtual presentations (in English or Spanish) for K–12 schools, libraries, and writing conferences. Topics include mystery writing, visual storytelling with wordless books, bilingual literacy, and how a book is made.
          </p>
          <Link to="/contact-sign-up" className="inline-block text-xs font-bold text-[#0F4C3A] hover:underline pt-1">
            Request Assembly Rates & Availability →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <div className="flex items-center gap-2 text-[#C2410C] font-bold text-xs uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>1-on-1 Author & Media Coaching</span>
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
            Media / Publishing Consultation with Karl Beckstrand
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Get personalized guidance on manuscript editing, children's book illustration layout, ISBN/library distribution, bilingual publishing, and book marketing from a 20-year indie publishing veteran ($165/hour).
          </p>
          <a
            href="https://kidsworldbooks.com/buy-books/ols/products/publishing-consultation-with-karl-beckstrand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:underline pt-1"
          >
            <span>Book a 1-Hour Consultation on KidsWorldBooks.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
};
