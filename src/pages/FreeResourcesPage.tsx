import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Download, BookOpen, Sparkles, CheckCircle2, FileText, Gift } from 'lucide-react';

const FREE_ITEMS = [
  {
    title: "Bright Star, Night Star: An Astronomy Story (Free Ebook)",
    type: "Free Digital Book",
    desc: "Full digital picture book edition introducing stars, constellations, and night sky science.",
    cta: "Download Ebook Edition",
    href: "/buy-books?format=Free Ebooks"
  },
  {
    title: "Online Story Secrets & Hidden Clues",
    type: "Interactive Puzzle Key",
    desc: "Hidden picture keys, mystery solutions, and bonus secret codes for KidsWorldBooks titles.",
    cta: "View Story Secrets",
    href: "/online-story-secrets"
  },
  {
    title: "Easy Children's Recipes & Story Snacks",
    type: "Activity Guide",
    desc: "Kid-friendly cooking recipes paired with storybooks like Bad Bananas and Crumbs on the Stairs.",
    cta: "Explore Recipes",
    href: "/easy-childrens-recipes"
  },
  {
    title: "Printable Literacy Worksheets & Flashcards",
    type: "Classroom Materials",
    desc: "Bilingual English-Spanish sight word flashcards, coloring pages, and reading log charts.",
    cta: "Access Learning Resources",
    href: "/learning-resources"
  }
];

export const FreeResourcesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      <Breadcrumbs items={[{ label: 'Free Children’s Books & Literacy Resources' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Gift className="w-3.5 h-3.5 text-[#C2410C]" />
          Verified Free Materials
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Free Children’s Books, Activity Guides & Story Resources
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Explore our collection of confirmed free educational materials for home and classroom use. All materials are human-created and designed to foster reading comprehension and family engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FREE_ITEMS.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-4 flex flex-col justify-between hover:border-[#C2410C] transition-all">
            <div className="space-y-3">
              <span className="bg-[#FAF7F2] border border-[#E2D9CE] text-[#C2410C] text-xs font-bold px-2.5 py-1 rounded">
                {item.type}
              </span>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">{item.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
            </div>

            <div className="pt-3 border-t border-[#E2D9CE]">
              <Link
                to={item.href}
                className="inline-flex items-center gap-1.5 bg-[#0F2238] hover:bg-[#C2410C] text-white text-xs px-4 py-2 rounded-lg font-bold transition-colors"
              >
                <span>{item.cta} →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
