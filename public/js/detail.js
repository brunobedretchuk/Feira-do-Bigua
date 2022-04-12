let submit = document.querySelector('#submit');
submit.addEventListener('click' , ()=> {
    if (confirm('Tem certeza que deseja remover esse item do estoque?')){
        submit.type = 'submit';
    }
})