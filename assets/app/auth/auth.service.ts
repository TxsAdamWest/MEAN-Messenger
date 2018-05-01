import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable} from 'rxjs/Rx';

import { User } from "./user.model";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    signUp(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'}); //It's important to remember to prep our observable with the correct headers.  This lets the signUp() method know it will be posting a JSON object type.
        return this.http.post('http://localhost:3000/user' , body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    };

    signIn(user: User) {
        
    }
};