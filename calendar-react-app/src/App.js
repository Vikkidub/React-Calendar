import './App.css';
import MonthView from './table';
import WeekView from './WeekView';

function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
    <table> <MonthView /> </table>
    <button onclick="<WeekView />">Week schedule</button>
    </div>
  );
}

export default App;
