import { Component } from '@angular/core';
// const { sign } = require('jsonwebtoken');

// decorator function
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Khoa Pham';
  company = {
    name: 'KPT Training',
    address: '92 LRT'
  };
}

// module.exports = { AppComponent };
