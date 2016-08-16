import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from './shared';

declare var ENV: string;

@Component({
  selector: 'as-main-app',
  templateUrl: 'app/app.html'
})
export class AppComponent implements OnInit {
  public appBrand: string;

  constructor() {
    this.appBrand = CONSTANTS.MAIN.APP.BRAND;
  }

  /**
   * Initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('App component initialized');
    }
  }
}
