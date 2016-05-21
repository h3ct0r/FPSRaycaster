function Controls() {
    this.codes = {
        37: 'left',
        39: 'right',
        38: 'forward',
        87: 'forward',
        40: 'backward',
        83: 'backward',
        27: 'esc',
        65: 'strafe_left',
        68: 'strafe_right',
        49: 'select_knife',
        50: 'select_gun'
    };

    this.states = {
        'left': false,
        'right': false,
        'forward': false,
        'backward': false,
        'esc': false,
        'strafe_left': false,
        'strafe_right': false,
        'select_knife': false,
        'select_gun': false
    };

    document.addEventListener('keydown', this.onKey.bind(this, true), false);
    document.addEventListener('keyup', this.onKey.bind(this, false), false);
    document.addEventListener('mousemove', this.onMouseMovement.bind(this), false);
}

Controls.prototype.onKey = function(val, e) {
    var state = this.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
};

Controls.prototype.onMouseMovement = function (e) {
	var x = (e.movementX || e.mozMovementX || e.webkitMovementX || 0);
	if (x > 0) player.rotate(Math.PI/40);
	if (x < 0) player.rotate(-Math.PI/40);
};