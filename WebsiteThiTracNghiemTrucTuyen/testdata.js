var AWS = require("aws-sdk");

AWS.config.update({
  region: "local",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying.");

// var params = { // lay cac cau hoi thuoc 1 de // pass
//     TableName : "CauHoiThuocDe",
//     KeyConditionExpression: "#md = :yyyy",
//     ExpressionAttributeNames:{
//         "#md": "made"
//     },
//     ExpressionAttributeValues: {
//         ":yyyy": "111"
//     }
// };

// docClient.query(params, function(err, data) {
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.made + ": " + item.macauhoi + ":" + item.cauhoi);
//             console.log("+", item.dapanA);
//             console.log("+", item.dapanB);
//             console.log("+", item.dapanC);
//             console.log("+", item.dapanD)
//         });
//     }
// });


// var param1 = { //lay cau hoi thuoc 1 mon //pass
//     TableName: "NganHangCauHoi",
//     FilterExpression: 'contains(#name , :n)',
//     ExpressionAttributeNames: { "#name": "monhoc" },
//     ExpressionAttributeValues: { ":n": "Tin Học"}
// };
// docClient.scan(param1,function(err, data){//function(err,data)
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        
//     } else {
//         console.log("Query succeeded.");
        
//         //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
//         data.Items.forEach(function(item) {
//             console.log(" -", item.monhoc + ": " + item.macauhoi + ":" + item.cauhoi);
//         })
//     };
// });

// var param1 = { //lay de thi thuoc 1 nguoi // pass
//     TableName: "DeThi",
//     FilterExpression: 'contains(#name , :n)',
//     ExpressionAttributeNames: { "#name": "manguoirade" },
//     ExpressionAttributeValues: { ":n": "100001"}
// };
// docClient.scan(param1,function(err, data){//function(err,data)
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.manguoirade + ": " + ":" + item.tieude + "-" + item.made);
//         })
//     };
// });

// var param1 = { //lay bai thi thuoc 1 nguoi //pass
//     TableName: "BaiThi",
//     FilterExpression: 'contains(#name , :n)',
//     ExpressionAttributeNames: { "#name": "mathisinh" },
//     ExpressionAttributeValues: { ":n": "100002"}
// };
// docClient.scan(param1,function(err, data){//function(err,data)
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.mathisinh + ": " + ":"+ item.mabaithi+ "-" + item.tenbaithi);
//         })
//     };
// });

// var param1 = { //lay thong tin thuoc 1 nguoi //pass
//     TableName: "TaiKhoan",
//     FilterExpression: 'contains(#name , :n)',
//     ExpressionAttributeNames: { "#name": "loai" },
//     ExpressionAttributeValues: { ":n": "thí sinh"}
// };
// docClient.scan(param1,function(err, data){
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.loai + ": " + ":" + item.thisinh.hoten);
//             console.log("+", item.thisinh.mathisinh + ":" + item.thisinh.namsinh + ":" + item.thisinh.sodienthoai + ":" + item.thisinh.email)
//         })
//     };
// });


// var param1 = { //lay cac de thi theo mon hoc /pass
//     TableName: "DeThi",
//     FilterExpression: 'contains(#name , :n)',
//     ExpressionAttributeNames: { "#name": "monhoc" },
//     ExpressionAttributeValues: { ":n": "Tin Học"}
// };
// docClient.scan(param1,function(err, data){//function(err,data)
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.monhoc + ": " + item.made + ":" + item.tieude);
//         })
//     };
// });

// var params = { // Lay thong tin tai khoan, dang nhap // pass
//     TableName : "TaiKhoan",
//     KeyConditionExpression: "#tk = :yyyy ",
//     ExpressionAttributeNames:{
//         "#tk": "taikhoan"
        
//     },
//     ExpressionAttributeValues: {
//         ":yyyy": "nguoirade" 
        
//     }
// };

// docClient.query(params, function(err, data) {
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.taikhoan+ ": " + item.matkhau + ":");
//             if(item.loai === "thí sinh")
//             {
//                 console.log(item.thisinh.hoten);
//             }else{
//                 console.log(item.nguoirade.hoten)
//             }

            
//         });
//     }
// });

var param1 = { //lay tat ca de tren giao dien homepage //pass
    TableName: "DeThi",
};
docClient.scan(param1,function(err, data){
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.made + ": " + item.tieude)
        })
    };
});
