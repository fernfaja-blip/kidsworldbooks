import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText, Download, CheckCircle, BookOpen, Sparkles } from 'lucide-react';

const TEACHING_GUIDES_LIST = [
  {
    title: "Crumbs on the Stairs Bilingual Math & Reading Unit",
    grade: "Grades K–4",
    subject: "Bilingual Math & Reading",
    desc: "Counting 1-10 in English/Spanish, spatial prepositions, food vocabulary flashcards, and mystery deduction worksheet.",
    fileSize: "PDF (2.4 MB)",
    url: "/free-childrens-books"
  },
  {
    title: "The Case of the Missing Carrot Cake Mystery Literacy Guide",
    grade: "Grades 2–6",
    subject: "Reading Comprehension & Critical Thinking",
    desc: "Detective vocabulary glossary, sequence timeline exercise, character trait analysis, and recipe baking activity.",
    fileSize: "PDF (3.1 MB)",
    url: "/free-childrens-books"
  },
  {
    title: "The Bridge of the Golden Wood Financial Literacy Unit",
    grade: "Grades 3–8",
    subject: "Financial Literacy & Social Studies",
    desc: "Introductory economics concepts (goods, services, trade, value), engineering bridge activity, and discussion prompts.",
    fileSize: "PDF (1.8 MB)",
    url: "/free-childrens-books"
  },
  {
    title: "Great Cape o' Colors Career & Community Unit",
    grade: "Grades K–4",
    subject: "Social-Emotional Learning & Career Awareness",
    desc: "Community career matching game, self-worth drawing exercise, and dual-language vocabulary builder.",
    fileSize: "PDF (2.0 MB)",
    url: "/free-childrens-books"
  }
];

export const TeachingGuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      <Breadcrumbs items={[{ label: 'Teaching Guides & Lesson Plans' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Educator Resource Center
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Free STEM + Literacy Teaching Guides & Mini-Units
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Ready-to-use classroom and homeschool lesson plans designed by educators to accompany KidsWorldBooks titles. Save hours of prep time with ready-to-print discussion guides, math games, and vocabulary exercises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEACHING_GUIDES_LIST.map((guide, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-4 flex flex-col justify-between hover:border-[#0F4C3A] transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#0F4C3A]">
                <span className="bg-[#FAF7F2] border border-[#E2D9CE] px-2.5 py-1 rounded">{guide.grade}</span>
                <span>{guide.subject}</span>
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">{guide.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{guide.desc}</p>
            </div>

            <div className="pt-3 border-t border-[#E2D9CE] flex items-center justify-between">
              <span className="text-[11px] text-[#94A3B8] font-medium">{guide.fileSize}</span>
              <Link
                to={guide.url}
                className="inline-flex items-center gap-1.5 bg-[#0F4C3A] hover:bg-[#0F2238] text-white text-xs px-4 py-2 rounded-lg font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Printable Unit</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
