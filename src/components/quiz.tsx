// render a quiz question with multiple options.

import type { QUIZ } from '../interfaces/QUIZ.ts';

type QuizProps = QUIZ;

export const Quiz: React.FC<QuizProps> = ({ question, options }) => {
  return (
    <div className='quiz-container'>
      <p className='question'>{question}</p>
      {options?.map((option) => (
        <div key={option.value}>{option.label}</div>
      ))}
    </div>
  );
};
