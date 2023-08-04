const form = document.getElementById('formContatoNumero');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputNumero.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};