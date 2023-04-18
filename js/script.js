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
const arrayElements = [...document.querySelectorAll("li")];

arrayElements.map((el,key)=>{

    if (el.textContent.indexOf("1") != (-1)) {
        el.textContent = `[ ${el.textContent} ]`;
    }
});
