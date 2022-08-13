// from data.js
var tableData = data;
console.log(tableData);

// reference for tbody
var tbody = d3.select("tbody")

// For loop for each column in data and check data
tableData.forEach(function(sighting){
    console.log(sighting);
});


// Use d3 to update cells text with sightings information
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
      // Append a cell to the row for each value
      // in the sighting table object
    var cell = row.append("td");
    cell.text(value);
    });
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Select the input element and get the raw HTML node
var inputElement = d3.select("#date-form-input");
console.log(inputElement)
// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);

var searchResult = tableData.filter(date => date.datetime === inputValue);

console.log(searchResult);

// Clear the table for search results
tbody.html("");

// for loop to repopulate table with search results
searchResult.forEach(function(result) {
  console.log(result);
  var row = tbody.append("tr");
  Object.entries(result).forEach(function([key, value]) { console.log('key')
  console.log(key, value);
    // Append a cell to the row for each value
    // in the sighting table object
  var cell = row.append("td");
  cell.text(value);
  });
});
}
