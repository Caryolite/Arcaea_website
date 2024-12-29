

const input_acc = document.querySelector("#username");
const input_pwd = document.querySelector("#password");
const submit_btn = document.querySelector("#login");

document.addEventListener("DOMContentLoaded", () => {

submit_btn.addEventListener("click", submit);

input_pwd.addEventListener("keyup", event=> {
    if (event.keyCode === 13) {
        submit_btn.click();
    }
});

input_acc.addEventListener("keyup", event=> {
    if (event.keyCode === 13) {
            input_pwd.focus();
        }
    });

})


const submit = () => {
    fetch("http://localhost:3030/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: input_acc.value,
            password: input_pwd.value
        })
    })
   .then(response => response.json())
   .then(data => {
        console.log(data);
        if (data.status == 'ok') {
            window.location.href = "/";
        } else {
            alert("Incorrect username or password");
        }
    })
   .catch(error => console.error(error));
}