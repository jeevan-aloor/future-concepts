async function addPost() {
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let prize = document.getElementById("prize").value;
    let image = document.getElementById("image").value;
    //   let send_this_data={
    //       id:id;
    //       title:title;
    //       author:author;

    //   }

    let send_this_data = {
        id:3,
        name: "jeev ",
        age: 55,
        email: "jeevan@gmail.org"


    };

    let res = await fetch(`  https://mock-app.onrender.com/hotels`, {
        method: "POST",
        body: JSON.stringify(send_this_data),
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    let data = await res.json();
    getData()
    console.log("data:", data);
    console.log("jejeje")
    // window.location.href="exe.html"
}

async function deleteProduct() {
    let id = document.getElementById("delete_id").value;

    let res = await fetch(` https://mock-deploy.onrender.com/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await res.json()
    console.log('data:', data)
    console.log('deleted')

}

async function putProduct() {
    let id = document.getElementById("put_id").value;
    let title = document.getElementById("put_title").value;
    let prize = document.getElementById("put_prize").value;
    let image = document.getElementById("link").value;

    let send_this_data = {
        id: id,
        title: title,
        prize: prize,
        image: image

    };
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await res.json()
    console.log('data:', data)
}


let patchProduct = async () => {
    let id = document.getElementById("patch_id").value;
    let title = document.getElementById("title").value;



    let patch_data = {
        id: id,
        title: title
    }
    let res = await fetch(`  http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify(patch_data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    );
    let data = await res.json();
    console.log('data:', data)

}
async function getData() {
    let res = await fetch('https://mock-deploy.onrender.com/users', {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })
    let data = await res.json()
    console.log(data)
}

