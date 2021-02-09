import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageButtonsComponent } from './language-buttons.component';


const routes: Routes = [
  {
    path: '',
    component: LanguageButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageButtonsRoutingModule {}
