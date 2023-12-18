import CompanyAccount from "./services/company-account";
import PeopleAccount from "./services/people-account";
import InAccountParameters from "./types/in-accountParameters";
import Converter from "./utils/converter-for-real-util";

const newPerson: InAccountParameters = {
    name: "Diego Feitosa",
    accountNumber: 1234
}
const peopleAccount: PeopleAccount = new PeopleAccount(1, newPerson)

const newCompany: InAccountParameters = {
    name: "DIO",
    accountNumber: 12
}
const companyAccount: CompanyAccount = new CompanyAccount(newCompany)

console.log('==============================');

console.log('1º Caso: Depositar na conta');
peopleAccount.deposit(100)
peopleAccount.deposit(10)
console.log(`${peopleAccount.getName()} possui ${Converter.forReal(peopleAccount.getBalance())}`);

console.log('------------------------------');

console.log('2º Caso: Sacar dinheiro da conta');
peopleAccount.withdraw(50)
console.log(`${peopleAccount.getName()} possui ${Converter.forReal(peopleAccount.getBalance())}`);

console.log('------------------------------');

console.log('3º Caso: Depositar na conta da empresa');
companyAccount.deposit(1000)
console.log(`${companyAccount.getName()} possui ${Converter.forReal(companyAccount.getBalance())}`);
companyAccount.getLoan(peopleAccount, 800)
console.log(`${companyAccount.getName()} possui ${Converter.forReal(companyAccount.getBalance())}`);


