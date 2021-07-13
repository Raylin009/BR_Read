getText function:
  Input: photo URL
  Output: Google Lens API taxDetection result
  Notes: async

05/27/2021
This app is intended to automate the tedius process of manually input the daily onto the daily commincation report

This app is a API that will :
1. takes a photo of the sales data screen from the cash register ipad
2. sends the data to Google Lens API to process
3. configure the returned data to standerized format to be used in the daily communication email

the output data will be an object consist of:
{ Sales, Trafic, Transaction, Conversion, AT, UPT} (Date would be a nice to have)

nice to have
1. dicrease file size to make it run faster
2. return a buffer
3. handle time out and error events

To run this app, run the following command
"node read.js"

07/13/2021
to test functionality, run "node test.js"
it should take the "StoreSales.jpg" in "photos" folder and return a console.log data

