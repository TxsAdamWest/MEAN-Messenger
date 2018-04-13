import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';

@NgModule({ // This is a typescript Decorator that attaches additional info to a class.
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule { }
