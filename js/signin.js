"use strict";

//CRIANDO UM OBJETO
// s

//CRIAR UMA LISTA DE OBJETOS
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

// //Adicionando a lista de OBJETOS no localStorage
// localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        let usuarioInput = document.querySelector("#usuario").value;
        let senhaInput = document.querySelector("#senha").value;
        const msgError = document.querySelector("#msgError");

        try{

            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            listaUser.forEach((usuario)=>{

                if(usuarioInput == usuario.nomeUsuario && senhaInput == usuario.senhaUsuario){
                    throw "USUÁRIO VALIDADO!";
                }
            });
            throw "SENHA OU NOME DE USUÁRIO INVÁLIDO!";
        }catch(err){
            if(err == "USUÁRIO VALIDADO!"){
                
                msgError.setAttribute("style","color:#00ff00;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

            }else{
                msgError.setAttribute("style","color:#ff0000;display:block;");
                msgError.innerHTML = "<strong>Senha ou nome de Usuário inválidos!</strong>";
            }
        }
           


    }
});