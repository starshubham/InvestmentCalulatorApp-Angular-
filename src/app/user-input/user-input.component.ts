import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>(); // @Output Decorator
  // calculate = output<InvestmentInput>(); // output function
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      // use () at last of each variable to store singal value not singal on click of onSubmit button
      initialInvestment: +this.enteredInitialInvestment(),  
      annualInvestment: +this.enteredAnnualInvestment(),
      duration: + this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn()
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
