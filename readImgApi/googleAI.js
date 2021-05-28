process.env['GOOGLE_APPLICATION_CREDENTIALS'] = `${__dirname}/../credentials/br-schedule-app-1608680523283-0f33d161de05.json`;
async function readImgText(img_path) {
  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient();
  const [result] = await client.textDetection(img_path);
  const detections = result.textAnnotations;
  return detections
}

module.exports.googleRead = readImgText;
