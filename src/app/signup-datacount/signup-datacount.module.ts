import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SignupDatacountPageRoutingModule } from './signup-datacount-routing.module';

import { SignupDatacountPage } from './signup-datacount.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupDatacountPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignupDatacountPage]
})
export class SignupDatacountPageModule {}
