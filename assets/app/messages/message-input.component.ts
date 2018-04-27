import { Component , OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({ //Component decorator
    selector: "app-message-input",
    templateUrl: "./message-input.component.html",
    //providers: [MessageService] //Our component can have 'services' injected into it by passing it here, in the providers property.  Here, I will inject my 'MessageService' service into this component, enabling it for use in the scope of this component only.
})

export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) { //We can pass in our 'input value' as an argument in our onSave function.  Here we want to capture the input.value and do something with it later.
        // console.log(form);
        const message = new Message(form.value.content, 'Adan');
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    };

    onClear(form: NgForm) {
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageInEditMode.subscribe( //This will run when this component is intialized. It will subscribe to an event that is emitted from the 'message.service' service.
            (message: Message) => this.message = message
        );
    }
}
