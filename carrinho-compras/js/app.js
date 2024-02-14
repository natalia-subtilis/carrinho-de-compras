let totalGeral;
limpar();

function adicionar () {
    //recuperar valores, nome do produto, quantidade e valor unitario
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
 //calcular subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto}Celular <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;
    //atualizar valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

//limpar carrinho e total
function limpar () { 
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
}