const contactUsBtn = document.querySelector('.contact-us__button');
contactUsBtn.addEventListener('click', saveUserData);

async function saveUserData(){
    const nameUser = document.getElementById('contact-us__input-name').value;
    const emailUser = document.getElementById('contact-us__input-email').value;
    const messageUser = document.getElementById('contact-us__input-message').value;
    const response = await fetch('/api/contact-us', {
        method: 'POST',
        body: JSON.stringify({name: nameUser, email: emailUser, message: messageUser}),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    });
    if (response.ok) {
        const data = await response.json();
        // showToast("success", data.data);
    }
}

// async function getUserData() {
//     const data = await (await fetch('api/contact-us')).json();
//     showToast("success", data.data);
// }

// getUserData();