import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldBankApiService {
  private apiUrl = 'http://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) { }

  getCountryData(countryCode: string): Observable<any> {
    const url= `${this.apiUrl}/${countryCode}?format=json`;

    return this.http.get(url);
  }

}

