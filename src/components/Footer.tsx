import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ShieldCheck, Heart, ExternalLink, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2238] text-slate-300 pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/80">
          
          {/* Col 1: Brand & Institutional Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="KidsWorldBooks" className="h-10 w-auto bg-white/90 p-1 rounded" />
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-bold text-white tracking-tight">KidsWorldBooks</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Premio Publishing Imprint</span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Providing award-winning, human-created stories and cross-curricular STEM + literacy materials that help children become curious, confident, lifelong readers across cultures and languages.
            </p>

            {/* Human-Created Guarantee */}
            <div className="inline-flex items-center gap-2 bg-[#0F4C3A]/60 border border-[#10B981]/30 rounded-lg px-3 py-2 text-xs text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Human-Created Storytelling & Editorial Guarantee</span>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>PO Box 64, Hurricane UT 84737 USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Distributors: Ingram, Follett, Hertzberg, Amazon, B&N, Target, Walmart</span>
              </div>
            </div>
          </div>

          {/* Col 2: Shop Catalog */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-700 pb-2">
              Shop Catalog
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/buy-books" className="hover:text-white transition-colors">Complete Book Store</Link></li>
              <li><Link to="/buy-books?readerLevel=Beginning Readers (K–2)" className="hover:text-white transition-colors">Beginning Readers (K–2)</Link></li>
              <li><Link to="/buy-books?readerLevel=Elementary (Grades 3–5)" className="hover:text-white transition-colors">Elementary (Grades 3–5)</Link></li>
              <li><Link to="/buy-books?readerLevel=Chapter Books %26 YA (Ages 7–14)" className="hover:text-white transition-colors">Chapter Books (7–14)</Link></li>
              <li><Link to="/buy-books?readerLevel=Bilingual %26 ESL" className="hover:text-white transition-colors">Bilingual & ESL</Link></li>
              <li><Link to="/buy-books?format=Bundles %26 Series" className="hover:text-white transition-colors">Book Sets & Bundles</Link></li>
            </ul>
          </div>

          {/* Col 3: Reading Guides */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-700 pb-2">
              Reading Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/kids-reading-guides" className="hover:text-white transition-colors font-medium text-amber-400">Guides Index</Link></li>
              <li><Link to="/early-reader-books-k2" className="hover:text-white transition-colors">Early Readers K–2</Link></li>
              <li><Link to="/bilingual-books-spanish" className="hover:text-white transition-colors">Bilingual Spanish</Link></li>
              <li><Link to="/vocab-books-kids" className="hover:text-white transition-colors">Vocabulary Builders</Link></li>
              <li><Link to="/reluctant-reader-books" className="hover:text-white transition-colors">Reluctant Readers</Link></li>
              <li><Link to="/stem-literacy-units" className="hover:text-white transition-colors">STEM & Literacy Units</Link></li>
              <li><Link to="/sel-books-kids" className="hover:text-white transition-colors">SEL & Character Books</Link></li>
            </ul>
          </div>

          {/* Col 4: Institutional & About */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-700 pb-2">
              About & Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about-kids-world-books" className="hover:text-white transition-colors">About KidsWorldBooks</Link></li>
              <li><Link to="/book-author-beckstrand" className="hover:text-white transition-colors">Karl Beckstrand, Author</Link></li>
              <li><Link to="/kids-book-reviews-awards" className="hover:text-white transition-colors">Reviews & Media Awards</Link></li>
              <li><Link to="/media-press-releases" className="hover:text-white transition-colors">Media & Press Kit</Link></li>
              <li><Link to="/ai-policy" className="hover:text-white transition-colors">AI & Human Creation Policy</Link></li>
              <li><Link to="/contact-sign-up" className="hover:text-white transition-colors">Contact & School Sign Up</Link></li>
              <li><Link to="/privacy-policy-faq" className="hover:text-white transition-colors">Store Policies & FAQ</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} KidsWorldBooks / Premio Publishing. All rights reserved. Built with editorial clarity and accessibility.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy-faq" className="hover:text-white">Privacy Policy</Link>
            <Link to="/privacy-policy-faq" className="hover:text-white">Terms of Use</Link>
            <Link to="/ai-policy" className="hover:text-white">AI Policy</Link>
            <Link to="/contact-sign-up" className="hover:text-white">School Orders</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
