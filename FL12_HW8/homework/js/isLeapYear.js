function isLeapYear(DatE) {
    const YeaR = new Date(DatE).getFullYear();

    if(!YeaR) {
        return (`Invalid Date`);
    } else if (!(YeaR % 100) && YeaR % 400 || YeaR % 4) {
        return (`${YeaR} is not a leap year`);
    } else {
        return (`${YeaR} is a leap year`);
    }
}

isLeapYear('2024-02-03 01:20:30');