function Weapon(name, damage, bitmap) {
    this.name = name;
    this.damage = damage;
    this.bitmap = bitmap;
    this.msgWeapon = document.getElementById('msg_weapon');
}

Weapon.prototype.displayInfo = function() {
    this.msgWeapon.innerHTML = this.name;
};