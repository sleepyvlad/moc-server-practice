const fs = require('fs');
const randomData = {
    "users": [],
};

function generateRandomData() {
    generateUsers(100);
    fs.writeFile('./db/db.json', JSON.stringify(randomData), () => {
        console.log('random data generated');
    });
}

function generateUsers(amount) {
    for( let i = 0; i < amount; i++) {
        randomData.users.push({
            "name" : generateRandomString(),
            "email" : generateRandomEmail(),
            "password" : generateRandomString(),
            "avatar" : generateRandomString(),
            "role" : generateRandomRole(),
        });
    }
}

function generateRandomString() {
    return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}

function generateRandomEmail() {
    const domens = ['@mail.ru', '@yandex.ru' , '@htc-cs.ru' , '@gmail.com' , '@rambler.ru' , '@yahoo.ru'];
    const randomDomen = domens[Math.floor(Math.random()*6)];

    return Math.random().toString(36).substring(2, 8) + randomDomen;
}

function generateRandomRole() {
    const roles = ['admin', 'manager', 'contentMaker'];
    const randomRole = roles[Math.floor(Math.random()*3)];
    return randomRole;
}

module.exports = generateRandomData;
