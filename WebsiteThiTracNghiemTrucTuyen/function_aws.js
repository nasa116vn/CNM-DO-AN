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
        };
    });
}

function layCauHoiThuocDeThi(made,res){ //Lay cac cau hoi thuoc de thi de thi trac nghiem
    var param2 = {
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
    docClient.query(param2,(err, data) =>{
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            queryObject1.err = err
        } else {
            console.log("Query succeeded.");
            queryObject1.data = data;
            //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
        }
    })
}

// function layThongTinTaiKhoan(loai, res) // hien thi thong tin tai khoan
// {
//     var param3 = { //lay thong tin thuoc 1 nguoi
//         TableName: "TaiKhoan",
//         FilterExpression: 'contains(#name , :n)',
//         ExpressionAttributeNames: { "#name": "loai" },
//         ExpressionAttributeValues: { ":n": loai}
//     };
//     let queryObject2 = {};
//     docClient.scan(param3,(err, data)=>{
//         if (err) {
//             console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
//             queryObject2.err = err;
//         } else {
//             console.log("Query succeeded.");
//             queryObject2.data = data;
//             //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
//         };
//     });
// }


function layDeThi(manguoirade, res) // thuc hien load danh sach de thi cua 1 nguoi ra de tren giao dien quan ly de
{
    var param4 = { //lay de thi thuoc 1 nguoi // pass
        TableName: "DeThi",
        FilterExpression: 'contains(#name , :n)',
        ExpressionAttributeNames: { "#name": "manguoirade" },
        ExpressionAttributeValues: { ":n": manguoirade}
    };
    let queryObject3 = {};
    docClient.scan(param4,(err, data)=>{//function(err,data)
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            queryObject3.err = err;
        } else {
            console.log("Query succeeded.");
            queryObject3.data = data;
            //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
        };
    });
}

function layBaiThi(mathisinh,res){ // lay ra cac bai thi cua thi sinh, load cac bai thi trong giao dien xem ket qua
    var param5 = { //lay bai thi thuoc 1 nguoi //pass
        TableName: "BaiThi",
        FilterExpression: 'contains(#name , :n)',
        ExpressionAttributeNames: { "#name": "mathisinh" },
        ExpressionAttributeValues: { ":n": mathisinh}
    };
    let queryObject4 = {};
    docClient.scan(param5,(err, data)=>{//function(err,data)
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            queryObject4.err = err
        } else {
            console.log("Query succeeded.");
            queryObject4.data = data;
            //function_form.listTable(queryObject, res); // chuyen vao cai ham xu ly load cau hoi ben function form
        };
    });
}



// function taoTaiKhoan(body, res){  // them tai khoan
//     const {taikhoan,matkhau,loai,maAdmin, manguoidung,hoten, sodienthoai,email} = body;
//     var param6 = {
//         TableName : "TaiKhoan",
//         ConditionExpression: "attribute_not_exists(taikhoan) OR attribute_not_exists(manguoidung)",
//         if(loai)
//     }
// }

module.exports = {
   layCauHoiTaoBang: layCauHoiTaoBang,
   layCauHoiThuocDeThi: layCauHoiThuocDeThi,
   layThongTinTaiKhoan: layThongTinTaiKhoan,
   layDeThi: layDeThi,
   layBaiThi: layBaiThi
}



