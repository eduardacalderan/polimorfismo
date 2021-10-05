//POLIMORFISMO: modo de fazer com que métodos se comportem de forma diferente em subclasses

//SUPERCLASS
function Account(agency, account, balance) {
  this.agencia = agency
  this.conta = account
  this.saldo = balance
}

//

Account.prototype.withdraw = function (value) {
  if (this.saldo < value) {
    console.log('Saldo insuficiente!')
    this.seeBalance()
    return
  }

  console.log(`Saque efetuado com sucesso!`)
  this.saldo -= value
  this.seeBalance()
}

//

Account.prototype.deposit = function (value) {
  this.saldo += value
  this.seeBalance()
}

//

Account.prototype.seeBalance = function () {
  console.log(
    `Ag./C: ${this.agencia}/${this.conta}| Saldo: R$${this.saldo.toFixed(2)}`
  )
}

//
//
//
//
//CONTA CORRENTE
//
//
//
//

function CurrentAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance)
  this.limite = limit
}

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.prototype.constructor = CurrentAccount

//

CurrentAccount.prototype.withdraw = function (value) {
  if (value > this.saldo + this.limite) {
    console.log('Saldo insuficiente!')
    this.seeBalance()
    return
  }

  if (value > this.limite) {
    console.log(
      `Valor de saque inválido. Para saques de valores superiores a R$ 5.000,00, mesmo que você esteja com o seu cartão, será necessário contatar sua Agência e avisar com 24h de antecedência.`
    )
    return
  }

  console.log(`Saque efetuado com sucesso!`)
  this.saldo -= value
  this.seeBalance()
}

const account2 = new CurrentAccount('Caixa', '05', 1500, 5000)
account2.deposit(2000)
account2.withdraw(5000)
console.log('')
account2.withdraw(5000)
console.log('')
console.log('')
console.log('')

//
//
//
//
//CONTA POUPANÇA
//
//
//
//

function SavingsAccount(agency, account, balance) {
  Account.call(this, agency, account, balance)
}

SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

const account3 = new SavingsAccount('Caixa', '05', 1500, 5000)
account3.deposit(2000)
account3.withdraw(1000)
