"use strict";

//CRIANDO OBJETOS
//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "José da Silva",
        nomeUsuario : "jose",
        senhaUsuario: "123456",
        avatarUsuario : "./img/profile-42914_640.png"
    }
    ,
    {
        nomeCompleto : "Paulo da Silva",
        nomeUsuario : "paulo",
        senhaUsuario: "123456",
        avatarUsuario : "./img/profile-42914_640.png"
    }
    ,
    {
        nomeCompleto : "Maria da Silva",
        nomeUsuario : "maria",
        senhaUsuario: "123456",
        avatarUsuario : "./img/profile-42914_640.png"
    }
    ,
    {
        nomeCompleto : "João da Silva",
        nomeUsuario : "joao",
        senhaUsuario: "123456",
        avatarUsuario : "./img/profile-42914_640.png"
    }
];

// //Adicionando a lista de OBJETOS no localStorage
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){
        const msgError = document.querySelector("#msgError");

        //Entrada do usuário
        let usuarioLogado = {
            usuarioInputLogado : document.querySelector("#usuario").value,
            senhaInputLogado : document.querySelector("#senha").value
        }

        let usuarioValidado = {};

        let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            for (let x = 0; x < listaUser.length; x++) {
                
                if(usuarioLogado.usuarioInputLogado == listaUser[x].nomeUsuario && usuarioLogado.senhaInputLogado == listaUser[x].senhaUsuario){
                    //Adicionando nova propriedade no objeto.
                    usuarioValidado = listaUser[x];
                    break;
                }
            }


            if(usuarioValidado.nomeUsuario != null){
                
                //Adicionando o objeto usuarioValidado no localStorage
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado))

                msgError.setAttribute("style","color:#00ff00;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

                //Criar token para autenticação do usuário
                const token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
                //Adicionando o token no localStorage
                localStorage.setItem("usuario-token", token);

                //Criando o sistema de redirect
                setTimeout(function () {
                    window.location.href = "../home.html";
                }, 3000 );
            }
            else{
                msgError.setAttribute("style","color:#ff0000;display:block;");
                msgError.innerHTML = "<strong>Senha ou nome de Usuário inválidos!</strong>";
            }
    }

});