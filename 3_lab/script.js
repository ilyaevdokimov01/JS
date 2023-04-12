const registerButton = document.getElementById("register-button");
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];
const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("show-password");
const errorMessage = document.getElementsByClassName("error-message")[0];

// открытие модалки при нажатии кнопки регистрация
registerButton.addEventListener("click", function() {
	modal.style.display = "block";
});

// закрытие модалки при нажатии кнопки закрытия
closeModal.addEventListener("click", function() {
	modal.style.display = "none";
});

// закрытие модалки при нажатии за пределами 
window.addEventListener("click", function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
});

// видимость пароля при нажатии на кнопку
showPasswordButton.addEventListener("pointerdown", function() {
	passwordInput.type = "text";
});

showPasswordButton.addEventListener("pointerup", function() {
	passwordInput.type = "password";
});

// подтверждение правильность пароля и почты
emailInput.addEventListener("blur", function() {
	if (!emailInput.checkValidity()) {
		emailInput.setCustomValidity("Please enter a valid email.");
		errorMessage.textContent = "Please enter a valid email.";
	}
	else {
		emailInput.setCustomValidity("");
		errorMessage.textContent = "";
	}
});

passwordInput.addEventListener("blur", function() {
	if (passwordInput.value.length < 6) {
		passwordInput.setCustomValidity("Password must be at least 6 characters.");
		errorMessage.textContent = "Password must be at least 6 characters.";
	}
	else {
		passwordInput.setCustomValidity("");
		errorMessage.textContent = "";
	}
});

// отправка формы
registerForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const formData = new FormData(registerForm);
	console.log("Email: " + formData.get("email") + ", Password: " + formData.get("password"));
	modal.style.display = "none";
});
