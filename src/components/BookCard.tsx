import React from 'react';
import { Book } from '../data/books';
import { BookOpen, ShoppingCart, ExternalLink } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onSelectBook: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onSelectBook }) => {
  return (
    <div className="editorial-card rounded-xl overflow-hidden flex flex-col h-full border border-[#E2D9CE] bg-white group">
      
      {/* Image Container */}
      <div
        className="relative aspect-3/4 bg-[#F8F5F0] overflow-hidden p-4 flex items-center justify-center cursor-pointer"
        onClick={() => onSelectBook(book)}
      >
        <img
          src={book.coverImage}
          alt={book.title}
          loading="lazy"
          className="max-h-full max-w-full object-contain rounded-md shadow-md group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/all_covers_hero.jpg";
          }}
        />

        {/* Free Badge / Format Overlay */}
        {book.isFree ? (
          <span className="absolute top-3 left-3 bg-[#0F4C3A] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
            FREE EBOOK
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-[#0F2238]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
            {book.format[0]}
          </span>
        )}

        {/* Price Tag */}
        {!book.isFree && (
          <div className="absolute top-3 right-3 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
            {book.originalPrice && book.originalPrice > book.price && (
              <span className="text-[10px] text-[#94A3B8] line-through font-normal">
                ${book.originalPrice.toFixed(2)}
              </span>
            )}
            <span>${book.price.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        
        {/* Primary Reader Level Tag */}
        <div className="flex flex-wrap gap-1 mb-2">
          {book.readerLevel.slice(0, 2).map((lvl, idx) => (
            <span key={idx} className="badge-level text-[11px] px-2 py-0.5 rounded font-medium">
              {lvl}
            </span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h3 
          onClick={() => onSelectBook(book)}
          className="font-editorial text-lg font-bold text-[#0F2238] group-hover:text-[#C2410C] transition-colors cursor-pointer line-clamp-2 mb-1"
        >
          {book.title}
        </h3>

        {book.subtitle && (
          <p className="text-xs text-[#64748B] line-clamp-2 mb-3">
            {book.subtitle}
          </p>
        )}

        {/* Info Grid */}
        <div className="text-xs text-[#475569] space-y-1 mb-4 border-t border-[#F1F5F9] pt-3 mt-auto">
          <div className="flex justify-between gap-2">
            <span className="text-[#94A3B8] shrink-0">Audience:</span>
            <span className="font-semibold text-[#0F2238] text-right truncate">{book.ages} • {book.grades}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-[#94A3B8] shrink-0">Language:</span>
            <span className="font-medium text-[#0F2238] text-right truncate">{book.language}</span>
          </div>
          {book.isbn && book.isbn !== "Verified Direct Store Edition" && (
            <div className="flex justify-between gap-2">
              <span className="text-[#94A3B8] shrink-0">ISBN:</span>
              <span className="font-mono text-[11px] text-[#0F4C3A] text-right truncate">{book.isbn}</span>
            </div>
          )}
        </div>

        {/* Reviews snippet if any */}
        {book.reviews && book.reviews.length > 0 && (
          <div className="mb-4 bg-[#FAF7F2] p-2 rounded text-[11px] italic text-[#475569] border border-[#E2D9CE]/60 line-clamp-2">
            "{book.reviews[0].quote}" — <span className="not-italic font-semibold text-[#0F2238]">{book.reviews[0].source}</span>
          </div>
        )}

        {/* Action Buttons: Details + Direct Purchase on KidsWorldBooks.com */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E2D9CE]/60">
          <button
            onClick={() => onSelectBook(book)}
            className="bg-[#FAF7F2] hover:bg-[#E2D9CE]/60 text-[#0F2238] border border-[#E2D9CE] py-2 px-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#0F2238] shrink-0" />
            <span>Details</span>
          </button>

          <a
            href={book.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C2410C] hover:bg-[#9A3412] text-white py-2 px-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            title={`Complete purchase of ${book.title} on KidsWorldBooks.com`}
          >
            <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
            <span>{book.isFree ? "Get Free" : "Buy Now"}</span>
            <ExternalLink className="w-3 h-3 opacity-80 shrink-0" />
          </a>
        </div>

      </div>
    </div>
  );
};
