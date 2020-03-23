function randomDelay() {
    const randomTimeOut = Math.floor(Math.random() * 6) * 1000;
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, randomTimeOut);
    });
}

module.exports = randomDelay;
