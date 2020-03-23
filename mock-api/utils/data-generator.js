const randomData = {
    "users": [],
    "tasks": [],
    "notifications": [],
    "files": [],
    "contents": [],
    "accessToken": '',
    "refreshToken": '',
};

function generateRandomData() {
    generateUsers(100);
    generateRandomTasks(10);
    generateRandomNotifications(10);
    generateRandomFilesAndContents(15);
    generateRandomToken();
    return randomData;
}

function generateUsers(amount) {
    for( let i = 0; i < amount; i++) {
        randomData.users.push({
            "name" : generateRandomString(),
            "email" : generateRandomEmail(),
            "password" : generateRandomString(),
            "avatar" : generateRandomString(),
            "role" : generateRandomRole().name,
        });
    }
}

function generateRandomString() {
    return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}

function generateRandomEmail() {
    const domains = ['@mail.ru', '@yandex.ru' , '@htc-cs.ru' , '@gmail.com' , '@rambler.ru' , '@yahoo.ru'];
    const randomDomain = domains[Math.floor(Math.random()*6)];

    return Math.random().toString(36).substring(2, 8) + randomDomain;
}

function generateRandomRole() {
    const roles = ['admin', 'manager', 'contentMaker'];
    const randomInt = Math.floor(Math.random()*3);
    const randomRole = roles[randomInt];
    return { id: randomInt + 1, name: randomRole };
}

function generateRandomTasks(amount) {
    for (let i = 0; i < amount; i++) {
        randomData["tasks"].push({
            "name": generateRandomString(),
            "type": generateRandomString(),
            "description": generateRandomString(),
            "author" : getRandomUser().id,
            "executor": getRandomUser().id,
            "dateExpired": generateRandomDateFromNow(),
        });
    }
}

function generateRandomDateFromNow() {
    return (new Date(new Date().getTime() + Math.floor(Math.random() * 1000000000))).toString();
}

function getRandomUser() {
    const randomUserId = Math.floor(Math.random() * (randomData.users.length));
    return { "user": randomData.users[randomUserId].name, "id": randomUserId + 1 };
}

function getRandomTask() {
    const randomTaskId = Math.floor(Math.random() * (randomData.tasks.length));
    return { "task": randomData.tasks[randomTaskId].task, "id": randomTaskId + 1};
}

function generateRandomNotifications(amount) {
    for (let i = 1; i <= amount; i++) {
        randomData.notifications.push({
            "id": i,
            "type": generateRandomString(),
            "date": generateRandomDateFromNow(),
            "message": generateRandomString(),
            "user": {...getRandomUser()},
            "task": {...getRandomTask()},
        });
    }
}

function generateRandomFilesAndContents(amount) {
    const generateRandomFileOrTask = () => {
        return {
            "file": generateRandomString(),
            "task": getRandomTask().id,
        }
    };

    for (let i = 0; i < amount; i++) {
        randomData.files.push(generateRandomFileOrTask());
        randomData.contents.push(generateRandomFileOrTask());
    }
}

function generateRandomToken() {
    randomData.accessToken = generateRandomString();
    randomData.refreshToken = generateRandomString();
}

module.exports = generateRandomData;
