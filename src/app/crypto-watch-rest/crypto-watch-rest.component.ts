import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin, CryptoServiceService, RootCoin } from '../crypto-service.service';

@Component({
  selector: 'app-crypto-watch-rest',
  templateUrl: './crypto-watch-rest.component.html',
  styleUrls: ['./crypto-watch-rest.component.scss']
})
export class CryptoWatchRestComponent implements OnInit {

  dataSource!: Coin[];
  displayedColumns = ['id', 'name', 'priceUsd', 'change'];

  constructor(private cs: CryptoServiceService) {
    cs.getCoins().subscribe(data => this.dataSource = data.data);
   }

  ngOnInit(): void {}

}
