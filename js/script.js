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

function paymentValidation(){
    let country = document.forms['paymentForm']['country'].value;
    let full_name = document.forms['paymentForm']['full_name'].value;
    let username = document.forms['paymentForm']['username'].value;
    let email = document.forms['paymentForm']['email'].value;
    let password = document.forms['paymentForm']['password'].value;
    let payment_method = document.forms['paymentForm']['payment_method'].value;
    let debit_number = document.forms['paymentForm']['debit_number'].value;
    let exp = document.forms['paymentForm']['exp'].value;
    let validation1, validation2, validation3, validation4, validation5, validation6, validation7, validation8   

    if(country == ""){
        let message = "Country must selected";
        document.getElementById('error_country').innerHTML = `<p class="error-message">${message}</p>`
        validation1 = false;
    }

    if(full_name == ""){
        let message = "Fullname must required";
        document.getElementById('error_full_name').innerHTML = `<p class="error-message">${message}</p>`
        validation2 = false;
    }

    if(username == "" && username.length <= 10){
        let message;
        if(username == ""){
            message = "Username must required"
        }
        if(username.length <= 10){
            message = "Username length must less than 10"
        }
        document.getElementById('error_username').innerHTML = `<p class="error-message">${message}</p>`
        validation3 = false;
    }

    if(email == "" && !email.endsWith('.com')){
        let message;
        if(email == ""){
            message = "Email must required"
        }
        if(!email.endsWith('.com')){
            message = "Email must end with .com"
        }
        document.getElementById('error_email').innerHTML = `<p class="error-message">${message}</p>`
        validation4 = false;
    }

    if(password == ""){
        let message = "Password must required";
        document.getElementById('error_password').innerHTML = `<p class="error-message">${message}</p>`
        validation5 = false;
    }

    if(payment_method == ""){
        let message = "Payment method must selected";
        document.getElementById('error_payment_method').innerHTML = `<p class="error-message">${message}</p>`
        validation6 = false;
    }

    if(debit_number == "" && debit_number.length < 16){
        let message;
        if(debit_number == ""){
            message = "Debit number must be filled"
        }
        if(debit_number.length < 16){
            message = "Debit number length must be 16"
        }
        document.getElementById('error_debit_number').innerHTML = `<p class="error-message">${message}</p>`
        validation7 = false;
    }

    if(exp == "" && exp.length < 5){
        let message;
        if(exp == ""){
            message = "Exp must be filled";
        }
        if(exp.length < 5){
            message = "Exp format must mm/yy";
        }
        document.getElementById('error_exp').innerHTML = `<p class="error-message">${message}</p>`
        validation8 = false;
    }

    if(validation1 == false && validation2 == false && validation3 == false && validation4 == false &&
        validation5 == false && validation6 == false && validation7 == false && validation8 == false){
            return false;
        }
}