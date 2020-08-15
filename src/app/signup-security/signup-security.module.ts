import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SignupSecurityPageRoutingModule } from './signup-security-routing.module';

import { SignupSecurityPage } from './signup-security.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupSecurityPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignupSecurityPage]
})
export class SignupSecurityPageModule {}
