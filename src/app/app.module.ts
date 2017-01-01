import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { createStore, combineReducers } from 'redux';

import { AppComponent } from './app.component';
import { ReducerService } from './reducer.service';
import { LocalstorageService } from './localstorage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ReducerService,
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    
  }
}
