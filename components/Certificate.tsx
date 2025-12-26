
import React from 'react';
import { TATREEZ_COLORS } from '../constants';

export const Certificate: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  return (
    <div className="animate-fadeIn flex flex-col items-center">
      <div className="w-full max-w-4xl p-1 bg-gradient-to-br from-[#d4af37] via-[#2f6f5e] to-[#b23a2f] rounded-3xl shadow-2xl overflow-hidden mb-8">
        <div className="bg-[#fdfaf5] p-12 text-center relative border-8 border-white rounded-2xl">
          {/* Border Pattern */}
          <div className="absolute inset-4 border-2 border-[#d4af37] border-double opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl font-black mb-8 tracking-widest text-[#5b4636]">شهادة إنجاز</h1>
            <p className="text-xl text-gray-600 mb-12 font-bold">يمنح برنامج دبلوم التأهيل المهني الفلسطيني هذه الشهادة تقديراً لـ</p>
            
            <div className="text-4xl font-black text-[#2f6f5e] border-b-4 border-dashed border-gray-300 inline-block px-12 pb-2 mb-12">
              المتدرب المتميز
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-bold mb-16">
              لاجتيازه بنجاح تدريب "كنز المعرفة" الخاص بدورة حياة إدارة المشاريع، وإتقانه لمهارات ترتيب الأنشطة وفق المعايير المهنية العالمية والمحلية.
            </p>
            
            <div className="grid grid-cols-2 gap-12 max-w-lg mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-2 flex items-center justify-center border-4 border-[#d4af37]">
                   <span className="text-3xl">⭐</span>
                </div>
                <span className="block font-black text-gray-400 uppercase text-xs">ختم التميز</span>
              </div>
              <div className="text-center">
                <div className="h-1 bg-gray-300 mb-4 mt-20"></div>
                <span className="block font-black text-gray-800">إدارة البرنامج</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onRestart}
        className="px-8 py-4 bg-[#2f6f5e] text-white rounded-full font-black shadow-xl hover:bg-[#255a4c] transition-all transform hover:scale-110 active:scale-95"
      >
        بدء التدريب من جديد 🔄
      </button>
    </div>
  );
};
