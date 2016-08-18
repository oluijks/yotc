import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { SpotifyService } from '../../shared/services/spotify.service';
import { Artist } from '../../shared/models/Artist';
import { ActivatedRoute } from '@angular/router';

declare var ENV: string;

@Component({
  selector: 'as-home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [SpotifyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
   *
   *
   * @type {string}
   */
  public errorMessage: string;

  /**
   *
   *
   * @type {string}
   */
  public searchTerm: string = '';

  /**
   *
   *
   * @type {number}
   */
  public offset: number = 0;

  /**
   *
   *
   * @type {number}
   */
  public limit: number = 3;

  /**
   *
   *
   * @type {Artist[]}
   */
  public searchResult: Artist[];

  /**
   *
   *
   * @type {number}
   */
  public maxResult: number;

  /**
   *
   *
   * @type {boolean}
   */
  public disableNext: boolean = false;

  /**
   *
   *
   * @type {boolean}
   */
  public disablePrevious: boolean = false;

  /**
   *
   *
   * @type {*}
   */
  sub: any;

  /**
   *
   *
   * @type {*}
   */
  public linkTitle: any;

  /**
   * Creates an instance of HomeComponent.
   *
   * @param {ActivatedRoute} route
   * @param {SpotifyService} _spotifyService
   */
  constructor(private route: ActivatedRoute, private _spotifyService: SpotifyService) {

  }

  /**
   * Search the Spotify API.
   */
  searchSpotify() {
    if (this.searchTerm.trim() !== '' && this.searchTerm.trim().length > 2) {
      this._spotifyService.searchSpotify(this.searchTerm, '', this.offset, this.limit)
        .subscribe(
          response => {
            this.searchResult = response.artists.items;
            this.maxResult = response.artists.total;
            if (ENV !== 'production') {
              console.debug(response.artists);
            }
        },
        error => { this.errorMessage = <any>error; console.error(this.errorMessage); }
      );
    } else {
      this._resetSearchValues();
    }
  }

  /**
   * Get next list of artists.
   *
   * @returns
   */
  nextArtists() {
    this.disableNext = false;
    this.disablePrevious = false;

    this.offset = this.offset + this.limit;

    if (this.offset >= this.maxResult) {
      this.offset = this.offset - this.limit;
      this.disableNext = true;
      return;
    }

    this.searchSpotify();
  }

  /**
   * Get previous list of artists.
   *
   * @returns
   */
  previousArtists() {
    this.disableNext = false;
    this.disablePrevious = false;

    this.offset = this.offset - this.limit;

    if (this.offset < 0) {
      this.offset = 0;
      this.disablePrevious = true;
      return;
    }

    this.searchSpotify();
  }

  /**
   * Reset variables.
   */
  _resetSearchValues() {
    this.limit = 3;
    this.offset = 0;
    this.searchResult = [];
    this.disableNext = false;
    this.disablePrevious = false;
  }

  /**
   * Initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('Search component initialized.');
    }

    // Set data from route (just an example)
    this.sub = this.route.data.subscribe(v => { this.linkTitle = v; });
  }

  /**
   * Clean up.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
