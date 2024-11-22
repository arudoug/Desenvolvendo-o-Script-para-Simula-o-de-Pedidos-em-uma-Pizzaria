function fazerPedido() {

    const tamanho = document.querySelector('input[name="tamanho"]:checked');
    let valorTotal = 0;

    
    if (tamanho) {
        if (tamanho.value === "Pequena") {
            valorTotal += 25;
        } else if (tamanho.value === "Média") {
            valorTotal += 35;
        } else if (tamanho.value === "Grande") {
            valorTotal += 50;
        }
    }

    
    const adicionais = document.querySelectorAll('input[name="adicionais"]:checked');
    valorTotal += adicionais.length * 5; 
    
    document.querySelector('#total strong').textContent = valorTotal.toFixed(2); 
}