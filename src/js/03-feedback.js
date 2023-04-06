import throttle from 'lodash.throttle';


const feedback = document.querySelector('.feedback-form ')
const formData = {}


feedback.addEventListener('submit', onSubmit)


feedback.addEventListener('input', throttle( e => {
    formData[e.target.name] = e.target.value.trim();
localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))


function onSubmit(evt) {
    evt.preventDefault();
     console.log(formData)
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
}


function refreshTextarea() {
   const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
        for (const key in savedData) {
        if (savedData.hasOwnProperty(key)) {
            const textarea = document.querySelector(`textarea[name=${key}]`);
            const email = document.querySelector(`input[name=${key}]`);
          if (textarea) {
            textarea.value = savedData[key];
            } if (email) {
              email.value = savedData[key];
          }
        }
      }
    }
}
refreshTextarea();





