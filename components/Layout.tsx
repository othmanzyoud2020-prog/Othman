
import React from 'react';
import { TATREEZ_COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden bg-[#fdfaf5]">
      {/* Decorative Border (Kufiya Style) */}
      <div className="absolute inset-0 kufiya-pattern pointer-events-none z-0"></div>
      
      <header className="relative z-10 p-6 bg-white shadow-md border-b-4 border-[#2f6f5e]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-[#1f2937]" style={{ color: TATREEZ_COLORS.primary }}>
              {title}
            </h1>
            {subtitle && <p className="text-gray-600 font-bold mt-1">{subtitle}</p>}
          </div>
          <div className="hidden md:flex items-center gap-4">
             <div className="w-12 h-12 bg-[#2f6f5e] rounded-full flex items-center justify-center text-white font-bold">PS</div>
             <span className="font-bold text-[#2f6f5e]">دبلوم التأهيل المهني</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-grow max-w-6xl mx-auto w-full p-4 md:p-8">
        {children}
      </main>

      <footer className="relative z-10 bg-[#1f2937] text-white p-4 text-center text-sm font-bold border-t-4 border-[#d4af37]">
        جميع الحقوق محفوظة - برنامج كنز المعرفة للتأهيل المهني الفلسطيني &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};
