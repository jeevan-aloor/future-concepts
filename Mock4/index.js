

// function clickable() {
//     let register = document.getElementsByClassName("logininput")
//     let login = document.getElementById("loginbutton")
//     register.addEventListener("click",function(){
//         console.log("jeevan")
//         let loginform=document.getElementById("loginform")
//         loginform.style.display="none"

//     })
// }
// clickable()
let clickButton = document.getElementById("loginbutton")
let regform = document.getElementById("signupform")
let regsubmitButton = document.getElementById("regsubmitbutton")
let val = "Login";

if (val == "Login") {
    regform.style.display = "none"
    clickButton.style.backgroundColor = "#2b2d42";
    clickButton.style.color = "#FFFFFF";
    clickButton.style.borderRadius = "5px";
    clickButton.style.border = "none";
    regsubmitButton.style.display = "none"



}

function registerFormShow() {
    let buttonText = document.getElementById("registerbutton").innerText
    let clickButton = document.getElementById("loginbutton")
    let clickregButton = document.getElementById("registerbutton")
    let submitButton = document.getElementById("logsubmitbutton")
    let submitregButton = document.getElementById("regsubmitbutton")

    let loginform = document.getElementById("loginform")
    let registerform = document.getElementById("signupform")
    val = buttonText
    console.log(val)
    if (val == "Register") {
        loginform.style.display = "none"
        registerform.style.display = "block"
        clickregButton.style.backgroundColor = "#2b2d42";
        clickregButton.style.color = "#FFFFFF";
        clickregButton.style.borderRadius = "5px";
        clickregButton.style.border = "none";
        clickButton.style.backgroundColor = "white";
        clickButton.style.color = "black";
        clickButton.style.borderRadius = "none";
        clickButton.style.border = "none";
        submitButton.style.display = "none"
        submitregButton.style.display = "block"


    }

    // registerform.style.display = "true"

}
function loginFormShow() {
    let buttonText = document.getElementById("loginbutton").innerText
    clicklogButton = document.getElementById("loginbutton")
    let submitButton = document.getElementById("regsubmitbutton")
    let submitlogButton = document.getElementById("logsubmitbutton")
    let clickregisterButton = document.getElementById("registerbutton")

    let registerform = document.getElementById("signupform")
    let loginform = document.getElementById("loginform")
    val = buttonText
    if (val == "Login") {
        registerform.style.display = "none"
        loginform.style.display = "block"
        clicklogButton.style.backgroundColor = "#2b2d42";
        clicklogButton.style.color = "#FFFFFF";
        clicklogButton.style.borderRadius = "5px";
        clicklogButton.style.border = "none";
        clickregisterButton.style.backgroundColor = "white";
        clickregisterButton.style.color = "black";
        clickregisterButton.style.borderRadius = "none";
        clickregisterButton.style.border = "none";
        // submitButton.innerText = "LOGIN"
        submitButton.style.display = "none"
        submitlogButton.style.display = "block"

    }


}



async function addUser() {
    console.log("aloorrr")
    let userData = {
        username: document.getElementById("regname").value,
        email: document.getElementById("regemail").value,
        password: document.getElementById("regpass").value,
        confirmpassword: document.getElementById("regrepeatpass").value

    }
    let res = await fetch('https://mock-app.onrender.com/users', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"

        }

    })
    let data = await res.json()
    console.log("data", data)
    console.log("added")
    alert("Register sucussfully and please Login now!")


}


async function userLogin() {
    console.log("jeevbb")
    let userdata = {
        email: document.getElementById("loginemail").value,
        password: document.getElementById("loginpass").value
    }

    let reqres = await fetch('https://reqres.in/api/login', {
        method: "POST",
        body: JSON.stringify(userdata),
        headers: {
            "Content-Type": "application/json"
        }
    })
    // let { token } = reqres
    let reqdata = await reqres.json()
    console.log("reqres", reqdata.token)
    if (reqdata.token) {
        window.location.href = "admin.html"
    }



    let { email, password } = userdata
    let res = await fetch('https://mock-app.onrender.com/users')
    let data = await res.json()
    let loginalert = 0;
    data.map((ele) => {
        if (ele.email == email && ele.password == password) {
            loginalert = 1
            alert("login successful")
            window.location.href = "hotels.html";
            return

        }
    })
    if (loginalert == 0) {
        alert("login failed")
    }
    console.log("data", data)
}