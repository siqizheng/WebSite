import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  images = [943, 944, 984].map((n) => `https://picsum.photos/id/${n}/1920/1080`);
  constructor(){
  }
}
