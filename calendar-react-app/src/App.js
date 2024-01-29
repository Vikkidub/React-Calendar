import React, { useState } from 'react';
import './App.css';
import MonthView from './MonthView';
import WeekView from './WeekView';

function App() {
  const [isMonthView, setMonthView] = useState(true);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <table>{isMonthView ? <MonthView /> : <WeekView />}</table>
      <button onClick={() => setMonthView(!isMonthView)}>
        Week/Month display
      </button>
    </div>
  );
}

export default App;
