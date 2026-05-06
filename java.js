const formElemento = document.querySelector("form");
const inputsElementos = document.querySelectorAll("input");
const textoAreaElemento = document.querySelector("textarea");

formElemento.addEventListener("submit", function (event) {
  // event.preventDefault();

  let valores = [];

  inputsElementos.forEach(function (input) {
    // console.log(input.value);
  });
  valores.push(textoAreaElemento.value);
  console.log("dados do formulario: ", valores);
});

