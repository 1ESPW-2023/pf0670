try {
//Criando mensagem de boas vindas ao usuário que logar no sistema
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
const spanUsuario = document.querySelector('#user');
spanUsuario.innerHTML = usuarioLogado.nomeCompleto;

//Ternário avalia se o token existe e se é diferente de vazio ou null e exibe a mensagem de boas vindas ao usuário ou redireciona para a página de login.
//Try para tratar usuarioLogado caso não exista no localStorage.

usuarioLogado.token ? alert(`Seja bem vindo(a) ${usuarioLogado.nomeCompleto}`) : window.location.href = "login.html";
} catch (error) {
    window.location.href = "../login.html";
}