import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './components/dog-list.component';
import { DogViewComponent } from './components/dog-view.component';

const routes: Routes = [
  {path:"", redirectTo: "list", pathMatch: "full"},
  {path:"list", component: DogListComponent},
  {path:"details/:index", component: DogViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
