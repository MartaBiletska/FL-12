var a = +prompt('Input side a', "write here");
var b = +prompt('Input side b', "write here");
var c = +prompt('Input side c', "write here");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
}

if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}

if (c < a + b && b < a + c && a < b + c) {

    if (a === b && a === c && c === b) {
        console.log('Equilateral triangle');
    }
    else if (a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    }
    else if (a !== b && b !== c && b !== a)  {
        console.log('Scalene triangle');
    }
}

else {
    console.log('Triangle doesn’t exist');
}











