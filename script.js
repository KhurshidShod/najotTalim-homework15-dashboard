var navbar = document.querySelector("nav");
var close = document.getElementById("close");
var navLinks = document.querySelectorAll(".nav-link");
var overview = document.getElementById("overview");
var tickets = document.getElementById("tickets");
var levels = document.querySelectorAll("#level");
var themeToggler = document.getElementById("toggleTheme");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})

overview.addEventListener("click", () => {
    document.querySelector(".overview-content-main").style.display = 'flex'
    document.querySelector(".tickets-content-main").style.display = 'none'
})
tickets.addEventListener("click", () => {
    document.querySelector(".overview-content-main").style.display = 'none'
    document.querySelector(".tickets-content-main").style.display = 'flex'
})

close.addEventListener("click", () => {
    if(window.innerWidth <= 1000 && window.innerWidth >= 550){
        document.body.classList.toggle("open")
    } else if(window.innerWidth <= 550){
        document.body.classList.toggle("visible")
    } else if(window.innerWidth >= 1000){
        document.body.classList.toggle("close")
    }
})
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        for(i = 0; i<navLinks.length; i++){
            if(navLinks[i].classList.contains("navActive")){
                navLinks[i].classList.remove("navActive")
            }
        }
        link.classList.add("navActive")
    })
})
window.addEventListener("resize", () => {
    if(window.innerWidth <= 550){
        document.body.classList.remove("open")
        console.log('open')
    } else if(window.innerWidth >= 550 && window.innerWidth <= 1000){
        document.body.classList.remove("visible")
        document.body.classList.remove("close")
        console.log('visible')
        console.log('close')
    }
})
window.addEventListener("load", () => {
    levels.forEach(level => {
        console.log(level.textContent)
        if(level.textContent === 'High'){
            level.style.width = "50px"
            level.style.backgroundColor = 'rgba(241, 43, 44, 1)'
        } else if(level.textContent === 'Low'){
            level.style.width = "50px"
            level.style.backgroundColor = 'rgba(254, 196, 0, 1)'
        } else {
            level.style.width = "80px"
            level.style.backgroundColor = 'rgba(41, 204, 151, 1)'
        }
    })
})