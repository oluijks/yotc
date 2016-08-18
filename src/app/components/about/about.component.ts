import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var ENV: string;

@Component({
  selector: 'as-about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  /**
   * The application version.
   *
   * @type {string}
   */
  public version: string = 'v0.0.2-alpha';

  constructor(private titleService: Title) {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public getTitle() {
    return this.titleService.getTitle();
  }

  /**
   * Initialize.
   */
  ngOnInit() {
    this.setTitle('About :: Year of the cat');

    if (ENV !== 'production') {
      console.log('About component initialized.');
    }
  }

  ngOnDestroy() {
    this.setTitle('Home: Year of the cat');
  }
}
