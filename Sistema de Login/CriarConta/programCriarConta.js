let inUser = document.getElementById("inUser")
let inEmail = document.getElementById("inEmail")
let inSenha = document.getElementById("inSenha")

btCriar.addEventListener("click", () => {
    let user = inUser.value
    let email = inEmail.value
    let senha = inSenha.value
    localStorage.setItem("user", user)
    localStorage.setItem("email", email)
    let erros = []
    if (email == "" || senha == "" || user =="") {
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
        localStorage.setItem("senha", senha)
        alert("Conta criada com sucesso!")
        location.href = "index.html" 
    }

    else {
        alert(`A senha deve ${erros.join(", ")}`)
    }


})