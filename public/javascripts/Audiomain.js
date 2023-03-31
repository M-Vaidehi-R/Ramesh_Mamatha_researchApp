(() => {

    console.log("Audiomain.js here ..hehe");
    //For Video
    const AplayPauseBtn = document.querySelector(".a-playpause"),
    AstopBtn = document.querySelector(".a-stop"),
    ArewindBtn = document.querySelector(".a-rewind"),
    AforwardBtn = document.querySelector(".a-forward"),
    Atime = document.querySelector(".a-time"),  
    AvolumeUp = document.querySelector(".a-volumeUp"),
    AvolumeDown = document.querySelector(".a-volumeDown"),
    AspeedUp = document.querySelector(".a-speedUp"),
    AspeedDown = document.querySelector(".a-speedDown"),
    Audio_length = document.querySelector("#total_audio_length"),
    
    Audioplayer = document.querySelector("audio"),
    AButtons = document.querySelectorAll("button");
    
    
    let index=0;
    AButtons[index].focus();
    

    //Audio Player

Audioplayer.removeAttribute("controls");
Audioplayer.addEventListener("loadedmetadata", () => {
    const audioDuration = Math.floor(Audioplayer.duration); // get audio duration in seconds
    const minutes = Math.floor(audioDuration / 60);  //getting the minutes
    const seconds = audioDuration % 60;  //remainder
    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`; // format as mm:ss
    
    Audio_length.textContent = `Total duration: ${formattedDuration}`
  });

AplayPauseBtn.onclick = () => {
    if(Audioplayer.paused){
        Audioplayer.play();
        AplayPauseBtn.textContent = "Pause";
    } else {
        Audioplayer.pause();
        AplayPauseBtn.textContent="Resume";
    }
};

AstopBtn.onclick = () => {
    Audioplayer.pause();
    Audioplayer.currentTime = 0;
    AplayPauseBtn.textContent="Play";
}

ArewindBtn.onclick = () => {
    Audioplayer.currentTime -= 5;
};

AforwardBtn.onclick = () => {
    Audioplayer.currentTime +=5;

    if(Audioplayer.currentTime>=Audioplayer.duration||Audioplayer.paused){
    Audioplayer.pause();
    Audioplayer.currentTime=0;
    AplayPauseBtn.textContent="Play";
    }
};

Audioplayer.ontimeupdate=()=> {
    const minutes = Math.floor(Audioplayer.currentTime / 60);
    const seconds = Math.floor(Audioplayer.currentTime - minutes * 60);
    const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
    const secondValue = seconds < 10 ? `0${seconds}` : seconds;
  
    const mediaTime = `${minuteValue}:${secondValue}`;
    Atime.textContent = mediaTime;
}

AvolumeUp.onclick = () => {
    if(Audioplayer.volume < 2){
        Audioplayer.volume += 0.2;
    } else {
        Audioplayer.volume =1;
    }
}

AvolumeDown.onclick = () => {
    if(Audioplayer.volume >0){
        Audioplayer.volume -=0.2;
    }
}

AspeedUp.onclick = () => {
    Audioplayer.playbackRate += 0.5;
}

AspeedDown.onclick = () => {
    Audioplayer.playbackRate -= 0.5;
}

//adding keyboard navigation

document.addEventListener("keydown", (event) =>{
    if(event.key === "ArrowLeft" || event.key === "ArrowUp") {
        index = index === 0 ? AButtons.length - 1 : index - 1;
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        index = index === AButtons.length -1 ? 0 : index +1;
    } else {
        return;
    }

    AButtons[index].focus();
});


})();