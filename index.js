process.env['GOOGLE_APPLICATION_CREDENTIALS'] = `${__dirname}/credentials/br-schedule-app-1608680523283-0f33d161de05.json`;
const img_path = `${__dirname}/photos/test_1.jpg`
async function readImgText(img_path) {
  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient();
  const [result] = await client.textDetection(img_path);
  const detections = result.textAnnotations;
  return detections
}

module.exports.getText = readImgText;
