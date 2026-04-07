console.log("WE ARE LIVE HERE IN FITI JAPAN!")

const box1 = document.getElementsByClassName("box1")
box1.innerHTML = `<p> HELLO FROM THE OTHER SIDE!!! </p>`;

const boxx = document.getElementById('welcome')

boxx.innerHTML = `
    <p> HELLO AGAIN </p>

`
let decision = true;

if(!decision){
    boxx.innerHTML = `
    <p> THIS IS TRUE! AND WE ARE HERE!
    `
} else {
    boxx.innerHTML =` <p> THIS IS FALSE </p>`
}

//  const box2 = document.getElementById
 const box3 = document.querySelector('box')

//  const boxx3 = document.querySelectorAll('box')

box3.innerHTML = `<h1>NEW BOX LOADING </h1>`