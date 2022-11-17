import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public region: string = '';
  public title = 'Spotify';

  onViewArtist = ( id: string | number ) => {
    /*
      (onViewArtists)="onViewArtist($event)
      ojo lo que va en parentesis es el evento de salida, lo que va dentro de "" es la funcion en comun entre los componentes que compartirar info
      tambien aprovechamos para pintar la region visible
    */
    this.region = 'artists';
    console.log({ artistId: id, regionVisible: this.region });
  }

  onViewPlaylist = ( id: string | number ) => {
    /*
      (onViewArtists)="onViewArtist($event)
      ojo lo que va en parentesis es el evento de salida, lo que va dentro de "" es la funcion en comun entre los componentes que compartirar info
      tambien aprovechamos para pintar la region visible
    */
    this.region = 'playlists';
    console.log({ playlistId: id, regionVisible: this.region });
  }
}
