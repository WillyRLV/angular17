import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hola mundo desde {{title.toLocaleLowerCase()}} </h1>
  
  // <app-user></app-user>
  
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularCRUD';
}
