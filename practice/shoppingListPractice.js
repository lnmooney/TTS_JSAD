const shoppingArr = ['pop tarts', 'ramen', 'chips', 'salsa', 'coffee'];

console.log(shoppingArr);
// add fruit loops to the list BY USING PUSH

shoppingArr.push('fruit loops');
console.log(shoppingArr);

// update coffee to fair trade coffee by USING ARBITRARY ADDING
shoppingArr[4] = 'fair trade coffee';
console.log(shoppingArr);

// replace chips and salsa with rice and beans
shoppingArr.splice(2, 3, 'rice', 'beans');
console.log(shoppingArr);

// create null shopping list
const newList = [];

/**
 * remove last item from old shopping cart by 
 * using pop and add to new list by using push
 */
// JUST ADD THEM ON THE END to save lines of code *see below
newList.push(shoppingArr.pop());
console.log(newList);

/**
 * remove first item from old shopping cart by 
 * using shift and add to new list by using push
 */
const itemTwo = shoppingArr.shift();
newList.push(itemTwo);
console.log(shoppingArr);
console.log(newList);

/**
 * write a while loop that takes itesm from your 
 * old shopping list and add it to your new one
 */ 
while (shoppingArr.length > 0){
    // take off last item in old shoppingArr array
    const transferItems = shoppingArr.pop();
    // push that item to the newList array
    newList.push(transferItems);
    continue;
}
console.log(shoppingArr);
console.log(newList);

// sort list alphabetically backwards
newList.reverse();
console.log(newList);

// combine all strings but separate with comma
newList.join(',');
console.log(newList.join(', '));