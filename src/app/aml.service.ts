import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AmlService {

  constructor(private http: HttpClient) { }
  public getIndividualEntityList(body: any): Observable<any> {
    var individualSearchToken = "33bfc416-73a2-40f2-90df-0b66455b47d4";
    const REST_API_SERVER = "https://api.dev.kychub.com/v2/aml/search/";
    // console.log("service "+body)
    let result: any
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + individualSearchToken
    });
    //  return this.http.post(REST_API_SERVER, body,{ headers: reqHeader })
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
    var OnBoardingSearchToken = "33bfc416-73a2-40f2-90df-0b66455b47d4";
    const REST_API_SERVER = "https://api.dev.kychub.com/v2/aml/search/";
    // console.log("service "+body)
    let result: any
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + OnBoardingSearchToken
    });
    //  return this.http.post(REST_API_SERVER, body,{ headers: reqHeader })
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
