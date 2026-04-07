const out = document.getElementById("output")

function addition(a, b) {
    let c = a + b
    out.innerHTML += "THIS ARE THE NUBMERS " + a  + " and " + b + '<br>'
    out.innerHTML += 'The Answer is ' + c + '<br>'
}

addition(2,4)

addition(7,1)
addition(5,2)

function bark() {
    const isDog = true;

    if (!isDog){
        out.innerHTML += 'THIS IS NOT A DOG!'
    } else{
        out.innerHTML += 'THIS IS THE DOG, WOOOF!'
    }
}

bark()