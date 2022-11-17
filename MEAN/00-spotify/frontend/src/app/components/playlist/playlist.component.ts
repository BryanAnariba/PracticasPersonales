import { Component, OnInit } from '@angular/core';

import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public faPlay = faPlay;
  public faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
