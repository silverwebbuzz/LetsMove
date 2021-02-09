import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualsComponent } from './individuals.component';


const routes: Routes = [
  {
    path: '',
    component: IndividualsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualsRoutingModule {}
