import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Animal } from "./modelos/Animal";

@Injectable({ providedIn: "root" })
export class CentroService {
  private url = "https://api-animal-angular.herokuapp.com/";
  constructor(private http: HttpClient) {}

  getCentrosApi() {
    const urlget = `${this.url}centros`;
    return this.http.get(urlget);
  }

  addCentro(doc: any) {
    return this.http.post(this.url, doc);
  }

  getCentro(codigo: string) {
    const url = `https://api-animal-angular.herokuapp.com/centro/${codigo}`;
    return this.http.get(url);
  }

  addAnimal(doc: any) {
    const url = "https://api-animal-angular.herokuapp.com/animal";
    return this.http.post(url, doc);
  }

  updateCentro(doc: any) {
    const url = `https://api-animal-angular.herokuapp.com/centro/${doc.codigo}`;
    return this.http.post(url, doc);
  }

  deleteAnimal(animal: Animal) {
    const url = `https://api-animal-angular.herokuapp.com/deleteAnimal/${
      animal.id
    }&${animal.centro}`;
    return this.http.get(url);
  }

  getAnimal(id: string, centro: string) {
    const url = `https://api-animal-angular.herokuapp.com/animal/${id}&${centro}`;
    return this.http.get(url);
  }

  updateAnimal(doc: any) {
    const url = `https://api-animal-angular.herokuapp.com/animal/${doc.id}&${
      doc.centro
    }`;
    return this.http.post(url, doc);
  }
}
