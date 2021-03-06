import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactusPageRoutingModule } from './contactus-routing.module';

import { ContactusPage } from './contactus.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactusPageRoutingModule
  ],
  declarations: [ContactusPage]
})
export class ContactusPageModule {}
