const eyeButton = document.querySelector(".eye");

eyeButton.addEventListener("click",()=>{

    const inputSenha = document  .querySelector("#idPass");

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyeButton.setAttribute("class","fa fa-eye-slash eye");
    }else{
        inputSenha.setAttribute("type","password");
        eyeButton.setAttribute("class","fa fa-eye eye");
    }
});
