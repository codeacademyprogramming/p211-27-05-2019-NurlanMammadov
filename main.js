const text = document.getElementById("text");
const area = document.getElementsByClassName("area")[0];
const styles = document.getElementsByClassName("styles")[0];
let inputValue

text.onblur = function (word) {
    let textValue = text.value;
    if (textValue !== "") {
        const newDiv = document.createElement("div");
        newDiv.classList.add("styles")
        newDiv.innerHTML = textValue;
        area.appendChild(newDiv)
        textValue = "";
    }
}
