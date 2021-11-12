import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AmlService {

  constructor(private http: HttpClient) { }
  public getIndividualEntityList(body: any): Observable<any> {
    var individualSearchToken = environment.individual;
    const REST_API_SERVER = environment.apiUrl;
    let result: any
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + individualSearchToken
    });
    return this.http.post(REST_API_SERVER, body, { headers: reqHeader }).pipe(map((data) => {
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  public getOnBoardingEntityList(body: any): Observable<any> {
    var OnBoardingSearchToken = environment.onboarding
    const REST_API_SERVER = environment.apiUrl
    
    let result: any
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + OnBoardingSearchToken
    });
    
    return this.http.post(REST_API_SERVER, body, { headers: reqHeader }).pipe(map((data) => {
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

}
