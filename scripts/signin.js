if (localStorage.getItem('userLoginDetailsDiserCart')=== null){
    localStorage.setItem("userLoginDetailsDiserCart", JSON.stringify([]));
}
let users = JSON.parse(localStorage.getItem("userLoginDetailsDiserCart"))

function signin(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById("password").value;
    let emailFlag = false, passwordFlag = false;
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            emailFlag = true;
        }
        if(users[i].password === password){
            passwordFlag = true;
        }
    }
    if(emailFlag !== true){
        alert('Wrong email entered!');
        return;
    }
    if(passwordFlag !== true){
        alert('Wrong password entered!');
        return;
    }
    alert("Signin success.");
    window.location.href = "../index.html";
}