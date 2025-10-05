class bank {

constructor (balance){
    this.balance = balance
}
checkBalance(){
    console.log(`your current balance is ${this.balance} 🏦🏦`)
}
withdraw(amount){
    if(this.balance - amount <= 0){
        console.log(`no money in your account`)
    }
    else{
    this.balance-=amount
    console.log(`amount ${this.balance} left in your bank account`)
    }
}
deposit(amount){
    this.balance+=amount
    console.log(`total amount ${this.balance} 💵💵💵`)
}

}

const account = new bank(0)
const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amountInput')
const checkBalance = document.getElementById('check')
const balanceDisplay = document.getElementById('balanceDisplay')

depositButton.onclick = () => {
    account.deposit(Number(amountInput.value))
    balanceDisplay.innerText = `Balance : ₹${account.balance}`
}
withdrawButton.onclick = () => {
    account.withdraw(Number(amountInput.value))
     balanceDisplay.innerText = `Balance : ₹${account.balance}`

}
checkBalance.onclick = () => { 

        balanceDisplay.innerText =`total amount is ${account.balance}`
}