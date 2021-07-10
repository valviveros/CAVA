import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    pathMatch: 'full',
    data: {
      title: 'Categorías'
    }
  },
  {
    path: ':category',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class CategoriesRoutingModule {}
