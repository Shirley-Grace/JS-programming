let numbers = [1,2,7,3,8];
let numbers2 =[9,6,4,5];
//numbers.push(7,8);











const arr =[1,2,3,,5];
//console.log (arr.includes(4));

//index.of()


//join()
const greeting =[`good`, `morning`];
const joinedString =(greeting.join(``));
//console.log(joinedString)

//slice...cut a part and return the rest
const arr1 =[1, 2, 3, 4, 5];
const slicedArray = arr1.slice(2);
console.log(slicedArray);

//toString
const arr2 =[1,2,3,4,5];
console.log(typeof arr2);
const stringArray =arr2.toString();
console.log(typeof stringArray);


//forEach
const arr3 =[, 3, 4, 5, 6, 7];
arr3.forEach(element =>console.log(element));

const fruits =[`banana`, `apple`,`oranges`]
console.log(fruits);
fruits.forEach(fruit =>console.log(fruit));

function square (number){
    console.log(number * number)
}
const num1 =[3, 5, 7, 8, 9]
num1.forEach(square);


//map()

const num2 =[1, 3, 5, 7, 9];
const mappedArray = num2.map(element => element * element)
console.log(mappedArray);

//filter

const arr5 =[1, 2, 3, 4, 5];

const filteredArray =[arr5.filter(element => element<3)];
console.log(filteredArray);

const num3 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers =num3.filter(function(num3) {
    return num3 % 2 ===0;
});
console.log(evenNumbers);

















