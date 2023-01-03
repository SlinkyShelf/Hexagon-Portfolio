let selectedItem

const papers = document.getElementById("paper-stack").children
for (let i = 0; i < papers.length; i++)
{
    const paper = papers.item(i)
    paper.onclick = () => {
        if (selectedItem == paper) {
            paper.classList.remove("selected")
            selectedItem = null
        } else {
            if (selectedItem)
            selectedItem.classList.remove("selected")
            
            paper.classList.add("selected")
            selectedItem = paper
        }

    }
}