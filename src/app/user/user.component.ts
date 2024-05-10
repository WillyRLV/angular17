import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'willy';
  isLoggedIn = false;
  // crear una variable para pasar al padre
  favGame = ''
  // funcion que obtiene la variable
  getFavorite(gameName:string) { 
    this.favGame = gameName;
  }
  greet() {
    alert("hola");
  }
}
