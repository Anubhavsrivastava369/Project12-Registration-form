
function check(event) {
    event.preventDefault();

    const name = document.getElementById("n1").value.trim();
    const password = document.getElementById("n2").value.trim();
    const rePassword = document.getElementById("n3").value.trim();

    if (name === "" || password === "" || rePassword === "") {
        alert("All fields are mandatory");
        return;
    }

    if (password.length < 8 && password.length > 12) {
        alert('Password should be between 8 to 12 characters');
        return;
    }

    if (!(checkValidchar(password) && checkValidnum(password) && checkValidspe(password))) {
        alert("Password should contain at least one alphabet, one number, and one special character.");
        return;
    }

    if (password !== rePassword) {
        alert("Passwords do not match");
        return;
    }

    alert('Registration successful!');
    document.getElementById("myForm").reset();
}


const img1  = document.getElementById('img');
const p = document.getElementById('n2');
img1.onclick = function(){
   if(p.type == "password")
     p.type = 'text';
    else
     p.type = 'password';

}


function checkValidchar(pass){
    for (let char of pass) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            return true;
        }
    }
    return false;
}

function checkValidnum(pass){
    for (let char of pass) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

function checkValidspe(pass){
    for (let char of pass) {
        if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9')) {
            return true;
        }
    }
    return false;
}


