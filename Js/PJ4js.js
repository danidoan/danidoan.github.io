
function show() {
    alert("Your info has been recorded. Hope to see you soon!");
}
function dontGo(event) {
    event.preventDefault();
}
document.getElementById("button").addEventListener("click",dontGo);