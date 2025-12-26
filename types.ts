
export enum ProjectStage {
  PREPARATION = 'PREPARATION',
  PLANNING = 'PLANNING',
  EXECUTION = 'EXECUTION',
  MONITORING = 'MONITORING',
  CLOSING = 'CLOSING'
}

export interface TaskCard {
  id: string;
  text: string;
  stage: ProjectStage;
  icon: string;
}

export interface StageInfo {
  id: ProjectStage;
  title: string;
  description: string;
  icon: string;
}

export type AppStep = 'TRADITIONAL' | 'GAMIFIED' | 'HIGHLIGHTS' | 'CERTIFICATE';
