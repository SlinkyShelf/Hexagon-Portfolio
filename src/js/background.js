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

    const time = Date.now()/1000

    for (let i = 0; i < lineCount; i++)
    {
        const line = lines[i]

        const set = randomSets[i]

        const basetHeight = i/(lineCount-1)* viewHeight

        const startHeight = basetHeight+ Math.sin(time * (set[2] +.5) + set[0]*10)*60
        const endHeight = basetHeight+ Math.sin(time * (set[3] + .5) + set[1]*10)*60

        const x1 = Math.sin(time * (set[4]+.5))*viewWidth
        const y1 = startHeight + Math.sin(time * (set[5]+.5))*viewHeight

        const x2 = viewWidth + Math.sin(time * (set[6]+.5))*viewWidth
        const y2 = startHeight + -Math.sin(time * (set[5]+.5))*viewHeight

        line.setAttribute("d", `M -10 ${startHeight} C ${x1} ${y1} ${x2} ${y2} ${viewWidth+10} ${endHeight}`)
    }

    requestAnimationFrame(updateLines)
}

updateLines()