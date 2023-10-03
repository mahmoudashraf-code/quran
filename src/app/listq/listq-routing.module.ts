import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListqPage } from './listq.page';

const routes: Routes = [
  {
    path: '',
    component: ListqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListqPageRoutingModule {}
