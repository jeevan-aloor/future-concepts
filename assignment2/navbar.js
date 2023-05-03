// let free = document.getElementById("freecourse")
// let img = document.createElement("img")
// // img.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/2985/2985149.png")
// img.style.width = "30px"
// img.style.height = "30px"
// img.style.marginTop = "3px"
// img.style.border = "1px solid red"
// // free.style



// // free.appendChild(img)

// input taking using terminal ...?

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('What is your name? ', (name) => {
//     console.log(`Hello, ${name}!`);
//     console.log(name)
//     readline.close();
// });

function throttle(func, delay) {
    let timeoutId;
    return function(...args) {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func.apply(this.args);
          timeoutId = null;
        }, delay);
      }
      console.log(timeoutId)
    };
    
  }

function doSomething() {
    console.log('Doing something...');
  }
  
  const throttledDoSomething = throttle(doSomething, 1000);
  
  throttledDoSomething();
  throttledDoSomething();
  throttledDoSomething();
  throttledDoSomething();