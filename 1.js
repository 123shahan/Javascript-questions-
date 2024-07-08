let a = 3;
let b = a++;
let c = ++a;
console.log(a,b,c);
 
//OUTPUT 4,2,4
//a: 4 (incremented twice, once in a++ and once in ++a)
////b: 2 (assigned the original value of a before the increment)//
//c: 4 (assigned the value of a after the second increment)//