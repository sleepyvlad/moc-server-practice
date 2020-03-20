function randomDelay(next) {
    const randomTimeOut = Math.floor(Math.random() * 6) * 1000;
    setTimeout(() => next(), randomTimeOut);
}

module.exports = randomDelay;
