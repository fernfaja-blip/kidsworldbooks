import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookOpen, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const LEVEL_GUIDES = [
  { label: 'Beginning Readers (K–2)', href: '/early-reader-books-k2', desc: 'Phonics, sight words, and simple bilingual storybooks.' },
  { label: 'Phonics & Decoding', href: '/phonics-books-k2', desc: 'Sound-letter association, rhyming, and articulation games.' },
  { label: 'Vocabulary Builders', href: '/vocab-books-kids', desc: 'Context-rich vocabulary expansion in English and Spanish.' },
  { label: 'Elementary (Grades 3–5)', href: '/elementary-books-3-4', desc: 'Multidisciplinary stories for 3rd, 4th, and 5th-grade readers.' },
  { label: 'Chapter Books (Ages 7–14)', href: '/chapter-books-kids-7-14', desc: 'Mysteries, history, and engaging narrative chapter books.' },
  { label: 'Bilingual & ESL', href: '/bilingual-books-spanish', desc: 'Dual-language English/Spanish stories for ESL learners.' },
  { label: 'Reluctant Readers', href: '/reluctant-reader-books', desc: 'Fast-paced, humorous books designed to spark reading joy.' },
  { label: 'Wordless Picture Books', href: '/wordless-picture-books', desc: 'Visual story prompts for creative writing and oral language.' }
];

const TOPIC_GUIDES = [
  { label: 'STEM & Literacy Units', href: '/stem-literacy-units', desc: 'Science, math counting, and nature mini-units for elementary.' },
  { label: 'Nature & Science', href: '/stem-nature-books-kids', desc: 'Astronomy, animal habitats, and environmental exploration.' },
  { label: 'Food & Cooking', href: '/food-books-kids', desc: 'Story cookbooks and kitchen math fun for young chefs.' },
  { label: 'Career & Money', href: '/career-money-books-kids', desc: 'Financial literacy parables and career talent exploration.' },
  { label: 'Animals & Pets', href: '/animal-books-kids', desc: 'Inspirational true pet rescue stories and animal adventures.' },
  { label: 'Sports & Active Games', href: '/sports-books-kids', desc: 'Activity stories promoting teamwork and physical fun.' },
  { label: 'Folktales & Fables', href: '/folktales-fables-kids', desc: 'Timeless character parables and cross-cultural stories.' },
  { label: 'SEL & Character', href: '/sel-books-kids', desc: 'Social-emotional learning, empathy, and family values.' },
  { label: 'Bedtime & Read-Aloud', href: '/bedtime-books-kids', desc: 'Rhythmic, relaxing bedtime rhymes for family reading.' },
  { label: 'Christian & Faith-Based', href: '/christian-childrens-books', desc: 'Faith-inspired parables and moral character building.' },
  { label: 'History, Culture & Biography', href: '/history-culture-books-kids', desc: 'Young American Immigrants historical biography series.' },
  { label: 'Books Like Classics', href: '/books-like-kids-classics', desc: 'Contemporary alternatives to classic children’s favorites.' }
];

export const KidsReadingGuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Children’s Reading Guides Index' }]} />

      {/* Header Overview */}
      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-[#C2410C]" />
          Pedagogical Reading Index
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Find the Right Books Based on How Your Child Learns
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Select a reading level guide or thematic topic below to discover curated recommendations, verified grade levels, educational discussion questions, and aligned lesson materials.
        </p>
      </div>

      {/* Section 1: By Reading Level */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2D9CE] pb-3">
          <h2 className="font-editorial text-2xl font-bold text-[#0F2238] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0F4C3A]"></span>
            <span>By Reading Level & Grade</span>
          </h2>
          <span className="text-xs text-[#64748B]">8 Level Guides</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEVEL_GUIDES.map((g) => (
            <Link
              key={g.href}
              to={g.href}
              className="bg-white p-5 rounded-xl border border-[#E2D9CE] hover:border-[#0F4C3A] hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <h3 className="font-editorial text-lg font-bold text-[#0F2238] group-hover:text-[#0F4C3A] transition-colors">
                  {g.label}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="text-xs font-bold text-[#0F4C3A] flex items-center gap-1 pt-2">
                <span>View Reading Guide</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Section 2: By Topic */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2D9CE] pb-3">
          <h2 className="font-editorial text-2xl font-bold text-[#0F2238] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C2410C]"></span>
            <span>By Topic & Interest</span>
          </h2>
          <span className="text-xs text-[#64748B]">12 Thematic Guides</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPIC_GUIDES.map((g) => (
            <Link
              key={g.href}
              to={g.href}
              className="bg-white p-5 rounded-xl border border-[#E2D9CE] hover:border-[#C2410C] hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <h3 className="font-editorial text-lg font-bold text-[#0F2238] group-hover:text-[#C2410C] transition-colors">
                  {g.label}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="text-xs font-bold text-[#C2410C] flex items-center gap-1 pt-2">
                <span>View Topic Guide</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
