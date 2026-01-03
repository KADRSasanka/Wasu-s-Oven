 const track = document.getElementById("slider");
    let slides = Array.from(document.querySelectorAll(".slide"));
    let currentIndex = 0;

    // Clone slides for infinite loop
    function cloneSlides() {
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
      });
      slides = Array.from(document.querySelectorAll(".slide"));
    }

    function updateSlider() {
      slides.forEach(slide => slide.classList.remove("active"));
      
      let visibleIndex = currentIndex % (slides.length / 2);
      slides[visibleIndex].classList.add("active");

      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      currentIndex++;

      // Reset to start for seamless infinite loop
      if (currentIndex >= slides.length / 2) {
        setTimeout(() => {
          track.style.transition = "none";
          currentIndex = 0;
          updateSlider();
          void track.offsetWidth; // Force reflow
          track.style.transition = "transform 1s ease-in-out";
        }, 1000);
      }

      updateSlider();
    }

    cloneSlides();
    updateSlider();
    setInterval(nextSlide, 10000);


    // type slider begins
    const sha = document.getElementById('typeTrack');
    let types = Array.from(document.querySelectorAll('.type'));
    const totalTypes = types.length / 2; // original types count
    let index = 0;

    // Move one slide
    function moveSlide() {
      index++;
      sha.style.transition = 'transform 0.5s ease-in-out';
      sha.style.transform = `translateX(-${index * (100 / totalTypes)}%)`;

      // Reset for seamless infinite loop
      if (index >= totalTypes) {
        setTimeout(() => {
          sha.style.transition = 'none';
          index = 0;
          sha.style.transform = `translateX(0)`;
          void sha.offsetWidth; // force reflow
          sha.style.transition = 'transform 5s ease-in-out';
        }, 500);
      }
    }

    // Move one slide every 4 seconds
    setInterval(moveSlide, 4000);

    // type slider ends


    function updatePrice(select) {
    const card = select.closest(".item-card-content");
    const priceSpan = card.querySelector(".price span");
    priceSpan.textContent = select.value;
}

// Nav bar for mobile

const navbarToggle = document.querySelector('.toggle_menu');
const navbarMenu = document.querySelector('.navbar_menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});


 function openOrderForm(id) {
      document.getElementById("itemId").value = "Item ID: " + id;
      document.getElementById("orderModal").style.display = "block";
    }

    function closeOrderForm() {
      document.getElementById("orderModal").style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      let modal = document.getElementById("orderModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }

    //order form

    function sendToWhatsApp() {
      let id = document.getElementById("itemId").value;
      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let cakeType = document.getElementById("cakeType").value;
      let date = document.getElementById("date").value;
      let message = document.getElementById("message").value;

      let whatsappNumber = "94768590559";

      let text =
        `🍰 *New Cake Order*%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📞 Phone: ${phone}%0A` +
        `🆔 ${id}%0A` +
        `🎂 Cake Type: ${cakeType}%0A` +
        `📅 Event Date: ${date}%0A` +
        `📝 Message: ${message}`;

        

      let url = `https://wa.me/${+94768590559}?text=${text}`;
      window.open(url, "_blank");
    }


    function updatePrize(select) {
    const card = select.closest(".ahaliya");
    const priceSpan = card.querySelector(".price span");
    priceSpan.textContent = select.value;
}

    function updatePrice(select) {
    const card = select.closest(".item-card-content");
    const priceSpan = card.querySelector(".price span");
    priceSpan.textContent = select.value;
}