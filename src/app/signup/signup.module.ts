import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonsModule } from '../language-buttons/language-buttons.module';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    IonicModule,
    SignupPageRoutingModule,
    LanguageButtonsModule,
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
