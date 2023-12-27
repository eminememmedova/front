//Serti ifadeler

//!test1:
// let age = Number(prompt("enter your age")) 
// let money = Number(prompt("enter your money"))

// if (age>18 && money>3000) {
//     alert("imtahana qosula bilersiniz")
// } else {
//     alert("imtahana qosula bilmersiz")
// }

//!test2:

// let num1= Number(prompt("enter num1"));
// let num2= Number(prompt("enter num2"));
// let num3= Number(prompt("enter num3"));
// let average = 0.3*num1 + 0.3*num2 + 0.4*num3;


// if (average >50) {
//     alert("qebul oldunuz");
// } else {
//     alert("qebul olmadiniz");
// }

//!test3:

// let choice = prompt("pls make a choice");

// if (choice==1) {
//     alert("you choiced " + choice)
// } else if (choice==2){
//     alert("you choiced " + choice)
// }
// else if (choice==3){
//     alert("you choiced " + choice)
// }
// else{
//     alert("you made the wrong choice ")
// }

//!test3

// let name = prompt("enter your name");
// let fin = prompt("enter your fin");

// function inf(name, fin) {
//     if (name == "") {
//         alert("pls enter your name")
//         prompt("enter your name");
//     } if (name != "") {
//         if (fin.length != 11) {
//             alert("pls enter 11 caracters");
//             return
//         }
//         else{
//             alert("end")
//         }
//     }
//     else{
//         prompt("enter your name");
//     }
//   return;
// }

// inf(name, fin)




//?-----------------------------------
// inf(name, fin)

// function inf(name, fin) {
//     if (name != "") {
//         if (fin.length==11) {
//             alert("end")
//         }else{
//             alert("pls enter 11 caracters")
//         }
//     }else{
//         alert("pls enter your name")
//     }
// }
//? ---------------------------------
// function inf(name, fin) {
//     if (name == "") {
//         alert("pls enter your name")
//     }else{
//         if (fin.length ==11) {
//             alert("end")
//         }
//         else{
//             alert("pls enter 11 caracters")
//         }
//     }
// }

// console.log(parseFloat(1.5));
// console.log(parseInt(1.5));


// //! Beden kutle indeksi hesablanmasi
// let ceki = Number(prompt("cekinizi yazin"));
// let boy = Number(prompt("boyunuzu yazin  metrle"));

// let bki = ceki / (boy*2);


//      if (bki>=0 && bki<=18.4) {
//         console.log("ariq  " + bki);
//     }
//     else if(bki>=18.5 && bki<=24.9){
//         console.log("normal  " + bki);
//     }
//     else if (bki>=25.0 && bki<=29.9) {
//         console.log("artiq cekili  " + bki);
//     }
//     else if (bki>=30){
//         console.log("piylenme  " + bki);
//     }
//     else{
//         console.log("melumatlari duzgun daxil edin  " + bki);
//     }
 
//! yanacaqdoldurma menteqesi

/*
1-Dizel  : 24.53
2-Benzin : 22.25
3-LPG    : 11.1


gelen musteriden alinacaq melumatlar
1-yanacaq tipi
2-yuklenecek yanacagin litri
*/

// let dizel= 24.53;
// let benzin = 22.25;
// let lpg = 11.1;

// const yeniSetir = "\r\n";

//   let tip = (prompt(
//     "1.Dizel" + yeniSetir
//     +"2.Benzin" +yeniSetir
//     +"3.LPG" +yeniSetir+
//     "yanacaq tipini secin")) 

//   if (tip ==1 || tip==2 || tip==3) {
//     let litr = Number(prompt("yanacaq litrini yazin"))
//     let balans = Number(prompt("balansinizi qeyd edin"))
     
//     if (tip ==1 ) {
//         let odenecekMebleg= dizel*litr;
//         let eksik=odenecekMebleg-balans; 
//        if (odenecekMebleg<=balans) {
//           balans-=odenecekMebleg;
//           alert("yanacaq alindi"+ yeniSetir
//           +"qaliq balans:  " +balans)
//        }
       
//        else{
            
//           alert("yanacaq alinmnadi"+ yeniSetir
//           +"odenecek mebleg" + odenecekMebleg+ yeniSetir
//           +"balans"+ balans+ yeniSetir
//           + "eksik" + eksik+ yeniSetir)
//        }
//     }
//     else if (tip ==2){
//         let odenecekMebleg= benzin*litr;
//         let eksik=odenecekMebleg-balans; 
//       if (odenecekMebleg<=balans) {
//          balans-=odenecekMebleg;
//          alert("yanacaq alindi"+ yeniSetir
//          +"qaliq balans:  " +balans)
//       } else{
            
//           alert("yanacaq alinmnadi"+ yeniSetir
//           +"odenecek mebleg" + odenecekMebleg+ yeniSetir
//           +"balans"+ balans+ yeniSetir
//           + "eksik" + eksik+ yeniSetir)
//        }
   
//     }
//     else if (tip==3) {
//         let odenecekMebleg= lpg*litr;
//         let eksik=odenecekMebleg-balans; 
//       if (odenecekMebleg<=balans) {
//          balans-=odenecekMebleg;
//          alert("yanacaq alindi"+ yeniSetir
//          +"qaliq balans:  " +balans)
//       } else{
            
//           alert("yanacaq alinmnadi"+ yeniSetir
//           +"odenecek mebleg" + odenecekMebleg+ yeniSetir
//           +"balans"+ balans+ yeniSetir
//           + "eksik" + eksik+ yeniSetir)
//        }
//     }
//   }else{
//     alert("DUZGUN TIP SECIN");
//   }


 
//   else if (tip !=1 || tip!=2 || tip!=3) {
//     alert("duzgun secim edin");
//   }
