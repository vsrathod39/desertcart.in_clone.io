// Vikas Kumar - fw_12_132

let cartPro = JSON.parse(localStorage.getItem("disertCartItem"));

function showProduct(){
    let product = document.getElementById("productDetails");
    product.textContent = null;

    if(cartPro.length == 0){
        let h3Null = document.createElement("h3");
        h3Null.textContent = "No item in the cart, please select an item to get an exciting gift!!!"
        product.innerHTML = null;
        product.append(h3Null);
    }

    cartPro.forEach(function(pro){
        let prDiv = document.createElement("div");
        prDiv.setAttribute("id", "product");

        let divImg = document.createElement("div");
        divImg.setAttribute("id", "proImg");
        let divName = document.createElement("div");
        divName.setAttribute("id", "proName");
        let divSize = document.createElement("div");
        divSize.setAttribute("id", "proSize")

        let img = document.createElement("img");
        img.src = pro.image;

        let name = document.createElement("p");
        name.textContent = pro.name;

        let brand = document.createElement("p");
        brand.textContent = "By " + pro.brand;

        // ---------------------
        let divPrice = document.createElement("div");
        divPrice.setAttribute("id", "priceDet");

        let price = document.createElement("p");
        price.textContent = "₹ " + pro.price[0] + "," + pro.price.substring(1,  pro.price.length);

        let wrapperInnerDiv2 = document.createElement("div");
        wrapperInnerDiv2.classList.add("origin");

        let productOrigin = document.createElement("p");
        productOrigin.textContent = "from " +  pro.origin;

        let productShipping = document.createElement("p");
        productShipping.textContent = "to INDIA";

        let productShipDate = document.createElement("p");
        productShipDate.textContent = "in 9-15 days";
        wrapperInnerDiv2.append(productOrigin, productShipping, productShipDate);

        divPrice.append(price, wrapperInnerDiv2);

        // Remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("id", pro.image);
        removeBtn.onclick = function (){
            removeCartItem(this.id);
        }

        // ------------------------------
        let divCount = document.createElement("div");
        divCount.setAttribute("id", "divCount");
        let p1 = document.createElement("button");
        p1.textContent = "-";
        let p2 = document.createElement("input");
        p2.setAttribute("class", "showQuantity");
        // let tempId = Date.now();
        // p2.setAttribute("id", tempId);
        p2.type = "text";
        p2.value = pro.quantity;
        let p3 = document.createElement("button");
        p3.textContent = "+";
        // p3.onclick = () =>{
        //     addQuantity(tempId);  
        // }
        divCount.append(p1, p2, p3)

        let divFit = document.createElement("div");
        divFit.setAttribute("id", "divFit");
        let p4 = document.createElement("p");
        p4.setAttribute("class", "boldSub");
        p4.textContent = "Size:";
        let p5 = document.createElement("p");
        p5.textContent = "X-Large";
        divFit.append(p4, p5);

        let divColor = document.createElement("div");
        divColor.setAttribute("id", "divFit");
        let p6 = document.createElement("p");
        p6.setAttribute("class", "boldSub");
        p6.textContent = "Color: ";
        let p7 = document.createElement("p");
        p7.textContent = "Grey Fashion";
        divColor.append(p6, p7);

        let divCondition = document.createElement("div");
        divCondition.setAttribute("id", "divCount");
        let p8 = document.createElement("p");
        p8.setAttribute("class", "boldSub");
        p8.textContent = "Condition: ";
        let p9 = document.createElement("p");
        p9.textContent = "New";
        divCondition.append(p8, p9);


        let size = document.createElement("p");
        size.textContent = "";

        divImg.append(img);
        divName.append(name, brand, divPrice, removeBtn);
        divSize.append(divCount, divFit, divColor, divCondition);
        prDiv.append(divImg, divName, divSize);
        product.append(prDiv);
    })
    
}

showProduct();

// remove cart item one by one
function removeCartItem(e){
    console.log(e);
    let product = document.getElementById("productDetails");
    let tempArr = [];
    for(let i = 0; i < cartPro.length; i++){
        if(cartPro[i].image != e){
            tempArr.push(cartPro[i]);
        }
    }
    cartPro = tempArr;
    localStorage.setItem("disertCartItem", JSON.stringify(cartPro));
    product.innerHTML = null;
    location.reload();
}

// delevery form

let cnfButton = document.getElementById("cnfButton");
if(cartPro.length != 0){
    cnfButton.addEventListener('click', () => {
        myForm(document.getElementById("cartDetails"));
    });
}
else{
    if(cartPro.length == 0)
        cnfButton.addEventListener("click", blankSMS);
}

function blankSMS(){
    alert("No item in the cart");
}

function myForm(formParrent){
    let subFont = document.getElementById("subFont");

    let headTitle = document.createElement("p");
    headTitle.setAttribute("id", "subFont");
    headTitle.textContent = "Select your Delivery Address";

    // let formParrent = document.getElementById("globalContainer");
    formParrent.innerHTML = null;

    let myForm = document.createElement("form");
    myForm.setAttribute("id", "addressForm");
    myForm.addEventListener('submit', function(e) {
        setDeliveryLocation(e, formParrent);
      });

    let fName = document.createElement("input");
    fName.setAttribute("class", "inputBox");
    fName.setAttribute("type", "text");
    fName.setAttribute("name", "firstName");
    fName.setAttribute("placeholder", "First Name")

    let lName = document.createElement("input");
    lName.setAttribute("class", "inputBox");
    lName.setAttribute("type", "text");
    lName.setAttribute("name", "lastName");
    lName.setAttribute("placeholder", "Last Name")

    let address = document.createElement("input");
    address.setAttribute("type", "text");
    address.setAttribute("class", "inputBox");
    address.setAttribute("name", "address");
    address.setAttribute("placeholder", "Address (P.O.boxes not allowed)")

    let city = document.createElement("input");
    city.setAttribute("class", "inputBox");
    city.setAttribute("type", "text");
    city.setAttribute("name", "city");
    city.setAttribute("placeholder", "City")

    let state = document.createElement("input");
    state.setAttribute("class", "inputBox");
    state.setAttribute("type", "text");
    state.setAttribute("name", "state");
    state.setAttribute("placeholder", "State")

    let pinCode = document.createElement("input");
    pinCode.setAttribute("class", "inputBox");
    pinCode.setAttribute("type", "Number");
    pinCode.setAttribute("name", "pinCode");
    pinCode.setAttribute("placeholder", "PIN Code")

    let phone = document.createElement("input");
    phone.setAttribute("class", "inputBox");
    phone.setAttribute("type", "Number");
    phone.setAttribute("name", "phone");
    phone.setAttribute("placeholder", "Phone")

    let email = document.createElement("input");
    email.setAttribute("class", "inputBox");
    email.setAttribute("type", "text");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "Email")

    // -------------------------
    let s = document.createElement("input");
    s.setAttribute("id", "cnfButton");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Add Delivery Location");

    myForm.append(fName, lName, address, city, state, pinCode, phone, email, s);
    formParrent.append(headTitle, myForm);

    return false;
}

function setDeliveryLocation(e, formParrent){
    e.preventDefault();
    let addressForm = document.getElementById("addressForm");

    if(addressForm.firstName.value.trim().length == 0 || addressForm.lastName.value.trim().length == 0 || addressForm.address.value.trim().length == 0 || addressForm.city.value.trim().length == 0 || addressForm.state.value.trim().length == 0 || addressForm.pinCode.value.trim().length == 0 || addressForm.phone.value.trim().length == 0 || addressForm.email.value.trim().length == 0){
        alert("any one or all from the field is empty, please fill all the fields!");
        return;
    }
    if(addressForm.pinCode.value.trim().length < 6 || addressForm.pinCode.value.trim().length > 6){
        alert("Pin code must be exact 6 char long.");
        return;
    }
    if(addressForm.phone.value.trim().length < 10 || addressForm.phone.value.trim().length > 10){
        alert("Phone number must be exact 10 char long.");
        return;
    }

    let obj = {};
    let email = addressForm.email.value;
    for(let i = 0; i < email.length; i++){
        if(obj[email[i]] === undefined){
            obj[email[i]] = 1;
        }
        else{
            obj[email[i]] += 1;
        }
    }
    if(obj[' '] !== undefined){
        alert('Email should not contain any white-spaces!');
        return false;
    }
    if(obj['@'] !== 1){
        alert('Email should contain exactly 1 "@"!');
        return;
    }
    if(obj['.'] !== 1){
        alert('Email should contain exactly 1 "."');
        return;
    }

    {
        alert("Delivery address added successful, please make payment!")
        formParrent.innerHTML = null;

        let headTitle = document.createElement("p");
        headTitle.setAttribute("id", "subFont");
        headTitle.textContent = "Select your Payment Method";

        let div = document.createElement("div");
        div.setAttribute("id", "bebitCard")
        div.addEventListener('click', () => {
            paymentForm(formParrent);
        })
        let img = document.createElement("img");
        img.src = "https://img.icons8.com/ios-filled/40/000000/bank-card-front-side.png";
        let p = document.createElement("p");
        p.textContent = "Credit/Debit Card";
        div.append(img, p);

        formParrent.append(headTitle, div);
    }
}

function paymentForm(formParrent){

    let payForm = document.createElement("form");
    payForm.setAttribute("id", "payForm");
    payForm.addEventListener('submit', function(e){
        paymentConfermation(e, formParrent);
    })

    let lCard = document.createElement("label");
    lCard.setAttribute("for", "card");
    lCard.textContent = "CARD NUMBER";

    let card = document.createElement("input");
    card.setAttribute("class", "inputBox");
    card.setAttribute("type", "Number");
    card.setAttribute("name", "card");
    card.setAttribute("placeholder", "1111 1111 1111 1111")

    let lExpDate = document.createElement("label");
    lExpDate.setAttribute("for", "expDate");
    lExpDate.textContent = "EXPIRATION DATE";

    let expDate = document.createElement("input");
    expDate.setAttribute("class", "inputBox");
    expDate.setAttribute("type", "text");
    expDate.setAttribute("name", "expDate");
    expDate.setAttribute("placeholder", "MM/YY")

    let lCvv = document.createElement("label");
    lCvv.setAttribute("for", "cvv");
    lCvv.textContent = "CVV";

    let cvv = document.createElement("input");
    cvv.setAttribute("type", "Number");
    cvv.setAttribute("class", "inputBox");
    cvv.setAttribute("name", "cvv");
    cvv.setAttribute("placeholder", "111")

    let lchName = document.createElement("label");
    lchName.setAttribute("for", "chName");
    lchName.textContent = "CARDHOLDER'S NAME";

    let chName = document.createElement("input");
    chName.setAttribute("class", "inputBox");
    chName.setAttribute("type", "text");
    chName.setAttribute("name", "chName");
    chName.setAttribute("placeholder", "Vikas Kumar")

    // -------------------------
    let s = document.createElement("input");
    s.setAttribute("id", "cnfButton");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Confirm");

    payForm.append(lCard, card, lExpDate, expDate, lCvv, cvv, lchName, chName, s);
    formParrent.append(payForm);

    return false;
}

function paymentConfermation(e, formParrent){
    e.preventDefault();
    let addressForm = document.getElementById("payForm");
    // forms["payForm"];

    if(addressForm.card.value.trim().length == 0 || addressForm.expDate.value.trim().length == 0 || addressForm.cvv.value.trim().length == 0 || addressForm.chName.value.trim().length == 0 ){
        alert("any one or all from the field is empty, please fill all the fields!");
        return
    }
    if(addressForm.card.value.trim().length < 16 || addressForm.card.value.trim().length > 16){
        alert("Card number must be exact 16 char long.");
        return;
    }
    if(addressForm.expDate.value.trim().length < 5 || addressForm.expDate.value.trim().length > 5){
        alert("Expiry date should be MM/YY formate.");
        return;
    }
    if(addressForm.cvv.value.trim().length < 3 || addressForm.cvv.value.trim().length > 3){
        alert("CVV must be exact 3 char long.");
        return;
    }
    let cardExpDate = addressForm.expDate.value;
    let flag = false;
    for(let i = 0; i < cardExpDate.length; i++){
        if(cardExpDate[i] === "/")
            flag = true;
    }
    if(flag !== true){
        alert("Expiry date should be MM/YY formate.");
        return;
    }
    if(cardExpDate[2] !== "/"){
        alert("Expiry date should be MM/YY formate.");
    }
       {
        let globalContainer = document.getElementById("globalContainer");
        globalContainer.textContent = null;

        let h1 = document.createElement("h1");
        h1.textContent = "Payment processing...";
        globalContainer.append(h1);

        let itr = setInterval(() => {
            clearInterval(itr);
            alert("Payment Sucessfull")
            globalContainer.textContent = null;
            h1.textContent = "Payment Sucess.";
            h1.setAttribute("id", "paymentText");
            let p = document.createElement("p");
            p.textContent = "redirecting to Home in 5sec..."
            globalContainer.append(h1, p);
            cartPro = [];
            localStorage.setItem("disertCartItem", JSON.stringify([]));
        }, 5000);

        let goToCartPage = setInterval(() => {
            clearInterval(goToCartPage);
            window.location.href = "./index.html";
        }, 10000);
    }
}

// let subQunt = document.getElementById("subtractQuantity");
// subQunt.addEventListener("click", subtractQuantity)
// function subtractQuantity(){
//     let curQuant = document.getElementById("showQuantity");
//     let temp = Number(curQuant.value);
//     if(temp < 2){
//         return false;
//     }
//     curQuant.value = temp - 1;
// }

// function addQuantity(e){
//     let curQuant = document.getElementById(e).value;
//     curQuant = Number(curQuant);
//     if(curQuant > 9){
//         return false;
//     }
//     curQuant.value = String(curQuant + 1);
//     console.log(e, typeof(curQuant));
// }

export {showProduct, paymentForm, myForm} ;