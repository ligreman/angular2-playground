import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ROUTING} from './app.routing';
import {CalcComponent} from './calc/calc.component';
import {WordComponent} from './word/word.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';

@NgModule({
    declarations: [
        AppComponent,
        CalcComponent,
        WordComponent,
        HomeComponent,
        NotfoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ROUTING,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
