import { Component, OnInit } from '@angular/core';
import { Bilet } from './bilet';
import { BiletService } from './bilet.service';

@Component({
  selector: 'app-bilet',
  templateUrl: './bilet.component.html',
  styleUrls: ['./bilet.component.css'],
  providers :[BiletService]
})
export class BiletComponent implements OnInit {
  bilets:Bilet[];
  constructor(private biletService:BiletService) { }

  ngOnInit() {
    this.getBilets();
  }

  getBilets(){
    this.biletService.getBilets().subscribe(b=> 
      {this.bilets= b})

  }

}
