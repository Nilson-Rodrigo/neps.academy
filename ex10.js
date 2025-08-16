// Zerinho ou um
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);
if( A == B  && B == C){
    console.log('*');
}else if( A == 0  && B == 0 && C == 1){
        console.log('C');
}else if( A == 0 && B == 1 && C == 0 ){
    console.log('B');
}else if( A == 1 && B == 0 && C == 0){
    console.log('A');
} else if( A == 1  && B == 1 && C == 0){
        console.log('C');
}else if( A == 1 && B == 0 && C == 1 ){
    console.log('B');
}else if( A == 0 && B == 1 && C == 1){
    console.log('A');
} 