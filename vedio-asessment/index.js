(()=>{
    let x=(y=10)
})();
// console.log(typeof x)
// console.log(typeof y)


// const set=new Set()
// set.add=1
// set.add=("lyda")
// set.add=({name:"lyda"})
// for(let item of set){
//     console.log(item+2)
// }


// const fs=new Promise((res,rej)=>{
//     setTimeout(res,500,'one')
// })
// const sp=new Promise((res,rej)=>{
//     setTimeout(res,100,'two')
// })


// Promise.race([fs,sp]).then(res=>console.log(res))


// function Person(fs,ln){
//     this.fs=fs,
//     this.ln=ln
// }

// const lyda=new Person('lyda','')



// function discount(amount){

//     let offer=10
//     let ans=Math.floor(amount/10)

//     console.log(amount-ans)
// }

// discount(250)


// function userAge(age){
//     if(age>=18){
//         console.log("Eligible")
//     }else{
//         console.log("Not -Eligible")
//     }

// } 

// userAge(18)


// function grade(num){
//     if(num>=90 && num<=100){
//         console.log("A")
//     }
//     else if(num>=80 && num<=89){
//         console.log("B")
//     }
//     else if(num>=70 && num<=79){
//         console.log("C")
//     }
//     else if(num>=60 && num<=69){
//         console.log("D")
//     }else if(num<60){
//         console.log("F")
//     }

// }
// grade(67)



let num1=2;
let num2=4;
let result=num1>=num2
// console.log(result)

// result ? console.log("greater or eqaual"): console.log("lesser")

// if(num1<num2){
//     console.log("lesser")
// }


if(condition){
    // content
    console.log("if")
}else if(condition){
    console.log("else if")
}else{
    console.log("else")
}




