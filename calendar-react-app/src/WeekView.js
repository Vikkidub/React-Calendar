import './table.css';

function WeekView() {
    var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var rows = 2; 
    var cols = 7;
    var table = [];
  
    var cells = [];
    for (var j = 0; j < cols; j++) {
      cells.push(<td key={j}>{weekdays[j]}</td>);
    }
    table.push(<tr key={0}>{cells}</tr>);
  
    for (var i = 1; i < rows; i++) {
      cells = [];
      for (j = 0; j < cols; j++) {
        cells.push(
          <td className="schedulebox" key={j}>
            <textarea type="text" placeholder="Schedule upcoming work or activities"/>
          </td>
        );
      }
      table.push(<tr key={i}>{cells}</tr>);
    }
  
    return table;
  }
  
  export default WeekView;
  