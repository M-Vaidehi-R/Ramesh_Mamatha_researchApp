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

const audio = document.getElementById("myAudio");
audio.addEventListener("timeupdate", updateCaptions);
function updateCaptions() {
    const captionDiv = document.getElementById("caption");
    const currentTime = audio.currentTime;
    
    // TODO: Add logic to display the appropriate caption based on the current time
    // You can use an array of caption objects, where each object contains a start time, end time, and text
    // Then, loop through the array and check if the current time falls between the start and end times of each caption
    // If it does, display the corresponding text in the captionDiv element
  }

  const captions = [
    { start: 0, end: 3.8, text: "Every big life lesson I've learned" },
    { start: 4, end: 6, text: "how to channel my competitive fire" },
    { start: 6.2, end: 9, text: ", how to be a supportive teammate, or partner," },
    { start: 9.2, end: 14.6, text: "how to focus on what I can control and try to let go of what I can't." },
    { start: 15, end: 19, text: "All of that I've learned through sports." },
    { start: 20, end: 21, text: "My name is Jodie African." },
    { start: 21, end: 23, text: "And I'm the host of a new show called good sport." },
    { start: 23.2, end: 28, text: "It's a podcast about how sports can connect us with one another." },
    { start: 29, end: 32.8, text: "Help us understand the world around us. Help us improve our" },
    { start: 33, end: 37, text: "oh my god, did we make a self help podcast?" },
    { start: 38, end: 41, text: "Well, kinda, because I do think sports can help." },
    { start: 42, end: 46, text: "And this season at least they've helped me answer some questions I've had for a long, long time." },
    { start: 47, end: 54, text: "Like, for instance, why does it feel like every new stadium that gets built leaves people feeling like they got fleeced?" },
    { start: 55, end: 59, text: "Well, it's because those deals are negotiated by people who talk like this." },
    { start: 60, end: 65, text: "What should we do here? Ethically never ever comes up when you're negotiating a stadium deal?" },
    { start: 66, end: 75, text: "Or another question we get into why certain places are really good at producing professional athletes, and what these hot beds can teach us about giving people a fair shot." },
    { start: 76, end: 84, text: "The baseline talent has to be there. And then we go from there. And yes, after that point, we are talking about nurture. And we are talking about belief." },
    { start: 85, end: 94, text: "Before I took on this show, I hosted the 538 politics podcast and 30 for 38 ESPN. So I've thought a lot about how sports and politics mirror each other." },
    { start: 95, end: 104, text: "Like this. I've noticed maybe you have too, that more and more the template for arguing about sports. It's kind of become the template for arguing about everything." },
    { start: 105, end: 111, text: "Just take a word and say it loudly three times in a row. So preposterous, preposterous. Preposterous." },
    { start: 112, end: 118, text: "Another episode this season is about my relationship with sports or no longer playing sports." },
    { start: 119, end: 122, text: "What happens when you can't play at the same level you're used to?" },
    { start: 123, end: 127, text: "Well, I talked to soccer legend Carli Lloyd about how hard it is to hang it up." },
    { start: 128, end: 136, text: "You always have this this image in your mind of how you would like things to play out. And life doesn't always give you exactly what you want." },
    { start: 137, end: 141, text: "Well, it's like sports teaching you one last lesson on the way out." },
    { start: 141.5, end: 143, text: "Exactly." },
    { start: 143.5, end: 145, text: "So that's a taste of good sport." },
    { start: 145.2, end: 150.7, text: "eight episodes, each one on a compelling question that sports can help us explore." },
    { start: 151, end: 155, text: "We'll talk about getting in the zone, the rise of Formula One, lots, lots more." },
    { start: 156, end: 159, text: "And I hope it all adds up to this," },
    { start: 159.2, end: 161, text: "an argument from me to you," },
    { start: 161.2, end: 163, text: "that sports really matter," },
    { start: 163.2, end: 168, text: "that they can change our understanding of the world and ourselves." },
    { start: 168.2, end: 174, text: "And that sports can you know, make for a fun eight part podcast that hopefully you'll listen to." },
    { start: 175, end: 176, text: "That's up to you, I guess." },
    { start: 176.2, end: 180.8, text: "Anyway, that's what we're up to this season on good sports from the TED audio collective." },
    { start: 182, end: 183, text: "See you soon." },
    { start: 184, end: 188, text: "Follow good sport wherever you get your podcasts and on Apple podcasts. You can get good sports ad free and a week early by subscribing to Ted audio collective plus, start your free trial now via the good sport Show page." }
  ];
  
  function updateCaptions() {
    const captionDiv = document.getElementById("caption");
    const currentTime = audio.currentTime;
    
    // Loop through the captions array and check if the current time falls between the start and end times of each caption
    for (let i = 0; i < captions.length; i++) {
      if (currentTime >= captions[i].start && currentTime < captions[i].end) {
        captionDiv.textContent = captions[i].text;
        return;
      }
    }
    
    // If there is no caption for the current time, clear the captionDiv element
    captionDiv.textContent = "";
  }
  
  

    
    
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
        AButtons[index].style.border="5px solid blue";
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        index = index === AButtons.length -1 ? 0 : index +1;
    } else {
        return;
    }

    AButtons[index].focus();
});


})();