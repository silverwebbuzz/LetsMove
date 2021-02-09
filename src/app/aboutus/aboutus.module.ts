import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutusPageRoutingModule } from './aboutus-routing.module';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';

import { AboutusPage } from './aboutus.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,NgxAutocompleteModule,
    AboutusPageRoutingModule
  ],
  declarations: [AboutusPage]
})
export class AboutusPageModule {}
