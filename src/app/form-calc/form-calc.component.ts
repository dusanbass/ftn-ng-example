import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.scss']
})
export class FormCalcComponent implements OnInit {

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
  }

}
