//? Faktorial hesablanmasi

let num = Number(prompt("enter number: "))
let hasil = 1;
for (let i = 1; i <= num; i++) {

    hasil*=i
  
    // if (i==num) {
    // console.log(num*i);
    // }
}
console.log(hasil);