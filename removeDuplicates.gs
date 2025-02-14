function removeDuplicates() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var uniqueData = [];
    var seen = new Set();

    for (var i = 0; i < data.length; i++) {
        var row = data[i].join("|");  // Convert row to a string for comparison
        if (!seen.has(row)) {
            uniqueData.push(data[i]);
            seen.add(row);
        }
    }

    sheet.clear(); // Clear old data
    sheet.getRange(1, 1, uniqueData.length, uniqueData[0].length).setValues(uniqueData);
}
