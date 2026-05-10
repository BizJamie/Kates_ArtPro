function sendMessage(e) {
		e.preventDefault();
		const name    = document.getElementById('name').value.trim();
		const email   = document.getElementById('email').value.trim();
		const message = document.getElementById('message').value.trim();

		// validate
		if (!name || !email || !message) {
				alert('Please fill in all required fields.');
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
		const mailto = `mailto:you@example.com`
				+ `?subject=${encodeURIComponent('Contact form')}`
				+ `&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;

		// show thank you message and reset form
		const messageEl = document.querySelector('.contact-form-message');
		messageEl.textContent = "Thank you! Your message has been sent.";
		setTimeout(() => messageEl.textContent = "", 5000); // hide message after 5s
		document.querySelector('.contact-form').reset();
}

function handleModalClick(e) {

// Image modal popup
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const cards = document.querySelectorAll(".art-card img");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
		card.addEventListener("click", () => {
				modal.style.display = "flex";
				modalImg.src = card.src;
		});
});

closeBtn.addEventListener("click", () => {
		modal.style.display = "none";
});

window.addEventListener("click", (e) => {
		if (e.target === modal) {
				modal.style.display = "none";
		}
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
				e.preventDefault();

				document.querySelector(this.getAttribute('href'))
						.scrollIntoView({
								behavior: 'smooth'
						});
		});
});
