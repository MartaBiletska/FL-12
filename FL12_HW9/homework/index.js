//1
function cnvrt() {
    var argmnts, k;
    var nmbrs = [];
    for (k = 0; arguments.length > k; k++) {
        if (typeof arguments[k] === 'number') {
            argmnts = String(arguments[k]);
            nmbrs.push(argmnts);
        } else if (typeof arguments[k] === 'string') {
            argmnts = Number(arguments[k]);
            nmbrs.push(argmnts);
        }
    }
    return nmbrs;
}
cnvrt('2', 3, 8, '4');

//2
function executeforEach(arr, callBack) {
    for(var k = 0; arr.length > k; k++){
        callBack(arr[k]);
    }
}
executeforEach([2,3,4],function(el){
    console.log(el * 2);
});

//3
function mapArray(Arr, callBack){
    var ArrTrans = [];
    executeforEach(Arr, function (el) {
        ArrTrans.push(callBack(Number(el)));
    });
    return ArrTrans;
}
mapArray([3, '2', 1], function(el){
    return el + 3;
});

//4
function filterArray(Array, callBack){
    var arr_trans = [];
    executeforEach(Array, function(el) {
        if(el % 2 === 0) {
            arr_trans.push(callBack(el));
        }
    });
    return arr_trans;
}
filterArray([4, 3, 6], function(el){
    return el;
});

//5
function flipOver(StrinG) {
    var str_trans = '';
    var i;
    for (i = StrinG.length - 1; 0 <= i; i--) {
        str_trans = str_trans + StrinG[i];
    }
    return str_trans;
}
flipOver('hey world');

//6
function makeListFromRange([First_numb, Last_numb]) {
    var transf_arr = [];
    var k;
    for (k = First_numb; k <= Last_numb; k++) {
        transf_arr.push(k);
    }
    return transf_arr;
}
makeListFromRange([4, 9]);

//7
function getArrayOfKeys(Array, Kluch){
    var transf_arr=[];
    executeforEach(Array,function (el) {
        transf_arr.push(el[Kluch]);
    });
    return transf_arr;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
getArrayOfKeys(actors,'name');

//8
function substitute(Arr){
    var transf_arr = [];
    mapArray(Arr,function(el) {
        if (el < 30 ) {
            el= "*";
        }
        transf_arr.push(el);
    });
    return transf_arr;
}
substitute([3, 456, 32, 1]);

//9
function getPastDay(date, Pst_days){
    const millsc_inday = 1000*60*60*24;
    return new Date(date - millsc_inday * Pst_days ).getDate();
}
const date = new Date(2018, 1, 4);
getPastDay(date, 6);

//10
function formatDate(date) {
    var MinuteS = date.getMinutes();
    var HouR = date.getHours();
    var DaY = date.getDate();
    var MontH = date.getMonth() + 1;
    var YeaR = date.getFullYear();

    if(MinuteS < 10){
        MinuteS = `0${date.getMinutes()}`;
    } else {
        MinuteS = date.getMinutes();
    }
    if(HouR < 10){
        HouR= `0${date.getHours()}`;
    } else {
        HouR = date.getHours();
    }
    return `${YeaR}/${MontH}/${DaY} ${HouR}:${MinuteS}`;
}
formatDate(new Date('3/23/2015 22:04:12'));