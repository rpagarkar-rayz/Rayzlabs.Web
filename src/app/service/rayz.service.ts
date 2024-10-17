
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceData } from "./reference-data.service";

@Injectable()
export class RayzService {


    constructor(private http: HttpClient) {
    }

    public sendContactEmail(name:string, email: string, subject: string, message: string): Observable<any> {
        let request = {"host" : ReferenceData.AppConfig.API_HOST,
                        "path" : ReferenceData.AppConfig.CONTACT_US,
                        "body" : {}};
        request.host = ReferenceData.AppConfig.API_HOST;
        request.path = ReferenceData.AppConfig.CONTACT_US;
        request.body = {"name": name, "email": email, "subject": subject, "message": message};
        const url = request.host + request.path;
        return this.http.post<string>(url, request.body, { withCredentials: true }).pipe();
    } 
    /* public sendContactEmail(name:string, email: string, subject: string, message: string): any {
        return new Promise<any>((resolve, reject) => {
            const url = 'http://localhost:7182/' + 'api/Rayz/SendContactEmail';
            const model = {"name": name, "email": email, "subject": subject, "message": message};
            this.http.post<any>(url, model, { withCredentials: true }).subscribe(resp => {
              resolve(resp);
            },
              (error) => {
                resolve(error);
                //this.utilService.showServicesErrorMessage(error);
              });
          });
    } */
}
