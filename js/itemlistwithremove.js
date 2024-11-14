const input = document.getElementById("textInput");
const button = document.getElementById("add");
const list = document.getElementById("list");
button.addEventListener("click", addToList);

function addToList()
{
    const content = document.createElement("li");
    const btnRemove = document.createElement("button");
    content.textContent = input.value;
    btnRemove.textContent = "Remove";
    list.appendChild(content);
    content.appendChild(btnRemove);
    btnRemove.addEventListener("click", removeFromList);
}


function removeFromList(btnRemove)
{
    btnRemove.parentNode.remove();
}
//btnContent.parentNode;