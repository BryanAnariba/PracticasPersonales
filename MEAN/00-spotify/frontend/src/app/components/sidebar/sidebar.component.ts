import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMusic, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // LA SALIDA DE EVENTOS EMPIEZA DESDE AQUI
  @Output() onViewArtists = new EventEmitter();
  @Output() onViewPlaylists = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public faMusic = faMusic;
  public faPlay = faPlay;
  public faPlus = faPlus;
  public region: string = '';
  // LA IDEA ES QUE AL DAR CLICK MUESTRE LA REGION QUE QUIERAS VER
  onViewArtist = ( id: string | number ) => {
    this.onViewArtists.emit( id ); // ENVIAMOS INFORMACION PARA QUE LLEGUE AL COMPONENTE PADRA
  }

  onViewPlaylist = ( id: string | number ) => {
    this.onViewPlaylists.emit( id );
  }
}
