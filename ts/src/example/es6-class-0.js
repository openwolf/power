function Ponint(x,y) {
    this.x = x;
    this.y = y;
}
Ponint.prototype.getPostion = function () {
    return '(' + this.x + ', ' + this.y + ')';
}
let p0 = new Ponint(2,3);
console.log(p0);
console.log(p0.getPostion());