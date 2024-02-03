let botao = document.querySelector('.button-icon');
const conselhosDescricao = document.querySelector('.conselhos-descricao')
const conselhosId = document.querySelector('.conselhos-id')

let url = "https://api.adviceslip.com/advice";

botao.addEventListener("click", function () {
  fetch(url)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function(objeto){
      let id = objeto.slip.id
      conselhosId.innerHTML = `Advice #${id}`
      let texto = objeto.slip.advice;
      conselhosDescricao.innerHTML = `"${texto}"`;
    })
    .catch(function (erro) {
      console.error(erro);
      conselhosId.textContent = "Não foi possivel saber o id"
      conselhosDescricao.textContent = "Ops, algo deu errado. Tente novamente.";
    });
});