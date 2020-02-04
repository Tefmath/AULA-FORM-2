import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; // primeiro coloca esse maluco //
import { BrMaskerModule } from 'br-mask';


import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // depois colocar esse cara //
    BrMaskerModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
