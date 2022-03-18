const url ='http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone'
const city = document.querySelector('.timezone')
const icon = document.querySelector('.icon')
const degree = document.querySelector('.degree')
const teDe = document.querySelector('.temperature-description')
fetch(url)
.then(response => response.json())
.then(data =>{
    let lat = data.lat
    let lon = data.lon
    let api = '0b0145ea853617340131ee9ede99367d'
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
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
        icon.innerHTML =`<img src="./icons/clear-Day.svg" >` 
    }else if (data =='snow'){
        icon.innerHTML =`<img src="./icons/Snow.svg" >`
    }else if (data =='rain'){
        icon.innerHTML =`<img src="./icons/Rain.svg" >`
    }else if (data =='Fog'){
        icon.innerHTML =`<img src="./icons/Atmosphere.png" >`
    }

}
