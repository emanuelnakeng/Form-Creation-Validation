document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('registration-form');
	const feedbackDiv = document.getElementById('form-feedback');

	form.addEventListener('submit', event => {
		event.preventDefault();
		feedbackDiv.style.display = 'block';
		const username = document.getElementById('username').value.trim();
		const email = document.getElementById('email').value.trim();
		const password = document.getElementById('password').value.trim();
		let isValid = true;
		const messages = [];

		if (username.length < 3) {
			isValid = false;
			messages.push('Username must be 3 characters long or more');
		}
		if (!email.includes('@') && !email.includes('.')) {
			isValid = false;
			messages.push('The email must contain and @ sign and a period.');
		}
		if (password.length <= 8) {
			isValid = false;
			messages.push('Password must be 3 characters long or more');
		}

		if (isValid) {
			feedbackDiv.style.display = 'block';
			feedbackDiv.textContent = 'Registration successful';
			feedbackDiv.style.color = '#28a745';
		} else {
			feedbackDiv.style.display = 'block';
			feedbackDiv.innerHTML = messages.join('<br>');
			feedbackDiv.style.color = '#dc3545';
		}
	});
});
