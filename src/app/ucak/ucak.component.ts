import { Component, OnInit } from '@angular/core';
import { UcakService } from './ucak.service';
import {Ucak} from './ucak';

@Component({
  selector: 'app-ucak',
  templateUrl: './ucak.component.html',
  styleUrls: ['./ucak.component.css'],
  providers :[UcakService]
})
export class UcakComponent implements OnInit {
  ucaks:Ucak[];
  constructor(private ucakService:UcakService) { }

  ngOnInit() {
    this.getUcaks();
  }

  getUcaks(){
    this.ucakService.getUcaks().subscribe(u=>{
      this.ucaks = u})
  }

}
