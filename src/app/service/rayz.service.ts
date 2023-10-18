
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RayzService {


    constructor(private http: HttpClient) {
    }

    public sendContactEmail(name:string, email: string, subject: string, message: string): Observable<any> {
        let request = {"host" : 'http://localhost:7182/',
                        "path" : 'api/Rayz/SendContactEmail',
                        "body" : {}};
        request.host = 'http://localhost:7182/';
        request.path = 'api/Rayz/SendContactEmail';
        request.body = {"name": name, "email": email, "subject": subject, "message": message};
        const url = request.host + request.path;
        return this.http.post<string>(url, request.body, { withCredentials: true }).pipe();
    }
}
