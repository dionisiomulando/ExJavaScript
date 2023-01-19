document.write('Dionisio Pinto')
/*
let nome = '1234';
//let soma = nome - 5
//console.log(typeof soma, soma)
console.log(typeof nome,':', nome);

let bln = Boolean(nome);
let soma = bln + 5
console.log(typeof soma, soma)
console.log(typeof bln, bln);

let num = Number(bln);
console.log(typeof num, num);

let bgi = BigInt(num);
console.log(typeof bgi, bgi);

let b = Boolean( BigInt(Number("1234")));
console.log(`${b} ${typeof b}`);

let a = String(Number(BigInt(Boolean(true))))
console.log(`${typeof a}, ${a}`)
total = a - 89
console.log(total)

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b1 = Boolean(bi);
console.log(`${b1} [${typeof b1}]`);
console.log(typeof bgi, bgi);


let bl = '100' / true;
console.log(bl)
let u = '100' + undefined;
console.log(`${u}`)

let bi = 100n / 200n;
console.log(`${bi}`)*/

let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]
