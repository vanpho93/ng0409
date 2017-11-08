import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { ListWordsComponent } from './list-words/list-words.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
