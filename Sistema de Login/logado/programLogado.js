let resp = document.querySelector("h1")
let infos = document.querySelector("h3")
let btEditar = document.getElementById("btEditar")
let btApagar = document.getElementById("btApagar")
resp.innerText = `Olá, ${localStorage.getItem("user")}!`
infos.innerText = `E-mail: ${localStorage.getItem("email")} \n Senha: ${localStorage.getItem("senha")}`

btApagar.addEventListener("click", ()=>{
     localStorage.clear()
     alert("Dados apagados com sucesso!")
     location.href ="CriarConta.html"
})
btEditar.addEventListener("click", ()=>{
     location.href ="editarDados.html"
})