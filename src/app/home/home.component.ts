import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SpotifyService } from '../shared/services/spotify.service';
import { Artist } from '../shared/models/Artist';

@Component({
  selector: 'as-home',
  templateUrl: 'app/home/home.html',
  styleUrls: ['app/home/home.css'],
  providers: [SpotifyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public errorMessage: string;
  public searchTerm: string = '';
  public offset: number = 0;
  public limit: number = 3;
  public searchResult: Artist[];
  public maxResult: number;
  public disableNext: boolean = false;
  public disablePrevious: boolean = false;

  constructor(private _spotifyService: SpotifyService) {

  }

  searchSpotify() {
    // console.log(`Search term: ${this.searchTerm}`);
    // console.log(`offset: ${this.offset}`);
    // console.log(`limit: ${this.limit}`);
    if (this.searchTerm.trim() !== '' && this.searchTerm.trim().length > 2) {
      this._spotifyService.searchSpotify(this.searchTerm, '', this.offset, this.limit)
        .subscribe(
          response => {
            this.searchResult = response.artists.items;
            this.maxResult = response.artists.total;
            // console.debug(response.artists);
        },
        error => { this.errorMessage = <any>error; console.error(this.errorMessage); }
      );
    } else {
      this.resetSearchValues();
    }
  }

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

  resetSearchValues() {
    this.limit = 3;
    this.offset = 0;
    this.searchResult = [];
    this.disableNext = false;
    this.disablePrevious = false;
  }

  ngOnInit() {
    console.log('Search component initialized');
  }
}
