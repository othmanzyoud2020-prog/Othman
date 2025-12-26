
import React, { useState, useEffect } from 'react';
import { ProjectStage, TaskCard } from '../types';
import { STAGES, TASK_CARDS, TATREEZ_COLORS } from '../constants';

export const KnowledgeTreasureGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [availableTasks, setAvailableTasks] = useState<TaskCard[]>([]);
  const [completedStages, setCompletedStages] = useState<Record<ProjectStage, TaskCard[]>>({
    [ProjectStage.PREPARATION]: [],
    [ProjectStage.PLANNING]: [],
    [ProjectStage.EXECUTION]: [],
    [ProjectStage.MONITORING]: [],
    [ProjectStage.CLOSING]: [],
  });
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  useEffect(() => {
    setAvailableTasks([...TASK_CARDS].sort(() => Math.random() - 0.5));
  }, []);

  const handleSelectTask = (taskId: string) => {
    setSelectedTaskId(taskId);
    setFeedback({ type: null, message: '' });
  };

  const handleDropOnStage = (stageId: ProjectStage) => {
    if (!selectedTaskId) {
      setFeedback({ type: 'error', message: 'يرجى اختيار بطاقة نشاط أولاً!' });
      return;
    }

    const task = TASK_CARDS.find(t => t.id === selectedTaskId);
    if (task && task.stage === stageId) {
      // Correct!
      setCompletedStages(prev => ({
        ...prev,
        [stageId]: [...prev[stageId], task]
      }));
      setAvailableTasks(prev => prev.filter(t => t.id !== selectedTaskId));
      setSelectedTaskId(null);
      setFeedback({ type: 'success', message: 'أحسنت! هذا النشاط في مكانه الصحيح.' });

      // Check if finished
      if (availableTasks.length === 1) {
        setTimeout(onComplete, 1500);
      }
    } else {
      setFeedback({ type: 'error', message: 'عذراً، هذا النشاط لا ينتمي لهذه المرحلة. حاول مجدداً!' });
    }
  };

  const progress = ((TASK_CARDS.length - availableTasks.length) / TASK_CARDS.length) * 100;

  return (
    <div className="flex flex-col gap-8 animate-fadeIn">
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#d4af37] flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl">🧭</div>
          <div>
            <h2 className="text-2xl font-black text-amber-900">مغامرة خريطة الكنز</h2>
            <p className="text-amber-800 text-sm">اسحب كل نشاط وضعه في مرحلته الصحيحة لفتح الكنز!</p>
          </div>
        </div>
        <div className="flex-grow max-w-md w-full">
          <div className="flex justify-between text-xs font-bold mb-1 text-gray-600">
            <span>التقدم نحو الكنز</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border">
            <div 
              className="h-full bg-gradient-to-l from-[#2f6f5e] to-[#d4af37] transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Task Cards Deck */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl border-t-8 border-[#b23a2f] max-h-[600px] overflow-y-auto">
          <h3 className="font-black text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
            <span>🎴</span> قائمة الأنشطة
          </h3>
          <div className="flex flex-col gap-3">
            {availableTasks.length > 0 ? (
              availableTasks.map(task => (
                <button
                  key={task.id}
                  onClick={() => handleSelectTask(task.id)}
                  className={`p-4 rounded-xl border-2 text-right transition-all transform hover:scale-[1.02] flex items-center gap-3 ${
                    selectedTaskId === task.id 
                    ? 'border-[#b23a2f] bg-red-50 shadow-inner' 
                    : 'border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span className="text-2xl">{task.icon}</span>
                  <span className="font-bold text-gray-700">{task.text}</span>
                </button>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400 font-bold">
                لقد رتبت جميع الأنشطة! 🎉
              </div>
            )}
          </div>
        </div>

        {/* The Treasure Map */}
        <div className="lg:col-span-2 relative parchment rounded-3xl p-8 shadow-2xl min-h-[500px] border-4 border-[#5b4636]">
          {/* Visual connectors/path */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="none">
               <path d="M100 100 Q 400 50, 700 100 T 700 400 Q 400 450, 100 400 T 100 100" fill="none" stroke="#5b4636" strokeWidth="4" strokeDasharray="10 10" />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {STAGES.map((stage) => (
              <div 
                key={stage.id}
                onClick={() => handleDropOnStage(stage.id)}
                className={`group cursor-pointer p-6 rounded-2xl border-4 border-dashed transition-all flex flex-col items-center text-center ${
                  feedback.type === 'error' && selectedTaskId ? 'animate-shake' : ''
                } ${
                  completedStages[stage.id].length > 0 
                  ? 'border-[#2f6f5e] bg-green-50/50' 
                  : 'border-[#5b4636]/30 bg-white/40 hover:bg-white/80 hover:border-[#d4af37]'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl mb-3 border-2 border-amber-200">
                  {stage.icon}
                </div>
                <h4 className="font-black text-[#5b4636] mb-1">{stage.title}</h4>
                <div className="mt-2 w-full">
                  {completedStages[stage.id].length > 0 ? (
                    <div className="space-y-1">
                      {completedStages[stage.id].map(t => (
                        <div key={t.id} className="text-[10px] font-bold py-1 px-2 bg-green-600 text-white rounded-lg shadow-sm">
                          {t.text}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider">بانتظار الأنشطة</span>
                  )}
                </div>
              </div>
            ))}

            {/* Palestinian Heritage Visual - Al-Aqsa/Old City Stylized Icon */}
            <div className="flex flex-col items-center justify-center p-6 bg-white/30 rounded-2xl border-2 border-dashed border-[#2f6f5e]">
               <div className="text-4xl mb-2">🏘️</div>
               <span className="font-bold text-[#2f6f5e] text-xs">تراثنا - مستقبلنا</span>
            </div>
          </div>

          {feedback.message && (
            <div className={`mt-8 p-4 rounded-xl text-center font-black animate-bounce ${
              feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {feedback.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
