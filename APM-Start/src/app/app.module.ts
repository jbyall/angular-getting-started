import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from "./products/product.module";


@NgModule({
    // Components, directives & pipes that belong to this module (app.module.ts)
    // Ever ^ must belong to ONE & ONLY ONE angular module
    // All declared ^ are private by default (i.e. can only be accessed by ^ in same module)
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    // Exports allow types to be used by a dependent module
    // Can export any types
    // Re-export to allow inheriting in a dependent module
    // Never export a service - they are registed in root application for DI
    //exports: [],
    // Import modules to gain access to any exported type form that module
    // Only import modules that are needed
    // Importing a module DOES NOT provide access to its imported modules
    // i.e. imports are not inherited, unless you add them to exports
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
        ]),
        ProductModule,
    ],
    // Register services
    // Services registered at module level are available to all modules
    // use providers in a component to restrict scope
    // Don't add services to the providers array of a shared module (violates singleton)
    //--Consider building a CoreModule for services and import once in AppModule
    // Routing guards must be added to providers array of an angular module
    //providers: [],

    // starting point of application, loaded on launch
    // should only be used in root application module (app.module.ts)
    bootstrap: [AppComponent] 
})
export class AppModule { }
