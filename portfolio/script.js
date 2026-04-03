// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Dark / Light Mode
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: {
            enable: true,
            distance: 150
        }
    }
});

const cursor=document.querySelector(".cursor");
document.querySelector("cursor");
document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientXX+"px";
    cursor.style.top=e.clientYY+"px";
})
window.addEventListener("load",()=>{
    document.body.style.opacity="1";
});