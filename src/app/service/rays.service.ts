
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RaysService {


    constructor(private http: HttpClient) {
    }

    public sendContactEmail(): Observable<any> {
        let request = {"host" : 'http://localhost:5000/',
                        "path" : 'api/rayz/SendContactEmail',
                        "body" : {}};
        request.host = 'http://localhost:5000/';
        request.path = 'api/rayz/SendContactEmail';
        request.body = {};
        const url = request.host + request.path;
        return this.http.post<string>(url, request.body, { withCredentials: true }).pipe();
    }
}
