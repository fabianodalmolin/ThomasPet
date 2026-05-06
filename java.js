/**
 * Projeto: Thomas Pet
 * Baseado nas aulas e metodologia do Professor Nicholas Macedo, inspirado projeto Blippi Pet
 * Desenvolvido por Fabiano Dalmolin - 05/2026
 */



const formElemento = document.querySelector("form");
const msgSucesso = document.getElementById("mensagem-sucesso");
const btnEnviar = formElemento.querySelector("button[type='submit']"); // Seleciona o botão

formElemento.addEventListener("submit", function (event) {
  event.preventDefault(); 

  // 1. Efeito de carregamento no início
  const textoOriginal = btnEnviar.innerText;
  btnEnviar.innerText = "Enviando... 🐾";
  btnEnviar.disabled = true;
  btnEnviar.style.opacity = "0.7";

  const formData = new FormData(this);

  fetch(event.target.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      msgSucesso.style.display = "block";
      formElemento.reset(); 

      setTimeout(() => {
        msgSucesso.style.display = "none";
      }, 5000);
    }
  })
  .finally(() => {
    // 2. Volta o botão ao normal quando termina (dando certo ou errado)
    btnEnviar.innerText = textoOriginal;
    btnEnviar.disabled = false;
    btnEnviar.style.opacity = "1";
  });
});

