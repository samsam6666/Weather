const url ='https://api.ipgeolocation.io/ipgeo?apiKey=df31d5897a7b4010b5986dc3f4e4c738'
const city = document.querySelector('.timezone')
const icon = document.querySelector('.icon')
const degree = document.querySelector('.degree')
const teDe = document.querySelector('.temperature-description')
fetch(url)
.then(response => response.json())
.then(data =>{
    let lat = data.latitude
    let lon = data.longitude
    const urlWed = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b0145ea853617340131ee9ede99367d`
    fetch(urlWed)
    .then(response => response.json())
    .then(data =>{
        city.innerHTML = data.name
        chIcon(data.weather[0].main)
        degree.innerHTML = toCelsius(data.main.temp)
        degree.innerHTML += ' C'
        teDe.innerHTML = data.weather[0].description
    })
} )


function toCelsius(kel){
    return Math.floor(Number(kel) - 273)
}
function chIcon(data){ 
    if (data == 'Clouds') {
        icon.innerHTML = `<img src="./icons/Clouds.svg" >`  
    }else if (data == 'Clear'){
        icon.innerHTML =`<img src="./icons/Clear-Day.svg" >` 
    }else if (data =='snow'){
        icon.innerHTML =`<img src="./icons/Snow.svg" >`
    }else if (data =='rain'){
        icon.innerHTML =`<img src="./icons/Rain.svg" >`
    }else if (data =='Fog'){
        icon.innerHTML =`<img src="./icons/Atmosphere.png" >`
    }

}
