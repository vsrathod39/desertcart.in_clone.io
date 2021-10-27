function signin(e){

    e.preventDefault();
         let myform = document.getElementById("myForm");
         let email = myForm.email.value;

     let all_users =JSON.parse(localStorage.getItem("desertcartdb"));

     all_users.forEach(function (desertcartdb) {
         if(email === desertcartdb.email ){
             location.href = "shivam.html"
         }
         
     });

}





// logo fevocon of desertcart.com
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'https://desertcart.com/favicon.ico'; 