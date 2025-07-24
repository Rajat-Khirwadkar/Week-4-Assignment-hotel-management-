function addDocument(name, url) {
    const li = document.createElement('li');
    li.innerHTML = <a href="${url}" target="_blank">${name}</a>;
    document.querySelector('.doc-list').appendChild(li);
}

// Example:
addDocument("🖼 Passport Photo", "passport.jpg");

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

checkin.addEventListener("change", () => {
    checkout.min = checkin.value;
});

function toggleDocuments() {
    const details = document.getElementById("document-details");
    details.classList.toggle("hidden");
}



function signUp_btn() {
    alert("Sign-up functionality will be added here!");
    // Or redirect:
    // window.location.href = "signup.html";
}
function toggleDropdown() {
    const drop = document.getElementById("guestDropdown");
    drop.style.display = drop.style.display === "block" ? "none" : "block";
}

function updateGuestText() {
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const rooms = document.getElementById("rooms").value;

    document.getElementById("guestText").textContent =
        ${ adults } adults · ${ children } children · ${ rooms } room;
    document.getElementById("guestDropdown").style.display = "none";
}

// Optional: close when clicking outside
window.addEventListener("click", function (e) {
    const box = document.querySelector(".guest-box");
    const dropdown = document.getElementById("guestDropdown");
    if (!box.contains(e.target)) {
        dropdown.style.display = "none";
    }
});
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let current = 0;


    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 3000); // changes image every 3 seconds
});

ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
});
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});