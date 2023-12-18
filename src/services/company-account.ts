import InAccountParameters from "../types/in-accountParameters";
import Converter from "../utils/converter-for-real-util";
import Account from "./account";

class CompanyAccount extends Account {
    constructor(parameters: InAccountParameters) {
        super(parameters)
    }

    getLoan = (account: Account, loan: number): void => {
        this.withdraw(loan)
        account.setBalance(loan)
        console.log(`${account.getName()} pegou ${Converter.forReal(loan)} de empréstimo com ${this.getName()}`)
    }
}

export default CompanyAccount;
