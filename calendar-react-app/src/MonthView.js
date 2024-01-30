import './table.css';

function MonthView() {
    var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var rows = 6;
    var cols = 7;
    var table = [];
  
    var cells = [];
    for (var j = 0; j < cols; j++) {
      cells.push(<td key={j}>{weekdays[j]}</td>);
    }
    table.push(<tr key={0}>{cells}</tr>);
  
    const time = new Date();
    var daysInMonth = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate();

    for (var i = 1; i < rows; i++) {
        cells = [];
        for (j = 0; j < cols; j++) {
            var dayNumber = (i - 1) * cols + j + 1;

            var displayValue = dayNumber <= daysInMonth ? dayNumber : '';
            cells.push(<td key={j}>{displayValue}</td>);
        }
        table.push(<tr key={i}>{cells}</tr>);
    }
  
    return table;
  }

  export default MonthView;
  