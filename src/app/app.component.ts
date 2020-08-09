import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  images = [911, 910, 985].map((n) => `https://picsum.photos/id/${n}/1920/540`);
  constructor(){
  }
}
