import React from 'react';
import { Book } from '../data/books';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Award, FileText, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0F2238]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white border border-[#E2D9CE] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E2D9CE] bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <span className="bg-[#0F2238] text-white text-xs font-bold px-2.5 py-1 rounded">
              Verified Bibliographic Record
            </span>
            <span className="text-xs text-[#64748B]">ISBN: {book.isbn}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F2238] hover:bg-[#E2D9CE]/50 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left: Book Cover Image & Purchasing Box */}
            <div className="space-y-4">
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CE] flex items-center justify-center">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="max-h-72 w-auto object-contain rounded-md shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/all_covers_hero.jpg";
                  }}
                />
              </div>

              {/* Price & Purchase Buttons */}
              <div className="bg-[#FAF7F2] border border-[#E2D9CE] p-4 rounded-xl space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#64748B]">List Price:</span>
                  <span className="text-xl font-bold text-[#0F2238]">
                    {book.isFree ? "FREE EBOOK" : `$${book.price.toFixed(2)}`}
                  </span>
                </div>

                {book.amazonUrl && (
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C2410C] hover:bg-[#9A3412] text-white py-2.5 px-4 rounded-lg font-bold text-sm transition-colors shadow-xs"
                  >
                    <span>Order via Amazon / Retail</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <Link
                  to="/contact-sign-up"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0F2238] hover:bg-[#0F4C3A] text-white py-2 px-4 rounded-lg font-semibold text-xs transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>District / Library PO Request</span>
                </Link>
              </div>
            </div>

            {/* Right: Detailed Metadata & Description */}
            <div className="md:col-span-2 space-y-5">
              
              <div>
                <h2 className="font-editorial text-2xl font-bold text-[#0F2238] mb-1">
                  {book.title}
                </h2>
                {book.subtitle && (
                  <p className="text-sm font-medium text-[#64748B] mb-2">{book.subtitle}</p>
                )}
                <div className="text-xs text-[#475569] flex flex-wrap items-center gap-3">
                  <span>Author: <strong className="text-[#0F2238]">{book.author}</strong></span>
                  {book.illustrator && <span>• Illustrator: <strong className="text-[#0F2238]">{book.illustrator}</strong></span>}
                </div>
              </div>

              {/* Verified Specs Table */}
              <div className="grid grid-cols-2 gap-3 bg-[#FAF7F2] p-3 rounded-lg border border-[#E2D9CE] text-xs">
                <div>
                  <span className="text-[#64748B] block">Target Ages:</span>
                  <span className="font-semibold text-[#0F2238]">{book.ages}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block">Grade Levels:</span>
                  <span className="font-semibold text-[#0F2238]">Grades {book.grades}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block">Language Format:</span>
                  <span className="font-semibold text-[#0F2238]">{book.language}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block">Formats Available:</span>
                  <span className="font-semibold text-[#0F2238]">{book.format.join(', ')}</span>
                </div>
                {book.lexileLevel && (
                  <div>
                    <span className="text-[#64748B] block">Lexile Score:</span>
                    <span className="font-bold text-[#0F4C3A]">{book.lexileLevel}</span>
                  </div>
                )}
                {book.arLevel && (
                  <div>
                    <span className="text-[#64748B] block">Accelerated Reader (AR):</span>
                    <span className="font-bold text-[#0F4C3A]">AR Level {book.arLevel}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2238] mb-2">Editorial Overview</h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Educational Benefits */}
              {book.educationalBenefits && book.educationalBenefits.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A]" />
                    <span>Educational & Pedagogical Values</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#334155]">
                    {book.educationalBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0F4C3A] font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Editorial Reviews */}
              {book.reviews && book.reviews.length > 0 && (
                <div className="border-t border-[#E2D9CE] pt-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C2410C] mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C2410C]" />
                    <span>Editorial Reviews & Critical Acclaim</span>
                  </h4>
                  <div className="space-y-2">
                    {book.reviews.map((rev, i) => (
                      <blockquote key={i} className="text-xs italic text-[#475569] bg-[#FAF7F2] p-2.5 rounded border-l-2 border-[#C2410C]">
                        "{rev.quote}" — <span className="not-italic font-bold text-[#0F2238]">{rev.source}</span>
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}

              {/* Teaching Guide CTA */}
              {book.teachingGuideUrl && (
                <div className="pt-2">
                  <Link
                    to={book.teachingGuideUrl}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0F4C3A] hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Explore Lesson Plans & Teaching Guides for this title →</span>
                  </Link>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#E2D9CE] bg-[#FAF7F2] flex items-center justify-between text-xs text-[#64748B]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#0F4C3A]" />
            <span>Human-created catalog verification guaranteed</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E2D9CE] text-[#0F2238] font-bold rounded-lg hover:bg-[#E2D9CE]/60 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
