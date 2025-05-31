export interface QUIZ {
  id: string;
  question: string;
  score: number;
  options: [
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string }
  ];
  correctAnswers: string[];
}
