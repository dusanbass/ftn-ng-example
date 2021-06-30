import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Coin, CryptoServiceService } from '../crypto-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-crypto-watch-rest',
  templateUrl: './crypto-watch-rest.component.html',
  styleUrls: ['./crypto-watch-rest.component.scss']
})
export class CryptoWatchRestComponent implements OnInit {

  dataSource!: MatTableDataSource<Coin>;
  displayedColumns = ['id', 'name', 'priceUsd', 'change'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cs: CryptoServiceService) {
    cs.getCoins().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void { }

}
