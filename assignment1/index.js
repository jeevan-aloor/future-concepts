


let maps = document.getElementById("maps")


function getMap() {
    maps.innerHTML = ""
    let city = document.getElementById("locations").value
    let iframe = document.createElement("iframe")
    iframe.setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
    iframe.width = "600"
    iframe.height = "500"
    maps.append(iframe)
    


}

const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
// let enter = document.getElementById("enter")

// enter.addEventListener("click", getMap())
// console.log("hello")