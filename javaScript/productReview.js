let currentPro = [
    {
        image: "https://m.media-amazon.com/images/I/71g+JfQTkqL.jpg",
        name: "Womens Fall Clothes Stitching Geo Stripe Print Coat Oversized Loose Pocket Top Lapel Long-Sleeve Button Tunic",
        brand: "Afelkas",
        rating: "",
        price: "4679",
        origin: "USA"
    }
];

let proImage = document.getElementById("proImage");
let proSubImage = document.getElementById("proSubImage");
let proAddToCart = document.getElementById("proAddToCart");


function appendImg(){
    let img = document.createElement("img");
    img.src = currentPro[0].image;
    proImage.append(img);
    proAddToCart.append(name);
}
function proSubIcon(){
    let fav = document.createElement("img");
    fav.src = "https://img.icons8.com/material-outlined/24/000000/like--v1.png";

    let share = document.createElement("img");
    share.src = "https://img.icons8.com/material/24/000000/share--v1.png"

    let smallImg = document.createElement("img");
    smallImg.src = currentPro[0].image;
    smallImg.setAttribute("id", "imgIcon");

    proSubImage.append(fav, share, smallImg);
}

function cartDetails(){
    let productName = document.getElementById("productName");
    let h1 = document.createElement("h1");
    h1.textContent = currentPro[0].name;
    h1.setAttribute("id", "proName")

    productName.append(h1);
}
function productReview(){
    appendImg();
    proSubIcon();
    cartDetails();

    // let chartBox = document.createElement("div");
    // chartBox.setAttribute("id", "chartBox")

    // let sectionHeading = document.createElement("p");
    // sectionHeading.textContent = "Size";

    // chartBox.append(sectionHeading);
    // proAddToCart.append(chartBox);
}

productReview();