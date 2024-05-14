function toggleElementVisibility1() {
    let x = document.getElementById("footer__mobileView1");
    if (x.style.display === "block") {
        document.getElementById("changeIcon1").classList.add('footer-top');
        document.getElementById("changeIcon1").classList.remove('footer-bottom');
        if ( document.getElementById("changeIcon1").classList.contains('footer-bottom') )
        document.getElementById("changeIcon1").classList.toggle('footer-top');

        x.style.display = "none";
    } else {
        document.getElementById("changeIcon1").classList.add('footer-bottom');
        document.getElementById("changeIcon1").classList.remove('footer-top');
        if ( document.getElementById("changeIcon1").classList.contains('footer-top') )
        document.getElementById("changeIcon1").classList.toggle('footer-bottom');

        x.style.display = "block";
    }
}

function toggleElementVisibility2() {
    let x = document.getElementById("footer__mobileView2");
    if (x.style.display === "block") {
        document.getElementById("changeIcon2").classList.add('footer-top');
        document.getElementById("changeIcon2").classList.remove('footer-bottom');
        if ( document.getElementById("changeIcon2").classList.contains('footer-bottom') )
        document.getElementById("changeIcon2").classList.toggle('footer-top');

        x.style.display = "none";
    } else {
        document.getElementById("changeIcon2").classList.add('footer-bottom');
        document.getElementById("changeIcon2").classList.remove('footer-top');
        if ( document.getElementById("changeIcon2").classList.contains('footer-top') )
        document.getElementById("changeIcon2").classList.toggle('footer-bottom');

        x.style.display = "block";
    }
}

function toggleElementVisibility3() {
    let x = document.getElementById("footer__mobileView3");
    if (x.style.display === "block") {
        document.getElementById("changeIcon3").classList.add('footer-top');
        document.getElementById("changeIcon3").classList.remove('footer-bottom');
        if ( document.getElementById("changeIcon3").classList.contains('footer-bottom') )
        document.getElementById("changeIcon3").classList.toggle('footer-top');

        x.style.display = "none";
    } else {
        document.getElementById("changeIcon3").classList.add('footer-bottom');
        document.getElementById("changeIcon3").classList.remove('footer-top');
        if ( document.getElementById("changeIcon3").classList.contains('footer-top') )
        document.getElementById("changeIcon3").classList.toggle('footer-bottom');

        x.style.display = "block";
    }
}

function toggleElementVisibility4() {
    let x = document.getElementById("footer__mobileView4");
    if (x.style.display === "block") {
        document.getElementById("changeIcon4").classList.add('footer-top');
        document.getElementById("changeIcon4").classList.remove('footer-bottom');
        if ( document.getElementById("changeIcon4").classList.contains('footer-bottom') )
        document.getElementById("changeIcon4").classList.toggle('footer-top');

        x.style.display = "none";
    } else {
        document.getElementById("changeIcon4").classList.add('footer-bottom');
        document.getElementById("changeIcon4").classList.remove('footer-top');
        if ( document.getElementById("changeIcon4").classList.contains('footer-top') )
        document.getElementById("changeIcon4").classList.toggle('footer-bottom');

        x.style.display = "block";
    }
}
