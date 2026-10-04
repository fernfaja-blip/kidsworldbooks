import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Award, Star } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Kids Book Reviews & Awards' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-[#C2410C]" />
          Verified Critical Acclaim
        </span>
        <h1 className="font-editorial text-3xl font-bold text-[#0F2238]">
          Reviews & Awards
        </h1>
        <p className="text-sm text-[#475569]">
          Read verified trade journal reviews and honors for KidsWorldBooks titles.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-2">
          <div className="text-xs font-bold text-[#C2410C]">School Library Journal</div>
          <p className="text-sm italic text-[#334155]">"Delightful... humorous... bright."</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-2">
          <div className="text-xs font-bold text-[#C2410C]">Publisher’s Weekly</div>
          <p className="text-sm italic text-[#334155]">"Charming... full of polish and physical comedy."</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-2">
          <div className="text-xs font-bold text-[#C2410C]">Kirkus Reviews</div>
          <p className="text-sm italic text-[#334155]">"Suspenseful without... getting too intense for early readers."</p>
        </div>
      </div>
    </div>
  );
};
