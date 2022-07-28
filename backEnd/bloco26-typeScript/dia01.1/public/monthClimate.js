"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var Months;
(function (Months) {
    Months["jan"] = "janeiro";
    Months["fev"] = "fevereiro";
    Months["mar"] = "mar\u00E7o";
})(Months || (Months = {}));
;
var Climate;
(function (Climate) {
    Climate["primavera"] = "primavera";
    Climate["verao"] = "verao";
    Climate["outono"] = "outono";
    Climate["inverno"] = "inverno";
})(Climate || (Climate = {}));
;
var Season;
(function (Season) {
    Season["janeiro"] = "verao";
    Season["fevereiro"] = "outono";
    Season["mar\u00E7o"] = "inverno";
    Season["abril"] = "primavera";
})(Season || (Season = {}));
;
const estacao = readline_sync_1.default.question('Diga um mês para saber a estação que ele se encontra: ');
// const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
console.log(typeof estacao);
console.info(Season);
