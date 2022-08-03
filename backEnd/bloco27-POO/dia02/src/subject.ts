export default class Subject {
  constructor(private _name: string) {}

  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('Nome precisa ter mais de 3 caracteres')
    }
    this._name = newValue;
  }

  get name() {
    return this._name;
  }
}

