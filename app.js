const body = document.getElementById("body")

const say = document.getElementById("say");
const nat = document.getElementById("nat")
const yu = document.getElementById("yu")
const mon = document.getElementById("mon")

const yes = document.getElementById("yes")
const yesSound = document.createElement("audio")
yesSound.src = "sound/select.ogg";
body.appendChild(yesSound)

const audioMon = document.getElementById("audio-mon");
const audioSay = document.getElementById("audio-say");
const audioNat = document.getElementById("audio-nat");
const audioYu = document.getElementById("audio-yu")
const audioNeutral = document.getElementById("audio-neutral")

yes.addEventListener("click", ()=>{
    yes.classList.add("hidden")
    yesSound.play()
    audioNeutral.play()

    nat.classList.remove("hidden")
    yu.classList.remove("hidden")
    mon.classList.remove("hidden")
    say.classList.remove("hidden")
})



nat.addEventListener("click", ()=>{
    if (audioNat.muted == true) audioNat.muted = false;
    else audioNat.muted = true;
    audioNeutral.muted = true
    audioNat.play();
    audioNat.currentTime = audioNeutral.currentTime;
})
yu.addEventListener("click", ()=>{
    if (audioYu.muted == true) audioYu.muted = false;
    else audioYu.muted = true;
    audioNeutral.muted = true
    audioYu.play();
    audioYu.currentTime = audioNeutral.currentTime;
});

mon.addEventListener("click", () => {
    if (audioMon.muted == true) audioMon.muted = false;
    else audioMon.muted = true;
    audioNeutral.muted = true
    audioMon.play();
    audioMon.currentTime = audioNeutral.currentTime;
});

say.addEventListener("click", () => {
    if(audioSay.muted == true) audioSay.muted = false;
    else audioSay.muted = true;
    audioNeutral.muted = true
    audioSay.play();
    audioSay.currentTime = audioNeutral.currentTime;
});