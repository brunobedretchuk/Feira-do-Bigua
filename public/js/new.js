let submit = document.querySelector('#submit');
let select = document.querySelector('select');
let inputs = document.querySelectorAll('input');
function checkInputs(){
    for (input of inputs){
        if (!input.value){return false}
    }
    return true;
}


submit.addEventListener('click' , ()=> {
    let x = checkInputs();
    if (select.value && x === true){
        submit.type = 'submit';
    }
})