let currentPro = [
    {
        image: "https://m.media-amazon.com/images/I/71g+JfQTkqL.jpg",
        name: "Womens Fall Clothes Stitching Geo Stripe Print Coat Oversized Loose Pocket Top Lapel Long-Sleeve Button Tunic",
        brand: "Afelkas",
        rating: "4",
        price: "4679",
        origin: "USA"
    }
];


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
    // let delivery = document.createElement("p");
    // delivery.textContent = currentPro[0].image;

    priceId.append(brand, price);
    ratingId.append(rating, wrapperInnerDiv2);

}

function showProductname(){
    let productName = document.getElementById("productName");

    let headding = document.createElement("h1");
    headding.textContent = currentPro[0].name;

    productName.append(headding);
}

function productReview(){
    showProductImage();
    showProductLogo();
    showPriceRating();
    showProductname();
}

productReview()