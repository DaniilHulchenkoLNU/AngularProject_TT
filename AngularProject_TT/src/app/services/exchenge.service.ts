import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroment';
import { Observable, interval, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchengeService {
  private baseUrl = environment.apiUrl[0];

  constructor(private http: HttpClient) { }

  getRates(currency: string="USD"): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/latest/" + currency);
  }

  //getUpdatedData(): Observable<any> {
  //  return interval(5000).pipe(
  //    switchMap(() => this.getRates("USD"))
  //  );
  //}

}
