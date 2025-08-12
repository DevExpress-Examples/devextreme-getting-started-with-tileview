import { Component } from '@angular/core';
import { tiles } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  // Create a local version of tiles to implement in app.component.html
  tiles = tiles;
}
