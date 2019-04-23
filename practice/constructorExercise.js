class Particle {
    // create constructor that takes in coordinates on graph
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

}
const particles = [];
// create for loop to go through 99 particles
for (let i = 0; i < 100; i++) {
    // create new particle as an object that takes in the coordinates
    // i is x and y is made randomly with the Math function 
    // push to the particles array
    particles.push(new Particle(i, (Math.random()*500).toFixed(5)));
    console.log(particles[i].X, particles[i].Y);
}