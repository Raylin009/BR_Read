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

* BUG!: there is a error message when test with store test image 1.
    note: after some investigation, the problem comes from the parser function which is hard coded to only handle sotre sales report, not store sales activity. it's a tech debt that future ray need to worry about

So, just to catch up, this is what is going on; I can turn img into data now. The next step would be creating a front end, take in the image somehow, store the photo, parse the photo into data, then return the data. 

idea1 temporay store the img on the client side
pro: easy to impliment
con: scalibility, require larger storage on instance, not a good practice

idea2: write img to a photo hosting service (s3 bucket, flikcker) 
pro: scalibility
con: a little bit harder to impliment (I think)

07/15/2021
So i remember where i left of. i need to build serve the function to the front end. 

okay so... it work!! yahhh!
right now, server/index.js is functioning, what do i mean?
I mean, when I go to Postman, do a GET request with the the params of {str:'${googleArchiveUrl}} on port 3050, it will take the googleArchiveUrl and return the data.
what is the googleArchiveUrl you ask, Well... let me tell you. I added the photo i took of the store sales on the ipad at work, added to the BR read album, go to Google archive album, find the BR read album, right click on the image i want, copy the link and that link is what I have named as "googleArchiveUrl"

okay I get. there is much refindment ahead, but it worked! furthermor, I don't need to find a serveice to host my image, google does it for me! 
GOOD JOB RAY! go get them!

07/18/2021

by the end of this hour, I will be able to upload the url and have it display the data

you need to add body-parser to read the body of a http request

