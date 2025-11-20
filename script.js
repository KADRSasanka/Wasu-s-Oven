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