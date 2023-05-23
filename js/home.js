
if(localStorage.getItem("usuario-token")){
    //Exercício
    //Analisando o objeto que chega na página home através do localStorage faça com que somente se o objeto possuir conteúdo o usuário possa permanecer na página.
    //Utilize os mesmos conceitos mostrandos agora de redirecionamento e validação de objetos.

    //Recepcionando o objeto que logou no localStorage e imprimindo uma de suas propriedades.
    const spanUser = document.querySelector("#user");
    let usuario = JSON.parse(localStorage.getItem("usuario-validado"))
    
    //Exercício
    //Recebendo os dados do objeto e construindo interface.
    //Criar elementos HTML que recebam os atributos do objeto USUARIO-VALIDADO.
    //Crie um CARD onde seja apresentado os seguintes dados do usuário:
    // - nomeCompleto
    // - nomeUsuario
    // - avatarUsuario

    const imgAvatar = document.querySelector("#img-avatar");
    imgAvatar.src = usuario.avatarUsuario;
    imgAvatar.alt = usuario.nomeCompleto;
    imgAvatar.title = usuario.nomeUsuario;

    const legUsuario = document.querySelector("#legenda");
    legUsuario.textContent = usuario.nomeCompleto;

    const botaoLogout = document.querySelector("#btnLogout");
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("usuario-validado");
        localStorage.removeItem("usuario-token");
        window.location.href = "../signin.html";
    });

}else{
    window.location.href = "../signin.html";
}