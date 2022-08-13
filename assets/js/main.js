let lionSound = document.querySelector(".card-img-1")
    
    lionSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/lion-sound.mp3")
        loadAudio.play()

});

var oneImg = just.animate({

    targets: ".card-img-1",
    duration: 1300,
    web: {
      transform: [
        { offset: 0, value: "scale(1, 1)" },
        { offset: 0.3, value: "scale(1.25, .75)" },
        { offset: 0.4, value: "scale(.75, 1.25)" },
        { offset: 0.5, value: "scale(1.15, .85)" },
        { offset: 0.65, value: "scale(.95, 1.05)" },
        { offset: 0.75, value: "scale(1.05, .95)" },
        { offset: 1, value: "scale(1, 1)" }
      ] 
    } 
});

function oneAnimation() {

    oneImg.play();
    just.tools.player(oneImg);

}

/* ------------------------------------------------------------------------------------------------ */

let butterflySound = document.querySelector(".card-img-2")
    
    butterflySound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/butterfly-sound.mp3")
        loadAudio.play()

});

var twoImg = just.animate({

    targets: ".card-img-2",
    duration: 7500,
    web: {
        x: [20, 0],
        y: [20, 0],
        opacity: [1, 0],
        opacity: [0, 1]
    }
});

function twoAnimation() {

    twoImg.play();
    just.tools.player(twoImg);

}

/* ------------------------------------------------------------------------------------------------ */

let dolphinSound = document.querySelector(".card-img-3")
    
    dolphinSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/dolphin-sound.mp3")
        loadAudio.play()

});

var threeImg = just.animate({

    targets: ".card-img-3",
    duration: 3500,
    web: {
        x: [20, 0],
        y: [20, 0],
        borderTopLeftRadius: [10],
        rotate: [-400,1800]
    }
});

function threeAnimation(){

    threeImg.play();
    just.tools.player(threeImg);

}

/* ------------------------------------------------------------------------------------------------ */

let hummingbirdSound = document.querySelector(".card-img-4")
    
    hummingbirdSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/hummingbird-sound.mp3")
        loadAudio.play()

});

var fourImg = just.animate({

    targets: ".card-img-4",
    duration: 3500,
    web: {
        x: [20, 0],
        y: [10, 0],
        marginLeft: [10,20],
        rotateY: [-1200,900],
    }
});

function fourAnimation(){

    fourImg.play();
    just.tools.player(fourImg);
}

/* ------------------------------------------------------------------------------------------------ */

let cricketSound = document.querySelector(".card-img-5")
    
    cricketSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/cricket-sound.mp3")
        loadAudio.play()

});

var fiveImg = just.animate({

    targets: ".card-img-5",
    duration: 3500,
    web: {
        scale: [4, 3.2, 1.5, 1.2],
        letterSpacing: [20,5]
    }
});

function fiveAnimation(){

    fiveImg.play();
    just.tools.player(fiveImg);

}
/* ------------------------------------------------------------------------------------------------ */

let eagleSound = document.querySelector(".card-img-6")
    
    eagleSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/eagle-sound.mp3")
        loadAudio.play()

});

var sixImg = just.animate({

    targets: ".card-img-6",
    duration: 3500,
    web: {
        transform: [
            'translateX(80px)', 
            'translatey(-90px)',
            'translateX(-80px)',
            'translateY(-5px)'
        ]
    }
});

function sixAnimation(){

    sixImg.play();
    just.tools.player(sixImg);

}
/* ------------------------------------------------------------------------------------------------ */

let batSound = document.querySelector(".card-img-7")
    
    batSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/bat-sound.mp3")
        loadAudio.play()

});

var sevenImg = just.animate({

    targets: ".card-img-7",
    duration: 3500,
    web: {
        rotate: [-20, -2000],
        value: [0, 50],
        rotateX: [80, 0],
        rotateY: [80, 0]
    }
});

function sevenAnimation(){

    sevenImg.play();
    just.tools.player(sevenImg);

}
/* ------------------------------------------------------------------------------------------------ */

let dogSound = document.querySelector(".card-img-8")
    
    dogSound.addEventListener("click", () => {

        let loadAudio = document.createElement("audio")
        loadAudio.setAttribute("src", "assets/sound/dog-sound.mp3")
        loadAudio.play()

});

var eigthImg = just.animate({

    targets: ".card-img-8",
    duration: 3500,
    web: {
        transform: [
           { offset: 0.3, value: "scale(.5, .5)" },
           { offset: 0.4, value: "scale(.5, .5)" },
           { offset: 0.5, value: "scale(.15, .55)" },
           { offset: 1, value: "scale(1, 1)" }
        ]
    }
});

function eigthAnimation(){

    eigthImg.play();
    just.tools.player(eigthImg);

}
/* ------------------------------------------------------------------------------------------------ */

/* var nineImg = just.animate({

    targets: ".card-img-9",
    duration: 3500,
    web: {
        y: [0, 20, 0, 1],
        scale: [2, 
            { offset: 1.5, value: 1.1 }
        ]
    }
});

function nineAnimation(){

    nineImg.play();
    just.tools.player(nineImg);

} */

/* ------------------------------------------------------------------------------------------------ */

/* var tenImg = just.animate({

    targets: ".card-img-10",
    duration: 3500,
    web: {
        transform: [
           { offset: 0.5, value: "scale(1.5, 1.2)" },
           { offset: 0.10, value: "scale(2, 1.2)" },
           { offset: 1.4, value: "scale(1.2, 1.2)"},
           { offset: 1.5, value: "scale(1, 1)" },
           { offset: 1, value: "scale(1, 1)" }
        ]
    }
});

function tenAnimation(){

    tenImg.play();
    just.tools.player(tenImg);

} */