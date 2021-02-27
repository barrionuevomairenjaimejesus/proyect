import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { CentroService } from "../centro.service";

@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.css"]
})
export class GraficoComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "ANIMALES POR CENTRO"
    },
    yAxis: {
      accessibility: {},
      title: {
        text: "ANIMALES"
      }
    },
    colors: ["#FF0400"],
    xAxis: {
      accessibility: {},
      title: {
        text: "CENTROS"
      }
    },
    series: [
      {
        type: "area",
        data: [],
        name: "Número ani.",
        lineColor: "#FF0400"
      }
    ],

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      backgroundColor: "#FF04"
    }
  };

  constructor(private centroService: CentroService) {}

  ngOnInit() {
    this.getDatos();
  }
  getDatos() {
    this.centroService.getCentrosApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.animalesRefugiados);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("grafico", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
