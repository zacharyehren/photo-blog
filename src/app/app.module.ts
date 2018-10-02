// root module of app

// foundation module for any angular app. must have at least one module for the application to work
import { NgModule } from '@angular/core';

// package for browser specific features
import { BrowserModule } from '@angular/platform-browser';

import{ AppComponent } from './app.component'

// angular now knows that the app will be used in a web browser
@NgModule({
    imports: [BrowserModule],
    // tells the browser to start AppComponent at launch
    // declarations is for registering all our applications components
    declarations: [AppComponent],
    // collection of top level components that act as an entry point or root of our application (generally one per application)
    bootstrap: [AppComponent]
})

// this can be called anything. since this is an app that will be used inside another app, AppModule makes sense
// we are exporting the class so it can be used in the main.ts file
export class AppModule {

}