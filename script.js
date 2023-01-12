var Mother = /** @class */ (function () {
    function Mother(n, e) {
        this.name = n;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je me présente, je m'appelle " + this.name);
    };
    return Mother;
}());
var henri = new Mother("Henri", 2);
console.log(henri);
var helene;
helene = {
    name: "Hélène",
    eyes: 2,
    speak: function (a) {
        return a + ' ' + this.name;
    }
};
console.log(helene);
