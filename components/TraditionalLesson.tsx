
import React from 'react';
import { STAGES, TATREEZ_COLORS } from '../constants';

export const TraditionalLesson: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 animate-fadeIn">
      <div className="mb-8 text-center">
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-2">الطريقة التقليدية</span>
        <h2 className="text-3xl font-bold text-gray-800">مفهوم دورة حياة المشروع</h2>
        <div className="w-24 h-1 bg-[#b23a2f] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            يُعرف <strong>المشروع</strong> بأنه مسعى مؤقت يُبذل لإيجاد منتج أو خدمة أو نتيجة فريدة. ولإنجاح هذا المسعى، يجب أن نتبع سلسلة من المراحل المنطقية التي تُسمى "دورة حياة المشروع".
          </p>
          <div className="p-4 bg-amber-50 rounded-xl border-r-4 border-[#d4af37]">
            <h4 className="font-bold text-amber-900 mb-1">لماذا نحتاج لهذه المراحل؟</h4>
            <ul className="list-disc list-inside text-amber-800 text-sm space-y-1">
              <li>تسهيل مراقبة التقدم.</li>
              <li>ضمان الجودة في كل خطوة.</li>
              <li>توزيع المهام بوضوح بين أفراد الفريق.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="https://picsum.photos/seed/project/600/400" alt="Workplace" className="w-full h-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {STAGES.map((stage, idx) => (
          <div key={stage.id} className="p-6 rounded-xl border-2 border-gray-50 hover:border-[#2f6f5e] transition-all bg-gray-50 flex flex-col items-center text-center group">
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stage.icon}</span>
            <span className="font-black text-gray-400 text-xs mb-1">المرحلة {idx + 1}</span>
            <h3 className="font-bold text-gray-800 mb-2">{stage.title}</h3>
            <p className="text-xs text-gray-600">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
