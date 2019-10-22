const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

let docClient = new AWS.DynamoDB.DocumentClient();
console.log('Start importing');
//add du lieu cau hoi dung de thuc hien tao de
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

// add du lieu tai khoan dung de thuc hien cac chuc nang dang nhap, dang ky, them sua xoa tai khoan, sua thong tin ca nhan
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
// hien thi cac de thi thuoc 1 nguoi ra de, load de thi theo mon hoc
let alldethi = JSON.parse(fs.readFileSync(__dirname + '/dethi.json','utf-8'));
alldethi.forEach((dethi)=>{
    let param2 = {
        TableName: "DeThi",
        Item: {
            "made": dethi.made,
            "tieude": dethi.tieude,
            "nguoirade":{
                "manguoirade": dethi.nguoirade.manguoirade,
                "hoten": dethi.nguoirade.hoten
            },
            "monhoc": dethi.monhoc
            }
    };
    docClient.put(param2, (err, data) => {
        if (err) {
            console.error(`Unable to add de thi ${dethi.tieude}, ${JSON.stringify(err, null, 2)}`);
        } else {
            console.log(`De thi created ${dethi.tieude}`);
        }
    });
});

//  hien thi danh sach bai thi cua 1 thi sinh va co the truy suat ket qua la so cau dung, co the lay tat ca bai thuoc 1 de thi
let allbaithi = JSON.parse(fs.readFileSync(__dirname + '/baithi.json','utf-8'));
allbaithi.forEach((baithi)=>{
    let param3 = {
        TableName: "BaiThi",
        Item: {
            "mabaithi": baithi.mabaithi,
            "tenbaithi": baithi.tenbaithi, 
            "thisinh": {
                "mathisinh": baithi.thisinh.mathisinh,
                "hoten": baithi.thisinh.hoten
            },
            "dethi":{
                "made": baithi.dethi.made
            },
            "socaudung": baithi.socaudung
        }
    };
    docClient.put(param3, (err, data) => {
        if (err) {
            console.error(`Unable to add bai thi ${baithi.tenbaithi}, ${JSON.stringify(err, null, 2)}`);
        } else {
            console.log(`Bai thi created ${baithi.tenbaithi}`);
        }
    });
});

// cau hoi thuoc de thi dung de load len thuc hien viec thi trac nghiem theo de
let allcauhoithuocde = JSON.parse(fs.readFileSync(__dirname + '/cauhoithuocde.json','utf-8'));
allcauhoithuocde.forEach((cauhoithuocde)=>{
    let param4 = {
        TableName: "CauHoiThuocDe",
        Item: {
            "macauhoi": cauhoithuocde.mabaithi,
            "dethi":{
                "made": cauhoithuocde.dethi.made,
                "monhoc": cauhoithuocde.dethi.monhoc,
                "tieude": cauhoithuocde.dethi.tieude
            },
            "cauhoi": cauhoithuocde.cauhoi,
            "dapanA": cauhoithuocde.dapanA,
            "dapanB": cauhoithuocde.dapanB,
            "dapanC": cauhoithuocde.dapanC,
            "dapanD": cauhoithuocde.dapanD
        }
    };
    docClient.put(param4, (err, data) => {
        if (err) {
            console.error(`Unable to add cau hoi thuoc de ${cauhoithuocde.dethi.tieude}, ${JSON.stringify(err, null, 2)}`);
        } else {
            console.log(`Cau hoi thuoc de created ${cauhoithuocde.dethi.tieude}`);
        }
    });
});

// cau hoi thuoc bai thi de thuc hien xem ket qua cua bai thi cua 1 thi sinh
