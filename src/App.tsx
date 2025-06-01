import { useEffect, useState } from 'react';

import './App.scss';

import DATA from './assets/data.json';

import type { QUIZ } from './interfaces/QUIZ.ts';
import { Quiz } from './components/quiz.tsx';

function App() {
  const [data, setData] = useState<QUIZ[]>([]);
  const [questionNo, setQuestionNo] = useState<number>(0);

  useEffect(() => {
    // simulate fetching data from a JSON file
    setData(DATA as QUIZ[]);
  }, []);

  return (
    <div className='container'>
      <div className='subject'>Programming</div>
      <div className='question-header'>
        question: {questionNo + 1}/{data.length}
      </div>
      <div className='quiz'>
        <Quiz {...data[questionNo]} />
      </div>
      <div className='nav nav-next'>
        <button disabled={questionNo === data.length - 1} onClick={() => setQuestionNo((c) => c + 1)}>
          Next
        </button>
      </div>
      <div className='nav nav-prev'>
        <button disabled={questionNo === 0} onClick={() => setQuestionNo((c) => c - 1)}>
          Prev
        </button>
      </div>
    </div>
  );
}

export default App;
