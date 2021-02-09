import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LanguageButtonsComponent } from './language-buttons.component';
import { LanguageButtonsRoutingModule } from './language-buttons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LanguageButtonsRoutingModule,
  ],
  declarations: [LanguageButtonsComponent],
  exports: [LanguageButtonsComponent],
})
export class LanguageButtonsModule {}
