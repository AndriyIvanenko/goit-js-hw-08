import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('[name = "email"]');
const feedbackMessage = document.querySelector('[name = "message"]');
let feedbackFormState = {};

if (!localStorage['feedback-form-state']) {
  feedbackFormState.email = '';
  feedbackFormState.message = '';
  localStorage['feedback-form-state'] = JSON.stringify(feedbackFormState);
} else {
  feedbackFormState = JSON.parse(localStorage['feedback-form-state']);
  feedbackEmail.value = feedbackFormState.email;
  feedbackMessage.value = feedbackFormState.message;
}

feedbackEmail.addEventListener('input', throttle(onEmailChange, 500));
function onEmailChange(event) {
  feedbackFormState.email = event.target.value;
  localStorage['feedback-form-state'] = JSON.stringify(feedbackFormState);
  //   console.log(localStorage);
}

feedbackMessage.addEventListener('input', throttle(onMessageChange, 500));
function onMessageChange(event) {
  feedbackFormState.message = event.target.value;
  localStorage['feedback-form-state'] = JSON.stringify(feedbackFormState);
  //   console.log(localStorage);
}

feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
function onFeedbackFormSubmit(event) {
  event.preventDefault();
  feedbackFormState = JSON.parse(localStorage['feedback-form-state']);
  console.log(feedbackFormState);
  localStorage.clear();
  feedbackFormState.email = '';
  feedbackFormState.message = '';
  //   console.log(localStorage);
  //   console.log(feedbackFormState);
  feedbackEmail.value = '';
  feedbackMessage.value = '';
}
