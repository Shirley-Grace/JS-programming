function greet(name) {
    console.log(`hello, ${name}`);
}

greet(`sher`)
greet(`harry`)
greet(`sweetness`)

function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
console.log(sum(3, 5));
console.log(sum(9, 64));

const add =sum(3, 4);
console.log(add);

//arrow function

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(78, 4));




function listEven(start ,end){
    const evenNumbers = [];

    for ( let x = start;x <= end; x++) {
        if ( x % 2 === 0){
            evenNumbers.push(x);
        }
    
    }
    return evenNumbers;
}
console.log(listEven(1, 20));

function listOdd(start ,end){
    const oddNumbers = [];

    for ( let x = start;x <= end; x++) {
        if ( x % 2 != 0){
            oddNumbers.push(x);
        }
    
    }
    return oddNumbers;
}
console.log(listOdd(1, 20))


/*local scopes are only used within {} of the function and gloal are accessed from anywhere
whether inside or outside  the function it is written under*/

function say(person) {

    console.log(`say,${person});
}



















