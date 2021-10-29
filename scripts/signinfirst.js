function signin(e){

    e.preventDefault();
    validEmail()
}

if (localStorage.getItem('userLoginDetailsDiserCart')=== null){
    localStorage.setItem("userLoginDetailsDiserCart", JSON.stringify([]));
}
let users = JSON.parse(localStorage.getItem("userLoginDetailsDiserCart"))

function validEmail() {
    let email = document.getElementById('email').value;

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
    window.location.href = "index.html"
}