import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

declare var ENV: string;

@Component({
  selector: 'as-about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit, OnDestroy {
  /**
   * The application version.
   *
   * @type {string}
   */
  public version: string = 'v0.0.2-alpha';

  /**
   * List of todos.
   *
   * @type {string[]}
   */
  public todos: string[];

  /**
   * Creates an instance of AboutComponent.
   *
   * @param {ActivatedRoute} _route
   * @param {Title} titleService
   */
  constructor(private _route: ActivatedRoute, private titleService: Title) {
  }

  /**
   * Set the main html title meta tag.
   *
   * @param {string} newTitle
   */
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  /**
   * Get the main html title meta tag.
   *
   * @returns
   */
  public getTitle() {
    return this.titleService.getTitle();
  }

  /**
   * Initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('About component initialized.');
    }

    this.setTitle('About :: Year of the cat');

    this.todos = [
        'Login to Spotify',
        'Search for tracks',
        'Favourite artists, albums, playlists',
        '(Personal) app settings',
        'Pagination of artists list',
        'Multi language',
        'Theming',
    ];
  }

  /**
   * Clean up.
   */
  ngOnDestroy() {
    this.setTitle('Home: Year of the cat');
  }
}
