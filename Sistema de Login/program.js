let inNome = document.getElementById("inNome")
let inSenha = document.getElementById("inSenha")
let btLogin = document.getElementById("btLogin")
let btCriarConta = document.getElementById("btCriarConta")
let resp = document.querySelector("h2")

btLogin.addEventListener("click", function () {
    let nome = inNome.value
    let senha = inSenha.value
    let erros = []
    if (nome == "" || senha == "") {
        alert("Preencha os campos corretamente.")
        return
    }

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo,  1)")
    }

    if (!senha.match(/[/a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2) {
        erros.push("possuir letras maiúsculas (no mínimo, 2)")
    }

    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    if (erros.length == 0) {
        resp.innerText = "Tudo certo! Senha válida."
    }

    else {
        resp.innerText = `A senha deve ${erros.join(", ")}`
    }


})