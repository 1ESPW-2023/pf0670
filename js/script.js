// //Exemplo de Funções
// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click", ()=>{
// //     console.log(divElement);
// // });

// divElement.addEventListener("click", mostraElemento);


// function mostraElemento() {
//     console.log(divElement)
// }

// function soma() {
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }
 

// //Recuperando elementos do HTML com querySelector
// const liElements = document.querySelector("#item");
// console.log(liElements);


// //Recuperando elementos do HTML com querySelectorAll
// const liElements = document.querySelectorAll("li");
// //CONVERTENDO NODE LIST EM ARRAY COM SPREAD
// const arrayElements = [...liElements];
// console.log(arrayElements);

//CONVERTENDO NODE LIST EM ARRAY COM SPREAD
// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map((el,key)=>{

//     if (el.textContent.indexOf("1") != (-1)) {
//         el.textContent = `[ ${el.textContent} ]`;
//     }
// });
let tmp = 0;

function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 1000);

}

function alteraBanner1() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./img/banner-lateral-1.png";
    img2.src = "./img/banner-lateral-2.png";

    setTimeout(alteraBanner2, 1000);

}
 
function alteraBanner2() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./img/banner-lateral-2.png";
    img2.src = "./img/banner-lateral-1.png";

    setTimeout(alteraBanner3, 1000);

}

function alteraBanner3() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./img/banner-lateral-1.png";
    img2.src = "./img/banner-lateral-2.png";

    setTimeout(alteraBanner1, 1000);

}

alteraBanner1();

const btnOnOff = document.querySelector(".conteudo button");

btnOnOff.addEventListener("click", ()=>{
    const imgLampada = document.querySelector(".conteudo img");
    if(btnOnOff.textContent == "LIGAR"){
        btnOnOff.textContent = "DESLIGAR";
        imgLampada.src = "./img/pic_bulbon.gif";
    }else{
        btnOnOff.textContent = "LIGAR";
        imgLampada.src = "./img/pic_bulboff.gif";
    }
});

// function turnInOff() {
//     const btnOnOff = document.querySelector(".conteudo button");

//     if(btnOnOff.textContent == "LIGAR"){
//         btnOnOff.textContent = "DESLIGAR";
//         imgLampada.src = "./img/pic_bulbon.gif";
//     }else{
//         btnOnOff.textContent = "LIGAR";
//         imgLampada.src = "./img/pic_bulboff.gif";
//     }
// }

