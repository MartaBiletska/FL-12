function getMin() {
    var min_num = arguments[0];
    for (var k = 0; k < arguments.length; k++ ) {
        if (arguments[k] < min_num) {
            min_num = arguments [k];
        }
    }
    return min_num;
}
getMin(3,0,-3);