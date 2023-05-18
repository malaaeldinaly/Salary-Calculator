function nightHours() {
  const nightStart = 20;
  const nightEnd = 5;
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  /////
  var endRow = 11;
  ////

  var endShift;
  var startShift;
  for (var i=2; i<=endRow; i++){
    endShift = ss.getRange(i,4).getValue().getHours();
    startShift = ss.getRange(i,3).getValue().getHours();
    var nightHours = 0;
    if (endShift>nightStart)
      nightHours += (endShift-nightStart);
    else if(endShift<=5)
      nightHours += nightEnd + (24-nightStart);
    if (nightHours & startShift>nightStart)
      nightHours -= (startShift-nightStart);
    if(nightHours & nightEnd>endShift)
      nightHours -= (nightEnd-endShift);


    ss.getRange(i,5).setValue(nightHours);
    

    
  }
}
