export class Animal {
  private _id: string;
  private _especie: string;
  private _nombre: string;
  private _centro: string;
  private _peso: number;
  private _altura: number;
//d
  public constructor(
    id: string,
    especie: string,
    nombre: string,
    centro: string,
    peso: number,
    altura: number
  ) {
    (this._id = id),
      (this._especie = especie),
      (this._nombre = nombre),
      (this._centro = centro),
      (this._peso = peso),
      (this._altura = altura);
  }

  get id() {
    return this._id;
  }

  get especie() {
    return this._especie;
  }

  get nombre() {
    return this._nombre;
  }

  get centro() {
    return this._centro;
  }
  get peso() {
    return this._peso;
  }
  get altura() {
    return this._altura;
  }
}
