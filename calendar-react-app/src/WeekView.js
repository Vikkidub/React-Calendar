function WeekView(){
    var rows = 2; 
    var cols = 7; 
    var table = [];

    for (var i = 0; i < rows; i++) {
        var cells = [];

        for (var j = 1; j <= cols; j++) {
            cells.push(<td key={j}>{i * cols + j}</td>);
        }

        table.push(<tr key={i}>{cells}</tr>);
    }
    
    return table;
}

export default WeekView;