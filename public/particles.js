const particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    const particlesLength = Math.floor(window.innerWidth / 10);
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    };
};

function draw() {
    background(0, 0, 0);
    particles.forEach((p, i) => {
        p.update();
        p.draw(i);
        p.checkCloseParticles(particles.slice(i));
    });
};

class Particle {
    constructor() {
        // Position
        this.pos = createVector(random(width), random(height));
        // Velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        // Size
        this.size = 10;
    };

    // Draw the particle
    draw(n) {
        noStroke();
        if (n % 2 === 0) {
            fill('rgba(255, 0, 0, 0.5)');
        } else {
            fill('rgba(0, 0, 255, 0.5)');
        }
        circle(this.pos.x, this.pos.y, this.size);
    };

    // Update adding velocity
    update() {
        this.pos.add(this.vel);
        this.edges();
    };

    // Detect edges
    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        };
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        };
    };

    // Connect particles
    checkCloseParticles() {
        particles.forEach(p => {
            const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
            if (d < 120) {
                stroke('rgba(255, 255, 255, 0.1)');
                line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
            }
        })
    }
};
