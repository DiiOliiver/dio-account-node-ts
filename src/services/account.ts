import InAccount from "../types/in-account"
import InAccountParameters from "../types/in-accountParameters"
import Converter from "../utils/converter-for-real-util"


abstract class Account implements InAccount {
    private _name: string
    private readonly _accountNumber: number
    private _balance: number = 0
    private _status: boolean = true

    constructor(paramenters: InAccountParameters) {
        this._name = paramenters.name
        this._accountNumber = paramenters.accountNumber
    }

    deposit = (balance: number): void => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + balance)
            console.log(`${this.getName()} depositou ${Converter.forReal(balance)}`)
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus() && this.validateWithdraw(value)) {
            this.setBalance(this.getBalance() - value)
            console.log(`${this.getName()} sacou ${Converter.forReal(value)}`)
        }
    }

    getBalance = (): number => this._balance

    setBalance = (balance: number): void => {
        this._balance = balance
    }

    getName = (): string => this._name

    setName = (name: string): void => {
        this._name = name
    }

    private validateStatus = (): boolean => {
        if (this._status) {
            return this._status
        }

        throw new Error('Conta inválida!')
    }

    private validateWithdraw = (value: number): boolean => {
        if (this.getBalance() >= value) {
            return true
        }

        throw new Error('Saldo insuficiente!')
    }
}

export default Account;
