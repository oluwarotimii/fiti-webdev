// f738f4f71aebad731e49a4220203338f
// https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=f738f4f71aebad731e49a4220203338f

async function getWeather() {
  const APIKEY = 'f738f4f71aebad731e49a4220203338f'
  let cityName = prompt('Enter City Name')
  const weatherDiv = document.getElementById('weather-data')
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
    const  weatherData = await res.json()
    console.log(weatherData)
    console.log(weatherData.main.temp)
    console.log(weatherData.name)
    console.log(weatherData.main.pressure)
    weatherDiv.innerHTML = `
    <p> THE TEMPERATURE IS ${weatherData.main.temp} </p>
    `
  } catch (error) {
    console.log(error.message)
  }
}

getWeather()