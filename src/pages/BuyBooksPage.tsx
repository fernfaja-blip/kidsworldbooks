import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  AGE_CATALOG_SECTIONS,
  getBookAgeSection,
  getBookPdfSortRank,
} from '../utils/ageCatalogOrganization';
import {
  Search,
  RotateCcw,
  SlidersHorizontal,
  ShoppingCart,
  ExternalLink,
  FileText,
  Gift,
  Layers,
  LayoutGrid,
} from 'lucide-react';

interface BuyBooksPageProps {
  onSelectBook: (book: Book) => void;
}

const READER_LEVEL_OPTIONS = [
  'Beginning Readers (K–2)',
  'Elementary (Grades 3–5)',
  'Chapter Books & YA (Ages 7–14)',
  'Bilingual & ESL',
];

const THEME_OPTIONS = [
  'Character, Career & Life Skills',
  'History, Culture & Biography',
  'STEM, Nature & Food',
  'Humor, Mystery & Adventure',
  'Bedtime, Faith & Family',
];

const FORMAT_OPTIONS = [
  'Paperback',
  'Hardcover',
  'Ebook',
  'Bundles & Series',
  'Free Ebooks',
  'Lesson Plans & Curricula',
];

export const BuyBooksPage: React.FC<BuyBooksPageProps> = ({ onSelectBook }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Selected filters
  const [selectedAgeSections, setSelectedAgeSections] = useState<string[]>([]);
  const [selectedReaderLevels, setSelectedReaderLevels] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'title'>('featured');
  const [groupByAgeSections, setGroupByAgeSections] = useState<boolean>(true);

  // Sync URL search parameters on mount or param changes
  useEffect(() => {
    const search = searchParams.get('search');
    const ageSection = searchParams.get('ageSection');
    const level = searchParams.get('readerLevel');
    const theme = searchParams.get('theme');
    const format = searchParams.get('format');
    const productParam = searchParams.get('product');

    if (search !== null) setSearchQuery(search);
    if (ageSection) setSelectedAgeSections([ageSection]);
    if (level) setSelectedReaderLevels([level]);
    if (theme) setSelectedThemes([theme]);
    if (format) setSelectedFormats([format]);
    if (productParam) {
      const matchedBook = BOOKS_DATA.find(
        (b) => b.commerceId === productParam || b.id === productParam || b.slug === productParam
      );
      if (matchedBook) {
        onSelectBook(matchedBook);
      }
    }
  }, [searchParams, onSelectBook]);

  const toggleFilter = (
    item: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  const resetAllFilters = () => {
    setSelectedAgeSections([]);
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
        const matchesIsbn = book.isbn.toLowerCase().includes(q);
        const matchesDesc = book.description.toLowerCase().includes(q);
        const matchesLang = book.language.toLowerCase().includes(q);
        const matchesAges = book.ages.toLowerCase().includes(q);
        if (
          !matchesTitle &&
          !matchesSub &&
          !matchesAuthor &&
          !matchesIsbn &&
          !matchesDesc &&
          !matchesLang &&
          !matchesAges
        ) {
          return false;
        }
      }

      // Browse by Age section match
      if (selectedAgeSections.length > 0) {
        const bookAgeSection = getBookAgeSection(book);
        if (!selectedAgeSections.includes(bookAgeSection)) return false;
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
  }, [
    searchQuery,
    selectedAgeSections,
    selectedReaderLevels,
    selectedThemes,
    selectedFormats,
    sortBy,
  ]);

  // Group filtered books into the 6 official PDF Age Sections
  const groupedAgeSections = useMemo(() => {
    return AGE_CATALOG_SECTIONS.map((section) => {
      const sectionBooks = filteredBooks
        .filter((b) => getBookAgeSection(b) === section.label)
        .sort((a, b) => {
          if (sortBy === 'price-low') return a.price - b.price;
          if (sortBy === 'price-high') return b.price - a.price;
          if (sortBy === 'title') return a.title.localeCompare(b.title);
          return getBookPdfSortRank(a, section) - getBookPdfSortRank(b, section);
        });
      return {
        ...section,
        books: sectionBooks,
      };
    }).filter((sec) => sec.books.length > 0);
  }, [filteredBooks, sortBy]);

  const hasActiveFilters =
    selectedAgeSections.length > 0 ||
    selectedReaderLevels.length > 0 ||
    selectedThemes.length > 0 ||
    selectedFormats.length > 0 ||
    searchQuery.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Shop Book Catalog • Browse by Age' }]} />

      {/* Header Banner */}
      <div className="bg-white border border-[#E2D9CE] p-6 sm:p-8 rounded-2xl shadow-xs space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
              Catalog · Browse by Age • An Imprint of Premio Publishing · Since 2004
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
              Order Award-Winning Kids’ Books Online
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
              Award-winning, human-created children’s books and literacy resources: cross-cultural picture books in English, Spanish, and bilingual editions, plus wordless books, series volumes, and family reading. Click <strong>Buy Now</strong> on any product to complete your purchase directly on <strong>KidsWorldBooks.com</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://kidsworldbooks.com/buy-books?product=0194b86e-346b-7335-a1f2-b022dad0e62f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#FAF7F2] hover:bg-[#E2D9CE]/50 text-[#0F2238] border border-[#E2D9CE] px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#0F4C3A]" />
              <span>Retail / Library Catalog</span>
              <ExternalLink className="w-3 h-3 text-[#64748B]" />
            </a>

            <a
              href="https://kidsworldbooks.com/buy-books"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0F2238] hover:bg-[#0F4C3A] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-xs"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Official Store & Cart</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>

        {/* Institutional & Gift Note Bar */}
        <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#334155]">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#C2410C] shrink-0" />
            <span>
              <strong>Free Bonus:</strong> Each picture book comes with a <strong>FREE PDF lesson plan or ebook</strong>! See retail, school, and library discounts below.
            </span>
          </div>
          <div className="text-[11px] text-[#64748B]">
            167 verified titles, 4-book series volumes, ebooks & K–10 lesson plans.
          </div>
        </div>

        {/* Quick Browse by Age Jump Pills */}
        <div className="pt-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
              Browse by Age Section:
            </span>
            {selectedAgeSections.length > 0 && (
              <button
                onClick={() => setSelectedAgeSections([])}
                className="text-[11px] text-[#C2410C] font-semibold hover:underline"
              >
                Show all age sections
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {AGE_CATALOG_SECTIONS.map((sec) => {
              const active = selectedAgeSections.includes(sec.label);
              return (
                <button
                  key={sec.id}
                  onClick={() => toggleFilter(sec.label, selectedAgeSections, setSelectedAgeSections)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-[#0F2238] text-white border-[#0F2238] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#0F2238] border-[#E2D9CE] hover:border-[#0F2238]'
                  }`}
                >
                  {sec.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Search, View Toggle & Sort Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 pt-1">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by title, topic, age/grade, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl py-3 pl-11 pr-4 text-sm text-[#0F2238] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2238]"
            />
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-[#64748B]" />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setGroupByAgeSections(!groupByAgeSections)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-semibold border transition-colors ${
                groupByAgeSections
                  ? 'bg-[#0F4C3A] text-white border-[#0F4C3A]'
                  : 'bg-[#FAF7F2] text-[#0F2238] border-[#E2D9CE] hover:border-[#0F2238]'
              }`}
              title="Toggle between grouped Age Sections (PDF Catalog layout) or a single flat grid"
            >
              {groupByAgeSections ? (
                <>
                  <Layers className="w-3.5 h-3.5" />
                  <span>Grouped by Age</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Flat Grid</span>
                </>
              )}
            </button>

            <span className="text-xs text-[#64748B] whitespace-nowrap">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl text-xs font-semibold text-[#0F2238] py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-[#0F2238]"
            >
              <option value="featured">Catalog Order (Browse by Age)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title">Title: Alphabetical (A–Z)</option>
            </select>
          </div>
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
                  <span>Clear all</span>
                </button>
              )}
            </div>

            {/* Filter 0: Browse by Age (From PDF Catalog) */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                Browse by Age (Catalog)
              </h3>
              <div className="space-y-1.5 text-xs">
                {AGE_CATALOG_SECTIONS.map((sec) => {
                  const checked = selectedAgeSections.includes(sec.label);
                  return (
                    <label
                      key={sec.id}
                      className="flex items-start gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          toggleFilter(sec.label, selectedAgeSections, setSelectedAgeSections)
                        }
                        className="rounded text-[#0F2238] focus:ring-[#0F2238] h-4 w-4 border-[#E2D9CE] mt-0.5 shrink-0"
                      />
                      <span className={checked ? 'font-bold text-[#0F2238]' : ''}>
                        {sec.shortLabel}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter 1: By Reader/Level */}
            <div className="space-y-2 border-t border-[#E2D9CE] pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2238]">
                By Reader / Level
              </h3>
              <div className="space-y-1.5 text-xs">
                {READER_LEVEL_OPTIONS.map((lvl) => {
                  const checked = selectedReaderLevels.includes(lvl);
                  return (
                    <label
                      key={lvl}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          toggleFilter(lvl, selectedReaderLevels, setSelectedReaderLevels)
                        }
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2238]">
                By Theme
              </h3>
              <div className="space-y-1.5 text-xs">
                {THEME_OPTIONS.map((th) => {
                  const checked = selectedThemes.includes(th);
                  return (
                    <label
                      key={th}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]"
                    >
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2238]">
                By Format
              </h3>
              <div className="space-y-1.5 text-xs">
                {FORMAT_OPTIONS.map((fmt) => {
                  const checked = selectedFormats.includes(fmt);
                  return (
                    <label
                      key={fmt}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#0F2238] text-[#475569]"
                    >
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

            {/* Direct Store Sections on KidsWorldBooks.com */}
            <div className="space-y-2 border-t border-[#E2D9CE] pt-4">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Official Store Sections
              </h3>
              <div className="flex flex-col gap-1.5 text-xs">
                <a
                  href="#how-to-order"
                  className="text-[#C2410C] font-semibold hover:underline flex items-center justify-between"
                >
                  <span>Discounts & How to Order</span>
                </a>
                <a
                  href="https://kidsworldbooks.com/buy-books#level"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F4C3A] hover:underline flex items-center justify-between"
                >
                  <span>By Reader / Level</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://kidsworldbooks.com/buy-books#theme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F4C3A] hover:underline flex items-center justify-between"
                >
                  <span>By Theme & Topic</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://kidsworldbooks.com/buy-books#bundles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F4C3A] hover:underline flex items-center justify-between"
                >
                  <span>Bundles, Series & Ebooks</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://kidsworldbooks.com/buy-books?product=0195025a-61d8-7bbf-bc78-46a4a71e3606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F4C3A] hover:underline flex items-center justify-between"
                >
                  <span>School / Library Catalog</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Catalog Content */}
        <main className="lg:col-span-9 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
            <span>
              Showing <strong>{filteredBooks.length}</strong> of <strong>{BOOKS_DATA.length}</strong>{' '}
              titles in catalog
            </span>
            {hasActiveFilters && (
              <span className="text-[#C2410C] font-semibold">
                Active Filter Combination Applied
              </span>
            )}
          </div>

          {filteredBooks.length > 0 ? (
            groupByAgeSections ? (
              <div className="space-y-12">
                {groupedAgeSections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="space-y-5 scroll-mt-28"
                  >
                    <div className="border-b-2 border-[#C2410C] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div>
                        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F4C3A]">
                          {section.label}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                          {section.subtitle}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#0F2238] bg-[#FAF7F2] border border-[#E2D9CE] px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                        {section.books.length} {section.books.length === 1 ? 'title' : 'titles'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.books.map((book) => (
                        <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
                ))}
              </div>
            )
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-[#E2D9CE] text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E2D9CE] text-[#64748B] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
                No Matching Books Found
              </h3>
              <p className="text-xs text-[#64748B] max-w-md mx-auto">
                Try clearing one or more filters, or search for broader keywords like "Bilingual",
                "STEM", "4 Books", or "Mystery".
              </p>
              <button
                onClick={resetAllFilters}
                className="bg-[#0F2238] text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#0F4C3A] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* How to Order Section from Catalog PDF (Page 9) */}
          <section
            id="how-to-order"
            className="bg-white border border-[#E2D9CE] rounded-2xl p-6 sm:p-8 space-y-6 scroll-mt-28"
          >
            <div className="border-b-2 border-[#C2410C] pb-3">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F4C3A]">
                How to Order
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Purchase or consignment · retailers, libraries, and distributors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* TERMS */}
              <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl p-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                  Terms & Discounts
                </h3>
                <ul className="text-xs text-[#1E293B] space-y-1.5 leading-relaxed">
                  <li>• Retail and distributor discount is <strong>25% or more</strong>, based on volume.</li>
                  <li>• Educational / nonprofit discount is <strong>35%</strong>.</li>
                  <li>• Returns accepted on purchases within the first 60 days; 15% restocking fee.</li>
                  <li>• USPS Media Mail shipping: $4.50 for one book plus $.25 for each extra.</li>
                  <li>• For discounts above the base rate, the purchaser pays all shipping, including returns.</li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl p-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                  Contact
                </h3>
                <div className="text-xs text-[#1E293B] space-y-1.5 leading-relaxed">
                  <p className="font-bold">Premio Publishing &amp; Gozo Books</p>
                  <p>145 N. Mall Dr. #104, St. George, UT 84790 USA</p>
                  <p>
                    <a href="mailto:info@PremioBooks.com" className="text-[#0F4C3A] underline">
                      info@PremioBooks.com
                    </a>{' '}
                    · 801-953-3793
                  </p>
                  <p>
                    <a
                      href="https://kidsworldbooks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F4C3A] font-semibold underline"
                    >
                      KidsWorldBooks.com
                    </a>
                  </p>
                </div>
              </div>

              {/* SHOP ONLINE */}
              <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl p-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                  Shop Online
                </h3>
                <p className="text-xs text-[#1E293B] leading-relaxed">
                  Browse every title, free lesson plans, and online extras, or complete your direct
                  checkout at{' '}
                  <a
                    href="https://kidsworldbooks.com/buy-books"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0F4C3A] font-semibold underline"
                  >
                    KidsWorldBooks.com
                  </a>
                  .
                </p>
              </div>

              {/* FREE LESSON PLANS */}
              <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl p-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                  Free Lesson Plans
                </h3>
                <p className="text-xs text-[#1E293B] leading-relaxed">
                  Each picture book has a free, corresponding PDF lesson plan for classroom and home
                  use.
                </p>
              </div>

              {/* ALSO AVAILABLE THROUGH */}
              <div className="bg-[#FAF7F2] border border-[#E2D9CE] rounded-xl p-5 space-y-2 md:col-span-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                  Also Available Through
                </h3>
                <p className="text-xs text-[#1E293B] leading-relaxed">
                  Apple Books, Barnes &amp; Noble, EBSCO, Everand, Follett, Gardners, Google Books,
                  Hertzberg, Kobo, Libraria, Library Direct, Mackin, Mindworks, OverDrive, Palace,
                  Powell’s, Target, and Walmart.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E2D9CE] text-center space-y-2">
              <p className="text-xs text-[#475569]">
                Characters in our picture books include Black, white, American Indian, Asian,
                Pacific Islander, and Hispanic children and families. Every title celebrates
                cultures, curiosity, and family learning.
              </p>
              <p className="font-editorial italic text-sm sm:text-base text-[#0F4C3A]">
                Award-winning, human-created stories that celebrate cultures, curiosity, and family
                learning
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
