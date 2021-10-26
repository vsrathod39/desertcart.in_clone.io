function signup(e){

    e.preventDefault();
let myForm = document.getElementById("myForm");
let email = myForm.email.value
let password = myForm.password.value
console.log("data:", email, password);

if (localStorage.getItem('desertcartdb')=== null){
localStorage.setItem("desertcartdb", JSON.stringify([]));
}
let user ={
    email: email,
    password:password,
};
    let arr = JSON.parse(localStorage.getItem("desertcartdb"))

    arr.push(user);

    localStorage.setItem("desertcartdb", JSON.stringify(arr))

}


// logo fevocon of desertcart.com
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'https://desertcart.com/favicon.ico'; 