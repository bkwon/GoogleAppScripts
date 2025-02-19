// Automates the generation of Metadata for BC Products

function generateProductMetadata() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var columnU = 20; // Column U (Metadata Description)
  var columnV = 21; // Column V (Search Engine Keywords)
  var columnW = 22; // Column W (Meta Keywords)

//  for (var i = 1; i < 5; i++) {
  for (var i = 1; i < data.length; i++) {
    var columnAValue = data[i][0].toString().toLowerCase(); // Convert to lowercase for comparison

    // Skip rows that contain "Image" in Column A
    if (columnAValue.includes("image")) {
      continue;
    }

    // Process only rows where Column A contains "Product"
    if (columnAValue.includes("product")) {
      var rowData = data[i];

      var name = rowData[2] || ""; // Column C (Name)
      var description = rowData[4] || ""; // Column E (Description)
      
      // Excluding Column B (Index 1), Column D (Index 3), and Column G (Index 6)

      var metadataDescription = `This high-quality ${name} is available. ${description}`.trim();
      var searchKeywords = `${name},buy ${name},best ${name},${name} review`;
      var metaKeywords = `${name},discount ${name},top-rated ${name},shop ${name}`;

      sheet.getRange(i + 1, columnU + 1).setValue(metadataDescription);
      sheet.getRange(i + 1, columnV + 1).setValue(searchKeywords);
      sheet.getRange(i + 1, columnW + 1).setValue(metaKeywords);
    }
  }
  Logger.log("Metadata generation completed.");
}
