import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';

export const AIPolicyPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Human-Created AI Policy' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Editorial Integrity Guarantee
        </span>
        <h1 className="font-editorial text-3xl font-bold text-[#0F2238]">
          KidsWorldBooks Human Creation Policy
        </h1>
        <p className="text-sm text-[#475569] leading-relaxed max-w-3xl">
          KidsWorldBooks and Premio Publishing pledge that 100% of our published children's stories, educational lesson plans, and illustrations are human-created by author Karl Beckstrand and professional human artists.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-6">
        <h2 className="font-editorial text-xl font-bold text-[#0F2238]">Our Core Editorial Principles</h2>
        
        <div className="space-y-4 text-xs text-[#334155]">
          <div className="flex items-start gap-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE]">
            <CheckCircle2 className="w-5 h-5 text-[#0F4C3A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">Human Narrative Authenticity</strong>
              Every plot, character, rhyme scheme, and moral dilemma is authored directly from human experience, research, and cultural interaction. No generative AI models write or synthesize our book text.
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE]">
            <CheckCircle2 className="w-5 h-5 text-[#0F4C3A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">Authentic Human Illustration</strong>
              All artwork, watercolors, and digital paintings are created by professional human illustrators (including Zeyu Chen, Grant White, Sandra De la Torre, and others). No AI image generators are used.
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE]">
            <CheckCircle2 className="w-5 h-5 text-[#0F4C3A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F2238] text-sm block mb-1">Verifiable Educational Standards</strong>
              Our lesson plans and reading guides are engineered by human educators for real-world classroom applicability, ensuring high pedagogical value for district directors and librarians.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
