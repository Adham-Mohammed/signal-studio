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
let value=document.getElementById("value")
let bar = document.getElementById("bar")


value.innerHTML=slider.value +"fmax"
slider.oninput =function(){
    value.innerHTML=this.value+"fmax"
    selector.style.left = this.value + "%"
    bar.style.width = this.value + "%"
}
