import Person from "./person";
import Subject from "./subject";
import IEmployee from "./IEmployee";

export default class Teacher extends Person implements IEmployee {
  private _subject: Subject;
  private _salary: number;
  private _registration: number;
  private _admissonDate: Date;

  constructor(name: string, birthDate: Date, subject: Subject, salary: number) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
    this._admissonDate = new Date();
    this._salary = salary;
    this._subject = subject;
    console.log(this);
    
  }

  generateRegistration() {
    return (Date.now() * (Math.random() + 1));
  }

  set salary(newValue: number) {
    if (newValue < 0) {
      throw new Error ('Salário não pode ser negativo');
    }
    this._salary = newValue;
  }

  set subject(newValue: Subject) {
    this._subject = newValue;
  }

  get registration(): number {
    return this._registration
  };

  get subject(): Subject {
    return this._subject
  };

  get admissonDate(): Date{
    return this._admissonDate;
  };

  get salary(): number {
    return this._salary;
  }
}