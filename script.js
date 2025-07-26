// FORMULÁRIO DE INSCRIÇÃO
const form = document.getElementById("form-inscricao");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede envio automático

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Validação básica
  if (nome === "" || email === "") {
    alert("Por favor, preencha os campos obrigatórios (nome e e-mail).");
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Simula envio bem-sucedido (aqui entraria um backend real)
  alert("Inscrição enviada com sucesso! Entraremos em contato por e-mail.");
  form.reset();
});

// Valida formato de e-mail
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
