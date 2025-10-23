import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { InputComponent } from "./input/input.component";
import { ResultComponent } from './result/result.component';
import { AnnualInvestmentResult } from './investmentresult.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InputComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


 
  // investmentData = {
  //   initialInvestment: 0,
  //   monthlyContribution: 0,
  //   annualInterestRate: 0,
  //   investmentDuration: 0
  // };
  annualData ?: AnnualInvestmentResult[] = [];

  onInvestmentDataReceived(data: {
    initialInvestment: number;
    monthlyContribution: number;
    annualInterestRate: number;
    investmentDuration: number;
  }) {
    // this.investmentData = data;
    // console.log('Received investment data:', this.investmentData);
    this.annualData = this.onCalculateInvestmentResults(data.initialInvestment, data.monthlyContribution, data.annualInterestRate, data.investmentDuration);
  }

  onCalculateInvestmentResults(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number): AnnualInvestmentResult[] {
  const annualData: AnnualInvestmentResult[] = [];
  // let initialInvestment = data.initialInvestment;
  // let annualInvestment = data.annualInvestment;
  // let expectedReturn = data.expectedReturn;
  // let duration = data.duration;
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
}
  
