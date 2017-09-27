const http = require('http');
const city = process.argv.slice(2).join('%20');
const apiKey = 'c4c4b7ed0d5e523823fa478af05d2052';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


  function getWeather() {
    http.get(url, res => {
      let body = '';
      res.on('data', data => {
        body += data;
      });
      res.on('end', () => {
        body = JSON.parse(body);
        if(body.message === "Nothing to geocode") {
          console.log('Please enter a city');
          return;
        }
        console.log(`It's ${body.main.temp} degrees F in ${body.name}`);
      })
    })
  }

  module.exports = {
    getWeather
  };
