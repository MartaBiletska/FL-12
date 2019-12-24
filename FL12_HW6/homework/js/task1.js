const a = prompt('Input a', 'write your value in this line');
const b = prompt('Input b', 'write your value in this line');
const c = prompt('Input c', 'write your value in this line');

let D, x, x1, x2;

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data');
} else {
    let D, x, x1, x2;
    D = b * b - 4 * a * c;

    if (D < 0) {
        console.log('No solution, Discriminant < 0');
    } else if (D === 0) {
        x = -b/(2 * a);
        console.log('Discriminant = 0, x = ' + Math.round(x));
    } else {
        x1 = (-b + Math.sqrt(D))/(2 * a);
        x2 = (-b - Math.sqrt(D))/(2 * a);
        console.log('Discriminant > 0: x1 = ' + Math.round(x1), 'x2 = ' + Math.round(x2));
    }
}
