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