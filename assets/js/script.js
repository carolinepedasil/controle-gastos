/*
    1º - Capturar Valores
    2º - Armazenar Valores
    3º - Desenvolver Funções que realizam os Cálculos
    4º - Atualizar Interface
*/

/*
    2º - Armazenar Valores
*/

    const controleGastos = {
        orcamento: 0,
        despesas: 0,
        saldo: 0
    }

/*
    1º - Capturar Valores
    a) Capturar Campos de Entrada de Valores
    b) Capturar Valores dos Campos
*/

    const campoEntradaOrcamento = document.querySelector('.formularioEntradaOrcamento input');
    const buttonOrcamento = document.querySelector('.formularioEntradaOrcamento button');

    buttonOrcamento.addEventListener('click', capturarValorOrcamento);

    function capturarValorOrcamento() {
        const valorOrcamento = Number(campoEntradaOrcamento.value); //converter o valor em número, porque se tirar o "Number" o valor vira uma string.

        controleGastos.orcamento = valorOrcamento;
        controleGastos.saldo = valorOrcamento;

        atualizarInterface();
    }

    const campoNomeDespesa = document.querySelector('.formularioEntradaDespesa__nome');
    const campoValorDespesa = document.querySelector('.formularioEntradaDespesa__valor');
    const buttonDespesa = document.querySelector('.formularioEntradaDespesa button');

    buttonDespesa.addEventListener('click', capturarValoresDespesa);

    function capturarValoresDespesa(){
        const nomeDespesa = campoNomeDespesa.value;
        const valorDespesa = Number(campoValorDespesa.value);

        controleGastos.despesas += valorDespesa; // += para sempre somar as despesas, pois se deixar somente " = " ele sobscreve os valores anteriores
        controleGastos.saldo = controleGastos.saldo - valorDespesa; // também poderia ser escrito desta forma: controleGastos.saldo -= valorDespesa;

        atualizarInterface();
        adicionarDespesaInterface(nomeDespesa, valorDespesa);
    }

/*
    4º - Atualizar Interface
*/

    // selecionando os 3 parágrafos (p) da interface
    const orcamento = document.querySelector('.secaoImpressaoResultados__orcamento p');
    const despesas = document.querySelector('.secaoImpressaoResultados__despesas p');
    const saldo = document.querySelector('.secaoImpressaoResultados__saldo p');

    function atualizarInterface(){
        // orcamento.innerText = '+ R$' + controleGastos.orcamento;
        orcamento.innerText = `+ R$ ${controleGastos.orcamento}`; // innerText para acessar o texto que está na página
        despesas.innerText = `- R$ ${controleGastos.despesas}`;
        saldo.innerText = `R$ ${controleGastos.saldo}`;
    }

    const listaDespesas = document.querySelector('.containerDespesas__lista');

    function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const img = document.createElement('img');

        h3.innerText = nomeDespesa;
        p.innerText = `R$ ${valorDespesa}`;

        img.src = './assets/img/trash.svg';
        img.alt = 'Icone lixeira';

        img.addEventListener('click', removerDespesa);

        li.dataset.valor = valorDespesa;
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(img);

        listaDespesas.appendChild(li);
    }

    function removerDespesa(evento) {
        const despesaClicada = evento.target.parentNode // parentNode = captura o pai do elemento
        const valorDespesaClicada = Number(despesaClicada.dataset.valor);

        controleGastos.despesas -= valorDespesaClicada;
        controleGastos.saldo += valorDespesaClicada;
        
        atualizarInterface();
        despesaClicada.remove();
    }