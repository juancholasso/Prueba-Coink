import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupSecurityvalidatePage } from './signup-securityvalidate.page';

const routes: Routes = [
  {
    path: '',
    component: SignupSecurityvalidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupSecurityvalidatePageRoutingModule {}
