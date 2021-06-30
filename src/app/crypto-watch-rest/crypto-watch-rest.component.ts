import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CryptoServiceService, RootCoin } from '../crypto-service.service';

// interface Coin {
//   id: string;
//   rank: string;
//   symbol: string;
//   name: string;
//   supply: string;
//   maxSupply: string;
//   marketCapUsd: string;
//   volumeUsd24Hr: string;
//   priceUsd: string;
//   changePercent24Hr: string;
//   vwap24Hr: string;
//   explorer: string;
// }

// interface RootCoin {
//   data: Coin[];
//   timestamp: number;
// }

@Component({
  selector: 'app-crypto-watch-rest',
  templateUrl: './crypto-watch-rest.component.html',
  styleUrls: ['./crypto-watch-rest.component.scss']
})
export class CryptoWatchRestComponent implements OnInit {

  coins$?: Observable<RootCoin>;

  constructor(private cs: CryptoServiceService) {
    this.coins$ = cs.getCoins();
   }

  ngOnInit(): void {}

}
