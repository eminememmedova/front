let cars = ["bmw", "toyota", "mercedes", "porsche", "bmw"];

//?---PUSH METHOD---
// cars.push("hundai")
// let updatedCars = cars.push("hundai")
// console.log(cars); //saedece massivi consolea verir
// console.log(updatedCars); //massivdeki elementlerin sayini consolea verir

//?---UNSHIFT METHOD---
// cars.unshift("hundai");
// let updatedCars =cars.unshift("hundai");
// console.log(cars);  //saedece massivi consolea verir
// console.log(updatedCars); //massivdeki elementlerin sayini consolea verir

//?---POP METHOD---
// cars.pop();
// let removedCar = cars.pop();
// console.log(cars); //saedece massivi consolea verir
// console.log(removedCar); //silinen elementi consolea verir

//?---SHIFT METHOD---
// cars.shift();
// let removedCar = cars.shift();
// console.log(cars); //saedece massivi consolea verir
// console.log(removedCar); //silinen elementi consolea verir

//?---SPLICE METHOD---
// console.log(cars);
// cars.splice(1,0,"hundai", "cadillac"); //(hansi indexden baslasin, nece element silsin, silinen indexden sonra hansi elementler elave elesin)
// console.log(cars); //saedece massivi consolea verir
// updateCars= cars.splice(1, 2)
// console.log(cars); 
// console.log(updateCars);

//?---TOSTRING METHOD---
// console.log(cars);
// console.log(typeof cars);
// cars.toString();
// stringCars=cars.toString()
// console.log(typeof stringCars);
// console.log(stringCars);

//?---JOIN METHOD---
// console.log(cars);
// let string =cars.join("/");
// console.log(string);

//?---CONCAT METHOD---
// console.log(cars);
// let cars2=["hundai", "rr"];
// combinedcars=cars.concat(cars2);
// console.log(combinedcars);

//?---SLICE METHOD---
// console.log(cars);
// let slicecars=cars.slice(1,3);
// console.log(slicecars); //1ci indexde daxil olmaqla 1den baslayib 3e qeder goturur ama 3cu index daxil deyil

//?---LENGTH PROPERTY---
// console.log(cars.length);

//?---REVERSE METHOD---
// console.log(cars);
// reverse= cars.reverse()
// console.log(reverse);

//?---SPLIT METHOD---
// let users = "user1,user2,user3";
// let usersArray = users.split(",");
// console.log(usersArray);

//?---INDEXOF METHOD---
// let element = cars.indexOf("bmw");
// console.log(element);

//?---LASTINDEXOF METHOD---
// let element = cars.lastIndexOf("bmw")
// console.log(element);

//?---INCLUDE METHOD---
let element = cars.includes("a");
console.log(element);