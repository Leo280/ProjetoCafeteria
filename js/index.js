let qtd = 0;

function adicionar(valor) {
  if (qtd + valor < 0) {
    console.log('não é permitido qtd negativa');
    return;
  }

  qtd += valor;
}

function exibir() {
  document.querySelector('.qtd').innerHTML = `${qtd}`;
}
//Código para exibir a quantidade de itens presentes no carrinho
function exibirQtdCarrinho() {
  let qtd_carrinho = document.querySelector('.qtd-carrinho');
  const fechar = document.querySelector('.btn-modal-adicionar');
  const modal_container = document.querySelector('.modal-container');

  qtd_carrinho.style.opacity = 1;

  qtd_carrinho.innerHTML = `${qtd}`;

  fechar.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container.style.display = 'none';

    if (qtd === 0) {
      qtd_carrinho.style.opacity = 0;
    }
  });
}


function exibirDetalhesPedido() {
  let open1 = document.querySelector('.editar');
  const modal_container1 = document.querySelector('.modal-container1');
  let close1 = document.querySelector('.btn-alterar');

  open1.addEventListener('click', () => {
    modal_container1.style.display = 'flex';
  });

  close1.addEventListener('click', () => {
    modal_container1.style.display = 'none';
  });
}


//Código para abrir o modal no menu(Cardapio)
let open = document.querySelectorAll('.btn-adicionar');
const modal_container = document.querySelector('.modal-container');
const close = document.querySelector('.btn-modal-cancelar');

for (let i = 0; i < open.length; i++) {
  open[i].addEventListener('click', (e) => {
    e.preventDefault();
    modal_container.style.display = 'flex';
  });
}

close.addEventListener('click', () => {
  modal_container.style.display = 'none';
});

