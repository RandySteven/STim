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
    setTimeout(slideShow, 10000)
}

function setDefaultValue(){
    let selectedValue = document.getElementById('paymentMethod').value;
    let visaForm = `
        <form>
            <h2>Visa</h2>
        </form>
    `
    let paypalForm = `
        <form>
            <h2>Paypal</h2>
        </form>
    `
    let mastercardForm = `
        <form>
            <h2>Master Card</h2>
            
        </form>
    `
    if(selectedValue === "Visa"){
        document.getElementById('form').innerHTML = visaForm;
    }
    if(selectedValue === "Paypal"){
        document.getElementById('form').innerHTML = paypalForm;
    }
    if(selectedValue === "Mastercard"){
        document.getElementById('form').innerHTML = mastercardForm;
    }
}