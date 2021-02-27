import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CentrosComponent } from "./centros/centros.component";
import { RouterModule, Routes } from "@angular/router";
import { CentroComponent } from "./centro/centro.component";
import { AnimalComponent } from "./animal/animal.component";
import { GraficoComponent } from "./grafico/grafico.component";

const routes: Routes = [
  { path: "lista_centros", component: CentrosComponent },
  { path: "centro/:codigo", component: CentroComponent },
  { path: "animal/:id", component: AnimalComponent },
  { path: "grafico", component: GraficoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
