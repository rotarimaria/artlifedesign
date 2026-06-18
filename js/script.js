document.addEventListener("DOMContentLoaded", function () {
  const works = [
    {
      title: "Bonjour Tour",
      service: "Litere în volum & Standuri",
      category: "volum",
      image: "images/BonjourLightBox.jpg",
      date: "2025",
      desc: "Light box personalizat pentru promovare vizuală.",
      tags: "Light Box, Exterior, Vizibilitate",
      search: "bonjour tour light box litere volum stand"
    },
    {
      title: "Urnă personalizată",
      service: "P.O.S.M.",
      category: "posm",
      image: "images/box.jpg",
      date: "2025",
      desc: "Material promoțional pentru campanii.",
      tags: "Campanie, P.O.S.M., Personalizat",
      search: "urna box donatie posm campanie"
    },
    {
      title: "Ambalaj Market",
      service: "Branding Auto",
      category: "auto",
      image: "images/brand_auto1.jpg",
      date: "2025",
      desc: "Colantare auto pentru transport comercial.",
      tags: "Auto, Colantare, Comercial",
      search: "ambalaj market auto branding colantare"
    },
    {
      title: "Documente MD",
      service: "Branding Auto",
      category: "auto",
      image: "images/brand_auto2.jpg",
      date: "2025",
      desc: "Grafică aplicată pe transport comercial.",
      tags: "Auto, Microbus, Brand",
      search: "documente md auto microbus branding colantare"
    },
    {
      title: "Cub promoțional",
      service: "P.O.S.M.",
      category: "posm",
      image: "images/cub-sticla.jpg",
      date: "2025",
      desc: "Element personalizat pentru expunere vizuală.",
      tags: "Retail, Campanie, Display",
      search: "cub sticla vara vara aquacity posm stand"
    },
    {
      title: "Stand promoțional",
      service: "P.O.S.M.",
      category: "posm",
      image: "images/cub-sticla0.jpg",
      date: "2025",
      desc: "Material personalizat pentru campanie.",
      tags: "Stand, P.O.S.M., Brand",
      search: "stand vara vara aquacity posm"
    },
    {
      title: "Fișe de preț",
      service: "Poligrafie",
      category: "poligrafie",
      image: "images/fise_pret.jpg",
      date: "2025",
      desc: "Materiale tipărite pentru prezentarea produselor.",
      tags: "Print, Meniu, Produs",
      search: "fise pret meniuri poligrafie print"
    },
    {
      title: "Good Break",
      service: "Litere în volum & Standuri",
      category: "volum",
      image: "images/good-break.jpg",
      date: "2025",
      desc: "Reclamă luminoasă pentru fațadă.",
      tags: "Fațadă, Luminos, Volumetric",
      search: "good break litere volum light box fatada"
    },
    {
      title: "Etichete produs",
      service: "Poligrafie",
      category: "poligrafie",
      image: "images/inghetata_uv.jpg",
      date: "2025",
      desc: "Print personalizat pentru produse.",
      tags: "Etichete, Print, Produs",
      search: "inghetata uv print etichete poligrafie"
    },
    {
      title: "Mango Passion Fruit",
      service: "Poligrafie",
      category: "poligrafie",
      image: "images/inghetata-uv1.jpg",
      date: "2025",
      desc: "Etichete personalizate pentru produse.",
      tags: "Etichete, UV, Produs",
      search: "mango passion fruit uv print etichete poligrafie"
    },
    {
      title: "Logo ArtLife Design",
      service: "Litere în volum & Standuri",
      category: "volum",
      image: "images/litere_volum1.jpg",
      date: "2025",
      desc: "Element volumetric pentru identitate vizuală.",
      tags: "Logo, Interior, Volumetric",
      search: "art life design litere volum logo interior"
    },
    {
      title: "Smile Dent",
      service: "Litere în volum & Standuri",
      category: "volum",
      image: "images/litere_volum2.jpg",
      date: "2025",
      desc: "Reclamă de fațadă cu litere volumetrice.",
      tags: "Fațadă, Clinică, Volumetric",
      search: "smile dent litere volum fatada"
    },
    {
      title: "Ambalaj Market",
      service: "Litere în volum & Standuri",
      category: "volum",
      image: "images/litere_volum3.jpg",
      date: "2025",
      desc: "Elemente de fațadă pentru spațiu comercial.",
      tags: "Fațadă, Market, Vizibilitate",
      search: "ambalaj market litere volum stand"
    },
    {
      title: "Lux Tavane",
      service: "Branding Auto",
      category: "auto",
      image: "images/lux-tavene.jpg",
      date: "2025",
      desc: "Colantare auto pentru servicii locale.",
      tags: "Auto, Colantare, Servicii",
      search: "lux tavane auto branding colantare"
    },
    {
      title: "Stickere personalizate",
      service: "Poligrafie",
      category: "poligrafie",
      image: "images/plotter-2.jpg",
      date: "2025",
      desc: "Decupare și print pentru etichete de brand.",
      tags: "Stickere, Plotter, Etichete",
      search: "stickere etichete plotter poligrafie"
    }
  ];

  const navbar = document.getElementById("navbarTop");
  const scrollProgress = document.getElementById("scrollProgress");
  const backTop = document.getElementById("backTop");
  const navMenu = document.getElementById("navMenu");
  const navLinksWrap = document.getElementById("navLinksWrap");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (navbar) navbar.classList.toggle("nav-scrolled", scrollTop > 40);
    if (scrollProgress) scrollProgress.style.setProperty("--scroll-progress", percent + "%");
    if (backTop) backTop.style.display = scrollTop > 350 ? "grid" : "none";

    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 130;

      if (scrollTop >= top && scrollTop < top + section.offsetHeight) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      link.classList.toggle("active", href === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  if (navMenu && navLinksWrap) {
    navMenu.addEventListener("click", function () {
      navLinksWrap.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      event.preventDefault();

      window.scrollTo({
        top: target.offsetTop - 78,
        behavior: "smooth"
      });

      if (navLinksWrap) navLinksWrap.classList.remove("active");
    });
  });

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  function showToast(text, type = "success") {
    const toast = document.getElementById("siteToast");

    if (!toast) return;

    toast.textContent = text;
    toast.className = "site-toast show " + type;

    setTimeout(function () {
      toast.className = "site-toast";
    }, 2500);
  }

  async function copyToClipboard(value) {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      showToast("Textul a fost copiat.", "success");
    } catch {
      showToast("Nu s-a putut copia textul.", "error");
    }
  }

  document.addEventListener("click", function (event) {
    const copyElement = event.target.closest(".copy-text");

    if (!copyElement) return;

    const value = copyElement.dataset.copy;

    if (!value) return;

    copyToClipboard(value);
  });

  function selectServiceInForm(serviceName) {
    const serviceSelect = document.querySelector('select[name="serviciu"]');

    if (!serviceSelect || !serviceName) return;

    Array.from(serviceSelect.options).forEach((option) => {
      option.selected = option.value === serviceName;
    });
  }

  const serviceFromUrl = new URLSearchParams(window.location.search).get("service");

  if (serviceFromUrl) {
    selectServiceInForm(decodeURIComponent(serviceFromUrl));
  }

  document.addEventListener("click", function (event) {
    const orderButton = event.target.closest("[data-order-service]");

    if (!orderButton) return;

    event.preventDefault();

    const serviceName = orderButton.dataset.orderService || "";
    const contactSection = document.querySelector("#contact");
    const modal = document.getElementById("galleryModal");

    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }

    if (contactSection) {
      selectServiceInForm(serviceName);

      setTimeout(function () {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 250);
    } else {
      window.location.href = `index.html?service=${encodeURIComponent(serviceName)}#contact`;
    }
  });

  function cardTemplate(work, isHome = false) {
    const cardClass = isHome ? "work-card reveal" : "portfolio-card reveal";
    const mediaClass = isHome ? "work-img gallery-item" : "portfolio-media gallery-item";
    const serviceParam = encodeURIComponent(work.service);
    const orderHref = isHome ? "#contact" : `index.html?service=${serviceParam}#contact`;

    return `
      <article class="${cardClass}" data-category="${work.category}" data-search="${work.search}">
        <button class="${mediaClass}"
          data-full="${work.image}"
          data-title="${work.title}"
          data-service="${work.service}"
          data-date="${work.date}"
          data-desc="${work.desc}"
          data-tags="${work.tags}">
          <img src="${work.image}" alt="${work.title}">
          <span>${work.service.replace("Litere în volum & Standuri", "Litere & Standuri")}</span>
          ${isHome ? `<div class="media-overlay"><i class="bi bi-arrows-fullscreen"></i><small>Vezi lucrarea</small></div>` : ""}
        </button>

        <div class="${isHome ? "work-info" : "portfolio-content"}">
          <small>${work.service}</small>
          <h3>${work.title}</h3>
          <p>${work.desc}</p>

          <div class="work-actions">
            <a href="${orderHref}" class="work-order-btn btn-arrow" data-order-service="${work.service}">
              Comandă acum
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  const homeWorksGrid = document.getElementById("homeWorksGrid");
  const portfolioGrid = document.getElementById("portfolioGrid");

  if (homeWorksGrid) {
    homeWorksGrid.innerHTML = works.slice(0, 4).map((work) => cardTemplate(work, true)).join("");
  }

  if (portfolioGrid) {
    portfolioGrid.innerHTML = works.map((work) => cardTemplate(work, false)).join("");
  }

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const serviceFilters = document.querySelectorAll(".service-filter");
  const serviceCards = document.querySelectorAll("[data-service-card]");
  const serviceSearch = document.getElementById("serviceSearch");
  let activeService = "all";

  function renderServices() {
    const query = serviceSearch ? serviceSearch.value.toLowerCase().trim() : "";

    serviceCards.forEach((card) => {
      const cardService = card.dataset.serviceCard;
      const searchText = ((card.dataset.searchService || "") + " " + card.textContent).toLowerCase();

      const matchFilter = activeService === "all" || activeService === cardService;
      const matchSearch = !query || searchText.includes(query);

      card.classList.toggle("hidden", !(matchFilter && matchSearch));
    });
  }

  serviceFilters.forEach((button) => {
    button.addEventListener("click", function () {
      activeService = this.dataset.service || "all";

      serviceFilters.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      renderServices();
    });
  });

  if (serviceSearch) serviceSearch.addEventListener("input", renderServices);
  renderServices();

  function createContinuousCarousel(trackSelector, options = {}) {
    const track = document.querySelector(trackSelector);

    if (!track) return;

    const shell = track.parentElement;
    const speed = options.speed || 0.35;

    let offset = 0;
    let paused = false;

    function getGap() {
      return parseFloat(getComputedStyle(track).gap) || 0;
    }

    function getFirstSize() {
      const first = track.children[0];

      if (!first) return 0;

      return first.getBoundingClientRect().width + getGap();
    }

    function animate() {
      if (!paused) {
        offset -= speed;

        const firstSize = getFirstSize();

        if (firstSize && Math.abs(offset) >= firstSize) {
          offset += firstSize;
          track.appendChild(track.firstElementChild);
        }

        track.style.transform = `translateX(${offset}px)`;
      }

      requestAnimationFrame(animate);
    }

    if (shell) {
      shell.addEventListener("mouseenter", function () {
        paused = true;
      });

      shell.addEventListener("mouseleave", function () {
        paused = false;
      });

      shell.addEventListener("focusin", function () {
        paused = true;
      });

      shell.addEventListener("focusout", function () {
        paused = false;
      });
    }

    animate();
  }

  createContinuousCarousel("#reviewsTrack", {
    speed: 0.45
  });

  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("galleryModalImage");
  const modalTitle = document.getElementById("galleryModalTitle");
  const modalService = document.getElementById("galleryModalService");
  const modalDate = document.getElementById("galleryModalDate");
  const modalDesc = document.getElementById("galleryModalDesc");
  const modalTags = document.getElementById("galleryModalTags");
  const modalClose = document.getElementById("galleryModalClose");
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");

  let currentGalleryIndex = 0;

  function renderGallery(index) {
    const item = galleryItems[index];

    if (!item || !modalImg) return;

    modalImg.src = item.dataset.full || "";
    modalImg.alt = item.dataset.title || "Lucrare ArtLife Design";

    if (modalTitle) modalTitle.textContent = item.dataset.title || "Lucrare ArtLife Design";
    if (modalService) modalService.textContent = item.dataset.service || "Lucrare realizată";
    if (modalDate) modalDate.textContent = item.dataset.date || "";
    if (modalDesc) modalDesc.textContent = item.dataset.desc || "";

    if (modalTags) {
      modalTags.innerHTML = "";

      const tags = (item.dataset.tags || "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        modalTags.appendChild(span);
      });
    }

    const galleryOrderBtn = document.getElementById("galleryOrderBtn");

    if (galleryOrderBtn) {
      const serviceName = item.dataset.service || "";
      galleryOrderBtn.dataset.orderService = serviceName;

      if (document.getElementById("contact")) {
        galleryOrderBtn.href = "#contact";
      } else {
        galleryOrderBtn.href = `index.html?service=${encodeURIComponent(serviceName)}#contact`;
      }
    }
  }

  function openGallery(index) {
    if (!modal || !galleryItems.length) return;

    currentGalleryIndex = index;
    renderGallery(index);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeGallery() {
    if (!modal) return;

    modal.classList.remove("active");

    if (modalImg) modalImg.src = "";

    document.body.style.overflow = "";
  }

  function nextGallery() {
    if (!galleryItems.length) return;

    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    renderGallery(currentGalleryIndex);
  }

  function prevGallery() {
    if (!galleryItems.length) return;

    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    renderGallery(currentGalleryIndex);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      openGallery(index);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeGallery);
  if (galleryNext) galleryNext.addEventListener("click", nextGallery);
  if (galleryPrev) galleryPrev.addEventListener("click", prevGallery);

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeGallery();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!modal || !modal.classList.contains("active")) return;

    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowRight") nextGallery();
    if (event.key === "ArrowLeft") prevGallery();
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const workSearch = document.getElementById("workSearch");
  const noResults = document.getElementById("noResults");
  let activeFilter = "all";

  function renderPortfolio() {
    const cards = document.querySelectorAll(".portfolio-card");
    const query = workSearch ? workSearch.value.toLowerCase().trim() : "";
    let visibleCount = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const searchText = ((card.dataset.search || "") + " " + card.textContent).toLowerCase();

      const matchFilter = activeFilter === "all" || category === activeFilter;
      const matchSearch = !query || searchText.includes(query);

      const isVisible = matchFilter && matchSearch;

      card.style.display = isVisible ? "" : "none";

      if (isVisible) visibleCount++;
    });

    if (noResults) noResults.style.display = visibleCount ? "none" : "block";
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      activeFilter = this.dataset.filter || "all";

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      renderPortfolio();
    });
  });

  if (workSearch) {
    workSearch.addEventListener("input", renderPortfolio);
  }

  const filterFromUrl = new URLSearchParams(window.location.search).get("filter");

  if (filterFromUrl) {
    const selectedFilter = document.querySelector(`.filter-btn[data-filter="${filterFromUrl}"]`);

    if (selectedFilter) {
      selectedFilter.click();
    }
  }

  renderPortfolio();

  const forms = document.querySelectorAll(".ajax-form");

  forms.forEach((form) => {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const messageBox = form.querySelector(".form-message");
      const submitButton = form.querySelector("button[type='submit']");

      if (messageBox) {
        messageBox.textContent = "Se trimite mesajul...";
        messageBox.className = "form-message";
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.style.opacity = "0.7";
      }

      try {
        const formData = new FormData(form);

        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          form.reset();

          if (messageBox) {
            messageBox.textContent = "Mesajul a fost trimis cu succes. Vă vom contacta în curând.";
            messageBox.className = "form-message success";
          }

          showToast("Mesajul a fost trimis cu succes.", "success");
        } else {
          throw new Error("Eroare la trimitere");
        }
      } catch {
        if (messageBox) {
          messageBox.textContent = "Mesajul nu a fost trimis. Verificați datele și încercați din nou.";
          messageBox.className = "form-message error";
        }

        showToast("Mesajul nu a fost trimis.", "error");
      }

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.style.opacity = "";
      }
    });
  });
});