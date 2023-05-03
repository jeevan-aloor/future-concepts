let data;
async function display(page_number) {
  let res = await fetch(
    `http://localhost:3002/menu?_page=${page_number}&_limit=3`
  );
  data = await res.json();
  appendFood(data);
  console.log("data:", data);

  // data.forEach((ele)=>{
  //   console.log(ele.prize)
  // })
}
display();
let container = document.getElementById("container");
function appendFood(data) {
  container.innerHTML = "";
  data.forEach(({ title, image, prize, description }) => {
    let div = document.createElement("div");
    let imag = document.createElement("img");
    imag.src = image;

    let h2 = document.createElement("h2");
    h2.innerText = title;
    let para = document.createElement("p");
    para.innerText = `cost-${prize}`;
    let desc = document.createElement("p");
    desc.innerText = description;
    div.append(imag, h2, para, desc);
    container.append(div);
  });
}

async function sort() {
  data.forEach((ele) => {
    prize = ele.prize;
    data = data.sort(function (a, b) {
      return a.prize - b.prize;
    });
  });
  appendFood(data);
}

function filter() {
  let query = document.getElementById("value").value;
  console.log("query:", query);
  if (query == "") {
    appendFood(data);
  } else {
    data = data.filter(function (ele) {
      return ele.title.toLowerCase().includes(query);
    });
    appendFood(data);
  }
}

let buttons_div = document.getElementById("button");
const showButtons = (result, per_page) => {
  let buttons = Math.ceil(result / per_page);
  for (let i = 1; i <= buttons; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    button.onclick = function () {
      display(i);
    };

    buttons_div.append(button);
  }
};
showButtons(12, 4);