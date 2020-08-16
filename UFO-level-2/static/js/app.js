// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the panel-body class
//var formGet = d3.select("#ufo-li");

// Create event handlers 
button.on("click", DateEntered);
//formGet.on("submit", DateEntered);


// Complete the event handler function for the form
function DateEntered() {
  console.log("Something was clicked");
  console.log(d3.event.target);
  // Prevent the page from refreshing so details remain on the screen.
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDateTimeElement = d3.select("#datetime");
  var inputCityElement = d3.select("#city");
  var inputStateElement = d3.select("#state");
  var inputCountryElement = d3.select("#country");
  var inputShapeElement = d3.select("#shape");

  // Get the value property of the input elements
  var inputDateTime = inputDateTimeElement.property("value");
  var inputCity = inputCityElement.property("value");
  var inputState = inputStateElement.property("value");
  var inputCountry = inputCountryElement.property("value");
  var inputShape = inputShapeElement.property("value");

  console.log(`Input Date--> ${inputDateTime}`);
  console.log(`Input City--> ${inputCity}`);
  console.log(`Input State--> ${inputState}`);
  console.log(`Input Country--> ${inputCountry}`);
  console.log(`Input Shape--> ${inputShape}`);


  // Series of If and Checks to see what data is being requested.

  if (inputDateTime === "") {
    var filteredData = tableData.filter(ufoData => ufoData.datetime);
  }
  else {
    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputDateTime);
  }

  if (inputCity === "") {
    var filteredData = filteredData.filter(ufoData => ufoData.city);
  }
  else {
    var filteredData = filteredData.filter(ufoData => ufoData.city === inputCity);
  }

  if (inputState === "") {
    var filteredData = filteredData.filter(ufoData => ufoData.state);
  }
  else {
    var filteredData = filteredData.filter(ufoData => ufoData.state === inputState);
  }

  if (inputCountry === "") {
    var filteredData = filteredData.filter(ufoData => ufoData.country);
  }
  else {
    var filteredData = filteredData.filter(ufoData => ufoData.country === inputCountry);
  }

  if (inputShape === "") {
    var filteredData = filteredData.filter(ufoData => ufoData.shape);
  }
  else {
    var filteredData = filteredData.filter(ufoData => ufoData.shape === inputShape);
  }

  console.log("Filtered Data Next");
  console.log(filteredData);

  //Clean-up previous data in the html table if it is there.
  tbody.html("");

  //load the HTML table to display data.
  filteredData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}