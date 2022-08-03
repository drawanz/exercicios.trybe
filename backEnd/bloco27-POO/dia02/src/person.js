var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            if (newValue.length < 3) {
                throw new Error('Nome precisa ser maior ou igual a três caracteres');
            }
            this._name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        set: function (newValue) {
            var dateNow = new Date();
            if (newValue > dateNow) {
                throw new Error('Birth date não pode estar no futuro');
            }
            this._birthDate = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._examsGrades = [];
        _this._workGrades = [];
        _this._enrollment = _this.createEnrollment();
        return _this;
    }
    Student.prototype.createEnrollment = function () {
        var gen = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return gen;
    };
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (newValue) {
            this._examsGrades = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "workGrades", {
        get: function () {
            return this._workGrades;
        },
        set: function (newValue) {
            this._workGrades = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
var estudante = new Student('ladylane', new Date(1985, 3, 18));
estudante.examsGrades = [1, 2, 3, 4];
estudante.workGrades = [1, 2];
console.log(estudante);
