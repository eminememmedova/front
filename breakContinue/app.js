//? 1den 10a qeder ededleri yazdir ve 8e cetdiqda dovrden cixsin
// let i=1;
// while (i<=10) {
//     console.log(i);
//     if (i>=8) {
//         break;
//     }
//     i++;
// }


//? continue

//1 2 3 4 5 6 7 9 10

let a=0;
while (a<=10) {
    a++;
    if (a==8) {
        continue;
    }
    if (a==11) {
        break;
    }
    console.log(a);

}