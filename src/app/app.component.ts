import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router){

  }
  page1Nav(){
    this.router.navigateByUrl('/page1');
  }
  page2Nav(){
    this.router.navigateByUrl('/page2');
  }
}

