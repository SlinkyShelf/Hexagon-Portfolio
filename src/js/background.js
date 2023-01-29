const svg = document.getElementById("background-svg")

const namespace = "http://www.w3.org/2000/svg"

const lineCount = 5;

const lines = []
const randomSets = []

for (let i = 0; i < lineCount; i++)
{   
    const newLine = document.createElementNS(namespace, "path")
    newLine.classList.add("line")
    newLine.setAttribute("d", "M 0 0 L 100 100")
    svg.appendChild(newLine)
    lines.push(newLine)
    randomSets.push([
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
    ])
}

function updateLines()
{
    const rect = svg.getBoundingClientRect()
    const viewWidth = rect.width
    const viewHeight = rect.height

    const time = Date.now()

    for (let i = 0; i < lineCount; i++)
    {
        const line = lines[i]

        const set = randomSets[i]

        const basetHeight = i/(lineCount-1)* viewHeight

        const startHeight = basetHeight+ Math.sin(time/1000 * (set[2] +.5) + set[0]*10)*60
        const endHeight = basetHeight+ Math.sin(time/1000 * (set[3] + .5) + set[1]*10)*60

        line.setAttribute("d", `M 0 ${startHeight} L ${viewWidth} ${endHeight}`)
    }

    requestAnimationFrame(updateLines)
}

updateLines()