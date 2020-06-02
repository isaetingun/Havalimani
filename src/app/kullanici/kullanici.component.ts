import { Component, OnInit } from '@angular/core';
import{Kullanici} from './Kullanici';
import { HttpClient } from '@angular/common/http';
import {KullaniciService} from './kullanici.service';

@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css'],
  providers :[KullaniciService]
})
export class KullaniciComponent implements OnInit {

  kullanicis: Kullanici[];
  constructor(private kullaniciService:KullaniciService) { }

  ngOnInit() {
    this.getKullanicis()
 
  }
    getKullanicis(){
      this.kullaniciService.getKullanicis().subscribe(k=>
        {this.kullanicis=k}
        );
    }
  
}
