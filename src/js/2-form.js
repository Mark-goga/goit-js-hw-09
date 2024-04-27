const formData = {
    email: '',
    message: '',
};
const formEl = document.querySelector(".feedback-form");
const textAreaEl = formEl.elements.message;
const inputEl = formEl.elements.email;
formEl.addEventListener('submit', (evn) => {
    evn.preventDefault();
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email = savedData.email;
    formData.message = savedData.message;
    if (formData.email && formData.message) {
        console.log("formData.message:", formData.message);
        console.log("formData.email:", formData.email);
        localStorage.removeItem("feedback-form-state");
        formEl.reset();
    } else {
        alert("Fill please all fields");
    }
})

formEl.addEventListener('input', (evn) => {
    const formElement = evn.currentTarget.elements;
    formData.email = formElement.email.value.trim();
    formData.message = formElement.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

const localData = JSON.parse(localStorage.getItem("feedback-form-state")) ;
inputEl.value = localData ? localData.email : "";
textAreaEl.value = localData ? localData.message : "";
