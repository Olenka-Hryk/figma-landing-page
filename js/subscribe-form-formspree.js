const form = document.querySelector("#subscribe-form-formspree");
const inputField = document.getElementById("subscribe__form-input");
const subscribeButton = document.querySelector(".subscribe__form-button");
const statusValidation = document.querySelector(".subscribe__form-status");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", handleSubmit);

inputField.oninput = function () {
    statusValidation.innerText = "";
    inputField.classList.remove("incorrect");
    inputField.classList.remove("correct");
    if (inputField.value.match(mailFormat)) {
        inputField.classList.add("correct");
        inputField.style.outline = "none";
    }
}


function handleSubmit(event) {
    statusValidation.innerText = "";
    inputField.classList.remove("incorrect");
    inputField.classList.remove("correct");
    event.preventDefault();
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                showToast("success", "Thanks for your submission!");
                form.reset();
                subscribeButton.classList.remove("btn--primary");
                subscribeButton.setAttribute("class", "btn btn--third subscribe__form-button");
                subscribeButton.innerText = "Subscribed";
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        const errors = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                        statusValidation.innerText = errors;
                        inputField.classList.add("incorrect");
                        showAlert("error", errors);
                    } else {
                        showToast("warning", "Oops! There was a problem submitting your form");
                    }
                });
            }
        })
        .catch(() => {
            showToast("error", "Oops! There was a problem submitting your form");
        });
}