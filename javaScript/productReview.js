// Vikas Kumar - fw_12_132

let currentPro = JSON.parse(localStorage.getItem("disertCurrentItem"));


// let productLogo = document.getElementById("productLogo");

function showProductImage(){
    let productImage = document.getElementById("productImage");

    let img = document.createElement("img");
    img.src = currentPro[0].image;

    productLogo.append(img);
    productImage.append(img);
}

function showProductLogo(){
    let productLogoImage = document.getElementById("productLogoImage");
    let img = document.createElement("img");
    img.src = currentPro[0].image;
    productLogoImage.append(img);
}

function showPriceRating(){
    let priceId = document.getElementById("price");
    let ratingId = document.getElementById("rating");

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

    let btn = document.getElementById("cartButton");
    let btnCart = document.createElement("button");
    btnCart.textContent = "Add to Cart " + "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);
    let cpr = "₹ " + currentPro[0].price[0] + "," + currentPro[0].price.substring(1,  currentPro[0].price.length);
    btn.append(btnCart);
    btnCart.onclick = function(){
        changePageToCart(btnCart, cpr);
    }
}

function showProductname(){
    let productName = document.getElementById("productName");

    let headding = document.createElement("h1");
    headding.textContent = currentPro[0].name;

    productName.append(headding);
}

let descriptionData = ["Pull On closure.", "Are Rinse by hand in warm water max 30 °, do not bleach. Wash before use, do not iron, do not dry clean..", "mens sweatsuits set,sweatsuits,shirt,suit men,mens shits,man clothes,mens jogger suit sets,men fashions,men sets,tracksuit men set,mens fashion,track suit men,mens pants fashions men,men clothing 2021,men two piece set.", "clothing mens sets of clothing,men set,men track suits 2021,tracksuit,mens tracksuit,mens sports suits,pants men,men outfits,men outfit set, sweatsuits men,men short sets,men sweatsuit,romper,tracksuits shirts.", "High Waist, Cheap Tracksuits, Lightweight, Casual Two Piece Outfit Set, Men Tracksuit Set, Mens Summer Clothes, Casual Two Piece Set 2 piece tracksuit mens tracksuits mens outfit tracksuit gym clothing men fashion mens romper."];

function showDescription(){
    let descriptionBox = document.getElementById("descriptionBox");
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

productReview()

// add Item to cart
if(localStorage.getItem("disertCartItem") === null){
    localStorage.setItem("disertCartItem", JSON.stringify([]));
}

function changePageToCart(b, c){
    let cartItemArr = JSON.parse(localStorage.getItem("disertCartItem"));
    let itemArrThis = JSON.parse(localStorage.getItem("disertCurrentItem"));
    let flag = true;
    for(let i = 0; i < cartItemArr.length; i++){
        if(itemArrThis[0].image == cartItemArr[i].image){
            flag = false;
            alert("Item already added, please visit cart!");
            break;
        }
    }
    if(flag){
        cartItemArr.push(itemArrThis[0]);
        localStorage.setItem("disertCartItem", JSON.stringify(cartItemArr));
        alert("Item added to cart, please visit cart!")
    }

    b.textContent = "✓ Added " + c;
}