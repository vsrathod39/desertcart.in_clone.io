function signin(e){

    e.preventDefault();
         let myform = document.getElementById("myForm");
         let email = myForm.email.value;

         var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(myForm.email.value)) {
        alert('Please provide a valid email address');
        }
        else{

     let all_users =JSON.parse(localStorage.getItem("desertcartdb"));

     all_users.forEach(function (desertcartdb) {
         if(email === desertcartdb.email ){
             location.href = "index.html"
         }
         
     });
    }

}