let productData = [
    {
        image: "https://m.media-amazon.com/images/I/71OhHJi+72L.jpg",
        name: "Men's 2 Piece Tracksuit,Men’s Summer 2-Piece Beach Cotton Linen Short Sleeve Shirts & Shorts Pants Sets",
        brand: "kouzhaoa",
        rating: "3.9",
        price: "4919",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/5111U5C9NVL.jpg",
        name: "Men's Casual Long Pants Linen Pants - Loose Lightweight Casual Trousers Summer Yoga Beach Trousers",
        brand: "percle",
        rating: "3.6",
        price: "4609",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/91vNaFnBJES.jpg",
        name: "EUOW Men's Hawaiian Shirt Short Sleeves Printed Button Down Summer Beach Dress Shirts",
        brand: "euow",
        rating: "4.5",
        price: "4729",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/61yrclbiu2S.jpg",
        name: "Vintage Shirts for Men Striped Short Sleeve Hawaiian Shirt Summer Button Down T Shirt Relaxed-Fit Casual Beach Tops",
        brand: "zhuer",
        rating: "3.2",
        price: "2589",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/71xxyK6dqQS.jpg",
        name: "Summer Casual Tshirt Dresses for Women Swing Sun Dress Beach Swimsuit Cover Ups with Pockets",
        brand: "moskill",
        rating: "4.2",
        price: "4809",
        origin: "USA"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61fTwyrYMqL.SS150.jpg",
        name: "Womens Summer Midi Dress Striped Short Sleeve Dresses Side Split Casual Waist Gowns",
        brand: "vonda",
        rating: "3.4",
        price: "1349",
        origin: "UAE"
    },
    {
        image: "https://m.media-amazon.com/images/I/615oUasaNKL.jpg",
        name: "Blooming Jelly Women's Halter Neck Deep V Asymmetrical Floral Dress Lace Summer Maxi Dress",
        brand: "Blooming Jelly",
        rating: "4",
        price: "6189",
        origin: "UK"
    },
    {
        image: "https://m.media-amazon.com/images/I/51ZXzbnw9lL.jpg",
        name: "Women's Pleated Dress (White)",
        brand: "Norah",
        rating: "2.8",
        price: "2159",
        origin: "India"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71suU%2BE1K2S.SS150.jpg",
        name: "Women's Polyester Western Dress",
        brand: "Meloso",
        rating: "3.8",
        price: "1289",
        origin: "India"
    },
    {
        image: "",
        name: "",
        brand: "",
        rating: "",
        price: "",
        origin: ""
    },
    {
        image: "",
        name: "",
        brand: "",
        rating: "",
        price: "",
        origin: ""
    },
    {
        image: "",
        name: "",
        brand: "",
        rating: "",
        price: "",
        origin: ""
    },
];

// function used to showProducts Data from an array named productData to html clothes page
function showProducts(product){
    let globalProducts = document.getElementById("globalProducts");
    globalProducts.innerHTML = null;

    product.forEach(function (element) {
        let productBox = document.createElement("div");
        productBox.setAttribute("class", "productBox")

        let productImg =  document.createElement("img");
        productImg.src = element.image;

        let textBox = document.createElement("div");
        textBox.setAttribute("class", "textBox");

        let productName = document.createElement("p");
        productName.textContent = element.name;

        let productBrand = document.createElement("p");
        productBrand.classList.add("textGreyColor");
        productBrand.textContent = "By " + element.brand;
        textBox.append(productName);

        let productWrapper = document.createElement("div");
        productWrapper.setAttribute("class", "productWrapper");

        let wrapperInnerDiv = document.createElement("div");
        let productRating = document.createElement("p");
        productRating.textContent = "★ " + element.rating;

        let productPrice = document.createElement("p");
        productPrice.setAttribute("id", "textPrice");
        productPrice.textContent = "₹ " + element.price[0] +  "," + element.price.substring(1, element.price.length);
        wrapperInnerDiv.append(productRating, productPrice);

        let wrapperInnerDiv2 = document.createElement("div");
        wrapperInnerDiv2.classList.add("origin", "textGreyColor");

        let productOrigin = document.createElement("p");
        productOrigin.textContent = "from " + element.origin;

        let productShipping = document.createElement("p");
        productShipping.textContent = "to INDIA";

        let productShipDate = document.createElement("p");
        productShipDate.textContent = "in 9-15 days"
        wrapperInnerDiv2.append(productOrigin, productShipping, productShipDate);

        productWrapper.append(wrapperInnerDiv, wrapperInnerDiv2);
        productBox.append(productImg, textBox, productBrand, productWrapper);
        globalProducts.append(productBox);
    });
}

showProducts(productData);