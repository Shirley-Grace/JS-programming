let hour = 1;

if (hour < 12) {
    console.log('good morning');
}else if (hour >= 12 && hour < 18) {
    console.log('good afternoon');
} else {
    console.log('good evening');
} 



  let x =67 ;

  if(x % 2 == 0){
    console.log("even");
} else{
    console.log('odd');
}



/*loops*/
for (let i = 0; i< 10; i++){
    console.log((i))
}

for (let i =0; i < 15; i++){
for (let j = 0; j  <15; j++){
     console.log ( `${i}, ${j}`)
}

}


let str = ' javascript'
for (let i = 0; i < str.length; i++) {
console.log(`character at index ${i}: ${str[i]}`)
}

for ( let f =0;f < 100; f++) {
    if (f % 2 ===0)
    console.log (f)
}
