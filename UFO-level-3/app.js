// from data.js
var tableData = data;
console.log(tableData);

// Reference for tbody
var tbody = d3.select("tbody");

// Function to filter the table rows based on the search term
function filterTable(searchTerm) {
  // Clear the table
  tbody.html("");

  // Filter the tableData based on the search term
  var searchResult = tableData.filter(function (result) {
    for (var key in result) {
      if (result[key].toLowerCase().includes(searchTerm)) {
        return true;
      }
    }
    return false;
  });

  // Repopulate the table with search results
  searchResult.forEach(function (result) {
    var row = tbody.append("tr");
    Object.entries(result).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Select the button
var filterBtn = d3.select("#filter-btn");

// Add event listener to the filter button
filterBtn.on("click", function () {
  // Get the search term entered by the user
  var searchTerm = d3.select("#search").property("value").trim().toLowerCase();

  // Filter the table rows based on the search term
  filterTable(searchTerm);
});

// Add event listener to the form submit event
d3.select("#form").on("submit", function () {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the search term entered by the user
  var searchTerm = d3.select("#search").property("value").trim().toLowerCase();

  // Filter the table rows based on the search term
  filterTable(searchTerm);
});

// Initial population of the table with all data
tableData.forEach(function (result) {
  var row = tbody.append("tr");
  Object.entries(result).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});