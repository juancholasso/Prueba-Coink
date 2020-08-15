import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupDataconfirmPageRoutingModule } from './signup-dataconfirm-routing.module';

import { SignupDataconfirmPage } from './signup-dataconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupDataconfirmPageRoutingModule
  ],
  declarations: [SignupDataconfirmPage]
})
export class SignupDataconfirmPageModule {}
