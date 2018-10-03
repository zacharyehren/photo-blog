// EventEmitter is a way to pass data between two components
// The Output decorator allows us send data out to the parent
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    // creates an initial value for the properties with ""
    name: string = "";
    comment: string = "";
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();
    onSubmit(){
        let comment = { name: this.name, comment: this.comment };
        // passes the comment object to the onCommentAdded function
        this.onCommentAdded.emit(comment);
    }
}