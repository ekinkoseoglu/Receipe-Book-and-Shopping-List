import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipe-book-and-shopping-list';
  featureSelected:string;

  onNavigate(event){
    console.log(event);
    this.featureSelected=event;
  }
}

