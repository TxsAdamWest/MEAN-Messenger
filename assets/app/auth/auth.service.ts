import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable} from 'rxjs/Rx';

import { User } from "./user.model";

import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}

    signUp(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'}); //It's important to remember to prep our observable with the correct headers.  This lets the signUp() method know it will be posting a JSON object type.
        return this.http.post('http://localhost:3000/user' , body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json()); //Error handler
            });
    };

    signIn(user: User) {
        console.log("signIn fired!")
        const body = JSON.stringify(user);
        console.log(body, " << body")
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json()); //Error handler
            });;
    }

    logOut() {
        localStorage.clear();  // This will delete the authorized token in the browser.  A simple way to lock someone out of an account.
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;  // Simple check for if the token exists in the localStorage.  Easy way to see if user is logged in.
    }

};
