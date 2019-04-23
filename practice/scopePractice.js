function outer() {
    const hi = 'Hello World';
    const whom = {
        greeting: 'hello',
        who: 'world'
    };
        function inner(a, b) {
            const hi = 'Hey';
            const whom = {
                whom: 'Planet',
            };

            console.log(hi);
            console.log(whom);
            whom.anotherGreeting = 'WTFIG'
            console.log(whom);
        }
        inner('hi', 'whom');
    // console.log(a);
    // console.log(b);
}

outer();


// THIS NOTES
// The four scopes of ‘this’

// - implicit
//     - ex: myObj.func( );
//           - refers to myObj

// - explicit
//     - ex: func.bind(myObj)( )
//            - refers to myObj

// - new
//      - ex: var car = new func({ })
// 	- ‘this’ is inside the function

// - global
//      - ex: func( )
