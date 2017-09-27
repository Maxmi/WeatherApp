const request = require('request');
const city = process.argv[2];
const apiKey = 'c4c4b7ed0d5e523823fa478af05d2052';


const getWeather = (callback) => {

  request({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, `It's ${body.main.temp} degrees F in ${body.name}`);
      } else {
        callback('Unable to fetch weather data')
      }
  })
};

module.exports = {
  getWeather
};
