console.log("hello! this is successfully loaded!")

const hamburger = document.querySelector("menu")
const bodyTag = document.querySelector("body")

hamburger.addEventListener("click", function(){
    bodyTag.classList.toggle("is-open")

    if (bodyTag.classList.contains("is.open")){
        hamburger.classList.add(is.exit)
    } else {
        hamburger.classList.remove("is-exit")
    }
})


