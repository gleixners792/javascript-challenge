// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the panel-body class
var formGet = d3.select("form");

// Create event handlers 
button.on("click", DateEntered);
formGet.on("submit", DateEntered);

// Complete the event handler function for the form
function DateEntered() {
  console.log("Something was clicked");
  console.log(d3.event.target);

  // Prevent the page from refreshing so details remain on the screen.
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log("Input Value Next");
  console.log(inputValue);

  var filteredData = tableData.filter(date_Data => date_Data.datetime === inputValue);

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