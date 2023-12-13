import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './components/dog-list.component';


const routes: Routes = [
  {path:"", redirectTo: "list", pathMatch: "full"},
  {path:"list", component: DogListComponent},
  {path:"details/:index", loadComponent: ()=> import('./components/dog-view.component').then(m => m.DogViewComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
