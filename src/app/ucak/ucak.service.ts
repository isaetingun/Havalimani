import { Injectable } from '@angular/core';
import { Ucak } from './ucak';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UcakService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl) { }

  getUcaks(): Observable<Ucak[]> {
    return this.http.get<Ucak[]>(this.apiUrl +"/ucaks");
  }
}
