import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Award, Globe, Heart, Building2, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'About KidsWorldBooks' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 sm:p-10 rounded-2xl shadow-xs space-y-6">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Publisher Overview
        </span>
        
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          About KidsWorldBooks (Premio Publishing Imprint)
        </h1>

        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          KidsWorldBooks is an independent children's book publisher dedicated to crafting engaging, human-created stories that build reading confidence, cross-cultural appreciation, and STEM literacy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E2D9CE]">
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Multicultural & Bilingual</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Books written in dual-language English/Spanish formats with cultural depth and real-world vocabulary.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Accessible Typography</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Titles printed in dyslexic-friendly fonts to support neurodiverse and early decoding readers.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Human Storytelling</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              100% written and illustrated by humans with verifiable research and educational standards.
            </p>
          </div>
        </div>

        <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-[#0F2238] text-sm">Publisher Contact & Mailing Address</h4>
            <p className="text-xs text-[#64748B]">PO Box 64, Hurricane UT 84737 USA</p>
          </div>
          <Link to="/contact-sign-up" className="bg-[#0F2238] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0F4C3A] transition-colors">
            Contact Publishing Office
          </Link>
        </div>
      </div>

    </div>
  );
};
