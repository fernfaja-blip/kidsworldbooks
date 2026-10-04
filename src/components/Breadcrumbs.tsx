import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-xs text-[#64748B] space-x-1.5 py-3 mb-6 border-b border-[#E2D9CE]/60">
      <Link to="/" className="flex items-center hover:text-[#0F2238] transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
          {item.href ? (
            <Link to={item.href} className="hover:text-[#0F2238] transition-colors font-medium">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-[#0F2238] truncate">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
