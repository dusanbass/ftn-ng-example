import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Operation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {

  calculatorForm = new FormGroup({
    operation: new FormControl(''),
    firstNumber: new FormControl(),
    secondNumber: new FormControl(),
  })

  result = 0;

  constructor() { }

  ngOnInit(): void {
  }

  operations: Operation[] = [
    { value: 'add', viewValue: 'Add' },
    { value: 'sub', viewValue: 'Sub' },
    { value: 'mul', viewValue: 'Mul' },
    { value: 'div', viewValue: 'Div' }
  ];

  calculateResult() {
    const operation = this.calculatorForm.controls['operation'].value
    console.log(this.result)

    switch (operation) {
      case 'add': {
        console.log(operation)
        try {
          const first = Number(this.calculatorForm.controls['firstNumber'].value);
          const second = Number(this.calculatorForm.controls['secondNumber'].value);
          this.result = first + second;
          console.log(this.result)
        } catch (error) {
          console.error(error)
        }
      }
        break;
      case 'sub': {
        console.log(operation)
        try {
          const first = Number(this.calculatorForm.controls['firstNumber'].value);
          const second = Number(this.calculatorForm.controls['secondNumber'].value);
          this.result = first - second;
          console.log(this.result)
        } catch (error) {
          console.error(error)
        }
      }
        break;
      case 'mul': {
        console.log(operation)
        try {
          const first = Number(this.calculatorForm.controls['firstNumber'].value);
          const second = Number(this.calculatorForm.controls['secondNumber'].value);
          this.result = first * second;
          console.log(this.result)
        } catch (error) {
          console.error(error)
        }
      }
        break;
      case 'div': {
        console.log(operation)
        try {
          const first = Number(this.calculatorForm.controls['firstNumber'].value);
          const second = Number(this.calculatorForm.controls['secondNumber'].value);
          this.result = first / second;
          console.log(this.result)
        } catch (error) {
          console.error(error)
        }
      }
        break;

      default:
        break;
    }
  }

}
