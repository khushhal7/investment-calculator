import { Component, Input } from '@angular/core';
import { AnnualInvestmentResult } from '../investmentresult.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [CurrencyPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input({required: true}) results ?: AnnualInvestmentResult[];

}
