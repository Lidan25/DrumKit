const allDrum = document.querySelectorAll(`.drum`).length;
let drumAudio;
for(let i = 0; i < allDrum; i++ ){
    document.querySelectorAll(`.drum`)[i].addEventListener("click",function(){
        // This pada di bawah ini hanya bisa di akses di dalam EventListener
        const buttonTrigger = this.innerHTML 
        drumKit(buttonTrigger)
        
    })
}

//  CARA PENULISAN DENGAN CARA LAIN MENGGUNAKAN FOR EACH
const allButton = document.querySelectorAll('.drum').forEach(buttons => buttons.addEventListener("keypress",function(event){
    const keypress = event.key
    console.log(`tombol ${event.key} telah di tekan`)
    drumKit(keypress)
}))

const drumKit = (key) =>{
    switch (key) {
      case "w":
        const tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        console.log(this.innerHTML);
        break;
      case "a":
        const tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        console.log(this.innerHTML);
        break;
      case "s":
        const tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        console.log(this.innerHTML);
        break;
      case "d":
        const tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        console.log(this.innerHTML);
        break;
      case "j":
        const snare = new Audio("sounds/snare.mp3");
        snare.play();
        console.log(this.innerHTML);
        break;
      case "k":
        const crash = new Audio("sounds/crash.mp3");
        crash.play();
        console.log(this.innerHTML);
        break;
      case "l":
        const kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        console.log(this.innerHTML);
        break;

      default:
        console.log(buttonTrigger);
    }
}


