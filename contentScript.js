function getVideo() {
    let video = document.querySelector("video.video-stream");
    if (video !== undefined) {
        video.autoplay = false;
        video.loop = false
        return video
    } else {
        throw Error("No Video")
    }
}

function checkPlayerTime() {
    let duration = video.duration;
    let currentTime = video.currentTime;
    console.log(currentTime, duration);
    if (currentTime + 0.1 >= duration) {
        let button = document.querySelector("#navigation-button-down button");
        button.click()
    }
}

let video = getVideo()
setInterval(checkPlayerTime, 100)