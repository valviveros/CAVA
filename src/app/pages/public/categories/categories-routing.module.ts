import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./categories.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    component: CategoriesComponent,
    pathMatch: 'full',
    data: {
      title: 'Categorías'
    }
  },
  {
    path: ':category',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class CategoriesRoutingModule {}
