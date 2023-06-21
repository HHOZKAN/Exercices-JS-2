
let button = document.querySelector('button[name="button"]');

button.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.value=''
    })
    
})