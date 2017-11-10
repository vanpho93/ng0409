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
  txtEn = '';
  txtVn = '';
  isLoggedIn = true;
  subjects = ['NodeJS', 'Angular', 'React', 'Android'];
  currentStyle = {
    color: 'blue',
    fontWeight: 'bold'
  };
  currentClass = {
    daThuoc: true
  };
  words = [
    { en: 'one', vn: 'mot', isMemorized: true },
    { en: 'two', vn: 'hai', isMemorized: false },
    { en: 'three', vn: 'ba', isMemorized: true },
  ];
  addWord() {
    this.words.push({
      en: this.txtEn,
      vn: this.txtVn,
      isMemorized: false
    });
    this.txtEn = '';
    this.txtVn = '';
  }
  changeStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  removeWord(en) {
    const index = this.words.findIndex(word => word.en === en);
    this.words.splice(index, 1);
  }
}

// module.exports = { AppComponent };
