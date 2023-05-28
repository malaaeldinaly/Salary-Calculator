# Salary-Calculator
This project contains two scripts, `net-hours.gs` and `night-hours.gs`, which are designed to be used in a Google Sheets spreadsheet to calculate net working hours and night shift hours.

## net-hours.gs
The `net-hours.gs` script calculates the net working hours based on the total working hours recorded in the spreadsheet. The script performs the following actions:
1)	Retrieve the active sheet in the Google Sheets spreadsheet.
2)	Define the `endRow` variable as 11. (Note: You can modify this value according to your specific requirements.)
3)	Iterate through rows 2 to `endRow`.
4)	Retrieve the working hours from column 6 and store it in the workingHours variable.
5)	Based on the value of `workingHours`, deduct specific amounts of hours to calculate the net working hours and update the value in column 7.
		
## night-hours.gs
The `night-hours.gs` script calculates the night shift hours based on the shift start and end times recorded in the spreadsheet. The script performs the following actions:

1)	Define the nightStart and nightEnd variables as 20 and 5, respectively. (Note: You can modify these values to match your night shift timings.)
2)	Retrieve the active sheet in the Google Sheets spreadsheet.
3)	Define the endRow variable as 11. (Note: You can modify this value according to your specific requirements.)
4)	Iterate through rows 2 to endRow.
5)	Retrieve the shift start and end times from columns 3 and 4, respectively.
6)	Calculate the night shift hours by comparing the shift times with the nightStart and nightEnd values and update the value in column 5.

## Usage
1)	Open the Google Sheets spreadsheet where you want to use these scripts.
2)	Click on "Extensions" in the menu bar and select "Apps Script".
3)	In the Apps Script editor, paste the contents of `net-hours.gs` into a new script file named "net-hours.gs".
4)	Repeat the above step for night-hours.gs, creating a new script file named "night-hours.gs".
5)	Save the scripts.
6)	Close the Apps Script editor.
7)	Use the `net-hours` and `night-hours` functions in your Google Sheets spreadsheet to calculate the net working hours and night shift hours, respectively.

Please note that the provided information assumes a basic understanding of Google Apps Script and Google Sheets. Make sure to adjust the script and modify any values according to your specific requirements before using it.
