import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { AppComponent } from "./app.component";
import { CentroService } from "./centro.service";
import { CentrosComponent } from "./centros/centros.component";
import { AppRoutingModule } from "./app-routing.module";
import { CentroComponent } from "./centro/centro.component";
import { AnimalComponent } from "./animal/animal.component";
import { GraficoComponent } from "./grafico/grafico.component";
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    CentroComponent,
    CentrosComponent,
    AnimalComponent,
    GraficoComponent
  ],
  bootstrap: [AppComponent],
  providers: [CentroService, {provide:
    APP_BASE_HREF, useValue: '/animales'}]
})
export class AppModule {}
