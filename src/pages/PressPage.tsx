import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText, Download } from 'lucide-react';

export const PressPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Media & Press Releases' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Press Kit
        </span>
        <h1 className="font-editorial text-3xl font-bold text-[#0F2238]">
          Media & Press Releases
        </h1>
        <p className="text-sm text-[#475569]">
          Media contact, press kit downloads, author bio graphics, and news releases.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
        <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Official Press Contacts</h3>
        <p className="text-xs text-[#64748B]">For media interviews, review copies, and author appearances:</p>
        <div className="text-xs text-[#0F2238] font-mono bg-[#FAF7F2] p-3 rounded border border-[#E2D9CE]">
          PO Box 64, Hurricane UT 84737 USA
        </div>
      </div>
    </div>
  );
};
