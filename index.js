// let count = document.querySelector(".count")
// let reset = document.querySelector(".reset")
// let increment = document.querySelector(".increment")


// let num = 0
// increment.onclick = () => {
//     // console.log(num++)
//     count.innerHTML = num ++
// }

// reset.onclick = () => {
//     num = 0
//     count.innerHTML = num
// }








let raqam = document.querySelector(".raqam")
let start = document.querySelector(".start")
let reset = document.querySelector(".reset")

let num = 0
start.onclick = () => {
    num==101?num=0:raqam.innerHTML = num++;
}


reset.onclick = () => {
    num = 0
    raqam.innerHTML = num   
}





