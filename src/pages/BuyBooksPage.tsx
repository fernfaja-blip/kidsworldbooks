import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Search, Filter, RotateCcw, SlidersHorizontal, BookOpen } from 'lucide-react';

interface BuyBooksPageProps {
  onSelectBook: (book: Book) => void;
}

const READER_LEVEL_OPTIONS = [
  "Beginning Readers (K–2)",
  "Elementary (Grades 3–5)",
  "Chapter Books & YA (Ages 7–14)",
  "Bilingual & ESL"
];

const THEME_OPTIONS = [
  "Character, Career & Life Skills",
  "History, Culture & Biography",
  "STEM, Nature & Food",
  "Humor, Mystery & Adventure",
  "Bedtime, Faith & Family"
];

const FORMAT_OPTIONS = [
  "Paperback",
  "Hardcover",
  "Ebook",
  "Bundles & Series",
  "Free Ebooks"
];

export const BuyBooksPage: React.FC<BuyBooksPageProps> = ({ onSelectBook }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Selected filters
  const [selectedReaderLevels, setSelectedReaderLevels] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'title'>('featured');

  // Sync URL search parameters on mount or param changes
  useEffect(() => {
    const search = searchParams.get('search');
    const level = searchParams.get('readerLevel');
    const theme = searchParams.get('theme');
    const format = searchParams.get('format');

    if (search) setSearchQuery(search);
    if (level && !selectedReaderLevels.includes(level)) setSelectedReaderLevels([level]);
    if (theme && !selectedThemes.includes(theme)) setSelectedThemes([theme]);
    if (format && !selectedFormats.includes(format)) setSelectedFormats([format]);
  }, [searchParams]);

  const toggleFilter = (item: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  const resetAllFilters = () => {
    setSelectedReaderLevels([]);
    setSelectedThemes([]);
    setSelectedFormats([]);
    setSearchQuery('');
    setSearchParams({});
  };

  // Combinable multi-faceted filtering logic
  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter((book) => {
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = book.title.toLowerCase().includes(q);
        const matchesSub = book.subtitle?.toLowerCase().includes(q);
        const matchesAuthor = book.author.toLowerCase().includes(q);
        const matchesIsbn = book.isbn.includes(q);
        const matchesDesc = book.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSub && !matchesAuthor && !matchesIsbn && !matchesDesc) {
          return false;
        }
      }

      // Reader level match
      if (selectedReaderLevels.length > 0) {
        const hasMatch = selectedReaderLevels.some((lvl) => book.readerLevel.includes(lvl));
        if (!hasMatch) return false;
      }

      // Theme match
      if (selectedThemes.length > 0) {
        const hasMatch = selectedThemes.some((th) => book.theme.includes(th));
        if (!hasMatch) return false;
      }

      // Format match
      if (selectedFormats.length > 0) {
        const hasMatch = selectedFormats.some((fmt) => book.format.includes(fmt));
        if (!hasMatch) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0; // featured default
    });
  }, [searchQuery, selectedReaderLevels, selectedThemes, selectedFormats, sortBy]);

  const hasActiveFilters = selectedReaderLevels.length > 0 || selectedThemes.length > 0 || selectedFormats.length > 0 || searchQuery.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <Breadcrumbs items={[{ label: 'Shop Book Catalog' }]} />

      {/* Header Banner */}
      <div className="bg-white border border-[#E2D9CE] p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Official Store Catalog</span>
            <h1 className="font-editorial text-3xl font-bold text-[#0F2238] mt-1">
              Browse Kids’ Books & Educational Bundles
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Use the combinable filters below to locate titles by Reader Level, Subject Theme, or Book Format.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#64748B] whitespace-nowrap">Sort Catalog By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg text-xs font-semibold text-[#0F2238] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0F2238]"
            >
              <option value="featured">Featured Selections</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title">Title: Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Filter Search Field */}
        <div className="relative pt-2">
          <input
            type="text"
            placeholder="Search catalog titles, ISBN, subject keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl py-3 pl-11 pr-4 text-sm text-[#0F2238] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2238]"
          />
          <Search className="absolute left-4 top-5 h-4 w-4 text-[#64748B]" />
        </div>
      </div>

      {/* Main Grid with Sidebar Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar Filters */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-[#E2D9CE] p-5 rounded-2xl space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between border-b border-[#E2D9CE] pb-3">
              <div className="flex items-center gap-2 text-[#0F2238] font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-[#C2410C]" />
                <span>Combinable Filters</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-[#C2410C] hover:underline flex items-center gap-1 font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Filter 1: By Reader/Level */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2238]">By Reader / Level</h3>
              <div className="space-y-1.5 text-xs">
                {READER_LEVEL_OPTIONS.map((lvl) => {
                  const checked = selectedReaderLevels.includes(lvl);
                  return (
                    <label key={lvl} className="flex items-center gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleFilter(lvl, selectedReaderLevels, setSelectedReaderLevels)}
                        className="rounded text-[#0F2238] focus:ring-[#0F2238] h-4 w-4 border-[#E2D9CE]"
                      />
                      <span className={checked ? 'font-bold text-[#0F2238]' : ''}>{lvl}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter 2: By Theme */}
            <div className="space-y-2 border-t border-[#E2D9CE] pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2238]">By Theme</h3>
              <div className="space-y-1.5 text-xs">
                {THEME_OPTIONS.map((th) => {
                  const checked = selectedThemes.includes(th);
                  return (
                    <label key={th} className="flex items-center gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleFilter(th, selectedThemes, setSelectedThemes)}
                        className="rounded text-[#0F2238] focus:ring-[#0F2238] h-4 w-4 border-[#E2D9CE]"
                      />
                      <span className={checked ? 'font-bold text-[#0F2238]' : ''}>{th}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter 3: By Format */}
            <div className="space-y-2 border-t border-[#E2D9CE] pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2238]">By Format</h3>
              <div className="space-y-1.5 text-xs">
                {FORMAT_OPTIONS.map((fmt) => {
                  const checked = selectedFormats.includes(fmt);
                  return (
                    <label key={fmt} className="flex items-center gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleFilter(fmt, selectedFormats, setSelectedFormats)}
                        className="rounded text-[#0F2238] focus:ring-[#0F2238] h-4 w-4 border-[#E2D9CE]"
                      />
                      <span className={checked ? 'font-bold text-[#0F2238]' : ''}>{fmt}</span>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>
        </aside>

        {/* Right Catalog Grid */}
        <main className="lg:col-span-9 space-y-6">
          
          <div className="flex items-center justify-between text-xs text-[#64748B]">
            <span>Showing <strong>{filteredBooks.length}</strong> of <strong>{BOOKS_DATA.length}</strong> catalog items</span>
            {hasActiveFilters && (
              <span className="text-[#C2410C] font-semibold">Active Filter Combination Applied</span>
            )}
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-[#E2D9CE] text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E2D9CE] text-[#64748B] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">No Matching Books Found</h3>
              <p className="text-xs text-[#64748B] max-w-md mx-auto">
                Try clearing one or more filters, or search for broader keywords like "Bilingual", "STEM", or "Beginning".
              </p>
              <button
                onClick={resetAllFilters}
                className="bg-[#0F2238] text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#0F4C3A] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </main>

      </div>

    </div>
  );
};
