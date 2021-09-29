let productData = [
    {
        image: "https://m.media-amazon.com/images/I/71OhHJi+72L.jpg",
        name: "Men's 2 Piece Tracksuit,Men’s Summer 2-Piece Beach Cotton Linen Short Sleeve Shirts & Shorts Pants Sets",
        brand: "Kouzhaoa",
        rating: "3.9",
        price: "4919",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/5111U5C9NVL.jpg",
        name: "Men's Casual Long Pants Linen Pants - Loose Lightweight Casual Trousers Summer Yoga Beach Trousers",
        brand: "Percle",
        rating: "3.6",
        price: "4609",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/91vNaFnBJES.jpg",
        name: "EUOW Men's Hawaiian Shirt Short Sleeves Printed Button Down Summer Beach Dress Shirts",
        brand: "Euow",
        rating: "4.5",
        price: "4729",
        origin: "USA"
    },
    {
        image: "https://m.media-amazon.com/images/I/61yrclbiu2S.jpg",
        name: "Vintage Shirts for Men Striped Short Sleeve Hawaiian Shirt Summer Button Down T Shirt Relaxed-Fit Casual Beach Tops",
        brand: "Zhuer",
        rating: "3.2",
        price: "2589",
        origin: "USA"
    }
];

// function used to showProducts Data from an array named productData to html clothes page
function showProducts(product){
    let globalProducts = document.getElementById("globalProducts");
    globalProducts.innerHTML = null;

    product.forEach(function (element) {
        let productDiv = document.createElement("div");
        console.log(element.name);

        let productImg =  document.createElement("img");
        productImg.src = element.image;

        let productName = document.createElement("p");
        productName.textContent = element.name;

        let productBrand = document.createElement("p");
        productBrand.textContent = element.brand;

        let productRating = document.createElement("p");
        productRating.textContent = element.rating;

        let productPrice = document.createElement("p");
        productPrice.textContent = element.price;

        let productOrigin = document.createElement("p");
        productOrigin.textContent = element.origin;

        productDiv.append(productImg, productName, productBrand, productRating, productPrice, productOrigin);
        globalProducts.append(productDiv);
    });
}

showProducts(productData);