// Função para abrir o modal
function abrirModal() {
    document.getElementById("modalCadastro").style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modalCadastro").style.display = "none";
}

// Simulação de salvamento no banco de dados
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    setTimeout(() => {
        alert("Cadastro realizado com sucesso! Seus dados foram salvos no banco.");
        window.location.href = "pet.html"; // Redireciona para a página principal
    }, 1000);
});

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
    var modal = document.getElementById("modalCadastro");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
