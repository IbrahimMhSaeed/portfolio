document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var navLinks = document.getElementById("navLinks")

        function showMenu(){
            navLinks.style.width = "200px";
        }

        function hideMenu(){
            navLinks.style.width = "0px";
        }