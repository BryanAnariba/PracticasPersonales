import { Component, OnInit } from '@angular/core';

import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public faPlay = faPlay;
  public faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
