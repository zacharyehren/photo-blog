// imports the component decorator from the angular/core module
import { Component } from '@angular/core';

@Component({
    // this inserts our component into the placeholder element on index.html (similar to ng-view in AngularJS)
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    emoji = ['🎉', '😍', '😜', '👍'];
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}