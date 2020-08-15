import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupDataconfirmPage } from './signup-dataconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: SignupDataconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupDataconfirmPageRoutingModule {}
