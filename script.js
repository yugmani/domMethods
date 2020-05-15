// Create your HTML Page via DOM Methods here!

var divTag = document.createElement("div");
var h1Tag = document.createElement("h1");
var h2Tag = document.createElement("h2");
var newDiv = document.createElement("div");
var imgTag = document.createElement("img");
var ulTag = document.createElement("ul");

document.body.appendChild(divTag);
divTag.setAttribute("class", "fancy");
divTag.setAttribute("style", "text-align:center; padding:15px; color:white");

h1Tag.textContent = "Heading is Created by DOM Methods";
divTag.appendChild(h1Tag);
h1Tag.setAttribute("style", "text-align:center");

h2Tag.textContent = "Second Heading by DOM Methods";
divTag.appendChild(h2Tag);
h2Tag.setAttribute("style", "text-align:center");

document.body.appendChild(newDiv);
newDiv.setAttribute("class", "raw");
newDiv.setAttribute("style", "text-align:center; padding:15px");

imgTag.setAttribute("src", "carlsjunior.png");
imgTag.setAttribute("style", "text-align: center");
newDiv.appendChild(imgTag);

ulTag.setAttribute("style", "text-align: center; list-style:none; margin:0; padding:0; font-size:25px");
newDiv.appendChild(ulTag);

const food = [
    "Pizza",
    "Pasta",
    "Popcorn"
]

for(var i=0; i<3; i++){
    var liTag = document.createElement("li");
    ulTag.appendChild(liTag);
    liTag.textContent = food[i];
}
