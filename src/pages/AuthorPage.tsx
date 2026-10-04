import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Award, BookOpen, Users, Star, Calendar } from 'lucide-react';

export const AuthorPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Karl Beckstrand, Author' }]} />

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
            Award-Winning Author & Educator
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
            Karl Beckstrand
          </h1>

          <p className="text-sm text-[#475569] leading-relaxed">
            Karl Beckstrand is the award-winning author of over 50 multicultural, bilingual, and educational books for children. His work focuses on building vocabulary, phonics mastery, and confidence through humor, visual clues, and engaging storytelling.
          </p>

          <p className="text-sm text-[#475569] leading-relaxed">
            His titles have earned praise from <em>School Library Journal</em>, <em>Publisher’s Weekly</em>, and <em>Kirkus Reviews</em>, and are widely used in public school districts, ESL programs, and homeschool families across the United States.
          </p>

          <div className="pt-4 border-t border-[#E2D9CE] flex flex-wrap gap-4">
            <Link
              to="/contact-sign-up"
              className="bg-[#0F2238] hover:bg-[#0F4C3A] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Book Author School Visit / Speaking →
            </Link>
            <Link
              to="/buy-books"
              className="bg-white border border-[#E2D9CE] text-[#0F2238] text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#FAF7F2] transition-colors"
            >
              View Author's Complete Book Catalog
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
