var slide = 0;
slideShow();
function slideShow(){
    let slides = document.getElementsByClassName("game-show");
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display="none"
    }
    slide++;
    if(slide>slides.length){
        slide = 1;
    }
    slides[slide-1].style.display = "block";
    setTimeout(slideShow, 2000)
}