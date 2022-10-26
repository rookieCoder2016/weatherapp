// constants and variables
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f406b857d22f163478db7b873a840aa0

const API_KEY = 'f406b857d22f163478db7b873a840aa0';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

// const city = 'london'



// Cached element references
    // save p element with id of title
    const titleElement = $('#title')
    
    // save p element with id of temp
    const tempElement = $('#temp')
    
    // save p element with id of index
    const indexElement = $('#index')

    // save p element with id of desc
    const descElement = $('#desc')

    const cityInput = $('input[type=text]')

    const submitButton = $('input[type=submit]')
    console.log(submitButton)

// Event listeners

    // set an event on submit button on form, that grans value of input and console logs it
    submitButton.click((event)=>{
        
        // prevent page refresh default behavior
            event.preventDefault()
        
        // grab searched city name value
            let searchedCity = cityInput.val()

        
        handleGetData(searchedCity)

        
        console.log('submit clicked')


    })
// Functions


function  handleGetData (city){


    $.ajax(`${BASE_URL}${city}&APPID=${API_KEY}`)
        .then((response)=> {
            console.log(response)
            
            // extract the temp from response
            let temp = response.main.temp
            let displayTemp = Math.floor((temp-273.5)*9/5+32)
                // display page temperature
                tempElement.html(displayTemp)    
            // console.log(displayTemp)

            // Extract city name
            let cityName = response.name
                // display city name 
                titleElement.html(cityName)
            console.log(cityName)

            // Extract feels like temp
            let feelsLikeTemp = response.main.feels_like
            let displayFeelsLikeTemp = Math.floor((feelsLikeTemp-273.5)*9/5+32)
                // display feels like temp
                indexElement.html(displayFeelsLikeTemp)
            console.log(displayFeelsLikeTemp)

            // Extract weather
            let weather = response.weather[0].description
                // display weather
                descElement.html(weather)
            console.log(weather)

        })          
        .catch((error)=> {console.log(error)})    


}

// handleGetData('london')