let inEmail = document.getElementById("inEmail")
let inSenha = document.getElementById("inSenha")
let inRepSenha = document.getElementById("inRepSenha")

btConfirmar.addEventListener("click", () => {
    let email = inEmail.value
    let emailLs = localStorage.getItem("email")

    if (email == emailLs) {
        alert("E-mail correto!")

        inEmail.className = "oculta"

        inSenha.classList.add("campo")
        inRepSenha.classList.add("campo")
        inSenha.classList.remove("oculta")
        inRepSenha.classList.remove("oculta")

        btConfirmar.className = "oculta"

        btCriar.classList.add("botao")
        btCriar.classList.remove("oculta")

    }
    else {
        alert("E-mail incorreto!")
    }


})
btCriar.addEventListener("click", () => {
    let senha = inSenha.value
    let repSenha = inRepSenha.value

    let erros = []
    if (senha == "" || repSenha == "") {
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
        erros.push("possuir letras minúsculas (no mínimo 1)")
    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2) {
        erros.push("possuir letras maiúsculas (no mínimo 2)")
    }

    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo 1)")
    }

    if (erros.length == 0) {
        localStorage.setItem("senha",senha)
        alert("Senha criada com sucesso!")
        location.href = "index.html"
    }
    
    else {
        alert( `A senha deve ${erros.join(", ")}`)
    }
}) 