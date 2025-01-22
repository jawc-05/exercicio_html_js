const form = document.getElementById('form-validacao');
const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseFloat(numA.value);
    const valorB = parseFloat(numB.value);

    if (valorB > valorA) {
        mensagem.innerHTML = `Sucesso: O número <b>B: ${valorB}</b> é maior que <b>A: ${valorA}</b>.`;
        mensagem.className = "message success";
        mensagem.style.display = "block";
    } else {
        mensagem.innerHTML = `Erro: O número <b>B: ${valorB}</b> não é maior que <b>A: ${valorA}</b>.`;
        mensagem.className = "message error";
        mensagem.style.display = "block";
    }
});