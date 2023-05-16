
//Criar um local storage com 10 objetos usuários que tenham nomeCompleto, usuário e senha.
let usuarios = [
    {  nomeCompleto: "João da Silva",
         usuario: "joao",
            senha: "123456"
    },
    {  nomeCompleto: "Maria da Silva",
            usuario: "maria",
            senha: "123456"
    },
    {  nomeCompleto: "José da Silva",
            usuario: "jose",
            senha: "123456"
    },
    {  nomeCompleto: "Ana da Silva",
            usuario: "ana",
            senha: "123456"
    },
    {  nomeCompleto: "Paulo da Silva",
            usuario: "paulo",
            senha: "123456"
    },
    {  nomeCompleto: "Pedro da Silva",
            usuario: "pedro",
            senha: "123456"
    },
    {  nomeCompleto: "Carlos da Silva",
            usuario: "carlos",
            senha: "123456"
    },
    {  nomeCompleto: "Marcos da Silva",
            usuario: "marcos",
            senha: "123456"
    },
    {  nomeCompleto: "Lucas da Silva",
            usuario: "lucas",
            senha: "123456"
    },
    {  nomeCompleto: "Mateus da Silva",
            usuario: "mateus",
            senha: "123456"
    }
];
//Inserir no local storage
localStorage.setItem("usuarios", JSON.stringify(usuarios));

const botaoLogin = document.querySelector('#btnSubmit');
botaoLogin.addEventListener('click', function(evento){
    evento.preventDefault();

    const inputUser = document.querySelector('#idUser');
    const inputPass = document.querySelector('#idPass');

    const usuario = inputUser.value;
    const senha = inputPass.value;

    const dados = {
        userName: usuario,
        senha: senha
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    let usuarioEncontrado = false;

    //Percorrer o array de usuários com o método forEach
    usuarios.forEach(function(usuario){
        if(usuario.usuario == dados.userName && usuario.senha == dados.senha){
            usuarioEncontrado = true;
            dados["nomeCompleto"] = usuario.nomeCompleto;
            dados["token"] = Math.random().toString(32).substring(-10);
        }
    })

    if(usuarioEncontrado){
        localStorage.removeItem("usuarioLogado");
        localStorage.setItem("usuarioLogado", JSON.stringify(dados));
        window.location.href = "home.html";
    }else{
        localStorage.removeItem("usuarioLogado");
        alert("Usuário ou senha inválidos!");
    }
})