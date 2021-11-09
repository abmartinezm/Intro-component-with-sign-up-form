/**Name */
const Name = document.querySelector('#name');
const ErrorName = document.querySelector('#error-name');
const ErrorNameTxt = document.querySelector('#error-txt-name');

/** Last Name*/
const lstName = document.getElementById('last-name');
const ErrorLstName = document.querySelector('#error-lst-name');
const ErrorLstNameTxt = document.querySelector('#error-txt-lst-name');

/*Mail */
const Mail = document.getElementById('mail');
const ErrorMail = document.querySelector('#error-mail');
const ErrorMailTxt = document.querySelector('#error-txt');

/**Password */
const Pass = document.getElementById('pass');
const ErrorPass = document.querySelector('#error-pass');
const ErrorPassTxt = document.querySelector('#error-txt-pass');


const btn = document.getElementById('btn-trial');



const inputs = document.querySelectorAll('input');

var PlcHolderName = document.getElementById('name');
var PlcHolderLstName = document.getElementById('last-name');
var PlcHolder = document.getElementById('mail');
var PlcHolderPass = document.getElementById('pass');



btn.addEventListener('click', (e) => {

    e.preventDefault();

        /**Validate Name */

        var regName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;



        if (regName.test(Name.value)) {
            PlcHolderName.classList.remove('active')
            ErrorName.classList.remove('activo');
            ErrorNameTxt.classList.remove('activa');
            PlcHolderName.value = "";
            PlcHolderName.placeholder = "First Name";

        } else {
            PlcHolderName.classList.add('active')
            ErrorName.classList.add('activo');
            ErrorNameTxt.classList.add('activa');
            PlcHolderName.value = "";
            PlcHolderName.placeholder = "";
        }
    

        /**Validate Last Name Data */
        // if (lstName.value.length == "") {}

        var regLstName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        if (regLstName.test(lstName.value)) {
            PlcHolderLstName.classList.remove('active')
            ErrorLstName.classList.remove('activo');
            ErrorLstNameTxt.classList.remove('activa');
            PlcHolderLstName.value = "";
            PlcHolderLstName.placeholder = "Last Name";
        } else {
            PlcHolderLstName.classList.add('active')
            ErrorLstName.classList.add('activo');
            ErrorLstNameTxt.classList.add('activa');
            PlcHolderLstName.value = "";
            PlcHolderLstName.placeholder = "";
        }

    


        /**Validate EMAIL DATA */

        var regMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regMail.test(Mail.value)) {
            console.log("La dirección de email  es correcta!.");
            // alert("La dirección de email  es correcta!.");
            PlcHolder.classList.remove('active');
            ErrorMail.classList.remove('activo');
            ErrorMailTxt.classList.remove('activa');

        } else {
            PlcHolder.classList.add('active');
            ErrorMail.classList.add('activo');
            ErrorMailTxt.classList.add('activa');
            console.log("La dirección de email  es incorrecta!.");
            PlcHolder.value = "";
            PlcHolder.placeholder = "email@example.com";
        }

        /**Validate Password */
        /**Pass.value.replace(/\s+/g, '').length == 0) */
        var regPass= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (!Pass.value.length == "" ) {

            PlcHolderPass.classList.remove('active');
            ErrorPass.classList.remove('activo');
            ErrorPassTxt.classList.remove('activa');
            PlcHolderPass.value = "";
            PlcHolderPass.placeholder = "Password";
        } else {
            PlcHolderPass.classList.add('active');
            ErrorPass.classList.add('activo');
            ErrorPassTxt.classList.add('activa');
            PlcHolderPass.value = "";
            PlcHolderPass.placeholder = "";
        }

    
})