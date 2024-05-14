function toggleElementVisibility1() {
    let x = document.getElementById('footer__mobileView1')
    if (x.style.dispaly == "block") {
        document.getElementById("changeIcon1").classList.add('footer-top');
        document.getElementById("changeIcon1").classList.remove('footer-bottom');
        if ( document.getElementById("changeIcon1").classList.contains('footer-bottom'));
        document.getElementById("changeIcon1").classList.toggle('footer-top"');

    }
}