import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupSecurityPage } from './signup-security.page';

const routes: Routes = [
  {
    path: '',
    component: SignupSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupSecurityPageRoutingModule {}
