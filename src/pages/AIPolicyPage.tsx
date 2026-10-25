import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const AIPolicyPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Human-Created AI Policy' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Editorial Integrity Guarantee • Est. 2004
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Premio Publishing & Gozo Books Human Creation & AI Policy
        </h1>
        <p className="text-base text-[#475569] leading-relaxed max-w-3xl">
          Premio Publishing & Gozo Books (KidsWorldBooks.com), established in 2004, pledges that 100% of our published children's stories, educational lesson plans, translations, and book illustrations are human-created by author Karl Beckstrand and professional human artists.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-[#0F2238]">Our Core Editorial & Copyright Principles</h2>
        
        <div className="space-y-4 text-xs text-[#334155]">
          <div className="flex items-start gap-3 bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE]">
            <CheckCircle2 className="w-5 h-5 text-[#0F4C3A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">100% Human Narrative & Bilingual Authorship</strong>
              Every plot, character, rhyme scheme, Spanish/English translation, and moral parable is authored directly from human experience, historical research, and classroom interaction. No generative AI models write or synthesize our book manuscripts.
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE]">
            <CheckCircle2 className="w-5 h-5 text-[#0F4C3A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">Authentic Human Illustration</strong>
              All artwork, watercolors, collages, and paintings are crafted by professional human illustrators—including Karl Beckstrand, David Hollenbach, Sanja Rescek, Channing Jones, Jordan C. Brun, Luis F. Sanz, and others. No AI image generators are used in our books.
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE]">
            <CheckCircle2 className="w-5 h-5 text-[#0F4C3A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">Educator-Crafted K–10 Lesson Plans</strong>
              Our STEM + Literacy teaching guides and mini-units are designed by experienced human educators for real-world classroom and homeschool instruction.
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D9CE]">
            <Lock className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">Prohibition on Unauthorized AI Training</strong>
              All text, book covers, illustrations, audio recordings, and downloadable lesson plans on KidsWorldBooks.com are protected by US and international copyright laws. Scraping or ingesting our copyrighted stories or artwork to train generative AI models without express written license is strictly prohibited.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
