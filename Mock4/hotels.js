let maindiv = document.getElementById("maindiv")
let data;
// let datalength=data.length
async function getData(pageno) {
    let res = await fetch(`https://mock-app.onrender.com/hotels?_page=${pageno}&_limit=4`)
    data = await res.json()
    console.log(data)
    append(data)
    // console.log("hehee")

}
getData(1)

function append(data) {
    maindiv.innerHTML = ""


    data.forEach(({ image_url, category, type_of_room, bed_type, no_of_persons, capacity, cost, booked }) => {

        let div = document.createElement("div")
        div.style.border = "1px solid red"
        div.style.display = "flex"
        let div1 = document.createElement("div")
        div1.style.border = "1px solid red"
        div1.style.width = "50%"
        let img = document.createElement("img")
        img.setAttribute("src", image_url)
        img.style.width = "100%"
        img.style.height = "100%"
        img.setAttribute.className = "imggg"
        div1.append(img)
        let div2 = document.createElement("div")
        div2.style.width = "50%"
        div2.style.border = "1px solid red"
        div2.style.paddingLeft = "20px"
        let h2 = document.createElement("h2")
        h2.innerText = category;
        h2.style.margin = "auto"
        h2.style.textAlign = "center"
        let capacityroom = document.createElement("h4")
        capacityroom.innerText = ` capacity --> ${capacity}`
        let facility = document.createElement("h3")
        facility.innerText = "Facility --> Closet with hangers,HD TV"
        let bed = document.createElement("h3")
        bed.innerText = `Bed type --> ${bed_type}`
        let price = document.createElement("h3")
        price.innerText = `Price -->${cost}`
        let booknow = document.createElement("button")
        booknow.style.width = "80%"
        booknow.style.margin = "auto"
        booknow.style.height = "30px"
        booknow.style.color = "#FFFFFF"
        booknow.style.backgroundColor = "#0077b6"
        booknow.innerText = "Book Now"



        div2.append(h2, capacityroom, facility, bed, price, booknow)

        div.append(div1, div2)



        maindiv.append(div)





    })

}


function filter() {
    let query = document.getElementById("typeofroom").value;
    query=query.toLowerCase()
    console.log("query", query)
    // alert("hi")
    if (query == "") {
        append(data)


    } else {
        data = data.filter((ele) => {
            return ele.category.toLowerCase().includes(query)
        })
        append(data)
    }
}





async function deleteHotels(id) {
    let res = await fetch(`https://mock-app.onrender.com/hotels/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })

}
deleteHotels(3)
let buttonsdivs = document.getElementById("buttonsdiv")


const showButton = (result, perpage) => {
    let buttons = Math.ceil(result / perpage)

    for (let i = 1; i <= buttons; i++) {
        let butt = document.createElement("button")
        butt.innerText = i;
        butt.style.border = "1px solid red"
        butt.onclick = function () {
            getData(i)


        }
        buttonsdivs.append(butt)

    }


}

showButton(8, 4)