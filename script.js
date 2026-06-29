const botao = document.getElementById("botao");
const paragrafo = document.getElementById("retorno");

botao.addEventListener("click",function(){
    paragrafo.textContent = "Formulário enviado"
});