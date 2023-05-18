function netHours() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  /////
  var endRow = 11;
  ////
  
  for (var i = 2; i <= endRow; i++) {
  var workingHours = ss.getRange(i, 6).getValue().toFixed(1);
    if (workingHours <= 4.25)
      ss.getRange(i, 7).setValue(workingHours);
    else if (workingHours <= 5.25)
      ss.getRange(i, 7).setValue(workingHours - 0.25);
    else if (workingHours <= 6.25)
      ss.getRange(i, 7).setValue(workingHours - 0.5);
    else if (workingHours <= 7.25)
      ss.getRange(i, 7).setValue(workingHours - 0.75);
    else if (workingHours <= 10.25)
      ss.getRange(i, 7).setValue(workingHours - 1);
    else if (workingHours <= 12.25)
      ss.getRange(i, 7).setValue(workingHours - 1.25);
    else if (workingHours<=14.25)
      ss.getRange(i,7).setValue(workingHours-1.5)
    /* 
        switch (workingHours) {
          case workingHours < 4.0:
            ss.getRange(i, 7).setValue(4);
            break;
          case workingHours < 5.0:
            ss.getRange(i, 7).setValue(4.75);
            break;
          case workingHours < 6.0:
            ss.getRange(i, 7).setValue(5.5);
            break;
          case "7.0":
            ss.getRange(i, 7).setValue(6.25);
            break;
          case "8.0":
            ss.getRange(i, 7).setValue(7);
          case "9.0":
            ss.getRange(i, 7).setValue(8);
            break;
          case "10.0":
            ss.getRange(i, 7).setValue(9);
            break;
          case "11.":
            ss.getRange(i, 7).setValue(9.75);
            break;
          case "12.0":
            ss.getRange(i, 7).setValue(10.75);
            break;
          default:
            ss.getRange(i, 7).setValue(0);
        }
     */

  }

}
