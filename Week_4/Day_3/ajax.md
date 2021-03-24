# AJAX with jQuery

jQuery allows you to make an XMLHttpRequest via AJAX so that you can exchange data with a server and update parts of the web page without reloading the page.

```
$.ajax({
  url: `api.somewebsite.com/data/weather?q=${cityName}&apiKey=${apiKey}`,
  method: "GET"
  // data: ""
})
.then(res => {

  const temp = res.main.temp;
  const name = res.name
  const desc = res.weather[0].description

  // Construct the component using a helper function
  const generatedWeatherComponent = createAWeatherComp(name, temp, desc)
  
  $(".weather").append(generatedWeatherComponent)

})
.catch(err => console.log(err))
.always(() => console.log("This always runs!") // jQuery uses always instead of finally
```

You can even put the AJAX request in its own function:
```
const fetchWeatherData = (cityName, callbackWhenDone) => {

  $(".weather").append("LOADING");

  $.ajax({
      ...
  })
  .then(res => {
    $(".weather").empty();
    callbackWhenDone(res)
  })
  .catch(err => console.log(err))
  .finally(...)
}

const handleSubmit = event => {
  event.preventDefault();
  console.log(event)
}

$(document).ready(() => {

  fetchWeatherData("Toronto", helperParserFunction)

  $("form").on("submit", handleSubmit)

})
```

To empty out an element before adding things to it:
```
$(".weather").empty();
```

To store search history in the backend, make a post request to your server:
```
const sendCityToHistoryRoute = () => {
  const city = $("input").val();
  $.ajax({
    url: "/history",
    method: "POST",
    data: {city: city}
  })
  .then(res => console.log("sent to history properly"));
  .catch(err => console.log(err))
}
```

You can call this function as you fetch data:
```
const handleSubmit = event => {
  event.preventDefault();
  console.log(event)
  const cityName = $("input").val()
  sendCityToHistoryRoute() // Saves to history in memory!
  fetchWeatherData(cityName, helperParserFunction)
}
```

This information persists even if the page is reloaded.