import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, MapPin, Phone, Building2, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Contact & Institutional Sign Up' }]} />

      <div className="bg-white border border-[#E2D9CE] p-8 rounded-2xl shadow-xs space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E2D9CE] text-[#0F2238] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5 text-[#0F4C3A]" />
          School & District Inquiries
        </span>
        <h1 className="font-editorial text-3xl font-bold text-[#0F2238]">
          Contact Us & Sign Up for Educational Updates
        </h1>
        <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
          Questions about school purchase orders, bulk discounts, author visits, or free lesson plans? Fill out the form below or contact our editorial office.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-6">
          {submitted ? (
            <div className="bg-[#FAF7F2] border border-[#0F4C3A] p-6 rounded-xl space-y-3 text-center">
              <CheckCircle2 className="w-8 h-8 text-[#0F4C3A] mx-auto" />
              <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Thank You for Contacting KidsWorldBooks</h3>
              <p className="text-xs text-[#64748B]">Your message has been received. Our editorial team will get back to you shortly.</p>
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
                  <label className="block text-xs font-bold text-[#0F2238] mb-1">Organization / School District</label>
                  <input
                    type="text"
                    placeholder="e.g., Washington School District"
                    className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F2238] mb-1">Role / Profile</label>
                  <select className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]">
                    <option>Teacher / Educator</option>
                    <option>Librarian / District Director</option>
                    <option>Homeschooler / Parent</option>
                    <option>Bookseller / Retailer</option>
                    <option>Media / Press</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F2238] mb-1">Message or Order Request *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you with books, PO orders, or lesson plans?"
                  className="w-full bg-[#FAF7F2] border border-[#E2D9CE] rounded-lg p-2.5 text-xs text-[#0F2238]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F2238] hover:bg-[#0F4C3A] text-white py-3 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Address Info */}
        <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E2D9CE] space-y-6">
          <h3 className="font-editorial text-xl font-bold text-[#0F2238]">Publisher Information</h3>

          <div className="space-y-4 text-xs text-[#475569]">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F2238] block">Mailing Address:</strong>
                <span>KidsWorldBooks / Premio Publishing<br />PO Box 64, Hurricane UT 84737 USA</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F2238] block">Library Distributors:</strong>
                <span>Ingram Content Group, Follett School Solutions, Hertzberg-New Method, Amazon, Barnes & Noble, Target, Walmart</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
