import { Component } from '@angular/core';

@Component({
    selector: 'as-about',
    templateUrl: 'app/about/about.html',
    styleUrls: [
        'app/about/about.css'
    ]
})
export class AboutComponent {
  public version: string = 'v0.0.1-alpha';
}
