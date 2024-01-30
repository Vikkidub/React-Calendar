function getMonth() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const time = new Date();
    let monthIndex = time.getMonth();
    let monthName = months[monthIndex];

    return <div>{monthName}</div>;
}


export default getMonth;