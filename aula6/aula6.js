function obterObjeto(){
    let obj = { disciplinas : [{nome: "Programacao p/ Sitios", ch: 80, sigla: "ISW-008", curso: "SI"}
                              ,{nome: "Desenvolvimento p/ Serv I", ch:"80", sigla: "IDS-001", curso: "SI"}
                              ,{nome: "Algebra Linear", ch: 80, sigla: "IMA-003", curso: "CD"}
                              ,{nome: "POO", ch: 80, sigla: "IAL-004", curso: "CD"}
                              ,{nome: "Matematica Elementar", ch: 80, sigla: "MAT-001", curso: "SI"}
                            ],
                            nome : "Garcia"
                         };
    return obj;
}

function montarTabela(){
    let objDisciplina = obterObjeto();
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let trhead = document.createElement("tr");
    let thnome = document.createElement("th");
    let thch = document.createElement("th");
    let thsigla = document.createElement("th");
    let thcurso = document.createElement("th");
    thnome.innerHTML = "Nome";
    thch.innerHTML = "CH";
    thsigla.innerHTML = "Sigla";
    thcurso.innerHTML = "Curso";

    for (let i = 0; i < objDisciplina.disciplinas.length; i++){
        let trdisc = document.createElement("tr");
        let tdnome = document.createElement("td");
        let tdch = document.createElement("td");
        let tdsigla = document.createElement("td");
        let tdcurso = document.createElement("td");
        tdnome.innerHTML = objDisciplina.disciplinas[i].nome;
        tdch.innerHTML = objDisciplina.disciplinas[i].ch;
        tdsigla.innerHTML = objDisciplina.disciplinas[i].sigla;
        tdcurso.innerHTML = objDisciplina.disciplinas[i].curso;
        trdisc.appendChild(tdnome);
        trdisc.appendChild(tdch);
        trdisc.appendChild(tdsigla);
        trdisc.appendChild(tdcurso);
        tbody.appendChild(trdisc);
    }

    trhead.appendChild(thnome);
    trhead.appendChild(thch);
    trhead.appendChild(thsigla);
    trhead.appendChild(thcurso);
    thead.appendChild(trhead);
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

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




function cadastrar(){
    // obtem o valor digitado da caixa de texto com id produto
    let produto = document.querySelector("#produto").value;
    let ul = document.querySelector("#resposta");
    // vamos criar uma li em memória e inserir na estrutura da pagina como filho da ul buscada na linha anterior
    let li = document.createElement("li");
    li.innerHTML = produto;
    ul.appendChild(li);
}