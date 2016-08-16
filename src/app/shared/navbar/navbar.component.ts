import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

declare var ENV: string;

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
    @Input() brand: string;

  /**
   * Initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('Navbar component initialized');
    }
  }
}
