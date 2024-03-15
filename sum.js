const prompt = require(`prompt-sync`)();

const limit = parseInt(prompt(`enter the limit:`));

let sum = 0;
for( let x = 1;x <= limit;x++){
    if (x % 2 != 0){
        sum += x;
    }
}
console.log(`sum of odd numbers is ${sum}`);

