const MY_EMAIL = 'kateartprofolio@gmail.com';

function showMessage(message) {
		const messageEl = document.querySelector('.contact-form-message');
		messageEl.textContent = message;
		setTimeout(() => messageEl.textContent = "", 5000); // hide message after 5s
}

function sendMessage(e) {
		e.preventDefault();
		const name    = document.getElementById('name').value.trim();
		const email   = document.getElementById('email').value.trim();
		const message = document.getElementById('message').value.trim();

		// validate
		if (!name || !email || !message) {
				showMessage('Please fill in all required fields.');
				return;
		}

		// build email body from form data
		const body = [
				`Name: ${name}`,
				`Email: ${email}`,
				``,
				`Message:`,
				message
		].join('\n');

		// open link with user's default mail client
		const mailto = `mailto:${MY_EMAIL}`
				+ `?subject=${encodeURIComponent('Contact form')}`
				+ `&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;

		// show thank you message and reset form
		showMessage('Thank you! Your message has been sent.');
		document.querySelector('.contact-form').reset();
}

// Image modal popup
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const cards = document.querySelectorAll(".art-card");

function closeModal() {
		modal.style.display = 'none';
}

closeBtn.addEventListener("click", () => {
		closeModal();
});

window.addEventListener("click", (e) => {
		if (e.target === modal) {
				closeModal();
		}
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
				closeModal();
    }
});
