import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonsModule } from '../language-buttons/language-buttons.module';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SigninPageRoutingModule,
    LanguageButtonsModule,
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
