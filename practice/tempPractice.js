const temp = 100;
const precip = false;
const indoors = true;

console.log(`The temp is ${temp} degress!`);

if(temp < 103 && precip === false){
    console.log(`Time to swim! It is ${precip} that it is raining!`);
} else if (temp < 70 && precip === true) {
    console.log(`Not a good idea to swim. It is ${precip} that it is raining!`);
} else {
    console.log('You\'re melting');
}
