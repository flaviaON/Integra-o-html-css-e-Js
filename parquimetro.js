function verificaMinutos() {
    var valor = parseFloat(document.getElementById('numero').value);
    var par2 = document.getElementById("resultado");
    var par3 = document.getElementById("troco");

    let troco = 0;

    if (valor < 0 || isNaN(valor)) {
        alert("DIGITE UM NUMERO VÁLIDO");
        document.getElementById('numero').focus();
        return;
    }


    if (valor < 1.00) {
        par2.innerHTML = "VALOR INSUFICIENTE";
    } else if (valor >= 1.00 && valor < 1.75) {
        par2.innerHTML = "TEMPO: 30 MIN";
        if (valor > 1.00) {
            troco = valor - 1.00;
            par3.innerHTML = "TROCO R$: " + troco;
        } else {
            par3.innerHTML = "";
        }
    } else if (valor >= 1.75 && valor < 3.00) {
        par2.innerHTML = "TEMPO: 60 MIN";
        if (valor > 1.75) {
            troco = valor - 1.75;
            par3.innerHTML = "TROCO R$: " + troco;
        } else {
            par3.innerHTML = "";
        }
    } else if (valor >= 3.00) {
        par2.innerHTML = "TEMPO: 120 MIN";
        if (valor > 3.00) {
            troco = valor - 3.00;
            par3.innerHTML = "TROCO R$: " + troco;
        } else {
            par3.innerHTML = "";
        }
    }

}
var botao = document.getElementById('btnVerifica');
botao.addEventListener('click', verificaMinutos);