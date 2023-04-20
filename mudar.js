function toggleMenu () {
    var menuToggle = document.quer('.toggle');
    var links =document.querySelector('.links');
    menuToggle.classList.toggle('active')
    links.classList.toggle('active')
}

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}