import { Component, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    // creates the entry property which enables us to use `{{entry.description}}` etc on the template
    // @Input allows the component to receive data from the Entry List
    @Input() entry: Entry;
}