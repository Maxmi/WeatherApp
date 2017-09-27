const weather = require('./weather/weather');

weather.getWeather((errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
