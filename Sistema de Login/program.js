let inEmail = document.getElementById("inEmail")
let inSenha = document.getElementById("inSenha")
let btLogin = document.getElementById("btLogin")
let btCriarConta = document.getElementById("btCriarConta")

btLogin.addEventListener("click", function () {
    let email = inEmail.value
    let senha = inSenha.value
    let erros = []
    if (email == "" || senha == "") {
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
        location.href = "logado.html" //location.href manda pra outra pagina
    }
    
    else {
        alert( `A senha deve ${erros.join(", ")}`)
    }
    

})