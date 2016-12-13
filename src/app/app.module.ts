import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { MenuPage } from '../pages/menu/menu';
import { StartGame } from '../pages/start-game/start';
import { GamePage } from '../pages/game-page/game';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    MenuPage,
    StartGame,
    GamePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    MenuPage,
    StartGame,
    GamePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
