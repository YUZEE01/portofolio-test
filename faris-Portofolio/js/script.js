document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling untuk navigasi
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Opsional: Efek animasi saat scroll (Anda bisa menggunakan library seperti AOS - Animate On Scroll)
  // Contoh sederhana: munculkan elemen saat di-scroll
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in"); // Tambahkan kelas untuk animasi
        observer.unobserve(entry.target); // Hentikan observasi setelah muncul
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Tambahkan CSS untuk efek fade-in di style.css
  // .fade-in {
  //     opacity: 0;
  //     transform: translateY(20px);
  //     transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  // }
  // .fade-in.visible { /* Class ini akan ditambahkan oleh JS */
  //     opacity: 1;
  //     transform: translateY(0);
  // }
  // Untuk contoh ini, saya menggunakan 'fade-in' langsung tanpa 'visible'
  // Cukup tambahkan ke CSS:
  // section.fade-in {
  //     opacity: 1;
  //     transform: translateY(0);
  // }

  // Tambahkan event listener untuk formulir (jika Anda ingin memprosesnya dengan JS)
  const contactForm = document.querySelector(".contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah pengiriman formulir default

      // Di sini Anda bisa menambahkan logika untuk mengirim data formulir,
      // misalnya menggunakan Fetch API ke backend (Node.js, PHP, dll.)
      // atau menggunakan layanan seperti Formspree.io.
      alert("Pesan Anda telah terkirim! (Ini hanya simulasi)");
      this.reset(); // Mengatur ulang formulir setelah pengiriman
    });
  }
});
