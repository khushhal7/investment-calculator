import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  
  initialInvestment = '0';
  monthlyContribution = '0';
  annualInterestRate = '0';
  investmentDuration = '0';

  @Output() data = new EventEmitter<{
    initialInvestment: number;
    monthlyContribution: number;
    annualInterestRate: number;
    investmentDuration: number;
  }>();

  onSubmit() {
    this.data.emit({
      initialInvestment: +this.initialInvestment,
      monthlyContribution: +this.monthlyContribution,
      annualInterestRate: +this.annualInterestRate,
      investmentDuration: +this.investmentDuration
    });
  }


}
