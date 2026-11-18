function back() {
    window.location.href="index.html"
}

// AI assisted (completed independently)
function updateTime() {
    let ms = new Date().getMilliseconds();

    // Returned result will be 0 to 39
    // i.e. the FPS is 40

    let frame = Math.floor(ms / 25);
    let headpage = document.querySelector("#headpage");
    let destination = document.querySelector("#destination");
    
    if(frame < 20) {
        headpage.style.color = "var(--one)";
        destination.style.color = "var(--one)";
    } else {
        headpage.style.color = "var(--two)";
        destination.style.color = "var(--two)";
    }
}

setInterval(updateTime, 25); 
