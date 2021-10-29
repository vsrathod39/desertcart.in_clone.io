// Vikas Kumar - fw_12_132
import {option, rightContainerJs} from "/components/options.js";
let currentPro = JSON.parse(localStorage.getItem("disertCurrentItem"));
console.log("hi");
function showProductImage(){
    let productImage = document.getElementById("productImage");
    productImage.textContent = null;

    let img = document.createElement("img");
    img.src = currentPro[0].image;

    productLogo.append(img);
    productImage.append(img);
}

function showProductLogo(){
    let productLogoImage = document.getElementById("productLogoImage");
    productLogoImage.textContent = null;
    let img = document.createElement("img");
    img.src = currentPro[0].image;
    productLogoImage.append(img);
}

function showPriceRating(){
    let priceId = document.getElementById("price");
    priceId.textContent = null;
    let ratingId = document.getElementById("rating");
    ratingId.textContent = null;

    let brand = document.createElement("p");
    brand.setAttribute("clsss", "textGreyColor")
    brand.textContent = "Brand : " + currentPro[0].brand;

    let price = document.createElement("p");
    price.setAttribute("class", "boldFont")
    price.textContent = "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);

    let rating = document.createElement("p");
    rating.setAttribute("class", "origin")
    rating.textContent = "★ " + currentPro[0].rating;

    let wrapperInnerDiv2 = document.createElement("div");
    wrapperInnerDiv2.classList.add("origin");

    let productOrigin = document.createElement("p");
    productOrigin.textContent = "from " +  currentPro[0].origin;

    let productShipping = document.createElement("p");
    productShipping.textContent = "to INDIA";

    let productShipDate = document.createElement("p");
    productShipDate.textContent = "in 9-15 days"
    wrapperInnerDiv2.append(productOrigin, productShipping, productShipDate);

    priceId.append(brand, price);
    ratingId.append(rating, wrapperInnerDiv2);

    document.getElementById("showQuantity").value = currentPro[0].quantity;

    let btn = document.getElementById("cartButton");
    btn.textContent = null;
    let btnCart = document.createElement("button");
    btnCart.setAttribute("id", "currentPrice");
    btnCart.textContent = "Add to Cart " + "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);
    let cpr = "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);
    btn.append(btnCart);
    btnCart.onclick = function(){
        changePageToCart(btnCart, cpr);
    }
}

function showProductname(){
    let productName = document.getElementById("productName");
    productName.textContent = null;
    let headding = document.createElement("h1");
    headding.textContent = currentPro[0].name;

    productName.append(headding);
}

let descriptionData = ["Pull On closure.", "Are Rinse by hand in warm water max 30 °, do not bleach. Wash before use, do not iron, do not dry clean..", "mens sweatsuits set,sweatsuits,shirt,suit men,mens shits,man clothes,mens jogger suit sets,men fashions,men sets,tracksuit men set,mens fashion,track suit men,mens pants fashions men,men clothing 2021,men two piece set.", "clothing mens sets of clothing,men set,men track suits 2021,tracksuit,mens tracksuit,mens sports suits,pants men,men outfits,men outfit set, sweatsuits men,men short sets,men sweatsuit,romper,tracksuits shirts.", "High Waist, Cheap Tracksuits, Lightweight, Casual Two Piece Outfit Set, Men Tracksuit Set, Mens Summer Clothes, Casual Two Piece Set 2 piece tracksuit mens tracksuits mens outfit tracksuit gym clothing men fashion mens romper."];

function showDescription(){
    let descriptionBox = document.getElementById("descriptionBox");
    descriptionBox.textContent = null;
    let ul = document.createElement("ul");

    descriptionData.forEach(function(data){
        let li =document.createElement("li");
        let disc = document.createElement("p");
        disc.textContent = data;

        li.append(disc);
        ul.append(li);
    });
    descriptionBox.append(ul);
}

let reviewData = [
    {
        name: "M***K",
        subject: "Would order every color! Lite weight comfortable! Order 2 sizes up, they fit small.",
        rating: "⭐⭐⭐⭐⭐",
        revv: "I'm a large and ordered a XL and was still a bit to small,I ordered 3 more in different colors 2XL and fits perfectly."
    },
    {
        name: "E***Y",
        subject: "does not fit",
        rating: "⭐⭐☆☆☆",
        revv: "product was 2 sizes smaller than the lable"
    },
    {
        name: "M***K",
        subject: "Orange one looks like a prison uniform",
        rating: "⭐⭐☆☆☆",
        revv: "The material is kind of crappy and the orange looks exactly like prison orange. Paired with the cheap craftsmanship"
    }
];

function showReview(){
    let reviewBox = document.getElementById("reviewBox");
    reviewBox.textContent = null;
    reviewData.forEach(function(rev){
        let div = document.createElement("div");

        let name  = document.createElement("p");
        name.textContent = rev.name;

        let subject = document.createElement("p");
        subject.setAttribute("id", "boldSub");
        subject.textContent = rev.subject;

        let rating = document.createElement("p");
        rating.textContent = rev.rating;

        let revv = document.createElement("p");
        revv.textContent = rev.revv;

        div.append(name, subject, rating, revv);
        reviewBox.append(div);
    });
}

function productReview(){
    showProductImage();
    showProductLogo();
    showPriceRating();
    showProductname();
    showDescription();;
    showReview();
}

// add Item to cart
if(localStorage.getItem("disertCartItem") === null){
    localStorage.setItem("disertCartItem", JSON.stringify([]));
}

function changePageToCart(b, c){
    let cartItemArr = JSON.parse(localStorage.getItem("disertCartItem"));
    let itemArrThis = JSON.parse(localStorage.getItem("disertCurrentItem"));
    let curQuant = document.getElementById("showQuantity");
    if(Number(curQuant.value) > 0){
        itemArrThis[0].quantity = Number(curQuant.value);
    }else{
        alert(curQuant.value + " Please select quantity!")
        return false;
    }
    let flag = true;
    for(let i = 0; i < cartItemArr.length; i++){
        if(itemArrThis[0].image == cartItemArr[i].image && itemArrThis[0].quantity == cartItemArr[i].quantity){
            flag = false;
            alert("Item already added, please visit cart!");
            break;
        }
        else{
            if(itemArrThis[0].image == cartItemArr[i].image && itemArrThis[0].quantity !== cartItemArr[i].quantity){
                cartItemArr[i].quantity = Number(curQuant.value);
                localStorage.setItem("disertCartItem", JSON.stringify(cartItemArr));
                flag = false;
                alert("Quantity updated, please visit cart!");
                location.reload()
                break;
            }
        }
    }
    if(flag){
        cartItemArr.push(itemArrThis[0]);
        localStorage.setItem("disertCartItem", JSON.stringify(cartItemArr));
        alert("Item added to cart, please visit cart!")
        location.reload()
    }

    b.textContent = "✓ Added " + c;
}

function subtractQuantity(){
        let curQuant = document.getElementById("showQuantity");
        let temp = Number(curQuant.value);
        if(temp < 2){
            return false;
        }
        curQuant.value = temp - 1;
        currentPro[0].quantity = temp - 1;  
        currentPro[0].price =  String((temp - 1) * (currentPro[0].itemPrice));
        console.log(typeof(currentPro[0].price), currentPro[0].price);
        localStorage.setItem("disertCurrentItem", JSON.stringify(currentPro));
        document.getElementById("currentPrice").textContent = "Add to Cart " + "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);
}
function addQuantity(){
        let curQuant = document.getElementById("showQuantity");
        let temp = Number(curQuant.value);
        if(temp > 9){
            return false;
        }
        curQuant.value = temp + 1;
        currentPro[0].quantity = temp + 1;
        currentPro[0].price =  String((temp + 1) * (currentPro[0].itemPrice));
        console.log(typeof(currentPro[0].price), currentPro[0].price);
        localStorage.setItem("disertCurrentItem", JSON.stringify(currentPro));
        document.getElementById("currentPrice").textContent = "Add to Cart " + "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);
}

function runCode(flag){
    new Promise(function(resolve, reject){
        if(flag){
            document.getElementById("rightContainer").innerHTML = rightContainerJs();
            return resolve("960+");
        }
        if(flag !== true){
            document.getElementById("optionsJS").innerHTML =  option();
            return resolve("960-");
        }
    })
    .then((res) => {
        console.log(res);
        productReview();
        document.getElementById("subtractQuantity").addEventListener("click", subtractQuantity);
        document.getElementById("addQuantity").addEventListener("click", addQuantity);
    });
}
export {runCode} ;