import { Injectable } from '@angular/core';
import { Kullanici } from './Kullanici';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl) { }

  getKullanicis(): Observable<Kullanici[]> {
    return this.http.get<Kullanici[]>(this.apiUrl +"/kullanicis");

  }

}


