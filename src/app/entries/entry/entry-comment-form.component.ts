// EventEmitter is a way to pass data between two components
// The Output decorator allows us send data out to the parent
// ViewChild lets the component look for local variables in the template
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../shared/entry.service';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    // creates an initial value for the properties with ""
    name: string = "";
    comment: string = "";
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{ name: string; comment: string; }>();
    // binds the local variable to the commentForm property declared here
    @ViewChild('commentForm') commentForm: NgForm;

    constructor(private entryService: EntryService) {

    }
    onSubmit(commentForm: NgForm) {
        let comment = { name: this.name, comment: this.comment };
        this.entryService.addComment(this.entryId, comment)
            .then(() => {
                // passes the comment object to the onCommentAdded function in the Entry Component
                this.onCommentAdded.emit(comment);
                this.commentForm.resetForm();
            })
    }
}