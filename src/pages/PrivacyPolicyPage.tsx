import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Store Policies & FAQ' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#0F4C3A]" />
          Legal & Store Terms
        </span>
        <h1 className="font-editorial text-3xl font-bold text-[#0F2238]">
          Store Policies, FAQ & Privacy Protection
        </h1>
        <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
          Information regarding privacy policies, order processing, shipping to schools/home addresses, and store FAQs.
        </p>
      </div>

      <div className="space-y-6">
        
        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Privacy & Cookie Policy</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Your personal information and browsing details are never sold, traded, or rented to third parties. We use minimal functional cookies to optimize site performance and security.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <h3 className="font-editorial text-lg font-bold text-[#0F2238]">School Purchase Orders & Wholesale</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            We gladly accept official school district purchase orders (POs), tax-exempt educational orders, and library requisition requests. Contact us for bulk reseller catalog pricing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E2D9CE] space-y-3">
          <h3 className="font-editorial text-lg font-bold text-[#0F2238]">Shipping & Returns</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Orders ship via standard or expedited media channels. Defective or damaged book shipments are replaced promptly.
          </p>
        </div>

      </div>
    </div>
  );
};
