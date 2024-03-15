
let shopping = ["bread", "chicken", "carrots"];
//console.log(shopping[2]);
//console.log(shopping.indexOf("bread"))

let mixedArray = [1, null, "object", undefined, true];
//console.log(mixedArray);


let students = [
    ["john", 20, false, 175],
    ["shirley", 18, true, 150],
    ["Peter", 19, true, 170]
];
//console.log(students);
//console.log(students[2][3]);

/*to ba bale to get index of something specific in a nested array you have to flatten..bellow is a wrong attempt*/
//console.log( students.indexOf("shirley")

let flattenedArray = students.flat();
//console.log(flattenedArray);
//console.log(flattenedArray.indexOf(150));
/*when getting index of an iten in a nested array you have to specify that it is a flattened array otherwis it wont work
it will be undefined */

//console.log(flattenedArray[7]);

let coordinates = [
    [30.09, 78.78],
    [34.56, 45.29],
    [89.63, 67.00]
]
//console.log(coordinates);

let calendar = [
    ["jan", "feb", "mar"],
    ["apr", "may", "june"],
    ["jul", "aug", "sep"],
    ["oct", "nov", "dec"]
]
//console.log (calendar)

/* PUSHING */

let numbers = [1, 2, 3, 4, 5, 6]
let numbers2 =[7, 8 , 9, 3, 4]
//numbers.push(7, 8); /*adds an element at the end*/
//numbers.pop();   /*remove an element at the begining */
//numbers.shift(88); /*adds an element at the begining */
//numbers.unshift(44);   /*adds an element at the begining */
//numbers.splice(3, 0, 11);     /*add an element at a soecific point    the 0in between is 
                          //  put to maintain the original order of the array*/
//numbers.sort();                 /*sort first then reverse*/
//numbers.reverse();
//console.log(numbers)


//console.log(numbers.concat(numbers2));

let newList = numbers.concat(numbers2);
//console.log(newList)

let sortedArray = newList.sort();
let reversedArray = sortedArray.reverse();
console.log(reversedArray);

