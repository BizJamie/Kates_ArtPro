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

        modal.style.display = "flex";

        modalTitle.textContent = title;
        modalImg.src = image.src;
        modalDescription.textContent = description;        
});

});

let currentIndex = 0;
function openModal(index) {

    currentIndex = index;

    const card = cards[currentIndex];
    const image = card.querySelector("img");
    const title = card.querySelector("h3").textContent;
    const description = card.querySelector("p").textContent;

    modal.style.display = "flex";
    modalImg.src = image.src;
    modalTitle.textContent = title;
    modalDescription.textContent = description;}

	cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        
		openModal(index);
});
});

	document.addEventListener("keydown", (e) => {

    if (modal.style.display === "flex") {

        // RIGHT ARROW
        if (e.key === "ArrowRight") {

            currentIndex++;

            if (currentIndex >= cards.length) {
                currentIndex = 0;
            }

            openModal(currentIndex);
}

        // LEFT ARROW
        if (e.key === "ArrowLeft") {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = cards.length - 1;
}

            openModal(currentIndex);
}

        // ESC KEY
        if (e.key === "Escape") {
            modal.style.display = "none";
}

}

});

//mobile phone integration
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            dispatchEvent.apply(e.key === "ArrowRight")
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
