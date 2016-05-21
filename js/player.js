function Player(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.paces = 0;

    var knife = new Bitmap('assets/knife_hand.png', 319, 320);
    var knife2 = new Bitmap('assets/knife_hand2.png', 319, 320);

    this.weapons = [Weapon(1, knife), Weapon(knife2)];
    this.actualWeapon = this.weapons[0];
}

function Weapon(damage, bitmap) {
    this.damage = damage;
    this.bitmap = bitmap;
}

Player.prototype.rotate = function(angle) {
    this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
};

Player.prototype.walk = function(distance, map) {
    var dx = Math.cos(this.direction) * distance;
    var dy = Math.sin(this.direction) * distance;
    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
    this.paces += distance;
};

Player.prototype.strafe = function(distance, map) {
    var dx = Math.cos(this.direction + 90) * distance;
    var dy = Math.sin(this.direction + 90) * distance;
    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
    this.paces += distance;
}

Player.prototype.update = function(controls, map, seconds) {
    if (controls.left) this.rotate(-Math.PI * seconds);
    if (controls.right) this.rotate(Math.PI * seconds);
    if (controls.forward) this.walk(3 * seconds, map);
    if (controls.backward) this.walk(-3 * seconds, map);
    if (controls.strafe_left) this.strafe(-3 * seconds, map);
    if (controls.strafe_right) this.strafe(3 * seconds, map);
    if (controls.select_knife) this.actualWeapon[0];
    if (controls.select_gun) this.actualWeapon[1];
};