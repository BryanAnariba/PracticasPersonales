import { Component } from '@angular/core';

interface IPersona {
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-formulariosuno',
  templateUrl: './formulariosuno.component.html',
  styleUrls: ['./formulariosuno.component.css']
})
export class FormulariosunoComponent {
  public persona: IPersona = {
    nombre: '',
    edad: 0
  }

  handleSubmit = () => {
    console.log( 'Datos Pesona: ', this.persona );
  }
}
