import { Component, OnInit } from '@angular/core';

interface IPersona { // pasar a archivo al llegar
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  public nombreUsuario: string = 'Bryan Ariel Sanchez Anariba';
  public persona: IPersona = {
    nombre: 'Bryan',
    edad: 25
  };
  public numero: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick = ( option: string ) => {
    switch ( option ) {
      case '@increment':
        this.numero = this.numero + 1
      break;
      case '@decrement':
        this.numero = this.numero - 1
      break;
      case '@reset':
        this.numero = 0;
      break;
    }
  }
}
