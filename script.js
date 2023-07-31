const numeros = document.querySelectorAll(".numero");
const gerarBtn = document.querySelector("#gerar");

function gerarNumeros() {
  const numeroMaximo = 60; // Número máximo
  const numeroMinimo = 1; // Número mínimo
  const resultado = []; // Array para armazenar os números gerados

  // Gera seis números aleatórios únicos
  while (resultado.length < 6) {
    const numero =
      Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) +
      numeroMinimo; // Gera um número aleatório

    if (!resultado.includes(numero)) {
      // Verifica se o número já foi gerado
      resultado.push(numero); // Adiciona o número ao array
    }
  }

  // Exibe os números gerados na tela
  for (let i = 0; i < numeros.length; i++) {
    numeros[i].textContent = resultado[i];
  }

}

gerarBtn.addEventListener("click", gerarNumeros); // Botão
