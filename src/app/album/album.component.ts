import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../shared/services/spotify.service';
import { Album } from '../shared/models/Album';
import { ActivatedRoute } from '@angular/router';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

declare var ENV: string;

@Component({
    selector: 'as-album',
    pipes: [TruncatePipe],
    templateUrl: 'app/album/album.html',
    styleUrls: ['app/album/album.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
  id: string;
  album: Album[];
  public errorMessage: string;
  sub: any;

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) {}

  /**
   * Get the artist information from the Spotify Service.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('Album component initialized.');
    }

    this.sub = this._route.params
      .map(params => params['id'])
      .subscribe((id: any) => {
      this._spotifyService.getAlbum(id)
        .subscribe(
          album => {
            this.album = album;
        },
        error => { this.errorMessage = <any>error; console.error(this.errorMessage); }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  millisToMinutesAndSeconds(millis: number) {
    let minutes: number = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
