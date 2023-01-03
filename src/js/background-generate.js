const bgContainer = document.getElementById("bg-container")
const lines = 50

for (let i = 0; i < lines; i++)
{
    const newDiv = document.createElement("div")
    newDiv.classList.add("bg-line")
    bgContainer.appendChild(newDiv)
}