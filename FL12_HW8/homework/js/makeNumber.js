function makeNumber(argmnts) {
    var numbers = '';
    for (let k=0; k < argmnts.length; k++) {
        if (0 <= argmnts[k] && argmnts[k]<= 9) {
            numbers = numbers + argmnts[k];
        }
    }
    return numbers;
}
makeNumber('erer384jjjfd123');
