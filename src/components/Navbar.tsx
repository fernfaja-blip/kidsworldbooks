import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, ShoppingBag, Menu, X, ChevronDown, BookOpen, 
  Sparkles, FileText, Heart, Globe, Award, HelpCircle, UserCheck, ChevronRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buy-books?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMobileAccordion = (title: string) => {
    setMobileAccordion(mobileAccordion === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E2D9CE] transition-all">
      {/* Top Banner */}
      <div className="bg-[#0F2238] text-white text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <span className="inline-block bg-[#C2410C] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Free Resources</span>
        <span>Free STEM + Literacy Lesson Plans for K–10 • Used by District Directors, Libraries & ESL Educators</span>
        <Link to="/free-childrens-books" className="underline hover:text-amber-200 transition-colors ml-1 font-semibold">Access Plans →</Link>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0F2238] rounded-lg p-1">
            <img 
              src="/images/logo.png" 
              alt="KidsWorldBooks Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback to text icon if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-editorial text-2xl font-bold tracking-tight text-[#0F2238] leading-tight group-hover:text-[#0F4C3A] transition-colors">
                KidsWorldBooks
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium">
                Human-Created Editorial & Literacy
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-6 relative">
            <input
              type="text"
              placeholder="Search books by level, topic, grade, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E2D9CE] rounded-full py-2 pl-10 pr-4 text-sm text-[#0F2238] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2238] focus:border-transparent transition-all shadow-xs"
            />
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-[#64748B]" />
            {searchQuery && (
              <button 
                type="submit" 
                className="absolute right-2 top-1.5 bg-[#0F2238] text-white text-xs px-3 py-1 rounded-full font-medium hover:bg-[#0F4C3A] transition-colors"
              >
                Search
              </button>
            )}
          </form>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/buy-books"
              className="inline-flex items-center gap-2 bg-[#0F2238] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0F4C3A] transition-all shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#0F2238]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Catalog</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              to="/buy-books"
              className="p-2 text-[#0F2238] hover:bg-[#E2D9CE]/50 rounded-lg"
              title="Shop Catalog"
            >
              <ShoppingBag className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0F2238] hover:bg-[#E2D9CE]/50 focus:outline-none focus:ring-2 focus:ring-[#0F2238]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Primary 5 Navigation Items Bar */}
        <nav className="hidden lg:flex items-center justify-between border-t border-[#E2D9CE]/60 py-2">
          <div className="flex items-center space-x-1 font-medium text-sm">
            
            {/* Nav 1: SHOP BOOKS */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('shop')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/buy-books"
                className="flex items-center gap-1.5 px-4 py-2 text-[#0F2238] hover:text-[#C2410C] font-semibold transition-colors rounded-md"
              >
                <span>SHOP BOOKS</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B] group-hover:rotate-180 transition-transform" />
              </Link>
              {activeDropdown === 'shop' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E2D9CE] rounded-xl shadow-xl p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 px-2 border-b pb-1">
                    Catalog Filters
                  </div>
                  <div className="space-y-1 text-sm">
                    <Link to="/buy-books?readerLevel=Beginning Readers (K–2)" className="block px-3 py-2 rounded-lg hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">
                      Beginning Readers (K–2)
                    </Link>
                    <Link to="/buy-books?readerLevel=Elementary (Grades 3–5)" className="block px-3 py-2 rounded-lg hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">
                      Elementary (Grades 3–5)
                    </Link>
                    <Link to="/buy-books?readerLevel=Chapter Books %26 YA (Ages 7–14)" className="block px-3 py-2 rounded-lg hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">
                      Chapter Books & YA (Ages 7–14)
                    </Link>
                    <Link to="/buy-books?readerLevel=Bilingual %26 ESL" className="block px-3 py-2 rounded-lg hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">
                      Bilingual & ESL
                    </Link>
                    <div className="border-t my-2 pt-2">
                      <Link to="/buy-books" className="block px-3 py-2 rounded-lg bg-[#FAF7F2] text-[#0F2238] font-semibold hover:bg-[#E2D9CE] text-center">
                        View Complete Catalog Filter →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Nav 2: READING GUIDES */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('guides')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/kids-reading-guides"
                className="flex items-center gap-1.5 px-4 py-2 text-[#0F2238] hover:text-[#C2410C] font-semibold transition-colors rounded-md"
              >
                <span>READING GUIDES</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B] group-hover:rotate-180 transition-transform" />
              </Link>
              {activeDropdown === 'guides' && (
                <div className="absolute top-full left-0 w-[540px] bg-white border border-[#E2D9CE] rounded-xl shadow-xl p-5 z-50 grid grid-cols-2 gap-4 animate-fadeIn">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A] mb-2 px-2 pb-1 border-b border-[#E2D9CE]">
                      By Reading Level
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li><Link to="/early-reader-books-k2" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Beginning Readers (K–2)</Link></li>
                      <li><Link to="/phonics-books-k2" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Phonics & Decoding</Link></li>
                      <li><Link to="/vocab-books-kids" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Vocabulary Builders</Link></li>
                      <li><Link to="/elementary-books-3-4" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Elementary (Grades 3–5)</Link></li>
                      <li><Link to="/chapter-books-kids-7-14" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Chapter Books (Ages 7–14)</Link></li>
                      <li><Link to="/bilingual-books-spanish" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Bilingual & ESL</Link></li>
                      <li><Link to="/reluctant-reader-books" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Reluctant Readers</Link></li>
                      <li><Link to="/wordless-picture-books" className="block px-2 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238] hover:text-[#C2410C]">Wordless Picture Books</Link></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#C2410C] mb-2 px-2 pb-1 border-b border-[#E2D9CE]">
                      By Topic
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li><Link to="/stem-literacy-units" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">STEM & Literacy Units</Link></li>
                      <li><Link to="/stem-nature-books-kids" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">Nature & Science</Link></li>
                      <li><Link to="/food-books-kids" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">Food & Cooking</Link></li>
                      <li><Link to="/career-money-books-kids" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">Career & Money</Link></li>
                      <li><Link to="/animal-books-kids" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">Animals & Pets</Link></li>
                      <li><Link to="/sel-books-kids" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">SEL & Character</Link></li>
                      <li><Link to="/history-culture-books-kids" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">History & Culture</Link></li>
                      <li><Link to="/christian-childrens-books" className="block px-2 py-1 rounded hover:bg-[#FAF7F2] text-[#0F2238]">Christian & Faith-Based</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Nav 3: HOMESCHOOL & CLASSROOM */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('homeschool')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/homeschool-guide"
                className="flex items-center gap-1.5 px-4 py-2 text-[#0F2238] hover:text-[#C2410C] font-semibold transition-colors rounded-md"
              >
                <span>HOMESCHOOL & CLASSROOM</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B] group-hover:rotate-180 transition-transform" />
              </Link>
              {activeDropdown === 'homeschool' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E2D9CE] rounded-xl shadow-xl p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0F2238] mb-2 px-2 border-b pb-1">
                    Pedagogical Paths
                  </div>
                  <div className="space-y-1 text-xs">
                    <Link to="/homeschool-guide" className="block px-3 py-2 rounded-lg bg-[#FAF7F2] text-[#0F2238] font-bold hover:bg-[#E2D9CE]">
                      🌟 Start Here: Educator & Family Guide
                    </Link>
                    <Link to="/teaching-guides" className="block px-3 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Teaching Guides & Lesson Plans
                    </Link>
                    <Link to="/literacy-units" className="block px-3 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Browse All Book Collections
                    </Link>
                    <Link to="/stem-literacy-units" className="block px-3 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      STEM & Literacy Units
                    </Link>
                    <Link to="/learning-resources" className="block px-3 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Learning Resources & Worksheets
                    </Link>
                    <Link to="/books-like-kids-classics" className="block px-3 py-1.5 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Books Like Kids' Classics
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav 4: FREE RESOURCES */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('free')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/free-childrens-books"
                className="flex items-center gap-1.5 px-4 py-2 text-[#0F2238] hover:text-[#C2410C] font-semibold transition-colors rounded-md"
              >
                <span>FREE RESOURCES</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B] group-hover:rotate-180 transition-transform" />
              </Link>
              {activeDropdown === 'free' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#E2D9CE] rounded-xl shadow-xl p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C2410C] mb-2 px-2 border-b pb-1">
                    Free Materials Index
                  </div>
                  <div className="space-y-1 text-xs">
                    <Link to="/free-childrens-books" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238] font-medium">
                      Free Children's Ebooks
                    </Link>
                    <Link to="/online-story-secrets" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Online Story Secrets & Puzzles
                    </Link>
                    <Link to="/easy-childrens-recipes" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Easy Children's Recipes
                    </Link>
                    <Link to="/learning-resources" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Printable Learning Resources
                    </Link>
                    <Link to="/childrens-holiday-books" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Holiday Books & Guides
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav 5: ABOUT */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/about-kids-world-books"
                className="flex items-center gap-1.5 px-4 py-2 text-[#0F2238] hover:text-[#C2410C] font-semibold transition-colors rounded-md"
              >
                <span>ABOUT</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B] group-hover:rotate-180 transition-transform" />
              </Link>
              {activeDropdown === 'about' && (
                <div className="absolute top-full right-0 w-72 bg-white border border-[#E2D9CE] rounded-xl shadow-xl p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0F2238] mb-2 px-2 border-b pb-1">
                    About the Editorial
                  </div>
                  <div className="space-y-1 text-xs">
                    <Link to="/about-kids-world-books" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      About KidsWorldBooks
                    </Link>
                    <Link to="/book-author-beckstrand" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Karl Beckstrand, Author
                    </Link>
                    <Link to="/kids-book-reviews-awards" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Reviews & Awards
                    </Link>
                    <Link to="/media-press-releases" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Media & Press
                    </Link>
                    <Link to="/ai-policy" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Human-Created AI Policy
                    </Link>
                    <Link to="/contact-sign-up" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Contact & Institutional Sign Up
                    </Link>
                    <Link to="/privacy-policy-faq" className="block px-3 py-2 rounded hover:bg-[#FAF7F2] text-[#0F2238]">
                      Store Policies & FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[112px] bottom-0 bg-[#FAF7F2] z-40 overflow-y-auto border-t border-[#E2D9CE] p-4 space-y-4">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search books by level, topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E2D9CE] rounded-lg py-2.5 pl-10 pr-4 text-sm text-[#0F2238]"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-[#64748B]" />
          </form>

          {/* Accordion Sections */}
          <div className="space-y-2">
            
            {/* 1. Shop Books */}
            <div className="border border-[#E2D9CE] rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('shop')}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-[#0F2238]"
              >
                <span>SHOP BOOKS</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileAccordion === 'shop' ? 'rotate-90' : ''}`} />
              </button>
              {mobileAccordion === 'shop' && (
                <div className="p-3 bg-[#FAF7F2] border-t border-[#E2D9CE] space-y-2 text-sm">
                  <Link to="/buy-books" className="block text-[#C2410C] font-semibold">View Catalog & Filters →</Link>
                  <Link to="/buy-books?readerLevel=Beginning Readers (K–2)" className="block text-[#0F2238]">Beginning Readers (K–2)</Link>
                  <Link to="/buy-books?readerLevel=Elementary (Grades 3–5)" className="block text-[#0F2238]">Elementary (Grades 3–5)</Link>
                  <Link to="/buy-books?readerLevel=Chapter Books %26 YA (Ages 7–14)" className="block text-[#0F2238]">Chapter Books (Ages 7–14)</Link>
                  <Link to="/buy-books?readerLevel=Bilingual %26 ESL" className="block text-[#0F2238]">Bilingual & ESL</Link>
                </div>
              )}
            </div>

            {/* 2. Reading Guides */}
            <div className="border border-[#E2D9CE] rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('guides')}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-[#0F2238]"
              >
                <span>READING GUIDES</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileAccordion === 'guides' ? 'rotate-90' : ''}`} />
              </button>
              {mobileAccordion === 'guides' && (
                <div className="p-3 bg-[#FAF7F2] border-t border-[#E2D9CE] space-y-2 text-xs">
                  <Link to="/kids-reading-guides" className="block text-[#C2410C] font-bold text-sm">Index Overview →</Link>
                  <div className="font-bold text-[#0F4C3A] pt-1">By Reading Level</div>
                  <Link to="/early-reader-books-k2" className="block text-[#0F2238]">Beginning Readers (K–2)</Link>
                  <Link to="/phonics-books-k2" className="block text-[#0F2238]">Phonics & Decoding</Link>
                  <Link to="/vocab-books-kids" className="block text-[#0F2238]">Vocabulary Builders</Link>
                  <Link to="/elementary-books-3-4" className="block text-[#0F2238]">Elementary (Grades 3–5)</Link>
                  <Link to="/chapter-books-kids-7-14" className="block text-[#0F2238]">Chapter Books (Ages 7–14)</Link>
                  <Link to="/bilingual-books-spanish" className="block text-[#0F2238]">Bilingual & ESL</Link>
                  <Link to="/reluctant-reader-books" className="block text-[#0F2238]">Reluctant Readers</Link>
                  <Link to="/wordless-picture-books" className="block text-[#0F2238]">Wordless Picture Books</Link>
                  <div className="font-bold text-[#C2410C] pt-2">By Topic</div>
                  <Link to="/stem-literacy-units" className="block text-[#0F2238]">STEM & Literacy Units</Link>
                  <Link to="/stem-nature-books-kids" className="block text-[#0F2238]">Nature & Science</Link>
                  <Link to="/food-books-kids" className="block text-[#0F2238]">Food & Cooking</Link>
                  <Link to="/career-money-books-kids" className="block text-[#0F2238]">Career & Money</Link>
                  <Link to="/sel-books-kids" className="block text-[#0F2238]">SEL & Character</Link>
                </div>
              )}
            </div>

            {/* 3. Homeschool & Classroom */}
            <div className="border border-[#E2D9CE] rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('homeschool')}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-[#0F2238]"
              >
                <span>HOMESCHOOL & CLASSROOM</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileAccordion === 'homeschool' ? 'rotate-90' : ''}`} />
              </button>
              {mobileAccordion === 'homeschool' && (
                <div className="p-3 bg-[#FAF7F2] border-t border-[#E2D9CE] space-y-2 text-xs">
                  <Link to="/homeschool-guide" className="block text-[#C2410C] font-bold text-sm">🌟 Start Here Guide</Link>
                  <Link to="/teaching-guides" className="block text-[#0F2238]">Teaching Guides & Lesson Plans</Link>
                  <Link to="/literacy-units" className="block text-[#0F2238]">Browse All Collections</Link>
                  <Link to="/learning-resources" className="block text-[#0F2238]">Learning Resources</Link>
                </div>
              )}
            </div>

            {/* 4. Free Resources */}
            <div className="border border-[#E2D9CE] rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('free')}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-[#0F2238]"
              >
                <span>FREE RESOURCES</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileAccordion === 'free' ? 'rotate-90' : ''}`} />
              </button>
              {mobileAccordion === 'free' && (
                <div className="p-3 bg-[#FAF7F2] border-t border-[#E2D9CE] space-y-2 text-xs">
                  <Link to="/free-childrens-books" className="block text-[#0F2238]">Free Ebooks</Link>
                  <Link to="/online-story-secrets" className="block text-[#0F2238]">Online Story Secrets</Link>
                  <Link to="/easy-childrens-recipes" className="block text-[#0F2238]">Easy Recipes for Kids</Link>
                  <Link to="/learning-resources" className="block text-[#0F2238]">Printable Worksheets</Link>
                </div>
              )}
            </div>

            {/* 5. About */}
            <div className="border border-[#E2D9CE] rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('about')}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-[#0F2238]"
              >
                <span>ABOUT</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileAccordion === 'about' ? 'rotate-90' : ''}`} />
              </button>
              {mobileAccordion === 'about' && (
                <div className="p-3 bg-[#FAF7F2] border-t border-[#E2D9CE] space-y-2 text-xs">
                  <Link to="/about-kids-world-books" className="block text-[#0F2238]">About KidsWorldBooks</Link>
                  <Link to="/book-author-beckstrand" className="block text-[#0F2238]">Author Karl Beckstrand</Link>
                  <Link to="/kids-book-reviews-awards" className="block text-[#0F2238]">Reviews & Awards</Link>
                  <Link to="/ai-policy" className="block text-[#0F2238]">Human-Created AI Policy</Link>
                  <Link to="/contact-sign-up" className="block text-[#0F2238]">Contact & Sign Up</Link>
                </div>
              )}
            </div>

          </div>

          <div className="pt-4 border-t border-[#E2D9CE]">
            <Link
              to="/buy-books"
              className="w-full flex items-center justify-center gap-2 bg-[#0F2238] text-white py-3 rounded-lg font-bold text-center"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Explore Complete Catalog</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
