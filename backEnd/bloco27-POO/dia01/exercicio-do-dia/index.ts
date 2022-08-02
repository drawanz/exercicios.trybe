class Students {
  private _nome: string;
  private _matricula: number;
  private _notaProva1: number;
  private _notaProva2: number;
  private _notaProva3: number;
  private _notaProva4: number;
  private _notaTrab1: number;
  private _notaTrab2: number;

  constructor (
    nome: string,
    matricula: number,
    notaProva1: number,
    notaProva2: number,
    notaProva3: number,
    notaProva4: number,
    notaTrab1: number,
    notaTrab2: number,
  ) {
    this._nome = nome;
    this._matricula = matricula;
    this._notaProva1 = notaProva1;
    this._notaProva2 = notaProva2;
    this._notaProva3 = notaProva3;
    this._notaProva4 = notaProva4;
    this._notaTrab1 = notaTrab1;
    this._notaTrab2 = notaTrab2;
  }

  sum(): number {
    const sumScore = this._notaProva1 + this._notaProva2 + this._notaProva3 + this._notaProva4 +
    this._notaTrab1 + this._notaTrab2;
    return sumScore;
  }

  average(): number {
    return this.sum()/6;
  }
}