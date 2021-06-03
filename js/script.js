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
        <form name="visaForm" class="form-container" onsubmit="return visaValidation()">
            <h2>Visa</h2>
            <div class="form-control">
                <div class="form-group">
                    <input type="text" placeholder="Card Number" class="w-full" id="card_number">
                    <span id="error"></span>
                </div>

                <div class="select-group">
                    <select class="select" name="date" id="date_option">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select class="select" name="month" id="month_option">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="1">10</option>
                        <option value="1">11</option>
                        <option value="1">12</option>
                    </select>
                    <select class="select" name="year" id="year_option">
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                </div>

                <div class="two-group">
                    <div class="full-name">
                        <label for="first_name">First Name</label> 
                        <input name="first_name" id="first_name" class="w-full">
                    </div>
                    <div class="full-name">
                        <label for="last_name">Last Name</label> 
                        <input name="last_name" id="last_name" class="w-full">
                    </div>
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <textarea class="w-full" name="address"></textarea>
                </div>

                <div class="form-group">
                    <button type="submit btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    `
    
    let paypalForm = `
        <form name="paypalForm" class="form-container" onsubmit="return paypalValidation()">
            <h2>Paypal</h2>
        </form>
    `
    let mastercardForm = `
        <form name="mastercardForm" class="form-container" onsubmit="return mastercardValidation()">
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

function visaValidation(){
    var card_number = document.forms["visaForm"]["card_number"].value

    if(card_number.length == 0){
        document.getElementById('error').innerHTML = '<p>Card Number must filled</p>'
        return false;
    }
}

function paypalValidation(){

}

function mastercardValidation(){

}