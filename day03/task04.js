
// pr("%", 4);

// function pr(percent, number){
//     let result = "";
//     for (let i = 0; i < number; i++) {
//         if(percent == "%"){
//             result += percent;
//         }        
//     }
//     return console.log(result);
// }

pr("%", 6, function(percent, number){
    let result = "";
    if(percent == "%"){
        for (let i = 0; i < number; i++) {
            result += percent;
        }
    }
    return console.log(result);
});

function pr(percent, number, callback){
    if(callback){
        callback(percent, number)
    }

    return percent, number
}