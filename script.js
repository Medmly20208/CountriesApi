let dvElement = document.createElement("div")
dvElement.classList.add("boxCountry")
let linkAtt = document.querySelector("link")
let inputCountry = document.querySelector(".searchField input")
let BoxOfCountries = document.querySelector(".countries")
let searchButton = document.querySelector(".searchField em")
let div;
let bool = true;
let ar = new Array();
let AfricaFilter = document.getElementById("Africa")
let selectFilter = document.querySelector("#regionsFilter")
let AllCountries = document.querySelectorAll(".boxCountry")
let light = document.querySelector("#light")
let dark = document.querySelector("#dark")


for (let o = 0; o < BoxOfCountries.children.length; o++) {
    console.log(BoxOfCountries.children[0])
    BoxOfCountries.children[0].onclick = function() {
        console.log(1)
        window.location.href = 'detailpage.html'

    }
}









light.onclick = function() {
    dark.classList.remove("nonDisplay")
    light.classList.add("nonDisplay")
    document.querySelector("#darkstyle").disabled = undefined
    document.querySelector("#lightstyle").disabled = "disabled"



}
dark.onclick = function() {
    dark.classList.add("nonDisplay")
    light.classList.remove("nonDisplay")

    document.querySelector("#darkstyle").disabled = 'disabled'
    document.querySelector("#lightstyle").disabled = undefined

}









function changeFunc() {
    var selectedValue = selectFilter.options[selectFilter.selectedIndex].value;
    let i = 0;
    while (i < BoxOfCountries.children.length) {

        if (BoxOfCountries.children[i].children[1].children[1].textContent.includes(`Region : ${selectedValue}`) != true) {
            BoxOfCountries.removeChild(BoxOfCountries.children[i])
            i--;

        }
        i++;
    }

}

for (let i = 0; i < 6; i++) {
    ar.push(parseInt(Math.random() * 250))
}
async function getAll() {
    let response = await fetch("https://restcountries.com/v2/all")
    let jsonresponse = await response.json()

    for (let j = 0; j < 6; j++) {
        ar[j] = ar[j] == 111 || ar[j] == 246 ? 66 : ar[j];
        div = `
            <img src="${jsonresponse[ar[j]].flags.png}" alt="${jsonresponse[ar[j]].name}">
        <div class=data>
         <h2>${jsonresponse[ar[j]].name}</h2>
         <p>
            <span class=title>Population</span> : ${jsonresponse[ar[j]].population}<br>
            <span class=title>Region</span> : ${jsonresponse[ar[j]].region}<br>
            <span class=title>Capital</span> : ${jsonresponse[ar[j]].capital}<br>
         </p>

        
       `

        dvElement.innerHTML = div
        dvElement.onclick = function() {
            localStorage.setItem("name", jsonresponse[ar[j]].name)

            localStorage.setItem("flag", jsonresponse[ar[j]].flags.png)
            localStorage.setItem("NativeNme", jsonresponse[ar[j]].nativeName)
            localStorage.setItem("population", jsonresponse[ar[j]].population)
            localStorage.setItem("region", jsonresponse[ar[j]].region)
            localStorage.setItem("subregion", jsonresponse[ar[j]].subregion)
            localStorage.setItem("capital", jsonresponse[ar[j]].capital)
            localStorage.setItem("topLevelDomain", jsonresponse[ar[j]].topLevelDomain)
            localStorage.setItem("currencies", jsonresponse[ar[j]].currencies[Object.keys(jsonresponse[ar[j]].currencies)].name)
            localStorage.setItem("languages", Object.values(jsonresponse[ar[j]].languages.map(function(ele) {
                return ele.name
            })))
            localStorage.setItem("borders", jsonresponse[ar[j]].borders)
            location.href = "detailpage.html"
        }
        BoxOfCountries.append(dvElement)
        dvElement = document.createElement("div")
        dvElement.classList.add("boxCountry")

    }


}

getAll()


searchButton.onclick = async function() {
    let response1 = await fetch(`https://restcountries.com/v3.1/name/${inputCountry.value.toLowerCase() == 'israel'?'palestine':inputCountry.value.toLowerCase() == "western sahara"?"morocco":inputCountry.value.toLowerCase()}`)
    let jsonresponse1 = await response1.json()
        //console.log(jsonresponse1[0].name)
    let div1 = `
    <img src="${jsonresponse1[0].flags.png}" alt="${jsonresponse1[0].name}">

<div class=data>
 <h2>${jsonresponse1[0].name.official}</h2>
 <p>
    <span class=title>Population</span> : ${jsonresponse1[0].population}<br>
    <span class=title>Region</span> : ${jsonresponse1[0].region}<br>
    <span class=title>Capital</span> : ${jsonresponse1[0].capital}<br>
 </p>


`
    if (bool) {
        while (BoxOfCountries.firstChild) {
            BoxOfCountries.removeChild(BoxOfCountries.lastChild);
        }
        bool = false;
    }
    dvElement = document.createElement("div")
    dvElement.classList.add("boxCountry")
    console.log(Object.values(jsonresponse1[0].languages))
    dvElement.innerHTML = div1
    dvElement.onclick = function() {
        localStorage.setItem("name", jsonresponse1[0].name.common)
        localStorage.setItem("flag", jsonresponse1[0].flags.png)
        localStorage.setItem("NativeNme", jsonresponse1[0].name.nativeName[Object.keys(jsonresponse1[0].name.nativeName)[0]].official)
        localStorage.setItem("population", jsonresponse1[0].population)
        localStorage.setItem("region", jsonresponse1[0].region)
        localStorage.setItem("subregion", jsonresponse1[0].subregion)
        localStorage.setItem("capital", jsonresponse1[0].capital)
        localStorage.setItem("topLevelDomain", jsonresponse1[0].tld[0])
        localStorage.setItem("currencies", jsonresponse1[0].currencies[Object.keys(jsonresponse1[0].currencies)].name)
        localStorage.setItem("languages", Object.values(jsonresponse1[0].languages))
        localStorage.setItem("borders", jsonresponse1[0].borders)
        location.href = "detailpage.html"

    }
    BoxOfCountries.appendChild(dvElement)

}