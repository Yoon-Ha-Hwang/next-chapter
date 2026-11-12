function updateTime() {
    let ms = new Date().getMilliseconds();

    // Returned result will be 0 to 39
    // i.e. the FPS is 40
    document.body.dataset.time = Math.floor(ms/40);
}

updateTime();
setInterval(updateTime, 0.025); 
