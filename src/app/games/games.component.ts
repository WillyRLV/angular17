import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `<ul> 
    <!-- ahora al usar el @Input()  podemos usar la variable en esta espacio-->
      <h3>Los juegos favoritos de {{username}}</h3>
    @for (game of games; track game.id) {
      <li (click)="fav(game.name)" >{{game.name}}</li>
    }
  </ul>`,
  styles: ``
})
export class GamesComponent {
  // muy necesario para poder pasar  un prop
  @Input() username: string = ''

  // emitir un prop pero al padre
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
    // alert(`A ${this.username} le gusta jugar a ${gameName}`)
  }
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn'
    },
    {
      id: 3,
      name: 'Back For Blood'
    }
  ]
}
