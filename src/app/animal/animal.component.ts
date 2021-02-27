import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CentroService } from "../centro.service";
import { Animal } from "../modelos/Animal";
import { Location } from "@angular/common";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.css"]
})
export class AnimalComponent implements OnInit {
  animal: Animal;
  animalApi = null;

  constructor(
    private route: ActivatedRoute,
    private centroService: CentroService,
    private location: Location
  ) {}

  getAnimal(): void {
    let id = this.route.snapshot.paramMap.get("id");
    let i = id.split("&");

    id = i[0];
    let centro = i[1];
    console.log(id, centro);

    this.centroService.getAnimal(id, centro).subscribe(c => {
      this.animalApi = c;
      this.animal = new Animal(
        this.animalApi.id,
        this.animalApi.especie,
        this.animalApi.nombre,
        this.animalApi.centro,
        this.animalApi.peso,
        this.animalApi.altura
      );
    });
    console.log(centro);
  }

  save(especie: string, nombre: string, peso: string, altura: string): void {
    const especieV = especie.trim();
    const nombreV = nombre.trim();
    const pesoV = parseInt(peso);
    const alturaV = parseInt(altura);

    if (pesoV < 0 || alturaV < 0) {
      return;
    }

    const doc = {
      id: this.animal.id,
      especie: especieV,
      nombre: nombreV,
      centro: this.animal.centro,
      peso: pesoV,
      altura: alturaV
    };
    this.centroService.updateAnimal(doc).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getAnimal();
  }
}
