import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, HelpCircle, Truck, CreditCard, RotateCcw, Users, ExternalLink } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Store Policies, FAQ & Privacy' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Official Store Terms & FAQ
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Store Policies, Shipping FAQ & Privacy Protection
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Clear, family- and school-friendly policies regarding discounted website pricing, secure PayPal checkout, USPS Media Mail shipping, 60-day returns, and privacy protection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <div className="flex items-center gap-2 text-[#0F4C3A] font-bold text-xs uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Who Website Prices Are For</span>
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
            Discounted Prices for Families, Teachers & Non-Profits
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Discounted book and bundle prices on KidsWorldBooks.com are offered for families, teachers, schools, libraries, and non-profit literacy programs. Commercial book resellers should order through Ingram or view our official Retail Catalog.
          </p>
          <a
            href="https://kidsworldbooks.com/buy-books/ols/products/retail-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C2410C] hover:underline pt-1"
          >
            <span>View Reseller / Retail Catalog</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <div className="flex items-center gap-2 text-[#0F4C3A] font-bold text-xs uppercase tracking-wider">
            <CreditCard className="w-4 h-4" />
            <span>Secure Payment Processing</span>
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
            PayPal & Major Credit Cards Accepted
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            All online checkout transactions on KidsWorldBooks.com are securely processed via PayPal and GoDaddy Online Store (accepting Visa, MasterCard, American Express, Discover, and PayPal without requiring a PayPal account). We never store your credit card numbers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <div className="flex items-center gap-2 text-[#0F4C3A] font-bold text-xs uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            <span>Shipping & Free Digital Bonus</span>
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
            USPS Media Mail (3–8 Business Days)
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Print books ship within the United States via USPS Media Mail (typically arriving in 3–8 business days). Every hardcover or paperback purchase also qualifies for a <strong>FREE companion ebook or printable lesson plan</strong>!
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <div className="flex items-center gap-2 text-[#0F4C3A] font-bold text-xs uppercase tracking-wider">
            <RotateCcw className="w-4 h-4" />
            <span>Returns & Satisfaction Guarantee</span>
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">
            60-Day Return Policy
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Unopened or undamaged print books may be returned within 60 days of purchase for a full refund of the book price (return postage paid by sender unless item arrived damaged).
          </p>
        </div>

      </div>

      {/* Privacy Policy Block */}
      <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E2D9CE] space-y-3">
        <div className="flex items-center gap-2 text-[#0F2238]">
          <ShieldCheck className="w-5 h-5 text-[#0F4C3A]" />
          <h2 className="font-editorial text-xl font-bold">Privacy & Data Protection Policy</h2>
        </div>
        <p className="text-xs text-[#475569] leading-relaxed">
          Premio Publishing & Gozo Books (KidsWorldBooks.com) respects your family and school privacy. We never sell, rent, or trade your email address or personal contact information to third parties. Subscribers who opt in to receive free K–10 STEM + Literacy lesson plans may unsubscribe at any time with a single click.
        </p>
      </div>
    </div>
  );
};
