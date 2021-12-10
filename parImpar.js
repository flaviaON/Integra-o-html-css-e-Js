function verificaParImpar() {
    var num = parseInt(document.getElementById('numero').value);
    var resposta = document.getElementById('resposta');

    
    if (num < 0 || isNaN(num)) {
        alert("DIGITE UM NUMERO VÁLIDO");
        document.getElementById('numero').focus();
        return;
    }

    if (num % 2 == 0) {
        resposta.innerHTML = `Resposta: ${num} é Par`;
    } else {
        resposta.innerHTML = `Resposta: ${num} é Ímpar`;
    }
}

var botao = document.getElementById('btnVerifica');
botao.addEventListener('click', verificaParImpar);