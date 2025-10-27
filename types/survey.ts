export interface Survey {
  id: string;
  title: string;
  timestamp: string;
  sensitiveData: string;
  status: 'active' | 'completed' | 'pending';
  category: string;
}

export interface SurveyCardProps {
  survey: Survey;
  index: number;
}