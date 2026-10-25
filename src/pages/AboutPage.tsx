import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Award, Globe, Heart, Building2, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'About KidsWorldBooks' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 sm:p-10 rounded-2xl shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#0F4C3A]" />
            Established 2004 • Premio Publishing & Gozo Books Imprint
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-[#C2410C] font-bold text-xs px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            WARNING: May cause giggles!
          </span>
        </div>
        
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          About KidsWorldBooks (Premio Publishing & Gozo Books)
        </h1>

        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Since 2004, our authors, illustrators, and educators have developed more than 300 books and learning products—including picture books, bilingual Spanish-English mysteries, wordless storytelling books, chapter books, ebooks, audiobooks, and K–10 STEM + Literacy lesson plans.
        </p>

        <p className="text-sm text-[#475569] max-w-3xl leading-relaxed">
          Premio Publishing & Gozo Books (“joy” in Spanish) creates non-violent, family-friendly stories featuring diverse characters of color, relatable humor, hidden visual clues, and real-world learning.
        </p>

        {/* What Kids Gain */}
        <div className="bg-[#FAF7F2] border border-[#E2D9CE] p-6 rounded-xl space-y-4">
          <h2 className="font-editorial text-xl font-bold text-[#0F2238]">
            What Kids, Families & Classrooms Gain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <span><strong>Stronger Vocabulary & Comprehension:</strong> Contextual English & Spanish words, phonics, and tongue twisters.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <span><strong>Cross-Cultural Empathy:</strong> Multicultural protagonists and true US immigrant biographies.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <span><strong>STEM, Nature & Financial Literacy:</strong> Hands-on garden science, astronomy, kitchen math, and career parables.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <span><strong>Accessible for Every Learner:</strong> Wordless books for oral language and titles in dyslexic-friendly fonts.</span>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E2D9CE]">
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Multicultural & Bilingual</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Books written in dual-language English/Spanish formats with cultural depth, pronunciation guides, and real-world vocabulary.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Institutional Trust</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Selected by the State of Vermont, USDA (via Virginia Tech), Library of Congress, Georgia Farm Bureau, and Alberta Health Services.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-bold text-[#0F2238]">100% Human Created</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Every story, illustration, and lesson plan is crafted by human authors, artists, and educators—never generative AI.
            </p>
          </div>
        </div>

        <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-[#0F2238] text-sm">Publisher Contact & Wholesale Distribution</h4>
            <p className="text-xs text-[#64748B]">
              PO Box 64, Hurricane UT 84737 USA • Distributed via Ingram, Follett/Baker & Taylor, Brodart, Mackin, Barnes & Noble, and Amazon.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://kidsworldbooks.com/buy-books/ols/products/retail-catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E2D9CE] text-[#0F2238] text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Retail Catalog</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link to="/contact-sign-up" className="bg-[#0F2238] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0F4C3A] transition-colors">
              Contact Publishing Office
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
