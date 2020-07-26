function checkDates(startDate, endDate) {
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    let date = new Date().setHours(0, 0, 0, 0);
    return startDate <= endDate && startDate >= date && endDate >= date;
}

const countdown = (start) => {

    var date = new Date();

    date.setHours(0, 0, 0, 0);

    var diff = start.getTime() - date.getTime();

    var diffInDays = diff / (1000 * 3600 * 24);

    console.log(diffInDays);

    return diffInDays;
}


export { checkDates, countdown }