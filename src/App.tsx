import { useEffect, useState } from 'react';

import './App.css';
import type { QUIZ } from './interfaces/QUIZ';
import DATA from './assets/data.json';

function App() {
  const [data, setData] = useState<QUIZ[]>([]);

  useEffect(() => {
    // simulate fetching data from a JSON file
    setData(DATA as QUIZ[]);
  }, []);

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}

export default App;
