// Vikas Kumar - fw_12_132

let cartPro = JSON.parse(localStorage.getItem("disertCartItem"));
// [
//     {
//         image: "https://m.media-amazon.com/images/I/71g+JfQTkqL.jpg",
//         name: "Womens Fall Clothes Stitching Geo Stripe Print Coat Oversized Loose Pocket Top Lapel Long-Sleeve Button Tunic",
//         brand: "Afelkas",
//         rating: "4",
//         price: "4679",
//         origin: "USA"
//     },
//     {
//         image: "https://m.media-amazon.com/images/I/71g+JfQTkqL.jpg",
//         name: "Womens Fall Clothes Stitching Geo Stripe Print Coat Oversized Loose Pocket Top Lapel Long-Sleeve Button Tunic",
//         brand: "Afelkas",
//         rating: "4",
//         price: "4679",
//         origin: "USA"
//     }
// ];

function showProduct(){
    let product = document.getElementById("productDetails");

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

        // ------------------------------
        let divCount = document.createElement("div");
        divCount.setAttribute("id", "divCount");
        let p1 = document.createElement("p");
        p1.textContent = "-";
        let p2 = document.createElement("p");
        p2.textContent = "1";
        let p3 = document.createElement("p");
        p3.textContent = "+";
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
        divName.append(name, brand, divPrice);
        divSize.append(divCount, divFit, divColor, divCondition);
        prDiv.append(divImg, divName, divSize);
        product.append(prDiv);
    })
    
}

showProduct();

// delevery form

let cnfButton = document.getElementById("cnfButton");
cnfButton.addEventListener("click", myForm);

function myForm(){
    let subFont = document.getElementById("subFont");

    let headTitle = document.createElement("p");
    headTitle.setAttribute("id", "subFont");
    headTitle.textContent = "Select your Delivery Address";

    let formParrent = document.getElementById("cartDetails");
    formParrent.innerHTML = null;

    let myForm = document.createElement("form");
    myForm.setAttribute("id", "addressForm");
    myForm.setAttribute("onsubmit", "setDeliveryLocation(); return false")

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
    pinCode.setAttribute("type", "text");
    pinCode.setAttribute("name", "pinCode");
    pinCode.setAttribute("placeholder", "PIN Code")

    let phone = document.createElement("input");
    phone.setAttribute("class", "inputBox");
    phone.setAttribute("type", "number");
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
    s.onsubmit = function(){
        setDeliveryLocation();
    }

    myForm.append(fName, lName, address, city, state, pinCode, phone, email, s);
    formParrent.append(headTitle, myForm);

    // cnfButton.removeEventListener("click", myForm);

    return false;
}

function setDeliveryLocation(){
    let addressForm = document.getElementsByClassName("inputBox");
    alert(typeof(addressForm.phone.value));

    if(addressForm.firstName.value == "" || addressForm.lasttName.value == "" || addressForm.address.value == "" || addressForm.city.value =="" || addressForm.state.value == "" || addressForm.pinCode.value == "" || addressForm.email.value == ""){
        alert("any one from the field is empty, please fill all the fields!");
    }
    else{
        alert("Delivery address added successful, please make payment!")
    let formParrent = document.getElementById("cartDetails");
    formParrent.innerHTML = null;

    let headTitle = document.createElement("p");
    headTitle.setAttribute("id", "subFont");
    headTitle.textContent = "Select your Payment Method";

    let div = document.createElement("div");
    div.setAttribute("id", "bebitCard")
    div.addEventListener("click", paymentForm)
    let img = document.createElement("img");
    img.src = "https://img.icons8.com/ios-filled/40/000000/bank-card-front-side.png";
    let p = document.createElement("p");
    p.textContent = "Credit/Debit Card";
    div.append(img, p);

    formParrent.append(headTitle, div);
    }
    // return false;
}

function paymentForm(){
    let formParrent = document.getElementById("cartDetails");

    let payForm = document.createElement("form");
    payForm.setAttribute("id", "payForm");
    payForm.setAttribute("onsubmit", "paymentConfermation(); return false")

    let lCard = document.createElement("label");
    lCard.setAttribute("for", "card");
    lCard.textContent = "CARD NUMBER";

    let card = document.createElement("input");
    card.setAttribute("class", "inputBox");
    card.setAttribute("number", "text");
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
    cvv.setAttribute("number", "text");
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
    alert("payment");

    return false;
}

function paymentConfermation(){
    let globalContainer = document.getElementById("globalContainer");
    globalContainer.textContent = null;
    globalContainer.textContent = "Payment processing..."

    let p = document.createComment("p");
    p.textContent = "Payment processing...";

    // globalContainer.append(p);

    let itr = setInterval(() => {
        clearInterval(itr);
        alert("Payment Sucessfull")
        globalContainer.textContent = null;
        globalContainer.textContent = "Payment Sucess.";
    }, 5000);

}
