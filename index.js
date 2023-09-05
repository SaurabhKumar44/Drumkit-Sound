var noOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", clickSound);
}

document.addEventListener("keypress", keySound);

function clickSound() {
    // alert("Button is clicked!");
    var innerHtml = this.innerHTML;
    sound(innerHtml);
    animation(innerHtml);
}


function keySound(event) {
    var ky = event.key;
    sound(ky);
    animation(ky);
}

function sound(res) {
    switch (res) {
        case "w":
            var sond = new Audio("sounds/crash.mp3");
            sond.play();
            break;
        case "a":
            var sond1 = new Audio("sounds/kick-bass.mp3");
            sond1.play();
            break;
        case "s":
            var sond2 = new Audio("sounds/snare.mp3");
            sond2.play();
            break;
        case "d":
            var sond3 = new Audio("sounds/tom-1.mp3");
            sond3.play();
            break;
        case "j":
            var sond4 = new Audio("sounds/tom-2.mp3");
            sond4.play();
            break;
        case "k":
            var sond5 = new Audio("sounds/tom-3.mp3");
            sond5.play();
            break;
        case "l":
            var sond6 = new Audio("sounds/tom-1.mp3");
            sond6.play();
            break;
        default:

    }
}

function animation(keym){
    var activeKey = document.querySelector("."+keym);
    activeKey.classList.toggle("pressed");
    setTimeout(function(){
        activeKey.classList.toggle("pressed");
    },300);
}