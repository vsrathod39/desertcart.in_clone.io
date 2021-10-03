let header3_images = [
    'https://dc-marketing.s3.amazonaws.com/media/244800638Artboard_1.png',
    'https://dc-marketing.s3.amazonaws.com/media/370593577Artboard_1.1.png',

]

let interval;
let container = document.getElementById('slideshow')

function header3_startSlideshow() {

    let count = 0

    let img = document.createElement('img')
    img.src = header3_images[count]
    container.append(img)
    count = count + 1

    interval = setInterval(function () {

        container.innerHTML = null

        if (count === header3_images.length) {
            count = 0
        }

        let img = document.createElement('img')
        img.src = header3_images[count]

        container.append(img)
        count = count + 1


    }, 3000)
}

header3_startSlideshow();

let product_catagaries = [
    {
        heading: "The Perfumery",
        img1: "https://cdn.desertcart.com/cms-media/shop_women_perfume_online_777169b8dd.jpg?95355.45000000001",
        name1: "Her",
        details1: "Designer fragrances. Not designer prices",

        img2: "https://cdn.desertcart.com/cms-media/buy_men_perfume_online_eab126b205.jpg?95358.41499999969",
        name2: "Him",
        details2: "Too attractive to be resisted",

        img3: "https://cdn.desertcart.com/cms-media/shop_unisex_perfume_online_ecf2a6deb4.jpg?95350.10999999986",
        name3: "Unisex",
        details3: "You can share this fragrance with your better half",
    },

    {
        heading: "Do it in style",
        img1: "https://cdn.desertcart.com/cms-media/buy_women_summer_dresses_online_dabf3f593d.jpg?88178.79999999968",
        name1: "Cool your summer",
        details1: "Dresses that won't make you sweat",

        img2: "https://cdn.desertcart.com/cms-media/shop_men_summer_dresses_online_5b4314736f.jpg?88180.28499999992",
        name2: "Make them look",
        details2: "Summer collection for him",

        img3: "https://cdn.desertcart.com/cms-media/buy_watches_online_8ed4cf47f0.jpg?88178.05499999986",
        name3: "Watches for lifetime",
        details3: "Largest collection of elegant timepieces"

    },
    {


        heading: "Better Everyday",
        img1: "https://cdn.desertcart.com/cms-media/shop_baby_care_products_online_7f67a482b9.png?95361.6149999998",
        name1: "Healthy baby, Happy baby",
        details1: "The best of all the gental care is ",



        img2: "https://cdn.desertcart.com/cms-media/buy_fitness_products_online_f1a105826b.png?95361.00499999974",
        name2: "Feel good",
        details2: "Stop putting it off get in shape",


        img3: "https://cdn.desertcart.com/cms-media/shop_herbal_products_online_5af28e5503.png?95362.21499999965",
        name3: "Herb up your life!",
        details3: "Live naturally, Live herbally"

    },
    {
        heading: "All Game, All Season",
        img1: "https://cdn.desertcart.com/cms-media/buy_playstation_items_online_b061ec1a64.jpg?95354.26999999981",
        name1: "It's time to play",
        details1: "All of the best that playstation has to offer",


        img2: "https://cdn.desertcart.com/cms-media/shop_pc_gaming_stations_online_cd1b2de349.jpg?95354.86499999979",
        name2: "The real gaming rogs",
        details2: "We'll find you the best wepon to dominate them all",

        img3: "https://cdn.desertcart.com/cms-media/buy_retro_gaming_online_3db4d6f5be.jpg?95357.82500000004",
        name3: "A trip down the memory lane",
        details3: "A nostalgic homage to the good old games"

    },
    {
        heading: "Transforming your outdoor space",
        img1: "https://cdn.desertcart.com/cms-media/shop_survival_goods_online_f4dd4c107d.jpg?95357.24499999969",
        name1: "Survive the end of the world",
        details1: "All the things you'll ever need to survive anything",

        img2: "https://cdn.desertcart.com/cms-media/buy_outdoor_camping_goods_online_7e4a480f7d.jpg?95350.77999999977",
        name2: "Outdoor calling",
        details2: "Make it a camping season all year round",

        img3: "https://cdn.desertcart.com/cms-media/shop_hiking_gears_online_ea048ac4c2.jpg?95353.66999999997",
        name3: "It's about the journey",
        details3: "All the essential gear you will need "

    },
    {
        heading: "Look Fabulous",
        img1: "https://cdn.desertcart.com/cms-media/buy_makeup_kits_online_c0679afac3.png?95364.02499999985",
        name1: "Glamoe-Eyes",
        details1: "Smokey shadow look ",

        img2: "https://cdn.desertcart.com/cms-media/shop_lipsticks_online_70697d1117.png?95362.8249999997",
        name2: "Bold and Beautiful",
        details2: "Amp up your look with these lipstick collection",

        img3: "https://cdn.desertcart.com/cms-media/buy_skin_care_products_online_c3b6a27d93.png?95363.41999999968",
        name3: "Love your skin",
        details3: "Find your miracle product here"

    },
    {
        heading: "Your Electronic Dose",
        img1: "https://cdn.desertcart.com/cms-media/shop_laptops_online_438c088b3a.png?95356.04999999987",
        name1: "All about laptops",
        details1: "Looking for wor machine to crunch those number ",

        img2: "https://cdn.desertcart.com/cms-media/buy_headphones_online_9d321be420.png?95360.37999999963",
        name2: "Only hear what you want to",
        details2: "Top rated noise-Cancelling Headphones",

        img3: "https://cdn.desertcart.com/cms-media/shop_phone_cases_online_18655e9c75.png?95359.62500000006",
        name3: "Slick phone cases",
        details3: "Battary packs with a zillion Mah"

    },
]

function show_product() {
    let parent = document.getElementById("productCont")

    product_catagaries.forEach(function (product) {

        let topDiv = document.createElement('div')
        let head = document.createElement('h3')
        head.textContent = product.heading
        topDiv.append(head)

        let wrapperDiv = document.createElement('div')

        let div1 = document.createElement('div')

        let img1 = document.createElement('img')
        img1.src = product.img1
        let name1 = document.createElement('h4')
        name1.textContent = product.name1
        let details1 = document.createElement('p')
        details1.textContent = product.details1
        div1.append(img1, name1, details1)


        let div2 = document.createElement('div')

        let img2 = document.createElement('img')
        img2.src = product.img2
        let name2 = document.createElement('h4')
        name2.textContent = product.name2
        let details2 = document.createElement('p')
        details2.textContent = product.details2
        div2.append(img2, name2, details2)


        let div3 = document.createElement('div')

        let img3 = document.createElement('img')
        img3.src = product.img3
        let name3 = document.createElement('h4')
        name3.textContent = product.name3
        let details3 = document.createElement('p')
        details3.textContent = product.details3
        div3.append(img3, name3, details3)

        // page linking
        if(product.name1 == "Cool your summer" || product.name2 == "Make them look"){
            div1.onclick = function(){
                changePageToSummerClothes();
            };

            div2.onclick = function(){
                changePageToSummerClothes();
            };
        }

        if(product.name1 == "Her" || product.name2 == "Him" || product.name2 == "Unisex"){
            div1.onclick = function(){
                changePageToPerfume();
            };

            div2.onclick = function(){
                changePageToPerfume();
            };
        }

        wrapperDiv.append(div1, div2, div3)

        parent.append(topDiv, wrapperDiv)





    })
}


show_product()

function signIn(){
    window.location.href = "signin.html";
}

function creatAccount(){
    window.location.href = "creataccount.html";
}
function goToCart(){
    window.location.href = "cart.html";
}
function homeLogo() {
    window.location.href = "index.html";
}
function changePageToSummerClothes(){
    window.location.href = "summerClothes.html";
}
function changePageToPerfume(){
    window.location.href = "perfumeMenAndWomen.html";
}