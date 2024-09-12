function tabelaComDiv(){
    let obj = { numeros : [1, 3, 7, 9, -1, 0, 4], 
                
     };
    return obj;
}

function gerarTabela(){
    let  objNumeros = tabelaComDiv();
    let divN = document.createElement("div");
    let divQuantidade = document.createElement("div");
    let divSoma = document.createElement("div");
    divN.innerHTML = "Numeros";
   

    let soma = 0;
    for(let i = 0; i < objNumeros.numeros.length; i++){
        let divNumeros = document.createElement("div");
        divNumeros.innerHTML = objNumeros.numeros[i];
        divN.appendChild(divNumeros);

        soma = soma + objNumeros.numeros[i];
        
    }
    divSoma.innerHTML = "Soma: " + soma;
    divQuantidade.innerHTML = "Quantidade: " + objNumeros.numeros.length;
    

    document.body.appendChild(divN);
    document.body.appendChild(divQuantidade);
    document.body.appendChild(divSoma);

}
