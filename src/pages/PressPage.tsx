import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText, ExternalLink, Newspaper, Mail, Award } from 'lucide-react';

export const PressPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Media & Press Releases' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Newspaper className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Newsroom & Press Kit
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Media & Press Releases
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Official press releases, 20th-anniversary milestones, media interview contacts, and review copy requests for Premio Publishing & Gozo Books (KidsWorldBooks.com).
        </p>
      </div>

      {/* Featured Press Release */}
      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2D9CE] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
            FOR IMMEDIATE RELEASE • 20th Anniversary Milestone
          </span>
          <span className="text-xs text-[#64748B]">Premio Publishing & Gozo Books</span>
        </div>

        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2238]">
          Cross-Cultural Publisher Celebrates 20 Years — Releases 40-Cover Compilation “Laughter, Laughter – Now & After”
        </h2>

        <div className="space-y-4 text-sm text-[#334155] leading-relaxed">
          <p>
            <strong>HURRICANE, Utah</strong> — Celebrating two decades of multicultural children’s literacy, Premio Publishing & Gozo Books has released its 20th-anniversary compilation picture book, <em>Laughter, Laughter – Now & After</em>, featuring vibrant illustrations from 40 of its acclaimed children’s titles created since 2004.
          </p>
          <p>
            Founded by former media professor and bilingual author-illustrator Karl Beckstrand, Premio Publishing has produced more than 50 books and 300 educational products—including Spanish-English mysteries, wordless picture books, true immigrant biographies, STEM nature stories, and K–10 teacher lesson plans.
          </p>
          <p>
            “Our mission from day one has been to give families and classrooms joyful, non-violent stories where children of every background see themselves solving mysteries, exploring nature, and building vocabulary,” said Beckstrand.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E2D9CE] flex flex-wrap gap-3">
          <a
            href="https://kidsworldbooks.com/buy-books/ols/products/laughter-laughter-now-after"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#0F2238] hover:bg-[#0F4C3A] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            <span>View "Laughter, Laughter – Now & After" in Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://kidsworldbooks.com/buy-books/ols/products/retail-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span>Download Full Retail Catalog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Media Contact Box */}
      <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D9CE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Official Media & Publicist Contact</h3>
          <p className="text-xs text-[#475569]">
            For media interviews, podcast bookings, review copies, and school appearances, contact Hysen Sisco / Editorial Office:
          </p>
          <p className="text-xs font-mono text-[#0F2238] pt-1">
            info@premiopublishing.com • PO Box 64, Hurricane UT 84737 USA
          </p>
        </div>
        <Link
          to="/contact-sign-up"
          className="bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors shrink-0"
        >
          Send Media Inquiry →
        </Link>
      </div>
    </div>
  );
};
