'use strict'

const form = document.querySelector('form');
const input = form.elements.email;
const textarea = form.elements.message;

const formData = {
    email: "",
    message: ""
}
const key = "feedback-form-state";

const localSavedData = JSON.parse(localStorage.getItem(key)) ?? {};

formData.email = localSavedData.email ?? "";
formData.message = localSavedData.message ?? "";

input.value = formData.email ?? "";
textarea.value = formData.message ?? "";


form.addEventListener('input', saveData);

function saveData(event) {

    formData.email = input.value.trim();
    formData.message = textarea.value.trim();

    localStorage.setItem(key, JSON.stringify(formData));
}

form.addEventListener('submit', validator);

function validator(event) {
    event.preventDefault();

    if (input.value && textarea.value) {
        console.log(formData);

        localStorage.removeItem(key);

        formData.email = '';
        formData.message = '';

    form.reset();
    } else {
        alert('Fill please all fields');
    }
}

