import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';
import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonsModule } from '../language-buttons/language-buttons.module';


@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAutocompleteModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
