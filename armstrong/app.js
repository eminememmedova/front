//? Armstrong ededler 
//ex: 153, 370, 407 
// 153 = 1*1*1 + 5*5*5 + 3*3*3
//! Methodlar olmadan
// let num = Number(prompt("eded daxil edin:"))
// let tek = num%10;  
// let onluq =((num - tek)%100)/10; 
// let yuzluk = Math.floor(num/100);  

// if (num==(tek**3)+(onluq**3)+(yuzluk**3)) {
//     alert(num + "is armstrong")
// }else{
//     alert (num +"is not armstrong")
// }

//! methodlardan istifade ederek
// let num= prompt("enter your num");
// let sum =0;

// for (let i = 0; i < num.length; i++) {
//    let reqem =  num.charAt(i)
//     sum+=reqem**3
// }
// if (num==sum) {
//     alert("armstrong")
// }else{
//     alert("it is not armstrong")
// }