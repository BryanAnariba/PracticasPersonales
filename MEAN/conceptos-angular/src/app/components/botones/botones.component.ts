import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  public textColor: string = '';
  public disabledButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor = ( btn: string ) => {
    switch ( btn ) {
      case 'success':
        this.textColor = 'text-success';
      break;
      case 'danger':
        this.textColor = 'text-danger';
      break;
      case 'primary':
        this.textColor = 'text-primary';
      break;
    }
    console.log({ selected: this.textColor });
  }

  onChangeDisabled = () => {
    this.disabledButton = !this.disabledButton;
  }
}
