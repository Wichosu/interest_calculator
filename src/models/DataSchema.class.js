export class DataSchema {
  name = '';
  principal = 0;
  amount = 0;
  interest = 0;

  constructor(name, principal, amount, interest) {
    this.name = name;
    this.principal = principal;
    this.amount = amount;
    this.interest = interest;
  }
}