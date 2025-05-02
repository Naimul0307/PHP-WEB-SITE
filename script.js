function showPopup(message, redirectUrl = null) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    }, 3000); // 3 seconds
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Enter your name";
        valid = false;
    }

    if (mobile === "") {
        mobileError.textContent = "Enter your mobile number";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Enter your email";
        valid = false;
    }

    if (!valid) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("email", email);

    fetch("save.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "Saved") {
            document.getElementById("dataForm").reset();
            showPopup("Data saved successfully!", "thankyou.html"); // <-- redirect here
        } else {
            alert("There was a problem saving the data.");
        }
    })
    .catch(error => {
        alert("Error: " + error.message);
        console.error(error);
    });
}
