import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, MapPin, Building2, Send, CheckCircle2, Award, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Contact Us & Free Lesson Plan Sign-Up' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#0F4C3A]" />
            Trusted by Educators, Librarians & Families Since 2004
          </span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-[#0F4C3A] font-bold text-xs px-3 py-1 rounded-full">
            <Globe className="w-3.5 h-3.5" />
            Se habla español
          </span>
        </div>

        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2238]">
          Contact Us & Sign Up for Free K–10 STEM + Literacy Lesson Plans
        </h1>
        <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
          Request your free K–10 STEM + Literacy starter lesson plans, inquire about school purchase orders (POs), bulk discounts, or book an in-person/virtual author visit with Karl Beckstrand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact & Sign-Up Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-6">
          {submitted ? (
            <div className="bg-[#FAF7F2] border border-[#0F4C3A] p-6 rounded-xl space-y-3 text-center">
              <CheckCircle2 className="w-8 h-8 text-[#0F4C3A] mx-auto" />
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Thank You for Contacting KidsWorldBooks!</h3>
              <p className="text-xs text-[#64748B]">
                Your request has been received. You can also email us directly at <strong>info@premiopublishing.com</strong> for immediate assistance.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F2238] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Miller"
                    className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F2238] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., smiller@district.edu"
                    className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F2238] mb-1">School / Library / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g., Washington Elementary"
                    className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F2238] mb-1">Inquiry Topic</label>
                  <select className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]">
                    <option>Send Me Free K–10 STEM + Literacy Lesson Plans</option>
                    <option>Claim My Free Ebook / Lesson Plan from a Book Order</option>
                    <option>School / Library Purchase Order (PO) & Bulk Pricing</option>
                    <option>Author School Visit / Speaking Inquiry</option>
                    <option>Publishing Consultation ($165/hr)</option>
                    <option>General Question (English / Español)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F2238] mb-1">Message or Book Title Requested *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Let us know which grade levels you teach, or which free lesson plan/ebook you'd like!"
                  className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F2238] hover:bg-[#0F4C3A] text-white py-3 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message / Request Free Lesson Plans</span>
              </button>
            </form>
          )}
        </div>

        {/* Publisher & Institutional Trust Info */}
        <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-6">
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Publisher Information</h3>

          <div className="space-y-4 text-xs text-[#475569]">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F2238] block">Mailing Address & Direct Email:</strong>
                <span>Premio Publishing & Gozo Books (KidsWorldBooks.com)<br />PO Box 64, Hurricane UT 84737 USA<br />Email: info@premiopublishing.com</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F2238] block">Institutional Selections:</strong>
                <span>Selected by the State of Vermont, USDA (via Virginia Tech), Library of Congress, Georgia Farm Bureau, and Alberta Health Services.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F2238] block">Wholesale & Library Distributors:</strong>
                <span>Ingram Content Group, Follett School Solutions, Brodart, Mackin, Baker & Taylor, Amazon, Barnes & Noble, Target, and Walmart.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
