import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // primeiro esse cara //


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup; // depois esse//

  constructor(public formbuilder : FormBuilder) { // colocar dentro do constructor //

    this.registerForm = this.formbuilder.group({ //depois colocar esse cara dentro das chaves//
      name: [null, [Validators.required, Validators.minLength(3)]], // esse validators minlength é tipo, o sistema so vai aceitar nomes acima de 3 caracteres //
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      genre: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    }); //o validators.required é tipo campo requerido //
   }

  ngOnInit() {
  }
  submitForm(form){
    console.log(form);
    console.log(form.value);
  }
}
