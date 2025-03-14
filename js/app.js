let escolha = document.getElementById('tipo-ingresso');
let quantidade = document.getElementById('qtd');

function comprar(){

    if (quantidade.value > 10){
        alert('Limite de compra de 10 ingressos por vez!');
        quantidade.value = '';
    }
    else if (quantidade.value == ''){
        alert('Insira a quantidade desejada!');
    }
    else{
        if (escolha.value == 'inferior'){
            if (quantidade.value > parseInt(document.getElementById('qtd-inferior').textContent)){
                alert('Ingressos Insuficientes!');
            }
            else{
                document.getElementById('qtd-inferior').textContent = parseInt(document.getElementById('qtd-inferior').textContent) - parseInt(quantidade.value);
            }
        }
        else if (escolha.value == 'superior'){
            if (quantidade.value > parseInt(document.getElementById('qtd-superior').textContent)){
                alert('Ingressos Insuficientes!');
            }
            else{
                document.getElementById('qtd-superior').textContent = parseInt(document.getElementById('qtd-superior').textContent) - parseInt(quantidade.value);
            }
        }
        else {
            if (quantidade.value > parseInt(document.getElementById('qtd-pista').textContent)){
                alert('Ingressos Insuficientes!');
            }
            else{
                document.getElementById('qtd-pista').textContent = parseInt(document.getElementById('qtd-pista').textContent) - parseInt(quantidade.value);
            }
        }
    }
}