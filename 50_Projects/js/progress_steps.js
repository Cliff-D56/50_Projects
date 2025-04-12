const circles = document.querySelectorAll(".circle")
const btns = document.querySelectorAll(".btn")
const progress = document.getElementById('progress')
const nextbtn = document.querySelector("#next")
const prevbtn = document.querySelector("#prev")

let index = 0
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // @ts-ignore
        btn.id == nextbtn.id ? circleSelector(++index) : circleSelector(index--)
        // @ts-ignore
        index === 0 ? prevbtn.disabled = true :
            // @ts-ignore
            index === circles.length - 1 ? nextbtn.disabled = true :
                // @ts-ignore
                (nextbtn.disabled = false, prevbtn.disabled = false)
    })
})
function circleSelector(index) {
    circles[index].classList.toggle("active")
    widthUpdate()
}
function widthUpdate() {
    let actives = document.querySelectorAll(".active")
    // @ts-ignore
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"
}