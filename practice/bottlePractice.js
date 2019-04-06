const bottlesOut = 'We need more beer!';

for(let i = 99; i > -1; i--) {
    if (i === 0){
        console.log(bottlesOut);
    } else if (i === 1){
        console.log(`${i} bottle of beer on the wall`);
    } else {
        console.log(`${i} bottles of beer on the wall`);
    }
}