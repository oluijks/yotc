import { Component, OnInit } from '@angular/core';

declare var ENV: string;

@Component({
  selector: 'as-about',
  templateUrl: 'app/about/about.html',
  styleUrls: ['app/about/about.css']
})
export class AboutComponent implements OnInit {
  /**
   * The application version.
   *
   * @type {string}
   */
  public version: string = 'v0.0.1-alpha';

  /**
   * Initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('About component initialized.');
    }
  }
}
