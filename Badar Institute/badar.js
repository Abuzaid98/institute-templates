const searchMobile = document.querySelector(".search-mobile")
const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const closeBtn = document.querySelector(".close-btn")
const navLink = document.querySelectorAll(".nav-link")

searchBtn.addEventListener("click", function () {
    console.log("hello")
    if (searchMobile.classList.contains("active")) {
        searchInput.value = ""
        searchMobile.classList.remove("active")
    }
    else {
        searchInput.focus()
        searchMobile.classList.add("active")
    }
})

closeBtn.addEventListener("click", function () {
    searchMobile.classList.remove("active")
})


const hamburgMenu = document.querySelector(".hamburg-btn")
const crossbtn = document.querySelector(".cross-btn")

hamburgMenu.addEventListener("click", function () {
    document.querySelector(".wrap-2").classList.toggle("active")
    crossbtn.classList.toggle("chalu")
    hamburgMenu.classList.toggle("gayab")
})


crossbtn.addEventListener("click", function () {
    document.querySelector(".wrap-2").classList.toggle("active")
    crossbtn.classList.toggle("chalu")
    hamburgMenu.classList.toggle("gayab")

})

navLink.forEach(n => n.addEventListener("click", function () {
    document.querySelector(".wrap-2").classList.remove("active")
    crossbtn.classList.toggle("chalu")
    hamburgMenu.classList.toggle("gayab")
}))




$(".slider").bxSlider({
    controls:false,
    auto:true,
    autoHover:true,
    speed:500
});
