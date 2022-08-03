"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(_name) {
        this._name = _name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            if (newValue.length < 3) {
                throw new Error('Nome precisa ter mais de 3 caracteres');
            }
            this._name = newValue;
            console.log(this);
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
exports.default = Subject;
var teste = new Subject('teste');
console.log(teste);
