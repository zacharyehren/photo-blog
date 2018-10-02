// imports the component decorator from the angular/core module
import { Component } from '@angular/core';

@Component({
    // this inserts our component into the placeholder element on index.html (similar to ng-view in AngularJS)
    selector: 'app-root',
    template: `<h2>Hello World!</h2>`,
    styles: [
        `
        h2 {
            font-family: sans-serif;
            font-size: 1.2em;
        }
        `
    ]
})

export class AppComponent {

}