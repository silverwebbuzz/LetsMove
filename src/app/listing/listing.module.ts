import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,SatPopoverModule,
    ListingPageRoutingModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
