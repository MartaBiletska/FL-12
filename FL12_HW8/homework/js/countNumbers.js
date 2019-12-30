function countNumbers(){
    var string = arguments[0];
    var ObjecT = {};
    var StringNew = '';
    var CounT;
    for(let k = 0; k < string.length; k++){
        if(!isNaN(string[k])){
            StringNew += string[k];
        }
    }
    for(let i = 0; i < StringNew.length; i++){
        CounT = 0;
        for(let j = 0; j < StringNew.length; j++){
            if(StringNew[i] === StringNew[j]){
                CounT++;
            }
        }
        ObjecT[StringNew[i]] = CounT;
    }
    return ObjecT;
}

countNumbers('jdjjka000466588kkkfs662555');