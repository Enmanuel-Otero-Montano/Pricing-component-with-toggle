import { Component } from '@angular/core';
import { BASICPRICE, MASTERPRICE, PROFESSIONALPRICE } from './mock-prices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our Pricing';

  basicPrice = 19.99;
  professionalPrice = 24.99;
  masterPrice = 39.99;

  radioAnnually = true;
  radioMonthly = false;

  checkedMonthly = true;
  checkedAnnually = false;

  checkedFunctionMonthly() {
    this.checkedAnnually = true
    this.checkedMonthly = false
    this.radioAnnually = false
    this.radioMonthly = true
    this.basicPrice = BASICPRICE.annually
    this.professionalPrice = PROFESSIONALPRICE.annually
    this.masterPrice = MASTERPRICE.annually
  }

  checkedFunctionAnnually() {
    this.checkedMonthly = true
    this.checkedAnnually = false
    this.radioAnnually = true
    this.radioMonthly = false
    this.basicPrice = BASICPRICE.monthly
    this.professionalPrice = PROFESSIONALPRICE.monthly
    this.masterPrice = MASTERPRICE.monthly
  }
}
