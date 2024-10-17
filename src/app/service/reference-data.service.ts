import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
// import { AppConfigSchema } from '../schema/appconfig-schema';
import * as APIUrls from '../../assets/config/appconfig.json'

@Injectable({
  providedIn: 'root'
})
export class ReferenceData {
  static AppConfig: any;

  constructor(private http: HttpClient) { }

  load() {
    ReferenceData.AppConfig = APIUrls;
    // const jsonFile = 'assets/config/appconfig.json';
    // return this.http.get<AppConfigSchema>(jsonFile).pipe(
    //   tap((response: any) => {
    //     console.log(response)
    //     ReferenceData.AppConfig = response;
    //   }),
    //   // switchMap(() => {
    //   //   return this.loadMenu();
    //   // }),
    //   catchError((error: HttpErrorResponse) => {
    //     return throwError(() => new Error(
    //       `Could not load file : ${JSON.stringify(error.error)}`)
    //     );
    //   })
    // );
  }
}
