const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

let docClient = new AWS.DynamoDB.DocumentClient();
console.log('Start importing');
//add du lieu cau hoi
let allcauhoi = JSON.parse(fs.readFileSync(__dirname + '/nganhangcauhoi.json','utf-8'));
allcauhoi.forEach((nganhangcauhoi)=>{
    let param = {
        TableName: "NganHangCauHoi",
        Item: {
            "macauhoi": nganhangcauhoi.macauhoi,
            "monhoc": nganhangcauhoi.monhoc,
            "cauhoi": nganhangcauhoi.cauhoi,
            "dapanA": nganhangcauhoi.dapanA,
            "dapanB": nganhangcauhoi.dapanB,
            "dapanC": nganhangcauhoi.dapanC,
            "dapanD": nganhangcauhoi.dapanD,
            "dapandung": nganhangcauhoi.dapandung
        }
    };
    docClient.put(param, (err, data) => {
        if (err) {
            console.error(`Unable to add cau hoi ${nganhangcauhoi.macauhoi}, ${JSON.stringify(err, null, 2)}`);
        } else {
            console.log(`Cau hoi created ${nganhangcauhoi.macauhoi}`);
        }
    });
});

// add du lieu tai khoan
let alltaikhoan = JSON.parse(fs.readFileSync(__dirname + '/taikhoan.json','utf-8'));
alltaikhoan.forEach((taikhoan)=>{
    let param1 = {
        TableName: "TaiKhoan",
        Item:{
            "taikhoan": taikhoan.taikhoan,
            "matkhau": taikhoan.matkhau,
            "loai": taikhoan.loai,
            "admin": {
                "maAdmin": taikhoan.admin.maAdmin
            },
            "nguoirade":{
                "manguoirade": taikhoan.nguoirade.manguoirade,
                "hoten": taikhoan.nguoirade.hoten,
                "namsinh": taikhoan.nguoirade.namsinh,
                "sodienthoai": taikhoan.nguoirade.sodienthoai,
                "email": taikhoan.nguoirade.email
            },
            "thisinh":{
                "mathisinh": taikhoan.thisinh.mathisinh,
                "hoten": taikhoan.thisinh.hoten,
                "namsinh": taikhoan.thisinh.namsinh,
                "sodienthoai": taikhoan.thisinh.sodienthoai,
                "email": taikhoan.thisinh.email
            }
        }
    };
    docClient.put(param1, (err, data) => {
        if (err) {
            console.error(`Unable to add tai khoan ${taikhoan.loai}, ${JSON.stringify(err, null, 2)}`);
        } else {
            console.log(`Tai khoan created ${taikhoan.loai}`);
        }
    });
});

