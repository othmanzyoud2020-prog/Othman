
import React from 'react';
import { ProjectStage, TaskCard, StageInfo } from './types';

export const STAGES: StageInfo[] = [
  { 
    id: ProjectStage.PREPARATION, 
    title: 'الإعداد', 
    description: 'تحديد فكرة المشروع والجدول المبدئي وتشكيل الفريق.',
    icon: '🏰'
  },
  { 
    id: ProjectStage.PLANNING, 
    title: 'التخطيط', 
    description: 'رسم خارطة الطريق وتحديد الميزانية والموارد بدقة.',
    icon: '📋'
  },
  { 
    id: ProjectStage.EXECUTION, 
    title: 'التنفيذ', 
    description: 'البدء الفعلي في العمل وتحويل الأفكار إلى واقع.',
    icon: '💼'
  },
  { 
    id: ProjectStage.MONITORING, 
    title: 'المراقبة والتحكم', 
    description: 'متابعة سير العمل والتأكد من عدم الانحراف عن المسار.',
    icon: '👁️'
  },
  { 
    id: ProjectStage.CLOSING, 
    title: 'الإنهاء', 
    description: 'إغلاق المشروع وتسليم التقارير النهائية والدروس المستفادة.',
    icon: '✅'
  }
];

export const TASK_CARDS: TaskCard[] = [
  { id: 't1', text: 'تحديد ميزانية المشروع', stage: ProjectStage.PLANNING, icon: '💰' },
  { id: 't2', text: 'عقد اجتماع الفريق الافتتاحي', stage: ProjectStage.PREPARATION, icon: '👥' },
  { id: 't3', text: 'تسليم التقرير النهائي', stage: ProjectStage.CLOSING, icon: '📜' },
  { id: 't4', text: 'توزيع المهام على الموظفين', stage: ProjectStage.PLANNING, icon: '📍' },
  { id: 't5', text: 'بناء المنتج أو الخدمة', stage: ProjectStage.EXECUTION, icon: '🛠️' },
  { id: 't6', text: 'مقارنة المنجز بالخطة الزمنيّة', stage: ProjectStage.MONITORING, icon: '📊' },
  { id: 't7', text: 'اعتماد ميثاق المشروع', stage: ProjectStage.PREPARATION, icon: '🖋️' },
  { id: 't8', text: 'فحص جودة المخرجات', stage: ProjectStage.MONITORING, icon: '🔍' },
  { id: 't9', text: 'توثيق الدروس المستفادة', stage: ProjectStage.CLOSING, icon: '💡' },
  { id: 't10', text: 'شراء المواد الخام اللازمة', stage: ProjectStage.EXECUTION, icon: '🛒' },
];

export const TATREEZ_COLORS = {
  primary: '#b23a2f', // Red
  secondary: '#2f6f5e', // Green
  accent: '#d4af37', // Gold
  dark: '#1f2937'
};
