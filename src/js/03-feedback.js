import throttle from 'lodash.throttle';


const feedback = document.querySelector('.feedback-form ')
const button = document.querySelector('.feedback-form button')

const formData = {}



button.addEventListener('submit', onSubmit);

feedback.addEventListener('input', e => {
formData[e.target.name] = e.target.value;
localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

 

function refreshTextarea() {
    const savedMassage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedMassage) {
        feedback.value = savedMassage;

    }
    console.log(savedMassage)
}
refreshTextarea();



// function onFormEmail(evt) {
//     const massageEmail = evt.currentTarget.value.trim();

//     localStorage.setItem('feedback-form-state', massageEmail);
// }


// function onFormTextarea(evt) {
//     const massageTextarea = evt.currentTarget.value.trim();

//     localStorage.setItem('feedback-form-state', massageTextarea);

//     console.log(massage)
// }


function onSubmit(evt){}