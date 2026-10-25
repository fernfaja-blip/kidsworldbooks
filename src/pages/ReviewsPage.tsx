import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Award, Star, ExternalLink, CheckCircle2, Building2 } from 'lucide-react';

const EDITORIAL_REVIEWS = [
  {
    outlet: "Publisher’s Weekly",
    book: "Polar Bear Bowler: A Story Without Words",
    quote: "“Charming... full of polish and physical comedy.”",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/polar-bear-bowler-a-story-without-words"
  },
  {
    outlet: "The Horn Book",
    book: "Bad Bananas: A Story Cookbook for Kids",
    quote: "“An engaging, practical story cookbook that turns kitchen mishaps into delicious learning.”",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/bad-bananas-a-story-cookbook-for-kids"
  },
  {
    outlet: "Kirkus Reviews",
    book: "Sounds in the House: A Mystery",
    quote: "“Suspenseful without getting too intense for early readers... a warm nocturnal mystery.”",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/sounds-in-the-house-a-mystery"
  },
  {
    outlet: "School Library Journal & School Library Connection",
    book: "She Doesn't Want the Worms / Ella no quiere los gusanos",
    quote: "“Delightful... humorous... bright. A lively bilingual mystery celebrating cultural discovery.”",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/she-doesnt-want-the-worms-ella-no-quiere-los-gusanos"
  },
  {
    outlet: "ForeWord Reviews (Top 10 Spanish Twist)",
    book: "She Doesn't Want the Worms & Crumbs on the Stairs",
    quote: "“Beckstrand has a knack for creating simple, relatable mysteries with a twist that keeps young bilingual readers guessing.”",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/crumbs-on-the-stairs-migas-en-las-escaleras-a-mystery-in-spanish-english"
  },
  {
    outlet: "International Book Awards & Skipping Stones Honor",
    book: "The Bridge of the Golden Wood & Young American Immigrants Series",
    quote: "“Recognized for excellence in multicultural, historical, and financial literacy storytelling for youth.”",
    storeUrl: "https://kidsworldbooks.com/buy-books/ols/products/the-bridge-of-the-golden-wood-a-parable-on-how-to-earn-a-living"
  }
];

const INSTITUTIONAL_ADOPTIONS = [
  {
    institution: "State of Vermont",
    selection: "Selected The Bridge of the Golden Wood for primary school financial literacy curriculum."
  },
  {
    institution: "USDA (via Virginia Tech) & Georgia Farm Bureau",
    selection: "Selected GROW: How We Get Food from Our Garden for agricultural & nutrition education."
  },
  {
    institution: "Library of Congress",
    selection: "Featured KidsWorldBooks titles in national literacy and youth catalog collections."
  },
  {
    institution: "Alberta Health Services (Canada)",
    selection: "Recommended KidsWorldBooks health, nutrition, and early childhood reading materials."
  }
];

export const ReviewsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Kids Book Reviews & Awards' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-[#C2410C]" />
          Verified Critical Acclaim & Institutional Recognition
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Children’s Book Reviews, Awards & Curriculum Selections
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Read verified trade journal reviews from <em>School Library Journal</em>, <em>Publisher’s Weekly</em>, <em>The Horn Book</em>, <em>Kirkus Reviews</em>, and <em>ForeWord Reviews</em>, plus state and national educational adoptions.
        </p>
      </div>

      {/* Trade Journal Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDITORIAL_REVIEWS.map((rev, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">{rev.outlet}</span>
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#0F2238]">{rev.book}</h3>
              <p className="text-sm italic text-[#334155] leading-relaxed">{rev.quote}</p>
            </div>
            <div className="pt-3 border-t border-[#E2D9CE]">
              <a
                href={rev.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C3A] hover:underline"
              >
                <span>Order Reviewed Book on Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Recognition Section */}
      <div className="bg-[#FAF7F2] border border-[#E2D9CE] p-8 rounded-2xl space-y-6">
        <div className="flex items-center gap-2 text-[#0F2238]">
          <Building2 className="w-5 h-5 text-[#0F4C3A]" />
          <h2 className="font-editorial text-2xl font-bold">
            State, Federal & Educational Adoptions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INSTITUTIONAL_ADOPTIONS.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-[#E2D9CE] space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-sm text-[#0F2238]">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C3A]" />
                <span>{item.institution}</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed pl-6">{item.selection}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
