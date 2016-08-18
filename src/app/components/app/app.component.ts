import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../../shared';

declare var ENV: string;

@Component({
  selector: 'as-main-app',
  templateUrl: 'app/components/app/app.html'
})
export class AppComponent implements OnInit {
  /**
   * Application brand name.
   *
   * @type {string}
   */
  public appBrand: string;

  /**
   * Creates an instance of AppComponent.
   */
  constructor() {
    this.appBrand = CONSTANTS.MAIN.APP.BRAND;
  }

  /**
   * Initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('App component initialized.');
    }
  }
}
