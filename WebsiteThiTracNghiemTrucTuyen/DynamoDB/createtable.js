const AWS = require('aws-sdk');

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

let dynamodb = new AWS.DynamoDB();
let params = { // thuc hien chuc nang tao de
    TableName: "NganHangCauHoi",
    KeySchema: [
        { AttributeName: "macauhoi", KeyType: "HASH"},
        { AttributeName: "monhoc", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "macauhoi", AttributeType: "N"},
        { AttributeName: "monhoc", AttributeType: "S"}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

let params1 = { // thuc hien chuc nang thi trac nghiem
    TableName: "CauHoiThuocDe",
    KeySchema: [
        { AttributeName: "made", KeyType: "HASH"},
        { AttributeName: "macauhoi", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "made", AttributeType: "N"},
        { AttributeName: "macauhoi", AttributeType: "N"}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

let params2 = { //thuc hien xem ket qua 
    TableName: "CauHoiThuocBaiThi",
    KeySchema: [
        { AttributeName: "mabaithi", KeyType: "HASH"},
        { AttributeName: "macauhoi", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "mabaithi", AttributeType: "N"},
        { AttributeName: "macauhoi", AttributeType: "N"}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

let params3 = {  //de thuc hien chuc nang quan ly de, load cac de thuoc 1 nguoi ra de , load de thi theo mon hoc o homepage
    TableName: "DeThi",
    KeySchema: [
        { AttributeName: "made", KeyType: "HASH"},
        { AttributeName: "manguoirade", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "made", AttributeType: "N"},
        { AttributeName: "manguoirade", AttributeType: "N"},
        { AttributeName: "monhoc", AttributeType: "S"}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    },
    LocalSecondaryIndexes: [{
        IndexName: "MonHocIndex",
        KeySchema: [
            {
                AttributeName: "made",
                KeyType: "HASH"
            },
            {
                AttributeName: "monhoc",
                KeyType: "RANGE"
            }
        ],
        Projection: {
            ProjectionType: "ALL"
        }
    }]
};

let params4 = {  //de thuc hien load bai thi cua thi sinh, lay tat ca bai thi cua 1 de
    TableName: "BaiThi",
    KeySchema: [
        { AttributeName: "mabaithi", KeyType: "HASH"},
        { AttributeName: "mathisinh", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "mabaithi", AttributeType: "N"},
        { AttributeName: "mathisinh", AttributeType: "N"},
        { AttributeName: "made", AttributeType: "N"}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    },
    LocalSecondaryIndexes: [{
        IndexName: "DeThiIndex",
        KeySchema: [
            {
                AttributeName: "mabaithi",
                KeyType: "HASH"
            },
            {
                AttributeName: "made",
                KeyType: "RANGE"
            }
        ],
        Projection: {
            ProjectionType: "ALL"
        }
    }]
};

let params5 = {  //de thuc hien load bai thi cua thi sinh
    TableName: "TaiKhoan",
    KeySchema: [
        { AttributeName: "taikhoan", KeyType: "HASH"},
        { AttributeName: "loai", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "taikhoan", AttributeType: "S"},
        { AttributeName: "loai", AttributeType: "S"}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};




dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error(`Something went wrong ${JSON.stringify(err, null, 2)}`);
    } else {
        console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});

dynamodb.createTable(params1, (err, data) => {
    if (err) {
        console.error(`Something went wrong ${JSON.stringify(err, null, 2)}`);
    } else {
        console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});

dynamodb.createTable(params2, (err, data) => {
    if (err) {
        console.error(`Something went wrong ${JSON.stringify(err, null, 2)}`);
    } else {
        console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});

dynamodb.createTable(params3, (err, data) => {
    if (err) {
        console.error(`Something went wrong ${JSON.stringify(err, null, 2)}`);
    } else {
        console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});

dynamodb.createTable(params4, (err, data) => {
    if (err) {
        console.error(`Something went wrong ${JSON.stringify(err, null, 2)}`);
    } else {
        console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});

dynamodb.createTable(params5, (err, data) => {
    if (err) {
        console.error(`Something went wrong ${JSON.stringify(err, null, 2)}`);
    } else {
        console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});










