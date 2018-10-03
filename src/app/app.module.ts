// root module of app

// foundation module for any angular app. must have at least one module for the application to work
import { NgModule } from '@angular/core';

// package for browser specific features
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// any time a new component is created, it needs to be imported to app.module (similar to adding a src tag to the index.html file)
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries'
import { InMemoryEntryService } from './backend';

@NgModule({
    // imports array is where all additional angular modules are referenced. its only for angular modules
    imports: [
// angular now knows that the app will be used in a web browser
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)   
    ],
    // providers array lets the angular know what services are availabe when compiled (also allows the @injectable decorator to work)
    providers: [ EntryService ],
    // tells the browser to start AppComponent at launch
    // declarations is for registering all our applications components (similar to dependencies in AngularJS)
    declarations: [
        AppComponent,
        EntryComponent, 
        EntryListComponent,
        EntryCommentFormComponent
    ],
    // collection of top level components that act as an entry point or root of our application (generally one per application)
    bootstrap: [AppComponent]
})

// this can be called anything. since this is an app that will be used inside another app, AppModule makes sense
// we are exporting the class so it can be used in the main.ts file
export class AppModule {

}