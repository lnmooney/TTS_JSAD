const particles = [];
let time = 0;
const gravity = 0.5;

class Particle {
    // create constructor that takes in coordinates on graph
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.velocity = {x: 0, y:0};
    }

    move() {
        this.y += this.getVelocity();
        if ( this.y >= 500) {
            console.log('BOTTOM');
            clearInterval(interval);
        }
        return 
    }

    getVelocity() {
        return time * gravity;
    }

    // get X() {
    //     return this.x;
    // }

    // get Y() {
    //     return this.y;
    // }
}
// create for loop to go through 99 particles
for (let i = 0; i < 100; i++) {
    // create new particle as an object that takes in the coordinates
    // i is x and y is made randomly with the Math function 
    // push to the particles array
    particles.push(new Particle(i, (Math.random()*500)));
}

let interval = setInterval(function() {
    time++
    particles.filter(function(p){
        // console log x value of particle
        console.log(p.x);
        console.log(p.y);
        return p.y < 500;
    })
    .forEach(function(p) {
        p.move();
    })
} ,100);
