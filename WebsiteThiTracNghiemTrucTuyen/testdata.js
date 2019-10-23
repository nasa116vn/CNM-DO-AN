var AWS = require("aws-sdk");

AWS.config.update({
  region: "local",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying.");

var params = {
    TableName : "CauHoiThuocDe",
    KeyConditionExpression: "#md = :yyyy",
    ExpressionAttributeNames:{
        "#md": "made"
    },
    ExpressionAttributeValues: {
        ":yyyy": 111
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.made + ": " + item.macauhoi + ":" + item.cauhoi);
            console.log("+", item.dapanA);
            console.log("+", item.dapanB);
            console.log("+", item.dapanC);
            console.log("+", item.dapanD)
        });
    }
});