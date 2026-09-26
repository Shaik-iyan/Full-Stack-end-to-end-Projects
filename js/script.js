let currentAnime=0;
const slider=document.querySelector(".anime-slider");
const cards=document.querySelectorAll(".anime-card");
function nextAnime(){
    currentAnime++;
    if(currentAnime >=cards.length){
        currentAnime=0;
    }
    slider.style.transform=`translateX(-${currentAnime * 100}%)`;
}
setInterval(nextAnime,6000);