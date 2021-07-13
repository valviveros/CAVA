import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search.component";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    pathMatch: 'full',
    data: {
      title: 'Buscar'
    }
  },
  {
    path: ':id',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class SearchRoutingModule {}
