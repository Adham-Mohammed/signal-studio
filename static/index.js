// show SNR when check add noise
function showSNR() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
    text.style.display = "block";
    noise.style.display = "block";
    } else {
    text.style.display = "none";
    noise.style.display = "none";
    }
}

//slide functions
let slider = document.getElementById("slider")
let selector = document.getElementById("selector")
let selectorValue = document.getElementById("selectorValue")
let bar = document.getElementById("bar")

selectorValue.innerHTML=slider.value
slider.oninput =function(){
    selectorValue.innerHTML=this.value
    selector.style.left = this.value + "%"
    bar.style.width = this.value + "%"
}
