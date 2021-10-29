function validEmail() {

    var email = document.getElementById('email').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

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
    window.location.href ="index.html"

    localStorage.setItem("desertcartdb", JSON.stringify(arr))

}