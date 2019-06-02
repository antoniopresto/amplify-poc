const AWS = require("aws-sdk");
const region = process.env.REGION;
const storageTeststorageName = process.env.STORAGE_TESTSTORAGE_NAME;
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const ddb_table_name = storageTeststorageName;

AWS.config.update({ region: region });

exports.handler = function(event, context) {
  console.log("len: " + Object.keys(event).length, event.arguments);
  if (Object.keys(event).length < 0) return;

  ddb.putItem(
    {
      TableName: ddb_table_name,
      Item: AWS.DynamoDB.Converter.input(event.arguments)
    },
    function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    }
  );
};
