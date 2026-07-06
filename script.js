// Smooth Scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// Reveal Animation
const revealElements = document.querySelectorAll(".card,.project,.about-box,.contact-box");

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();

// Typing Effect
const text = "Frontend Developer | BS IT Graduate";
let i = 0;

function typing(){

    if(i < text.length){

        document.querySelector(".hero h2").textContent += text.charAt(i);
        i++;

        setTimeout(typing,70);

    }

}

document.querySelector(".hero h2").textContent = "";

typing();