console.log("=======================WE ARE LIVE======================")

const events = {
    click : 0,
    mouseOver: 0,
    doubleClick: 0,
    onFocus : 0,
    submit : 0,
}

const eventList = document.getElementById('list')
const clickBox = document.getElementById('clickBox')

clickBox.innerHTML= "WE ARE HERE";

function updateEvents () {
    eventList.innerHTML = ""
    for (let event in events) {
        const li = document.createElement('li')
        console.log(event)
        li.textContent = `${event} : ${events[event]} `
        eventList.appendChild(li);
    }
}

updateEvents()


clickBox.addEventListener('click', () => {
    events.click++
    updateEvents()
})


