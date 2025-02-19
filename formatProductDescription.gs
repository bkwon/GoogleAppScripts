// used to create web friendly formatting for product descriptions. 
// addresses inconsistencies with source data from suppliers

function formatProductDescriptions() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) { // Skip header row
    var rawDescription = data[i][16]; // Column Q (zero-based index 16)
    if (rawDescription) {
      var formattedDescription = formatForSEO(rawDescription);
      sheet.getRange(i + 1, 18).setValue(formattedDescription); // Column R (zero-based index 17)
    }
  }
}

function formatForSEO(description) {
  // Split by commas, remove extra spaces, and capitalize words appropriately
  var parts = description.split(',').map(part => part.trim());
  
  var title = parts[0] || "";
  var attributes = parts.slice(1).join(', ');
  
  return `<h2>${title}</h2>\n<p>${attributes}.</p>`;
}
