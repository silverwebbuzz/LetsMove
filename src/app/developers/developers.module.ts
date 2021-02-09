import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DevelopersComponent } from './developers.component';
import { DevelopersRoutingModule } from './developers-routing.module';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,NgxAutocompleteModule,ReactiveFormsModule,
    DevelopersRoutingModule
  ],
  declarations: [DevelopersComponent]
})
export class DevelopersModule {}
