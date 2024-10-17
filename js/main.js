let deImageOne = document.querySelector('#deImageOne');
let deImageTwo = document.querySelector('#deImageTwo'); 
let play = document.querySelector('button')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let xone // cette variable doit etre globale


deImageOne.addEventListener('click',()=>{
    xone = Math.floor((Math.random() * 6) + 1);
    deImageOne.src = "img/one_"+xone+".png";
    deImageOne.style.pointerEvents = "none"
    deImageTwo.style.pointerEvents = "visible"
});

let resultOne =  document.querySelector("#resultOne")
let resultTwo = document.querySelector("#resultTwo")

deImageTwo.addEventListener('click',()=>{
    let xtwo = Math.floor((Math.random() * 6) + 1)
    deImageTwo.src = "img/one_"+xtwo+".png";
    deImageTwo.style.pointerEvents = "none"
    deImageOne.style.pointerEvents = "none"
    play.textContent ="Rejouer"
    play.style.display="block"




    if (xone > xtwo){ 
        resultOne.innerHTML ="Félicitation vous avez gagné !!! 👏"
        resultTwo.innerHTML ="vous avez perdu !!! 😭"
    }
    else if (xone < xtwo){
        resultOne.innerHTML ="vous avez perdu !!! 😭"
        resultTwo.innerHTML ="Félicitation vous avez gagné !!! 👏"
    }
    else if(xone = xtwo){
        resultOne.innerHTML ="Vous êtes en égalité !!! 🤞"
        resultTwo.innerHTML ="Vous êtes en égalité !!! 🤞"
    }

})


play.addEventListener('click',()=>{
    deImageOne.style.pointerEvents ="visible"
    deImageTwo.src = "img/one_6.png";
    deImageOne.src = "img/one_6.png";
    play.style.display="none"
    resultOne.innerHTML =""
    resultTwo.innerHTML =""

})




one.addEventListener('dblclick',()=>{
    one.textContent = prompt("Renommer")
    if(one.textContent === ""){
        one.textContent ="Player1"
    }
})

two.addEventListener('dblclick',()=>{
    two.textContent = prompt("Renommer")
    if(two.textContent === ""){
        two.textContent ="Player2"
    }
})
