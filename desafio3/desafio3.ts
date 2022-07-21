let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

let saldoTotal: number = 0;

campoSaldo.innerHTML = saldoTotal.toString();

function somarAoSaldo(soma: number) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
}

function limparSaldo() {
    saldoTotal = 0;
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
