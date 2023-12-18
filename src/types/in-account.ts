export default interface InAccount {
    deposit(value: number): void
    withdraw(value: number): void
    getBalance(): number
}