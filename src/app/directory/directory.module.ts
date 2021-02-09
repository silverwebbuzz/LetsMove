import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';

import { TranslateModule } from '@ngx-translate/core';
import { DirectoryComponent } from './directory.component';
import { DirectoryRoutingModule } from './directory-routing.module';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,ReactiveFormsModule,NgxAutocompleteModule,
    IonicModule,
    DirectoryRoutingModule
  ],
  declarations: [DirectoryComponent]
})
export class DirectoryModule {}
