import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoDaVelhaModule, JogoDaVelhaComponent } from './jogo-da-velha';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent
  ],
  imports: [
    BrowserModule,
    JogoDaVelhaModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
