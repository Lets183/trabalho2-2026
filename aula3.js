document.getElementById("formCadastro").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;
    let curso = document.getElementById("curso").value;
    let genero = document.querySelector('input[name="genero"]:checked');

    if (nome === "" || data === "" || email === "" || senha === "" || curso === "" || !genero) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!");
        return;
    }

    alert("Cadastro realizado com sucesso! 🎉");

    document.getElementById("formCadastro").reset();
});
