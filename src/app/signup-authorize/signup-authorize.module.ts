import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAuthorizePageRoutingModule } from './signup-authorize-routing.module';

import { SignupAuthorizePage } from './signup-authorize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAuthorizePageRoutingModule
  ],
  declarations: [SignupAuthorizePage]
})
export class SignupAuthorizePageModule {}
