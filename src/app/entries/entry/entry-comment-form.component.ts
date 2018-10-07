// EventEmitter is a way to pass data between two components
// The Output decorator allows us send data out to the parent
// ViewChild lets the component look for local variables in the template
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    // creates an initial value for the properties with ""
    name: string = "";
    comment: string = "";
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();
    // binds the local variable to the commentForm property declared here
    @ViewChild('commentForm') commentForm: NgForm;
    onSubmit(commentForm: NgForm){
        let comment = { name: this.name, comment: this.comment };
        // passes the comment object to the onCommentAdded function
        this.onCommentAdded.emit(comment);
        this.commentForm.resetForm();
    }
}