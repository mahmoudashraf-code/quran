import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListqPageRoutingModule } from './listq-routing.module';

import { ListqPage } from './listq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListqPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListqPage
      }
    ])
  ],
  declarations: [ListqPage]
})
export class ListqPageModule {}
