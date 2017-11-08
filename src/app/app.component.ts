import { Component } from '@angular/core';
// const { sign } = require('jsonwebtoken');

// decorator function
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  value = 0;
  title = 'Khoa Pham';
  company = {
    name: 'KPT Training',
    address: '92 LRT'
  };
  imageSrc = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

  showTitle() {
    console.log(this.title);
  }

  incr() {
    this.value++;
  }
}

// module.exports = { AppComponent };
