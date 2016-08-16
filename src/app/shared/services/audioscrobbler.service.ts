import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CONSTANTS } from '../../shared';

@Injectable()
export class AudioScrobblerService {

  public audioScrobblerApiKey: string;

  /**
   * Last.fm API Key.
   *
   * @todo  put this in one of the config files.
   * @private
   * @type {string}
   */
  private _apiKey: string;

  /**
   * Base URL for the Last.fm API.
   *
   * @private
   * @type {string}
   */
  private _apiBaseUrl: string = 'https://ws.audioscrobbler.com/2.0/';

  /**
   * Query string.
   *
   * @private
   * @type {string}
   */
  private _query: string;

  /**
   * Format of the API result.
   *
   * @private
   * @type {string}
   */
  private _format: string = 'json';

  constructor(private _http: Http) {
    this._apiKey = CONSTANTS.MAIN.APP.AUDIOSCROBBLER_API_KEY;
  }

  /**
   * Get the artist information (bio) from Last.fm API.
   *
   * @param {string} artist
   * @param {string} [method='artist.getinfo']
   * @returns
   */
  getArtistInfo(artist: string, method = 'artist.getinfo') {
    this._query = `${this._apiBaseUrl}?method=${method}&artist=${artist}&api_key=${this._apiKey}&format=${this._format}`;

    return this._returnResponse(this._query);
  }

  /**
   * Helper function.
   *
   * @param {string} query
   * @returns
   */
  _returnResponse(query: string) {
    return this._http.get(query).map(response => response.json());
  }
}
