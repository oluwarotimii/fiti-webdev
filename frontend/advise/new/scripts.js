 async function getAdvise() {
    const url = 'https://api.adviceslip.com/advice'
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        console.log(`15 Seconds Advise is : "${data.slip.advice}"`)

         const advise = document.getElementById("advise-text")
         advise.textContent = `15 Seconds Advise is : "${data.slip.advice}"`
    } catch (error) {
        console.log(`ERROR FALED TO FETCH ADVISE`, error)
    }

    setTimeout(getAdvise, 5000)
 }

 getAdvise();
 



