import { Component, OnInit } from "@angular/core";
import { CentroService } from "../centro.service";
import { Centro } from "../modelos/Centro";
import { Animal } from "../modelos/Animal";
@Component({
  selector: "app-centros",
  templateUrl: "./centros.component.html",
  styleUrls: ["./centros.component.css"]
})
export class CentrosComponent implements OnInit {
  centros: Array<Centro> = [];
  centrosApi = null;
  centroTmp: any;
  constructor(private centroService: CentroService) {}

  getCentrosApi() {
    this.centroService.getCentrosApi().subscribe(centros => {
      this.centrosApi = centros;
      for (let centro of this.centrosApi) {
        let animales: Array<Animal> = new Array();
        for (let animal of centro.animales) {
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
        let e = new Centro(
          centro.codigo,
          centro.nombre,
          centro.animalesLiberados,
          centro.financiacion,
          centro.animalesRefugiados,
          animales
        );
        this.centros.push(e);
      }
    });
  }

  add(
    codigo: string,
    nombre: string,
    animalesLiberados: string,
    financiacion: string,
    animalesRefugiados: string
  ) {
    const codigoV = codigo.trim();
    const nombreV = nombre;
    const animalesLiberadosV = parseInt(animalesLiberados);
    const financiacionV = parseInt(financiacion);
    const animalesRefugiadosV = parseInt(animalesRefugiados);

    if (
      animalesLiberadosV < 0 ||
      animalesRefugiadosV < 0 ||
      financiacionV < 0
    ) {
      return;
    }

    const newDoc: any = {
      codigo: codigoV,
      nombre: nombreV,
      animalesLiberados: animalesLiberadosV,
      financiacion: financiacionV,
      animalesRefugiados: animalesRefugiadosV
    };

    this.centroService.addCentro(newDoc).subscribe(a => {
      this.centroTmp = newDoc;
      this.centros.push(this.centroTmp);
    });
  }

  ngOnInit() {
    this.getCentrosApi();
  }
}
