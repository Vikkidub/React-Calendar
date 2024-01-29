import React, { useState } from 'react';
import './App.css';
import MonthView from './MonthView';
import WeekView from './WeekView';
import GetMonth from './GetMonth';

function App() {
  const [isMonthView, setMonthView] = useState(true);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <header><GetMonth /></header>
      <table>{isMonthView ? <MonthView /> : <WeekView />}</table>
      <button onClick={() => setMonthView(!isMonthView)}>
        Week/Month display
      </button>
    </div>
  );
}

export default App;
