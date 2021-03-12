function rollDice() {
    return 1 + Math.floor(Math.random() * 20)
}

for (let i = 0; i < 5; i++) console.log(rollDice())

var top = document.getElementById("top") // Back to Top button!

var rootElement = document.documentElement
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
top.addEventListener("click", scrollToTop)