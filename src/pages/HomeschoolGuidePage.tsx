import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookOpen, CheckCircle, ArrowRight, Download, Users, Lightbulb, Compass, Award } from 'lucide-react';

export const HomeschoolGuidePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Homeschool & Classroom Start Here Guide' }]} />

      {/* Hero Banner */}
      <div className="bg-white border border-[#E2D9CE] p-8 sm:p-10 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Start Here: Educator & Parent Pathway
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Homeschool & Classroom Implementation Blueprint
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Welcome educators, homeschool leaders, and librarians! This page outlines our recommended cross-curricular pathways for using KidsWorldBooks materials to enhance reading comprehension, bilingual fluency, and STEM literacy.
        </p>
      </div>

      {/* Step-by-Step Pedagogical Steps */}
      <div className="space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-[#0F2238] border-b border-[#E2D9CE] pb-3">
          4 Steps to Integrating KidsWorldBooks in Your Curriculum
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0F2238] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Identify Learner Needs & Formats</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Determine if your students require phonics decoding (K–2), bilingual English-Spanish support, dyslexic-friendly typography, or high-interest mysteries for reluctant readers.
            </p>
            <Link to="/buy-books" className="inline-block text-xs font-bold text-[#C2410C] hover:underline">
              Filter Catalog by Reader Level →
            </Link>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0F4C3A] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Download Free STEM + Literacy Lesson Plans</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Access pre-made mini-units mapping reading passages to science experiments, math counting, and vocabulary quizzes with zero prep time.
            </p>
            <Link to="/teaching-guides" className="inline-block text-xs font-bold text-[#0F4C3A] hover:underline">
              Access Teaching Guides →
            </Link>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#C2410C] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Incorporate Cross-Cultural & Career Parables</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Use books like <em>The Bridge of the Golden Wood</em> or <em>Great Cape o' Colors</em> to facilitate discussions on financial literacy, career exploration, and empathy.
            </p>
            <Link to="/career-money-books-kids" className="inline-block text-xs font-bold text-[#C2410C] hover:underline">
              Explore Career & Financial Literacy Titles →
            </Link>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Request District PO or Bulk Author Visits</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              We support school purchase orders, library vendor ordering (Ingram/Follett), and interactive virtual or in-person author visits with Karl Beckstrand.
            </p>
            <Link to="/contact-sign-up" className="inline-block text-xs font-bold text-[#0F2238] hover:underline">
              Contact School Sales & Ordering →
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};
