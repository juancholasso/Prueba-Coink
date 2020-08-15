import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupAuthorizePage } from './signup-authorize.page';

const routes: Routes = [
  {
    path: '',
    component: SignupAuthorizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupAuthorizePageRoutingModule {}
