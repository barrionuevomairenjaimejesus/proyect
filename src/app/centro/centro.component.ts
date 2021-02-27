import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CentroService } from "../centro.service";
import { Centro } from "../modelos/Centro";
import { Animal } from "../modelos/Animal";
import { Location } from "@angular/common";

@Component({
  selector: "app-centro",
  templateUrl: "./centro.component.html",
  styleUrls: ["./centro.component.css"]
})
export class CentroComponent implements OnInit {
  centro: Centro;
  centroApi = null;

  constructor(
    private route: ActivatedRoute,
    private centroService: CentroService,
    private location: Location
  ) {}

  getCentro(): void {
    let codigo = this.route.snapshot.paramMap.get("codigo");
    this.centroService.getCentro(codigo).subscribe(c => {
      this.centroApi = c;
      let animales: Array<Animal> = new Array();
      for (let animal of this.centroApi[0].animales) {
        let a = new Animal(
          animal.id,
          animal.especie,
          animal.nombre,
          animal.centro,
          animal.peso,
          animal.altura
        );
        animales.push(a);
      }
      this.centro = new Centro(
        this.centroApi[0].codigo,
        this.centroApi[0].nombre,
        this.centroApi[0].animalesLiberados,
        this.centroApi[0].financiacion,
        this.centroApi[0].animalesRefugiados,
        animales
      );
    });
  }

  add(
    id: string,
    especie: string,
    nombre: string,
    peso: string,
    altura: string
  ) {
    const idV = parseInt(id);
    const especieV = especie.trim();
    const nombreV = nombre.trim();
    const pesoV = parseInt(peso);
    const alturaV = parseInt(altura);
    if (idV < 0 || pesoV < 0 || alturaV < 0) {
      return;
    }

    const newDoc: any = {
      id: idV,
      especie: especieV,
      nombre: nombreV,
      centro: this.centro.nombre,
      peso: pesoV,
      altura: alturaV
    };

    this.centroService.addAnimal(newDoc).subscribe(j => {
      const animalTmp: any = newDoc;
      this.centro.animales.push(animalTmp);
    });
  }

  save(
    animalesLiberados: string,
    financiacion: string,
    animalesRefugiados: string
  ): void {
    const animalesLiberadosV = parseInt(animalesLiberados);
    const financiacionV = parseInt(financiacion);
    const animalesRefugiadosV = parseInt(animalesRefugiados);
    if (
      animalesLiberadosV < 0 ||
      financiacionV < 0 ||
      animalesRefugiadosV < 0
    ) {
      return;
    }
    const doc = {
      codigo: this.centro.codigo,
      nombre: this.centro.nombre,
      animalesLiberados: animalesLiberadosV,
      financiacion: financiacionV,
      animalesRefugiados: animalesRefugiadosV
    };
    this.centroService.updateCentro(doc).subscribe(() => this.goBack());
  }

  delete(animal: Animal): void {
    this.centro.animales.forEach((a, index) => {
      if (a === animal) this.centro.animales.splice(index, 1);
    });
    this.centroService.deleteAnimal(animal).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCentro();
  }
}
