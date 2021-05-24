import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPasswordPageRoutingModule } from './new-password-routing.module';

import { NewPasswordPage } from './new-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPasswordPageRoutingModule
  ],
  declarations: [NewPasswordPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NewPasswordPageModule {}
