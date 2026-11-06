
(() => {
  const config = window.BUSINESS_CONFIG || {};

  // Business name
  document.querySelectorAll("[data-name]").forEach((element) => {
    element.textContent = config.name || "Durgesh Pangarkar";
  });

  // Email: open Gmail compose in a new tab
  const email = (config.email || "").trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  document.querySelectorAll("[data-email]").forEach((element) => {
    if (validEmail) {
      element.href =
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        encodeURIComponent(email);

      element.target = "_blank";
      element.rel = "noopener noreferrer";
      element.textContent = email;
      element.title = "Send an email using Gmail";
    } else {
      element.removeAttribute("href");
      element.textContent = "Email configuration unavailable";
    }
  });

  // WhatsApp
  const phone = (config.whatsapp || "").replace(/\D/g, "");

  document.querySelectorAll("[data-wa]").forEach((element) => {
    if (phone.length >= 11 && phone.length <= 15) {
      element.href =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(
          "Hello Durgesh, I visited your website and would like to discuss a business requirement."
        );

      element.target = "_blank";
      element.rel = "noopener noreferrer";
    } else {
      element.href = "#contact";
    }
  });

  // LinkedIn
  document.querySelectorAll("[data-linkedin]").forEach((element) => {
    const profile = config.linkedin || "";

    if (profile.startsWith("https://www.linkedin.com/")) {
      element.href = profile;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    } else {
      element.removeAttribute("href");
    }
  });

  // Google enquiry form
  const form = document.getElementById("formframe");
  const placeholder = document.getElementById("formplaceholder");

  if (form && config.googleFormEmbedUrl) {
    form.src = config.googleFormEmbedUrl;
    form.hidden = false;

    if (placeholder) {
      placeholder.hidden = true;
    }
  }

  // Automatic copyright year
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
