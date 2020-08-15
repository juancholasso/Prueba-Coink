import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupSecurityvalidatePageRoutingModule } from './signup-securityvalidate-routing.module';

import { SignupSecurityvalidatePage } from './signup-securityvalidate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupSecurityvalidatePageRoutingModule
  ],
  declarations: [SignupSecurityvalidatePage]
})
export class SignupSecurityvalidatePageModule {}
