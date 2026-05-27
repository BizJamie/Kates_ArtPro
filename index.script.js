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
	    const modalTitle = document.getElementById("modalTitle");
	    const modalDescription = document.getElementById("modalDescription");
	
	    const cards = document.querySelectorAll(".art-card");
	    const closeBtn = document.querySelector(".close");

	    cards.forEach(card => {
	
	    card.addEventListener("click", () => {

        const image = card.querySelector("img");
        const title = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;

        modal.style.display = "flex";

        modalImg.src = image.src;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

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
