import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent-routing.module';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';
@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,NgxAutocompleteModule,
    AgentRoutingModule
  ],
  declarations: [AgentComponent]
})
export class AgentModule {}
