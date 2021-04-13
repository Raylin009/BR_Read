process.env['GOOGLE_APPLICATION_CREDENTIALS'] = `${__dirname}/credentials/br-schedule-app-1608680523283-0f33d161de05.json`;
const img_path = `${__dirname}/photos/test_1.jpg`
const fs = require('fs')
async function quickstart(img_path) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection(img_path);
  const detections = result.textAnnotations;
  // console.log('Text:');
  // detections.forEach(text => console.log(text.description));
  return detections
}
// quickstart(img_path).then((res) => {
//   console.log(res);
//   const data = new Uint8Array(Buffer.from(JSON.stringify(res)));
//   fs.writeFile(`${__dirname}/exData1.json`,data,'utf8',()=>{console.log('done')});
  
// }).catch(console.log);

module.exports.getText = quickstart;
