import { Injectable } from '@angular/core';
import { Bilet } from './bilet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiletService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl) { }

  getBilets(): Observable<Bilet[]> {
    return this.http.get<Bilet[]>(this.apiUrl + "/bilets");

  }

}
