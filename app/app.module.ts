import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { Ng2FloatBtnModule } from '../src'

@NgModule({
    imports: [BrowserModule, FormsModule, MaterialModule.forRoot(), Ng2FloatBtnModule],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }