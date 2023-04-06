import throttle from 'lodash.throttle';


const email = document.querySelector('.feedback-form input')
const textarea = document.querySelector('.feedback-form textarea')
const button = document.querySelector('.feedback-form button')



email.addEventListener('input', onFormEmail);
textarea.addEventListener('input', onFormTextarea);
button.addEventListener('submit', onSubmit);



function onFormEmail(evt) {
    const massageEmail = evt.currentTarget.value.trim();

    localStorage.setItem('feedback-form-state', massageEmail);
}


function onFormTextarea(evt) {
    const massageTextarea = evt.currentTarget.value.trim();

    localStorage.setItem('feedback-form-state', massageTextarea);

    console.log(massage)
}


function onSubmit(evt){}