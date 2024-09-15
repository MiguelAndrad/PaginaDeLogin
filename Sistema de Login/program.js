let inUser = document.getElementById("inUser")
let inSenha = document.getElementById("inSenha")
let btLogin = document.getElementById("btLogin")

btLogin.addEventListener("click", () => {
    let user = inUser.value
    let senha = inSenha.value
    let userLs = localStorage.getItem("user")
    let senhaLs = localStorage.getItem("senha")

    if (user == userLs && senha == senhaLs) {
        alert("Login bem-sucedido!")
        location.href = "logado.html"
    }
    else {
        alert("Usuário ou senha incorretos!")
    }
})