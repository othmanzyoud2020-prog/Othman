
import React from 'react';
import { TATREEZ_COLORS } from '../constants';

export const Highlights: React.FC = () => {
  const points = [
    { title: 'شمولية الإعداد', text: 'البداية الصحيحة تكمن في تحديد الهدف بوضوح قبل الشروع في التخطيط.' },
    { title: 'دقة الميزانية', text: 'تخصيص الموارد المالية هو العمود الفقري لنجاح أي مشروع مهني.' },
    { title: 'أهمية المراقبة', text: 'لا يكفي التنفيذ فحسب، بل يجب مراقبة الجودة لضمان مطابقة المخرجات للمواصفات.' },
    { title: 'التوثيق الختامي', text: 'إغلاق المشروع بشكل رسمي وتسليم التقرير النهائي يحفظ حقوق الفريق والجهة الممولة.' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#2f6f5e] animate-fadeIn">
      <h2 className="text-2xl font-black text-[#2f6f5e] mb-8 text-center">أبرز النقاط المستخلصة من الدليل التدريبي</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {points.map((point, i) => (
          <div key={i} className="flex gap-4 items-start p-6 bg-gray-50 rounded-2xl border-r-4 border-[#b23a2f] hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-[#b23a2f] text-white rounded-full flex items-center justify-center font-black">
              {i + 1}
            </div>
            <div>
              <h4 className="font-black text-gray-800 mb-1">{point.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">{point.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-green-50 rounded-3xl border-2 border-dashed border-[#2f6f5e] flex flex-col md:flex-row items-center gap-6">
        <div className="text-5xl">🇵🇸</div>
        <div>
          <h3 className="text-xl font-black text-[#2f6f5e] mb-2">رسالة للمتدرب الفلسطيني</h3>
          <p className="text-[#2f6f5e]/80 font-bold italic">
            "إن اتقانك لأدوات إدارة المشاريع هو سلاحك في بناء مؤسسات وطنية قوية ومستدامة تساهم في نهضة مجتمعنا المهني والتقني."
          </p>
        </div>
      </div>
    </div>
  );
};
