const AWS = require('aws-sdk')
const uuid = require('uuid/v1')
const function_form = require('./function_form')

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

let docClient = new AWS.DynamoDB.DocumentClient();
//Cac ham lay du lieu
function layCauHoiTaoBang(monhoc,res)// lay tat ca cau hoi thuoc mon hoc da chon de tao de thi
{
    var param1 = { //let
        TableName: "NganHangCauHoi",
        //KeyConditionExpression: "#mh = :xxxx",
        //ExpressionAttributeNames:{
            //"#mh": "monhoc"
        //},
        //ExpressionAttributeValues: {
            //":xxxx": "Tiếng Anh"
        //}
        FilterExpression: 'contains(#name , :n)',
        ExpressionAttributeNames: { "#name": "monhoc" },
        ExpressionAttributeValues: { ":n": monhoc}
    };
    let queryObject = {};
    docClient.scan(param1,(err, data)=> {//function(err,data)
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            queryObject.err = err;
        } else {
            console.log("Query succeeded.");
            queryObject.data =data;
            //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
            //data.Items.forEach(function(item) {
                //console.log(" -", item.monhoc + ": " + item.macauhoi + ":" + item.cauhoi);
            
        };
    });
    
    
    //docClient.scan(param1,(err,data)=>{ //query
        //if(err)
        //{
           // console.log(err)
            //queryObject.err = err;
        //}
       // else{
           // queryObject.data = data;
        //}
        //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
    //})
}

function layCauHoiThuocDeThi(made,res){ //Lay cac cau hoi thuoc de thi de thi trac nghiem
    var params = {
        TableName : "CauHoiThuocDe",
        KeyConditionExpression: "#md = :xxx",
        ExpressionAttributeNames:{
                "#md": "made"
        },
        ExpressionAttributeValues: {
               ":xxx": made
        }
    };
    let queryObject1 = {};
    docClient.query(params,(err, data) =>{
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            queryObject1.err = err
        } else {
            console.log("Query succeeded.");
            queryObject1.data = data;
            // data.Items.forEach(function(item) {
                 // console.log(" -", item.made + ": " + item.macauhoi + ":" + item.cauhoi);
                 // console.log("+", item.dapanA);
                 // console.log("+", item.dapanB);
                 // console.log("+", item.dapanC);
                 // console.log("+", item.dapanD)
            // });
        }
    })

    
}




module.exports = {
   layCauHoiTaoBang: layCauHoiTaoBang,
   layCauHoiThuocDeThi: layCauHoiThuocDeThi
}

