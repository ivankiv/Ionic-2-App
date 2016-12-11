import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navController: NavController) {

  }

  startGame(event) {
    this.navController.push(AboutPage, {});
  }
}
