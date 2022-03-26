
window.onload = function () {
    tc = document.getElementById("thumb-infRow").getElementsByClassName("thumbnails-contents")[0];
    tc.scrollLeft = tc.scrollLeftMax / 2;
    changelandingSize();
}
window.onscroll = function () {
    if (window.scrollY == 0) {
        document.getElementById("page-navbar").classList.remove("navbar-fixed");
        document.getElementById("main").classList.remove("main-pad");
    } else {
        document.getElementById("page-navbar").classList.add("navbar-fixed");
        document.getElementById("main").classList.add("main-pad");
    }
}
window.onresize = function () {
    changelandingSize();
}
function changelandingSize() {
    // if (window.innerWidth > 1100) {
    //     document.getElementById("landing-board").classList.remove("lb-fixed-height");
    //     document.getElementById("landing-board").classList.add("lb-fit-height");
    // } else {
    //     document.getElementById("landing-board").classList.add("lb-fixed-height");
    //     
    // }

    if (window.innerWidth > 1100) {
        document.getElementById("landing-img").classList.add("li-width-lg");
        document.getElementById("landing-img").classList.remove("li-width-sm");
        document.getElementById("landing-board").classList.add("bg-landing-board");
    } else {
        document.getElementById("landing-img").classList.remove("li-width-lg");
        document.getElementById("landing-img").classList.add("li-width-sm");
        document.getElementById("landing-board").classList.remove("bg-landing-board");
    }
}
function clickPrev(t) {
    var sc = t.parentElement.parentElement.getElementsByClassName("thumbnails-contents")[0];
    if (sc.scrollLeft > 0)
        sc.scrollLeft -= 310;
    else
        sc.scrollLeft += sc.scrollLeftMax;
}
function clickNext(t) {
    var sc = t.parentElement.parentElement.getElementsByClassName("thumbnails-contents")[0];
    if (sc.scrollLeft < sc.scrollLeftMax)
        sc.scrollLeft += 310;
    else
        sc.scrollLeft = 0;
}

function clickPrevAnimate(t) {
    var sc = t.parentElement.parentElement.getElementsByClassName("thumbnails-contents")[0];
    var pos = 0;
    var scrollTime = parseInt(sc.scrollLeftMax / 100);
    var scroll = sc.scrollLeftMax / 20;
    var id = 0;
    if (sc.scrollLeft > 0)
        id = setInterval(function () {
            if (pos == 15) {
                clearInterval(id);
            } else {
                pos++;
                sc.scrollLeft -= 20;
            }
        }, 5);
    else
        id = setInterval(function () {
            if (pos >= sc.scrollLeftMax) {
                sc.scrollLeft = sc.scrollLeftMax;
                clearInterval(id);
            } else {
                pos += scroll;
                sc.scrollLeft += scroll;
            }
        }, scrollTime);


}
function clickNextAnimate(t) {
    var sc = t.parentElement.parentElement.getElementsByClassName("thumbnails-contents")[0];
    var pos = 0;
    var scrollTime = parseInt(sc.scrollLeftMax / 100);
    var scroll = sc.scrollLeftMax / 20;
    var id = 0;
    if (sc.scrollLeft < sc.scrollLeftMax)
        id = setInterval(function () {
            if (pos == 15) {
                clearInterval(id);
            } else {
                pos++;
                sc.scrollLeft += 20;
            }
        }, 5);
    else
        id = setInterval(function () {
            if (pos >= sc.scrollLeftMax) {
                sc.scrollLeft = 0;
                clearInterval(id);
            } else {
                pos += scroll;
                sc.scrollLeft -= scroll;
            }
        }, scrollTime);
}
function clickPrevInf(t) {
    var tsc = t.parentElement.getElementsByClassName("thumbnails-contents")[0];
    var tc = tsc.getElementsByClassName("thumbnails-image");
    var tc_tmp = tc[tc.length - 1];
    tsc.removeChild(tc_tmp);
    tsc.prepend(tc_tmp);
    tsc.scrollLeft += 310;
    var pos = 0;
    var id = 0;
    id = setInterval(function () {
        if (pos == 15) {
            clearInterval(id);
        } else {
            pos++;
            tsc.scrollLeft -= 20;
        }
    }, 5);
}
function clickNextInf(t) {
    var tsc = t.parentElement.getElementsByClassName("thumbnails-contents")[0];
    var tc = tsc.getElementsByClassName("thumbnails-image");
    var tc_tmp = tc[0];
    tsc.removeChild(tc_tmp);
    tsc.append(tc_tmp);
    tsc.scrollLeft -= 310;
    var pos = 0;
    var id = 0;
    id = setInterval(function () {
        if (pos == 15) {
            clearInterval(id);
        } else {
            pos++;
            tsc.scrollLeft += 20;
        }
    }, 5);
}