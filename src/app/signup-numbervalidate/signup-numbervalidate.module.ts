import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupNumbervalidatePageRoutingModule } from './signup-numbervalidate-routing.module';

import { SignupNumbervalidatePage } from './signup-numbervalidate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupNumbervalidatePageRoutingModule
  ],
  declarations: [SignupNumbervalidatePage]
})
export class SignupNumbervalidatePageModule {}
