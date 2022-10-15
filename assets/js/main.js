//!Selecionando elementos ------------

const btnAdicionar = document.getElementById('add__button');
const textoEntrada = document.getElementById('text__input');
const containerSaida = document.getElementById('output__container');
let elementosCriados = document.querySelectorAll('.elemento__novo');

//! Criando as funções ---------------

limpaTarefas = () => {
  elementosCriados.forEach((elementos__novo) => {
    elementos__novo.addEventListener('click', () => {
      containerSaida.removeChild(elementos__novo);
    });
  });
};

checkElements = () => {
  elementosCriados = document.querySelectorAll('.elemento__novo');
  console.log(elementosCriados);
};

criaElemento = () => {
  let novoElemento = document.createElement('p');
  novoElemento.setAttribute('class', 'elemento__novo');
  novoElemento.innerText = textoEntrada.value;
  containerSaida.appendChild(novoElemento);
};

zeraEntrada = () => {
  textoEntrada.value = '';
};

//! Event handlers -----------------

//Adicionando tarefa com o uso do botão 'adicionar'

btnAdicionar.addEventListener('click', () => {
  if (!textoEntrada.value) return;
  criaElemento();
  checkElements();
  limpaTarefas();
  zeraEntrada();
});

//Adicionando tarefa com a tecla Enter

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'Enter') {
    if (!textoEntrada.value) return;
    criaElemento();
    checkElements();
    limpaTarefas();
    zeraEntrada();
  }
});
