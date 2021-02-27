import { Animal } from "./Animal";

export class Centro {
  private _codigo: string;
  private _nombre: string;
  private _animalesLiberados: number;
  private _financiacion: number;
  private _animalesRefugiados: number;
  private _animales: Array<Animal>;

  public constructor(
    codigo: string,
    nombre: string,
    animalesLiberados: number,
    financiacion: number,
    animalesRefugiados: number,
    animales: Array<Animal>
  ) {
    (this._codigo = codigo),
      (this._nombre = nombre),
      (this._animalesLiberados = animalesLiberados),
      (this._financiacion = financiacion),
      (this._animalesRefugiados = animalesRefugiados),
      (this._animales = animales);
  }

  get codigo() {
    return this._codigo;
  }

  get nombre() {
    return this._nombre;
  }

  get animalesLiberados() {
    return this._animalesLiberados;
  }

  get financiacion() {
    return this._financiacion;
  }

  get animalesRefugiados() {
    return this._animalesRefugiados;
  }

  get animales() {
    return this._animales;
  }

  get dinero_animal() {
    let din = Math.round(this._financiacion / this._animalesRefugiados);
    return din;
  }

  get pesos() {
    let pes = 0;
    for (let a of this.animales) {
      pes = pes + a.peso;
    }
    return pes;
  }
}
