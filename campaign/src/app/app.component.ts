import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'Campaign';
  count = 0;
  
  public getLikes() {
    return this.count;
  }
  
  public like() {
    this.count++;
  }
}
