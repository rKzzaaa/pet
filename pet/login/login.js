function openModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function toggleForm() {
    let title = document.getElementById("modalTitle");
    let formButton = document.querySelector(".modal-content button");
    let toggleText = document.getElementById("toggleText");

    if (title.innerText === "Entrar") {
        title.innerText = "Cadastro";
        formButton.innerText = "Criar Conta";
        toggleText.innerHTML = "Já tem uma conta? <a href='#' onclick='toggleForm()'>Entrar</a>";
    } else {
        title.innerText = "Entrar";
        formButton.innerText = "Acessar";
        toggleText.innerHTML = "Não tem uma conta? <a href='#' onclick='toggleForm()'>Cadastre-se</a>";
    }
}
