`http://localhost:3001/posts?_page=${page_number}&_limit=2`


async function gedData() {
    let page_number = document.getElementById("input").value;

    try {
        let res = await fetch(`http://localhost:3001/posts?_page=${page_number}&_limit=2`)
        let data = await res.json()
        append(data)


    } catch (error) {
        console.log(error)

    }
}
let container = document.getElementById("container")

function append(data) {
    container.innerHTML=""
    data.forEach(({title})=>{
        let p=document.createElement("p")
        p.innerText=title;
        container.append(p)
    }) 
}