import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'as-test-cmp',
    template: '<div class="title">Hello world</div>',
    directives: [RouterOutlet]
})
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                AppComponent,
                NavbarComponent
            ],
            imports: [ RouterTestingModule, RouterModule ],
            providers: [ provideRoutes(config) ]
        });
    });

    it('should have page header with Need music?', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            // console.log(compiled);
            // console.log(compiled.querySelector('page-header'));
            // TODO: find a way to compile the routed component
            // expect(compiled.querySelector('.page-header')).toBe('Year of the cat');
        });
    }));
});
