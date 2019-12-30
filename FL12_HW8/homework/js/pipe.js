function addOne(x){
    return x + 1;
}
function pipe(NumbeR){
    for(let k = 1; k < arguments.length; k++){
        NumbeR = arguments[k](NumbeR);
    }
    return NumbeR;
}

pipe(3, addOne);