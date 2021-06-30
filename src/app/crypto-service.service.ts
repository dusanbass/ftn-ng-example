import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Coin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export interface RootCoin {
  data: Coin[];
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {

  cryptoUrl = 'https://api.coincap.io/v2/assets';

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get<RootCoin>(this.cryptoUrl);
  }

}
