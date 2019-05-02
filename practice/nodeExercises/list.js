// create variables for list and items
const list = document.querySelector('#list');

const items = list.children;

// use the index numbers to make it easy!

// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
items[1].innerHTML = "Fair Trade Coffee";

// 2. Remove 'Twinkies' from the list
items[3].remove();

// 3. Add an item 'Cheese Whiz'
const cheeseWhiz = document.createElement('li');
cheeseWhiz.innerHTML = 'Cheese Whiz';
list.appendChild(cheeseWhiz);

// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
const arr = ['protein powder', 'muscle milk', 'power bars'];
// use the spread function, create a forEach to remove items from the list iterating through
[...list.children].forEach(e => e.remove());
arr.forEach(e => {
    let item = document.createElement('li');
    // use textContent
    item.textContent = e;
    list.appendChild(item);
});

// 5. Add the class 'important' to the muscle milk item.
