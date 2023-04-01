

    const VideoPlayer = document.querySelector("video"),
    button_cap = document.querySelector(".caption_button"),
    Vtrack = VideoPlayer.querySelector("track");

  let caption_on = false;
  button_cap.onclick = () => {
    if (caption_on) {
        VideoPlayer.textTracks[0].mode = 'hidden';
        caption_on=false;
        button_cap.textContent="Turn CC On";
        console.log("caption off");
      } else {
        VideoPlayer.textTracks[0].mode = 'showing';
        caption_on = 'true';
        button_cap.textContent="Turn CC Off";
        console.log("caption on");
      }
  }



(() => {

console.log("Videomain.js here..hehe");
//For Video
const VplayPauseBtn = document.querySelector(".v-playpause"),
VstopBtn = document.querySelector(".v-stop"),
VrewindBtn = document.querySelector(".v-rewind"),
VforwardBtn = document.querySelector(".v-forward"),
Vtime = document.querySelector(".v-time"),  
VvolumeUp = document.querySelector(".v-volumeUp"),
VvolumeDown = document.querySelector(".v-volumeDown"),
VspeedUp = document.querySelector(".v-speedUp"),
VspeedDown = document.querySelector(".v-speedDown"),

Videoplayer = document.querySelector("video"),
VButtons = document.querySelectorAll("button");



let index=0;
VButtons[index].focus();


//Video Player

Videoplayer.removeAttribute("controls");



VplayPauseBtn.onclick = () => {
    if(Videoplayer.paused){
        Videoplayer.play();
        VplayPauseBtn.textContent = "Pause (p)";
    } else {
        Videoplayer.pause();
        VplayPauseBtn.textContent="Resume (p)";
    }
};

VstopBtn.onclick = () => {
    Videoplayer.pause();
    Videoplayer.currentTime = 0;
    VplayPauseBtn.textContent="Play (p)";
}

VrewindBtn.onclick = () => {
    Videoplayer.currentTime -= 5;
};

VforwardBtn.onclick = () => {
    Videoplayer.currentTime +=5;

    if(Videoplayer.currentTime>=Videoplayer.duration||Videoplayer.paused){
    Videoplayer.pause();
    Videoplayer.currentTime=0;
    VplayPauseBtn.textContent="Play";
    }
};

Videoplayer.ontimeupdate=()=> {
    const minutes = Math.floor(Videoplayer.currentTime / 60);
    const seconds = Math.floor(Videoplayer.currentTime - minutes * 60);
    const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
    const secondValue = seconds < 10 ? `0${seconds}` : seconds;
  
    const mediaTime = `${minuteValue}:${secondValue}`;
    Vtime.textContent = mediaTime;
}

VvolumeUp.onclick = () => {
    if(Videoplayer.volume < 0.9){
        Videoplayer.volume += 0.1;
    } else {
        Videoplayer.volume =1;
    }
}

VvolumeDown.onclick = () => {
    if(Videoplayer.volume >0){
        Videoplayer.volume -=0.1;
    }
}

VspeedUp.onclick = () => {
    Videoplayer.playbackRate += 0.5;
    // if(Videoplayer.playbackRate === 1){
    //     Videoplayer.playbackrate += 0.5;
    // }

    // else if (Videoplayer.playbackRate < 1) {
    //     Videoplayer.playbackrate += .5;
    // }

    // else {
    //     Videoplayer.playbackRate = 1;
    // }
}

VspeedDown.onclick = () => {
    Videoplayer.playbackRate -= 0.5;
}


//adding keyboard shortcuts

document.addEventListener("keydown", function(event){
    if(event.keyCode === 32){
        event.preventDefault();
        VplayPauseBtn.click();
    }
});

// document.addEventListener("keydown", function(event){
//     if(event.keyCode === 39){
//         event.preventDefault();
//         VforwardBtn.click();
//     }
// });

// document.addEventListener("keydown", function(event){
//     if(event.keyCode === 37){
//         event.preventDefault();
//         VrewindBtn.click();
//     }
// });

document.addEventListener("keydown", function(event){
    if(event.keyCode === 27){
        event.preventDefault();
        VstopBtn.click();
    }
});

//adding keyboard navigation

document.addEventListener("keydown", (event) =>{
    if(event.key === "ArrowLeft" || event.key === "ArrowUp") {
        index = index === 0 ? VButtons.length - 1 : index - 1;
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        index = index === VButtons.length -1 ? 0 : index +1;
    } else {
        return;
    }

    VButtons[index].focus();
});


})();


  
  