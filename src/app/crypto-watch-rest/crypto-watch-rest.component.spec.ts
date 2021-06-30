import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoWatchRestComponent } from './crypto-watch-rest.component';

describe('CryptoWatchRestComponent', () => {
  let component: CryptoWatchRestComponent;
  let fixture: ComponentFixture<CryptoWatchRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoWatchRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoWatchRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
