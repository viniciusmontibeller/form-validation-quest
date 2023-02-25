const inputRequired = document.querySelectorAll('.required')
const submit = document.getElementById('submit')
const errorMessage = document.querySelectorAll('.error-message')

inputRequired.forEach(function(input, index){
    input.addEventListener('change', function(){
        if(input.value !== ""){
            input.classList.remove('invalid')
            input.classList.add('valid')
            errorMessage[index].classList.remove('show')
        }else{
            input.classList.remove('valid')
            input.classList.add('invalid')
            errorMessage[index].classList.add('show')
        }
    })
})

submit.addEventListener('click', function(click){
    click.preventDefault()

    inputRequired.forEach(function(input, index){
        if(input.value !== ""){
            input.classList.remove('invalid')
            input.classList.add('valid')
            errorMessage[index].classList.remove('show')
        }else{
            input.classList.remove('valid')
            input.classList.add('invalid')
            errorMessage[index].classList.add('show')
        }
    })
})