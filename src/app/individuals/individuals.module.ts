import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';

import { TranslateModule } from '@ngx-translate/core';
import { IndividualsComponent } from './individuals.component';
import { IndividualsRoutingModule } from './individuals-routing.module';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,NgxAutocompleteModule,
    IonicModule,ReactiveFormsModule,
    IndividualsRoutingModule
  ],
  declarations: [IndividualsComponent]
})
export class IndividualsModule {}
