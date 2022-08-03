export default class Person {
  constructor (private _name: string, private _birthDate: Date) { }

  get name() {
    return this._name;
  }

  private set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('Nome precisa ser maior ou igual a três caracteres')
    }
    this._name = newValue;
  }

  private set birthDate(newValue: Date) {
    const dateNow = new Date();
    if (newValue > dateNow) {
      throw new Error('Birth date não pode estar no futuro')
    }
    this._birthDate = newValue;
  }
}

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _workGrades: number[] = [];

  constructor (
    name: string, 
    birthDate: Date) {
      super(name, birthDate)
      this._enrollment = this.createEnrollment();
    }
  
  private createEnrollment() {
    const gen = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return gen;
  }

  set examsGrades(newValue: number[]) {
    this._examsGrades = newValue;
  }

  set workGrades(newValue: number[]) {
    this._workGrades = newValue;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get workGrades() {
    return this._workGrades;
  }

  get enrollment() {
    return this._enrollment;
  }
}

const estudante = new Student('ladylane', new Date(1985, 3, 18))
estudante.examsGrades = [1, 2, 3, 4];
estudante.workGrades = [1, 2];
console.log(estudante);

