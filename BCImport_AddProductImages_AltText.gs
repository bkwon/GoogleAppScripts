function insertMainProductImg_AltText() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    if (lastRow < 2) return; // Avoid running if there are no data rows to process
  
    var textToInsert = "Image"; // Text to insert in the new row
    var columnAY = 51; // Column 'AY' (Now working with this column instead of 'AK')
    var columnAQ = 43; // Column 'AQ' Image URL (Import)
    var columnAR = 44; // Column 'AR' (Alt Text)
    var columnAS = 45; // Column 'AS'
    var columnAT = 46; // Column 'AT'
    var columnName = 3; // Column 'C' (Name)
    var columnDescription = 17; // Column 'Q' (Description)
    var maxAltTextLength = 255; // Maximum Alt Text length
    
    for (var i = lastRow; i >= 2; i--) { // Start at row 2 to avoid modifying row 1
      var cellValueAY = sheet.getRange(i, columnAY).getValue(); // Get the existing 'AY' value
      
      // **Skip the row if column 'AY' is empty**
      if (!cellValueAY) continue;
  
      var nameValue = sheet.getRange(i, columnName).getValue(); // Get the Name (Column 'C')
      var descValue = sheet.getRange(i, columnDescription).getValue(); // Get the Description (Column 'Q')
  
      // Generate Optimized Alt Text
      var altText = generateOptimizedAltText(nameValue, descValue);
  
      // Truncate Alt Text if it exceeds the max length
      if (altText.length > maxAltTextLength) {
        altText = altText.substring(0, maxAltTextLength - 3) + "..."; // Ensure the Alt Text is within 255 chars
      }
  
      sheet.insertRowAfter(i); // Insert a new row below the current row
      sheet.getRange(i + 1, 1).setValue(textToInsert); // Set "Image" in column 'A'
      sheet.getRange(i + 1, columnAS).setValue(true); // Set 'TRUE' in column 'AS'
      sheet.getRange(i + 1, columnAT).setValue(0); // Set '0' in column 'AT'
      sheet.getRange(i + 1, columnAQ).setValue(cellValueAY); // Move 'AY' value to new row in 'Image URL (Import)'
      sheet.getRange(i, columnAY).setValue(""); // Clear the old value
  
      if (altText) {
        sheet.getRange(i + 1, columnAR).setValue(altText); // Set optimized Alt Text in 'AR'
      }
    }
  }
  
  // Function to generate optimized alt text
  function generateOptimizedAltText(name, description) {
    var altText = "";
    
    if (name && description) {
      altText = `Image of ${name} with ${description}, ideal for various uses.`;
    } else if (name) {
      altText = `Image of ${name}`;
    } else if (description) {
      altText = `Image showing: ${description}`;
    }
    
    return altText;
  }
