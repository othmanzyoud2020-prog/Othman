
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { TraditionalLesson } from './components/TraditionalLesson';
import { KnowledgeTreasureGame } from './components/KnowledgeTreasureGame';
import { Highlights } from './components/Highlights';
import { Certificate } from './components/Certificate';
import { AppStep } from './types';
import { TATREEZ_COLORS } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('TRADITIONAL');

  const handleNext = () => {
    if (currentStep === 'TRADITIONAL') setCurrentStep('GAMIFIED');
    else if (currentStep === 'GAMIFIED') setCurrentStep('HIGHLIGHTS');
    else if (currentStep === 'HIGHLIGHTS') setCurrentStep('CERTIFICATE');
  };

  const handleRestart = () => setCurrentStep('TRADITIONAL');

  return (
    <Layout 
      title="كنز المعرفة" 
      subtitle="رحلة تفاعلية في عالم إدارة المشاريع"
    >
      <div className="mb-10 flex items-center justify-center">
        <div className="flex bg-white rounded-full shadow-md p-1 border border-gray-100 w-full max-w-3xl overflow-x-auto">
          {[
            { id: 'TRADITIONAL', label: 'الشرح التقليدي', icon: '📖' },
            { id: 'GAMIFIED', label: 'لعبة الكنز', icon: '🗺️' },
            { id: 'HIGHLIGHTS', label: 'أبرز النقاط', icon: '📌' },
            { id: 'CERTIFICATE', label: 'الشهادة', icon: '🎓' }
          ].map((step, idx) => (
            <button
              key={step.id}
              onClick={() => {
                // Only allow going back or to next if completed logic would normally be here
                // For this demo, we allow clicking freely between discovered steps
                setCurrentStep(step.id as AppStep);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-black text-sm transition-all whitespace-nowrap ${
                currentStep === step.id 
                ? 'bg-[#2f6f5e] text-white shadow-lg scale-105' 
                : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="hidden sm:inline">{step.icon}</span>
              {step.label}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[500px]">
        {currentStep === 'TRADITIONAL' && (
          <>
            <TraditionalLesson />
            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleNext}
                className="px-10 py-4 bg-[#b23a2f] text-white rounded-full font-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-3"
              >
                انتقل إلى اللعبة التفاعلية 🎮
                <span className="text-xl rotate-180">⬅️</span>
              </button>
            </div>
          </>
        )}

        {currentStep === 'GAMIFIED' && (
          <>
            <KnowledgeTreasureGame onComplete={handleNext} />
          </>
        )}

        {currentStep === 'HIGHLIGHTS' && (
          <>
            <Highlights />
            <div className="mt-8 flex justify-center">
              <button 
                onClick={handleNext}
                className="px-12 py-4 bg-[#d4af37] text-white rounded-full font-black shadow-xl hover:bg-[#c4a030] transform transition-all hover:scale-105"
              >
                استلم شهادة الإنجاز 🎓
              </button>
            </div>
          </>
        )}

        {currentStep === 'CERTIFICATE' && (
          <Certificate onRestart={handleRestart} />
        )}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out infinite;
        }
      `}</style>
    </Layout>
  );
};

export default App;
