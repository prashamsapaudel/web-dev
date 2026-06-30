const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");
let count=0;

decreasebtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}
increasebtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}
resetbtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}