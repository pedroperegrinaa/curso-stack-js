// Superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor;
    this.verSaldo();

};
Conta.prototype.depositar = function(valor) {

    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {

    console.log(`Ag.: ${this.agencia} Conta: ${this.conta} Saldo: ${this.saldo}`)

};

const conta = new Conta(001, 1, 0)

conta.verSaldo()
conta.depositar(200)
conta.sacar(100)
conta.sacar(100)
    // conta.sacar(100)


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC;


CC.prototype.sacar = function(valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor;
    this.verSaldo();

};

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const contaCorrente = new CC(1, 01, 100)

contaCorrente.verSaldo()
contaCorrente.depositar(200)
contaCorrente.sacar(100)
contaCorrente.sacar(1000)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)

}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP;

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const contaPoupanca = new CP(1, 01, 100)

contaCorrente.verSaldo()
contaCorrente.depositar(200)
contaCorrente.sacar(100)
contaCorrente.sacar(1000)