import { Component } from '@angular/core';
// const { sign } = require('jsonwebtoken');

// decorator function
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  txtEmail = '';
  isLoggedIn = true;
  subjects = ['NodeJS', 'Angular', 'React', 'Android'];
  words = [
    { en: 'one', vn: 'mot' },
    { en: 'two', vn: 'hai' },
    { en: 'three', vn: 'ba' },
  ];
  changeStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

// module.exports = { AppComponent };
