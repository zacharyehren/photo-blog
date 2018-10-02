// Import global stylesheet
import './styles/main.css';
// this helps us with debugging errors
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// imports the module we created in app.module.ts
import{ AppModule } from './app/app.module';
// bootstraps AppModule and attaches it to our webpage 
platformBrowserDynamic().bootstrapModule(AppModule);