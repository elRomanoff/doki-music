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

class Doki {
    constructor(audio, node){
        this.audio = audio;
        this.node = node;
        this.node.addEventListener("click", ()=>{
            if(!!this.audio.muted) this.audio.muted = false
            else this.audio.muted = true;
            audioNeutral.muted = true;
            this.audio.play();
            this.audio.currentTime = audioNeutral.currentTime;
            this.node.children[0].classList.toggle("hidden");
            this.node.children[1].classList.toggle("hidden");      
            
            setTimeout(()=> {
                if(this.audio.currentTime != audioNeutral.currentTime) this.audio.currentTime = audioNeutral.currentTime;
            }, 100)

        })
    }
}

let natsuki = new Doki(audioNat, nat)
let yuri = new Doki(audioYu, yu);
let monika = new Doki(audioMon, mon);
let sayori = new Doki(audioSay, say);