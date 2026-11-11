import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText, Download, CheckCircle, BookOpen, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface LessonPlanItem {
  title: string;
  bookTitle: string;
  grade: string;
  topic: string;
  desc: string;
  price: string;
  storeUrl: string;
  bookStoreUrl: string;
}

const TEACHER_GUIDE_TOPICS = [
  {
    id: 'All',
    title: 'All Topics (K–10)',
    subtitle: 'Complete collection of low-prep teacher guides & lesson plans'
  },
  {
    id: 'Wordless Storytelling & Oral Language',
    title: 'Wordless Storytelling & Oral Language',
    subtitle: 'Great for ESL, ELL, emerging readers, and writing workshops'
  },
  {
    id: 'Early Reading, Vocabulary & ESL',
    title: 'Early Reading, Vocabulary & ESL',
    subtitle: 'Bilingual Spanish-English, phonics, sight words, and tongue twisters'
  },
  {
    id: 'STEM, Nature & Food',
    title: 'STEM, Nature & Food',
    subtitle: 'Astronomy, gardening, habitats, and hands-on food math'
  },
  {
    id: 'Geography, History & Cultures',
    title: 'Geography, History & Cultures',
    subtitle: 'US immigration history, world countries, and cross-cultural parables'
  },
  {
    id: 'SEL & Communication',
    title: 'SEL & Communication',
    subtitle: 'Career awareness, overcoming fears, financial literacy, and empathy'
  }
];

const LESSON_PLANS_LIST: LessonPlanItem[] = [
  {
    title: "Crumbs on the Stairs – Bilingual Math & Reading Lesson Plan",
    bookTitle: "Crumbs on the Stairs / Migas en las escaleras",
    grade: "PreK–3",
    topic: "Early Reading, Vocabulary & ESL",
    desc: "Counting 1–10 in English and Spanish, spatial concepts, hidden butterfly clues, and deductive reasoning prompts.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=01967da2-aafb-7ff9-8bc2-c02a4b20d7df",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=01967d9b-d0a0-7dd6-9234-fb282059d349"
  },
  {
    title: "She Doesn't Want the Worms – Bilingual Cultural & Vocabulary Unit",
    bookTitle: "She Doesn't Want the Worms / Ella no quiere los gusanos",
    grade: "PreK–4",
    topic: "Early Reading, Vocabulary & ESL",
    desc: "ForeWord Reviews Top 10 bilingual mystery lesson plan covering food traditions, bilingual dialogue, and geography.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d632d-ec72-7018-a320-ede4f7dd0cad",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019ce813-7df4-72ca-82a6-7b24960b2e7e"
  },
  {
    title: "The Bridge of the Golden Wood – Financial Literacy & Economics Unit",
    bookTitle: "The Bridge of the Golden Wood: A Parable on How to Earn a Living",
    grade: "Grades 2–6",
    topic: "SEL & Communication",
    desc: "Selected by the State of Vermont for primary school curriculum. Teaches goods, services, trade, value creation, and career awareness.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=0195025a-6dfc-7eee-90ca-f66655d5a144",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019d0cf6-347e-743c-ae94-5cc5a98b932f"
  },
  {
    title: "GROW: How We Get Food from Our Garden – STEM & Nutrition Guide",
    bookTitle: "GROW: How We Get Food from Our Garden",
    grade: "Grades K–5",
    topic: "STEM, Nature & Food",
    desc: "Selected by USDA (via Virginia Tech), Library of Congress, and Georgia Farm Bureau. Covers plant life cycles, photosynthesis, and healthy recipes.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6327-989e-7154-bab3-0072fb1c65b7",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019cbffd-0751-76f4-b362-bdc82fef1693"
  },
  {
    title: "Bright Star, Night Star: An Astronomy Story – Space & Sky Unit",
    bookTitle: "Bright Star, Night Star: An Astronomy Story",
    grade: "Grades K–5",
    topic: "STEM, Nature & Food",
    desc: "Introduces stars, constellations, planets, and night sky observation paired with hands-on astronomy classroom prompts.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6327-9d02-74f3-9fcf-70123c57beb4",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019cbb21-e07e-730f-bd8d-e850a2f8de83"
  },
  {
    title: "Gopher Golf – Wordless Storytelling & Oral Language Unit",
    bookTitle: "Gopher Golf: A Wordless Picture Book",
    grade: "PreK–4",
    topic: "Wordless Storytelling & Oral Language",
    desc: "Scaffolded prompts for oral narration, creative writing, sequence mapping, and ESL vocabulary building without decoding barriers.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6328-7aaf-7272-9de8-0dfdc9678048",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019c90ec-a3b7-777c-a2c0-4b1f853f3116"
  },
  {
    title: "Butterfly Blink – Wordless Nature & Observation Lesson Plan",
    bookTitle: "Butterfly Blink: A Wordless Picture Book",
    grade: "PreK–4",
    topic: "Wordless Storytelling & Oral Language",
    desc: "Visual literacy, butterfly life cycles, descriptive adjectives, and student story-authoring exercises.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d632d-f61d-711e-97b5-fd0957b55ccc",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019cb58f-a76e-76ba-8cd4-5d0d6d13d77b"
  },
  {
    title: "Polar Bear Bowler – Wordless Sports & Action Verbs Guide",
    bookTitle: "Polar Bear Bowler: A Story Without Words",
    grade: "PreK–4",
    topic: "Wordless Storytelling & Oral Language",
    desc: "Praised by Publisher's Weekly! Action verbs, cause-and-effect sequencing, and arctic animal habitat discussion.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d632d-f22f-71af-92de-446ed2b70c13",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019d632c-57ef-71b8-861a-adc52cf9c1be"
  },
  {
    title: "Bad Bananas: A Story Cookbook for Kids – Kitchen Math & Health Unit",
    bookTitle: "Bad Bananas: A Story Cookbook for Kids",
    grade: "Grades K–5",
    topic: "STEM, Nature & Food",
    desc: "Praised by The Horn Book! Fraction measurements, food Ripening science, reducing food waste, and easy classroom recipes.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6327-6e2e-72b1-8d8e-d26743b4a406",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019d6328-7388-73ba-80af-3baf09bfed34"
  },
  {
    title: "Agnes's Rescue: Biography of an Immigrant Girl – US History Unit",
    bookTitle: "Agnes's Rescue (Young American Immigrants)",
    grade: "Grades 3–8",
    topic: "Geography, History & Cultures",
    desc: "True 1856 pioneer handcart journey from Scotland to Utah. Primary source empathy, US westward expansion, and resilience.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d632b-00cf-74e7-a06f-3e8e6d47cb63",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019cb585-67c9-703a-ac20-242f8eaee2ad"
  },
  {
    title: "Samuel Sailing: True Story of an Immigrant Boy – Geography & History",
    bookTitle: "Samuel Sailing (Young American Immigrants)",
    grade: "Grades 2–6",
    topic: "Geography, History & Cultures",
    desc: "Follows a young boy's 19th-century ocean voyage from England to New Orleans and up the Mississippi River using 7 modes of transport.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d632a-4916-763a-9d00-6c08d15d0ac1",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=01951bba-f31d-7001-ae01-00c167a03c08"
  },
  {
    title: "Anna's Prayer: True Story of an Immigrant Girl – European Immigration",
    bookTitle: "Anna's Prayer (Young American Immigrants)",
    grade: "Grades 3–8",
    topic: "Geography, History & Cultures",
    desc: "Explores Swedish immigration to America, family courage, cultural traditions, and historical geography.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6328-7549-71dc-84eb-0968f0c27f7d",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=01951bb9-fd4a-7001-ac6c-99b67d73c470"
  },
  {
    title: "It Ain't Flat: A Memorizable Book of Countries – World Geography Guide",
    bookTitle: "It Ain't Flat: A Memorizable Book of Countries",
    grade: "Grades 2–8",
    topic: "Geography, History & Cultures",
    desc: "Rhyming mnemonic geography guide helping students memorize continents, nations, and world capitals.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=0195025a-6dfc-7eee-90ca-f66655d5a144",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=0195ca02-4489-7445-97ab-3f56314e44b1"
  },
  {
    title: "Great Cape o' Colors – Career Exploration & Self-Worth Unit",
    bookTitle: "Great Cape o' Colors: Career Costumes for Kids",
    grade: "PreK–3",
    topic: "SEL & Communication",
    desc: "Color recognition, community helper professions, and recognizing each child's unique talents.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6327-9c80-7349-bf65-babf6bd39dc4",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=019d0c65-d9ba-73f6-b38e-cec839eb2fba"
  },
  {
    title: "Sounds in the House – Overcoming Bedtime Fear & SEL Guide",
    bookTitle: "Sounds in the House: A Mystery",
    grade: "PreK–3",
    topic: "SEL & Communication",
    desc: "Praised by Kirkus Reviews! Onomatopoeia sound words, critical thinking vs. fear of the dark, and calming bedtime discussion.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6328-7f30-700d-bdb9-e4b5129a1fb7",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=01951bb9-90d5-7002-8496-c283fa0b01a0"
  },
  {
    title: "The Case of the Missing Carrot Cake – Detective Comprehension Unit",
    bookTitle: "The Case of the Missing Carrot Cake (Wilcox & Griswold)",
    grade: "Grades 1–5",
    topic: "Early Reading, Vocabulary & ESL",
    desc: "Inference, predicting outcomes, character motives, and Farm detective vocabulary for early chapter readers.",
    price: "$2.50 (or Free with Book)",
    storeUrl: "https://kidsworldbooks.com/buy-books?product=019d6328-7ee5-74f6-9171-50e50387b10d",
    bookStoreUrl: "https://kidsworldbooks.com/buy-books?product=01951bb9-90d5-7002-8496-c283fa0b01a0"
  }
];

export const TeachingGuidesPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const filteredGuides = selectedTopic === 'All'
    ? LESSON_PLANS_LIST
    : LESSON_PLANS_LIST.filter((item) => item.topic === selectedTopic);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      <Breadcrumbs items={[{ label: 'Free Low-Prep Teacher Guides & Lesson Plans (K–10)' }]} />

      {/* Hero Section */}
      <div className="bg-white border border-[#E2D9CE] p-8 sm:p-10 rounded-2xl shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-[#0F4C3A]" />
            Classroom & Homeschool Resource Center
          </span>
          <span className="text-xs font-bold text-[#0F4C3A] bg-[#0F4C3A]/10 px-3 py-1 rounded-full">
            FREE Lesson Plan Included with Every Print Book Order!
          </span>
        </div>

        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Free Low-Prep Teacher Guides & Lesson Plans for Kids (K–10)
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Save hours of planning with ready-to-use STEM + Literacy lesson plans, discussion questions, vocabulary builders, and hands-on activities. Every print book purchased on KidsWorldBooks.com includes a companion lesson plan or ebook at no extra cost—or order individual printable guides directly below.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/contact-sign-up"
            className="inline-flex items-center gap-2 bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Sign Up for Free K–10 STEM + Literacy Starter Pack</span>
          </Link>
          <Link
            to="/literacy-units"
            className="inline-flex items-center gap-2 bg-[#0F2238] hover:bg-[#0F4C3A] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore "4 Books for Kids" Ready-to-Use Literacy Units</span>
          </Link>
        </div>
      </div>

      {/* 5 Teacher Guide Topics Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-editorial text-2xl font-bold text-[#0F2238] flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#C2410C]" />
            <span>Browse by Teacher Guide Topic</span>
          </h2>
          <span className="text-xs text-[#64748B] font-medium">Showing {filteredGuides.length} Lesson Plans</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TEACHER_GUIDE_TOPICS.map((t) => {
            const active = selectedTopic === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTopic(t.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  active
                    ? 'bg-[#0F2238] text-white border-[#0F2238] shadow-sm'
                    : 'bg-white text-[#0F2238] border-[#E2D9CE] hover:border-[#0F4C3A]'
                }`}
              >
                <div className="font-editorial font-bold text-sm">{t.title}</div>
                <div className={`text-[11px] mt-1 ${active ? 'text-slate-300' : 'text-[#64748B]'}`}>
                  {t.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lesson Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGuides.map((guide, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-4 flex flex-col justify-between hover:border-[#0F4C3A] transition-all shadow-2xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs font-bold">
                <span className="bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] px-2.5 py-1 rounded">
                  {guide.grade}
                </span>
                <span className="text-[#0F4C3A] text-right">{guide.topic}</span>
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">{guide.title}</h3>
              <p className="text-xs font-medium text-[#C2410C]">
                Companion Book: {guide.bookTitle}
              </p>
              <p className="text-xs text-[#475569] leading-relaxed">{guide.desc}</p>
            </div>

            <div className="pt-4 border-t border-[#E2D9CE] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#0F2238]">{guide.price}</span>
              <div className="flex items-center gap-2">
                <a
                  href={guide.bookStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#FAF7F2] hover:bg-[#E2D9CE] text-[#0F2238] border border-[#E2D9CE] text-xs px-3 py-2 rounded-lg font-semibold transition-colors"
                >
                  <span>View Book</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={guide.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0F4C3A] hover:bg-[#0F2238] text-white text-xs px-4 py-2 rounded-lg font-bold transition-colors"
                >
                  <span>Get Lesson Plan</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse All Lesson Plans on Official Store Banner */}
      <div className="bg-[#0F2238] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-editorial text-2xl font-bold">
            Need All 49+ Individual Book Lesson Plans?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every title in the KidsWorldBooks catalog has a dedicated printable lesson plan available on our official store—and remember, you receive a free lesson plan or ebook with every hardcover or paperback book purchase.
          </p>
        </div>
        <a
          href="https://kidsworldbooks.com/buy-books"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-colors shrink-0 inline-flex items-center gap-2"
        >
          <span>Browse All Lesson Plans in Store</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
