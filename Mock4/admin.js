
console.log("ja ata ddi")
function prevntFormLoad(e) {
    e.preventDefault()

}

let preventForm = document.querySelector(".formsubmit")

preventForm.addEventListener('submit', prevntFormLoad)

async function addHotels() {

    console.log(document.getElementById("choose").value)

    let hotelsData = {
        category: document.getElementById("choose").value,
        image_url: document.getElementById("image").value,
        type_of_room: document.getElementById("ac").value,
        bed_type: document.getElementById("single").value,
        no_of_persons: document.getElementById("adults").value,
        capacity: document.getElementById("capacity").value,
        cost: document.getElementById("cost").value,
        booked: "false"
    }
    console.log(hotelsData)
    console.log("33")
    try {
        let res = await fetch('https://mock-app.onrender.com/hotels', {
            method: "POST",
            body: JSON.stringify(hotelsData),
            headers: {
                "Content-Type": "application/json"

            }


        })





    } catch (error) {
        console.log(error)

    }






}


