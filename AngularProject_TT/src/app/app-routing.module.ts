import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchengeComponent } from './components/pages/exchenge/exchenge.component';

const routes: Routes = [
  {
    path: "", component: ExchengeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
