// <!--====== Setup and start animation! ========-->
var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    loopCount: Infinity,
  });




// ====================increment code Start======================
var users = 0;
var thumbs = 0;
var bullhorn = 0;
var cloudArrow = 0;

function increment() {
    if (users == 850) {
        // stop when it hits 300
        window.clearInterval(id);
        return;
    }

    users+=10;
    document.getElementById('generatedUsers').innerHTML = Number(users).toLocaleString('en');
}
function incrementu() {
    if (thumbs == 230) {
        // stop when it hits 300
        window.clearInterval(idu);
        return;
    }

    thumbs++;
    document.getElementById('generatedThumbs').innerHTML = Number(thumbs).toLocaleString('en');
}
function incrementb() {
    if (bullhorn == 9450) {
        // stop when it hits 300
        window.clearInterval(idb);
        return;
    }

    bullhorn+=50;
    document.getElementById('generatedBullhorn').innerHTML = Number(bullhorn).toLocaleString('en');
}
function incrementc() {
    if (cloudArrow == 780) {
        // stop when it hits 300
        window.clearInterval(idc);
        return;
    }

    cloudArrow+=5;
    document.getElementById('generatedCloudArrow').innerHTML = Number(cloudArrow).toLocaleString('en');
}

var id = window.setInterval('increment()',10);
var idu = window.setInterval('incrementu()',10);
var idb = window.setInterval('incrementb()',10);
var idc = window.setInterval('incrementc()',10);
// ====================increment code End======================

// =============Page loader code Start===================

var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
    loader.style.display = "none";
});

// =============Page loader code End===================
