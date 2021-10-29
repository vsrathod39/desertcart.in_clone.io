if (localStorage.getItem('userLoginDetailsDiserCart')=== null){
    localStorage.setItem("userLoginDetailsDiserCart", JSON.stringify([]));
}
let users = JSON.parse(localStorage.getItem("userLoginDetailsDiserCart"))

function validEmail() {
    let email = document.getElementById('email').value;
    let password = document.getElementById("password").value;

    let obj = {};
    if(email.length === 0){
        alert('Email should not be empty!');
        return;
    }
    for(let i = 0; i < email.length; i++){
        if(obj[email[i]] === undefined){
            obj[email[i]] = 1;
        }
        else{
            obj[email[i]] += 1;
        }
    }
    if(obj[' '] !== undefined){
        alert('Email should not contain any white-spaces!');
        return false;
    }
    if(obj['@'] !== 1){
        alert('Email should contain exactly 1 "@"!');
        return;
    }
    if(obj['.'] !== 1){
        alert('Email should contain exactly 1 "."');
        return;
    }

    let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let obj2 = {};
    let flag = false;
    if(password.length < 5){
        alert('Password should not be empty or it must be minimum 5 char!');
        return;
    }
    for(let i = 0; i < password.length; i++){
        for(let j = 0; j < specialChar.length;  j++){
            if(password[i] === specialChar[j]){
                flag = true;
                break;
            }
        }
        if(flag)
            break;
    }
    if(flag !== true){
        alert('Password must coantain one special char!');
        return false;
    }
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            alert("User allready exist!")
            window.location.href ="./signin.html"
            return;
        }
    }
    signup(email, password);
}

function signup(email, password){
    let user ={
        email: email,
        password:password,
    };
    users.push(user);
    localStorage.setItem("userLoginDetailsDiserCart", JSON.stringify(users))
    alert("Signup success.")
    window.location.href ="./signin.html"
}