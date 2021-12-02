class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;

    }

    estado() {
        return this.ligado = !this.ligado;
    }

}

const d1 = new DispositivoEletronico('rapsberry');

d1.estado();
console.log(d1);

d1.estado();
console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'vermelho', 'Galaxy S10')

s1.estado();
console.log(s1);

s1.estado();
console.log(s1);



class Tablet extends DispositivoEletronico {

    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    temWifi() {
        return this.temWifi = !this.temWifi;
    }

}

const t1 = new Tablet('iPad', true);
t1.estado()
console.log(t1)