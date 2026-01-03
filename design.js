function scrollPortfolio(direction) {
    const container = document.getElementById("portfolioScroll");
    const scrollAmount = 450;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  //   motion video settings
  // Unmute toggle for video
  let isMuted = true;
  function toggleMute() {
    const video = document.getElementById("autoplayVideo");
    const btn = document.getElementById("unmuteBtn");

    if (isMuted) {
      video.muted = false;
      btn.textContent = "🔊";
      isMuted = false;
    } else {
      video.muted = true;
      btn.textContent = "🔇";
      isMuted = true;
    }
  }

  // Open lightbox for images
  function openLightbox(imageSrc) {
    const lightbox = document.getElementById("motionLightbox");
    const img = document.getElementById("motionLightboxImg");

    img.src = imageSrc;
    lightbox.style.display = "flex";
    setTimeout(() => {
      lightbox.style.opacity = "1";
    }, 10);
  }

  // Close lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("motionLightbox");
    lightbox.style.opacity = "0";
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300);
  }

  // Close on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // Close on click outside
  document
    .getElementById("motionLightbox")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeLightbox();
      }
    });

  // Ensure video autoplays
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("autoplayVideo");

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay prevented. User interaction needed.");
      });
    }
  });