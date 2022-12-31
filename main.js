var navBtn = document.getElementById("navBtn");
var navBtnImg = document.getElementById("navBtnImg");
var navMenuList = document.getElementById("navMenuList");

var statebtn = false;


var rotationAngle = '';
function rotate(rotationAngle){
    navBtnImg.style.transform = `rotate(${rotationAngle}deg)`
}

navBtn.addEventListener("click", function(){
    if(statebtn == true){
        setInterval(rotate('90'), 10);
        navMenuList.style.display = "block";
        statebtn = false;
    }
    else{
        setInterval(rotate('0'), 10);
        navMenuList.style.display = "none";
        statebtn = true;
    }
})