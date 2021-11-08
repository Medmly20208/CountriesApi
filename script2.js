document.querySelector("img").src = localStorage.getItem("flag")
document.querySelector(".nativeName").textContent = localStorage.getItem("NativeNme")
document.querySelector(".population").textContent = localStorage.getItem("population")
document.querySelector(".regions").textContent = localStorage.getItem("region")
document.querySelector(".subRegions").textContent = localStorage.getItem("subregion")
document.querySelector(".capital").textContent = localStorage.getItem("capital")
document.querySelector(".topLevelDomain").textContent = localStorage.getItem("topLevelDomain")
document.querySelector(".currencies").textContent = localStorage.getItem("currencies")
document.querySelector(".languages").textContent = localStorage.getItem("languages")
document.querySelector(".name").textContent = localStorage.getItem("name")
let borderNumbers = localStorage.getItem("borders").split(",")
for (let i = 0; i < borderNumbers.length; i++) {
    let ne = document.createElement("li");
    ne.textContent = borderNumbers[i];
    document.querySelector(".borders").append(ne)
}
document.querySelector("#back").onclick = function() {
    location.href = "index.html"
}

document.querySelector("#light").onclick = function() {
    dark.classList.remove("nonDisplay")
    light.classList.add("nonDisplay")
    document.querySelector("#darkstyle").disabled = undefined
    document.querySelector("#lightstyle").disabled = "disabled"



}
document.querySelector("#dark").onclick = function() {
    dark.classList.add("nonDisplay")
    light.classList.remove("nonDisplay")

    document.querySelector("#darkstyle").disabled = 'disabled'
    document.querySelector("#lightstyle").disabled = undefined

}