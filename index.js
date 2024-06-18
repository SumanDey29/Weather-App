// Get the location input from the user
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// var ps = require("prompt-sync");
// const prompt = ps();

// //const location = document.getElementById('location-input').value;
// var cityName = prompt("Enter the name of the city: ");
// Make a GET request to the OpenWeatherMap API to get the current weather for the location
const apiKey = '9f8fa0d03522465b8d5203522221401';
//var fetch = require("node-fetch");
const getWeather = (city)=>{
  //cityName.innerHTML = city;
  const weatherUrl = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q="+city;
  let p = fetch(weatherUrl)
  p.then(response => response.json())
  .then(data => {
    // Extract the relevant data from the API response
  
    const temperatureC = data.current.temp_c;
    const temparatureF = data.current.temp_f;
    const windSpeed = data.current.wind_kph;
    const humidity = data.current.humidity;
    const feelslike_c = data.current.feelslike_c;
    const pressure = data.current.pressure_mb
    // console.log(temperatureC);
    // console.log(temparatureF);
    // console.log(windSpeed);
    cityName.innerHTML = data.location.name;
    state.innerHTML = data.location.region;
    condition.innerHTML = data.current.condition.text;
    icon = "https:" + data.current.condition.icon;
    document.getElementById('icn').src = icon;
    console.log(data);
    console.log(weatherUrl);
    // Display the weather data on the page
    document.getElementById('temperatureC').innerHTML = temperatureC;
    document.getElementById('temperatureF').innerHTML = temparatureF;
    document.getElementById('wind').innerHTML = windSpeed;
    document.getElementById('hum').innerHTML = humidity;
    document.getElementById('feelC').innerHTML = feelslike_c;
    document.getElementById('pres').innerHTML = pressure;
  })
  .catch(err => console.log(err));
}
  submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
  getWeather("Kolkata");

    //KOLKATA
    const weatherUrlK = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Kolkata";
    let p = fetch(weatherUrlK)
    p.then(response => response.json())
    .then(dataK => {
      // Extract the relevant data from the API response
      const temperatureKC = dataK.current.temp_c;
      const temperatureKF = dataK.current.temp_f;
      const windSpeedK = dataK.current.wind_kph;
      const feelsLikeK = dataK.current.feelslike_c;
      const lastUpdate = dataK.current.last_updated;
      console.log(dataK);

      // Display the weather data on the page
      document.getElementById('temperatureKC').innerHTML = temperatureKC;
      document.getElementById('temperatureKF').innerHTML = temperatureKF;
      document.getElementById('windSpeedK').innerHTML = windSpeedK;
      document.getElementById('feelsLikeK').innerHTML = feelsLikeK;
      document.getElementById('lastUpdate').innerHTML = lastUpdate;
      document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    //MUMBAI
    const weatherUrlM = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Mumbai";
    let pM = fetch(weatherUrlM)
    pM.then(response => response.json())
    .then(dataM => {
      // Extract the relevant data from the API response
    
      const temperatureMC = dataM.current.temp_c;
      const temperatureMF = dataM.current.temp_f;
      const windSpeedM = dataM.current.wind_kph;
      const feelsLikeM = dataM.current.feelslike_c;
      const lastUpdateM = dataM.current.last_updated;
      

      console.log(dataM);
      console.log(weatherUrlM);
      // Display the weather data on the page
      document.getElementById('temperatureMC').innerHTML = temperatureMC;
      document.getElementById('temperatureMF').innerHTML = temperatureMF;
      document.getElementById('windSpeedM').innerHTML = windSpeedM;
      document.getElementById('feelsLikeM').innerHTML = feelsLikeM;
      document.getElementById('lastUpdateM').innerHTML = lastUpdateM;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    ///NEW DELHI
    const weatherUrlD = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=New Delhi";
    let pD = fetch(weatherUrlD)
    pD.then(response => response.json())
    .then(dataD => {
      // Extract the relevant data from the API response
    
      const temperatureDC = dataD.current.temp_c;
      const temperatureDF = dataD.current.temp_f;
      const windSpeedD = dataD.current.wind_kph;
      const feelsLikeD = dataD.current.feelslike_c;
      const lastUpdateD = dataD.current.last_updated;
    
      console.log(dataD);
      console.log(weatherUrlD);
      // Display the weather data on the page
      document.getElementById('temperatureDC').innerHTML = temperatureDC;
      document.getElementById('temperatureDF').innerHTML = temperatureDF;
      document.getElementById('windSpeedD').innerHTML = windSpeedD;
      document.getElementById('feelsLikeD').innerHTML = feelsLikeD;
      document.getElementById('lastUpdateD').innerHTML = lastUpdateD;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    //CHENNAI
    const weatherUrlC = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Chennai";
    let pC = fetch(weatherUrlC)
    pC.then(response => response.json())
    .then(dataC => {
      // Extract the relevant data from the API response
    
      const temperatureCC = dataC.current.temp_c;
      const temperatureCF = dataC.current.temp_f;
      const windSpeedC = dataC.current.wind_kph;
      const feelsLikeC = dataC.current.feelslike_c;
      const lastUpdateC = dataC.current.last_updated;
    
      //cityName.innerHTML = dataC.location.name;
      console.log(dataC);
      console.log(weatherUrlC);
      // Display the weather data on the page
      document.getElementById('temperatureCC').innerHTML = temperatureCC;
      document.getElementById('temperatureCF').innerHTML = temperatureCF;
      document.getElementById('windSpeedC').innerHTML = windSpeedC;
      document.getElementById('feelsLikeC').innerHTML = feelsLikeC;
      document.getElementById('lastUpdateC').innerHTML = lastUpdateC;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    //BANGALORE
    const weatherUrlB = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Bangalore";
    let pB = fetch(weatherUrlB)
    pB.then(response => response.json())
    .then(dataB => {
      // Extract the relevant data from the API response
    
      const temperatureBC = dataB.current.temp_c;
      const temperatureBF = dataB.current.temp_f;
      const windSpeedB = dataB.current.wind_kph;
      const feelsLikeB = dataB.current.feelslike_c;
      const lastUpdateB = dataB.current.last_updated;
    
      //cityName.innerHTML = dataC.location.name;
      console.log(dataB);
      console.log(weatherUrlB);
      // Display the weather data on the page
      document.getElementById('temperatureBC').innerHTML = temperatureBC;
      document.getElementById('temperatureBF').innerHTML = temperatureBF;
      document.getElementById('windSpeedB').innerHTML = windSpeedB;
      document.getElementById('feelsLikeB').innerHTML = feelsLikeB;
      document.getElementById('lastUpdateB').innerHTML = lastUpdateB;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    //PUNE
    const weatherUrlP = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Pune";
    let pP = fetch(weatherUrlP)
    pP.then(response => response.json())
    .then(dataP => {
      // Extract the relevant data from the API response
    
      const temperaturePC = dataP.current.temp_c;
      const temperaturePF = dataP.current.temp_f;
      const windSpeedP = dataP.current.wind_kph;
      const feelsLikeP = dataP.current.feelslike_c;
      const lastUpdateP = dataP.current.last_updated;
    
      //cityName.innerHTML = dataC.location.name;
      console.log(dataP);
      console.log(weatherUrlP);
      // Display the weather data on the page
      document.getElementById('temperaturePC').innerHTML = temperaturePC;
      document.getElementById('temperaturePF').innerHTML = temperaturePF;
      document.getElementById('windSpeedP').innerHTML = windSpeedP;
      document.getElementById('feelsLikeP').innerHTML = feelsLikeP;
      document.getElementById('lastUpdateP').innerHTML = lastUpdateP;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })
  
    //BHUBANESWAR
    const weatherUrlBh = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Bhubaneswar";
    let pBh = fetch(weatherUrlBh)
    pBh.then(response => response.json())
    .then(dataBh => {
      // Extract the relevant data from the API response
    
      const temperatureBhC = dataBh.current.temp_c;
      const temperatureBhF = dataBh.current.temp_f;
      const windSpeedBh = dataBh.current.wind_kph;
      const feelsLikeBh = dataBh.current.feelslike_c;
      const lastUpdateBh = dataBh.current.last_updated;
    
      //cityName.innerHTML = dataC.location.name;
      console.log(dataBh);
      console.log(weatherUrlBh);
      // Display the weather data on the page
      document.getElementById('temperatureBhC').innerHTML = temperatureBhC;
      document.getElementById('temperatureBhF').innerHTML = temperatureBhF;
      document.getElementById('windSpeedBh').innerHTML = windSpeedBh;
      document.getElementById('feelsLikeBh').innerHTML = feelsLikeBh;
      document.getElementById('lastUpdateBh').innerHTML = lastUpdateBh;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    //AHMEDABAD
    const weatherUrlAh = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Ahmedabad";
    let pAh = fetch(weatherUrlAh)
    pAh.then(response => response.json())
    .then(dataAh => {
      // Extract the relevant data from the API response
    
      const temperatureAhC = dataAh.current.temp_c;
      const temperatureAhF = dataAh.current.temp_f;
      const windSpeedAh = dataAh.current.wind_kph;
      const feelsLikeAh = dataAh.current.feelslike_c;
      const lastUpdateAh = dataAh.current.last_updated;
    
      //cityName.innerHTML = dataC.location.name;
      console.log(dataAh);
      console.log(weatherUrlAh);
      // Display the weather data on the page
      document.getElementById('temperatureAhC').innerHTML = temperatureAhC;
      document.getElementById('temperatureAhF').innerHTML = temperatureAhF;
      document.getElementById('windSpeedAh').innerHTML = windSpeedAh;
      document.getElementById('feelsLikeAh').innerHTML = feelsLikeAh;
      document.getElementById('lastUpdateAh').innerHTML = lastUpdateAh;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })

    //LAKHNOW
    const weatherUrlLk = 'https://api.weatherapi.com/v1/current.json?key='+apiKey+"&q=Lucknow";
    let pLk = fetch(weatherUrlLk)
    pLk.then(response => response.json())
    .then(dataLk => {
      // Extract the relevant data from the API response
    
      const temperatureLkC = dataLk.current.temp_c;
      const temperatureLkF = dataLk.current.temp_f;
      const windSpeedLk = dataLk.current.wind_kph;
      const feelsLikeLk = dataLk.current.feelslike_c;
      const lastUpdateLk = dataLk.current.last_updated;
    
      //cityName.innerHTML = dataC.location.name;
      console.log(dataLk);
      console.log(weatherUrlLk);
      // Display the weather data on the page
      document.getElementById('temperatureLkC').innerHTML = temperatureLkC;
      document.getElementById('temperatureLkF').innerHTML = temperatureLkF;
      document.getElementById('windSpeedLk').innerHTML = windSpeedLk;
      document.getElementById('feelsLikeLk').innerHTML = feelsLikeLk;
      document.getElementById('lastUpdateLk').innerHTML = lastUpdateLk;
      //document.getElementById('wind-speed').innerHTML = windSpeed;
    })
    





    kol.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,500)
    })
    mum.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,600)
    })
    del.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,700)
    })
    ban.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,800)
    })
    chen.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,800)
    })
    pun.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,900)
    })
    bhu.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,900)
    })
    ahm.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,1000)
    })
    lakh.addEventListener("click", (e)=>{
      e.preventDefault()
      window.scrollTo(0,1000)
    })
    
