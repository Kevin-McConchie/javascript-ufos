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

// // Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// // Complete the event handler function for the form
function runEnter() {

// // Get the value property of the input elements and set all text to lowercase
var dateTime = d3.select("#datetime").property("value");

// var country = d3.select("#country").property("value").toLowerCase();

// var state = d3.select("#state").property("value").toLowerCase();

// var city = d3.select("#city").property("value").toLowerCase();

// var shape = d3.select("#shape").property("value").toLowerCase();



// create search result variable for each field

if (dateTime)
var searchResult = tableData.filter(dateTime => dateTime.datetime === inputValue);


console.log(searchResult);



// Clear the table for search results
tbody.html("");

// // for loop to repopulate table with search results
// searchResult.forEach(function(result) {
//   console.log(result);
//   var row = tbody.append("tr");
//   Object.entries(result).forEach(function([key, value]) { console.log('key')
//   console.log(key, value);
//     // Append a cell to the row for each value
//     // in the sighting table object
//   var cell = row.append("td");
//   cell.text(value);
//   });
// });
}
