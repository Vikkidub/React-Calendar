import './table.css';

function WeekView() {
    var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var rows = 3;
    var cols = 7;
    var table = [];
  
    // Display weekdays in the first row only
    var cells = [];
    for (var j = 0; j < cols; j++) {
      cells.push(<td key={j}>{weekdays[j]}</td>);
    }
    table.push(<tr key={0}>{cells}</tr>);
  
    // For the remaining rows, display the numbers
    for (var i = 1; i < rows; i++) {
      cells = [];
      for (j = 0; j < cols; j++) {
        cells.push(<td key={j}>{i * cols + j + 1}</td>);
      }
      table.push(<tr key={i}>{cells}</tr>);
    }
  
    return table;
  }
  
  export default WeekView;
  