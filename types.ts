
export enum SubTopic {
  OVERVIEW = 'overview',
  BACKGROUND_1_1 = '1.1',
  CHARACTERISTICS_1_2 = '1.2',
  EXCELLENCE_1_3 = '1.3',
  ROLES_1_4 = '1.4',
  QUIZ = 'quiz'
}

export interface FactCard {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  icon: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
