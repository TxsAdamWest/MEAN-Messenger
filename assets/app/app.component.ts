import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({ //This is creating a component and selecting the template it will use in the templateUrl key.
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [], // Angular also allows us to specically target elements within a component for styling.  We can pass it in as normal CSS here.
    providers: [Title] //By adding the 'MessageService' at the app component level, instead of the message-input or something similar, the scope now is of our entire application.  Meaning, ALL child components now have access to this service.  Shweet.
})
export class AppComponent {
    public constructor(private titleService: Title ) {
        this.titleService.setTitle("One MEAN Messenger");
    }
}
