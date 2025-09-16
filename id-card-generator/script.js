var inputs = document.querySelectorAll("#input-name, #input-father, #input-dob, #input-cnic, #input-photo");

//individual select inputs
var inputName = document.getElementById("input-name");
var inputFather = document.getElementById("input-father");
var inputDob = document.getElementById("input-dob");
var inputCnic = document.getElementById("input-cnic");
var inputPhoto = document.getElementById("input-photo");
var inputPhone = document.getElementById("input-phone");
var inputQualification = document.getElementById("input-qualification");
var inputEmail = document.getElementById("input-email");



//selecting id's 
var nameId = document.getElementById("name-value");
var fatherId = document.getElementById("father-value");
var dobId = document.getElementById("dob-value");
var cnicId = document.getElementById("cnic-value");
var photoId = document.getElementById("photo-value");
var phoneId = document.getElementById("phone-value");
var qualificationId = document.getElementById("qualification-value");
var emailId = document.getElementById("email-value");
//new page open
var formSection = document.getElementById("form-section");
var idSection = document.getElementById("id-section");


function generateID() {

    var filled = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {

            inputs[i].style.border = "2px solid red";
            filled = false;
        }
        else {
            inputs[i].style.border = "1px solid #3bcc34ff";
        }

    }

    // CNIC check
    if (inputCnic.value.trim().length !== 13) {
        inputCnic.style.border = "2px solid red";
        filled = false;
        alert("CNIC must be in 13 digits")
    }

    // phone check
    if (inputPhone.value.trim().length !== 11) {
        inputCnic.style.border = "2px solid red";
        filled = false;
        alert("Phone Number must be in 11 digits")
    }

    if (filled) {
        formSection.style.display = "none";
        idSection.style.display = "block";
        nameId.innerText = inputName.value.toUpperCase();
        fatherId.innerText = inputFather.value.charAt(0).toUpperCase() + inputFather.value.slice(1);
        dobId.innerText = inputDob.value;
        cnicId.innerText = inputCnic.value;
        phoneId.innerText = inputPhone.value;
        qualificationId.innerText = inputQualification.value;
        emailId.innerText = inputEmail.value;

        photoId.src = URL.createObjectURL(inputPhoto.files[0]);
    }



}
