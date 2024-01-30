function getMonth() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   // let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const time = new Date();
    let monthIndex = time.getMonth();
    let monthName = months[monthIndex];
   // let days = daysInMonth[monthIndex];
    return <div>{monthName}</div>;
}

export default getMonth;