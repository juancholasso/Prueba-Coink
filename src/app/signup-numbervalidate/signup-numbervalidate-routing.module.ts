import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupNumbervalidatePage } from './signup-numbervalidate.page';

const routes: Routes = [
  {
    path: '',
    component: SignupNumbervalidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupNumbervalidatePageRoutingModule {}
