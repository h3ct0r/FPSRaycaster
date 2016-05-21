function GameLoop() {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function() {};
    this.then = new Date().getTime();
    this.fps = 15;
    this.interval = 1000 / this.fps;
}

GameLoop.prototype.start = function(callback) {
    this.callback = callback;
    requestAnimationFrame(this.frame);
};

GameLoop.prototype.frame = function(time) {
    var now = new Date().getTime();
    var delta = now - this.then;
    if (delta > this.interval) {
        this.then = now - (delta % this.interval);
        // We pass delta/1000 so the functions know
        // how many milliseconds passed between frames
        // and the functions like move/walk/strafe work
        // accordingly
        this.callback(delta/1000);
    }
    requestAnimationFrame(this.frame);
};