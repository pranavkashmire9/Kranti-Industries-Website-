// Kranti Industries — shared site behavior

document.addEventListener('DOMContentLoaded', () => {

  const hasGSAP = typeof gsap !== 'undefined';
  if (hasGSAP && typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* ---------- Navbar auto-hide on scroll direction ---------- */
  let lastY = window.scrollY;
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (nav) {
      if (y > lastY && y > 200) nav.classList.add('nav-hidden');
      else nav.classList.remove('nav-hidden');
    }
    lastY = y;
  });

  /* ---------- Cursor glow (desktop) ---------- */
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  /* ---------- Split-text hero headline animation ---------- */
  document.querySelectorAll('.split-line').forEach(line => {
    const text = line.textContent;
    line.innerHTML = text.split(' ').map(w => `<span class="split-word">${w}&nbsp;</span>`).join('');
  });
  if (hasGSAP) {
    gsap.to('.split-word', {
      y: '0%',
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.045,
      delay: 0.2
    });
    gsap.from('.hero-content .eyebrow, .hero-content p, .hero-actions', {
      opacity: 0, y: 24, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.6
    });
  }

  /* ---------- GSAP scroll-triggered reveals (replaces plain fade) ---------- */
  if (hasGSAP && document.querySelectorAll('.reveal').length) {
    gsap.utils.toArray('.reveal').forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });
    // Staggered card grids
    gsap.utils.toArray('.grid-3, .grid-2, .cert-list, .client-grid').forEach(grid => {
      const items = grid.children;
      gsap.fromTo(items, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: grid, start: 'top 85%' }
      });
    });
  }

  /* ---------- Parallax hero background layers ---------- */
  if (hasGSAP) {
    gsap.utils.toArray('.parallax-layer').forEach(layer => {
      gsap.to(layer, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: layer, start: 'top top', end: 'bottom top', scrub: true }
      });
    });
    // Page-hero background subtle parallax
    document.querySelectorAll('.page-hero-bg, .hero-slide').forEach(bg => {
      gsap.to(bg, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: bg.closest('header'), start: 'top top', end: 'bottom top', scrub: true }
      });
    });
  }

  /* ---------- Magnetic buttons ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      if (hasGSAP) gsap.to(btn, { x: x * 0.3, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      if (hasGSAP) gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });

  /* ---------- 3D tilt on cards ---------- */
  document.querySelectorAll('.card, .why-card, .cert-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (hasGSAP) {
        gsap.to(card, { rotateY: px * 8, rotateX: -py * 8, duration: 0.5, ease: 'power2.out', transformPerspective: 700 });
      }
    });
    card.addEventListener('mouseleave', () => {
      if (hasGSAP) gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' });
    });
  });


  /* ---------- Scroll progress stripe ---------- */
  const stripe = document.querySelector('.scroll-stripe');
  const updateStripe = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    if (stripe) stripe.style.width = scrolled + '%';
  };
  document.addEventListener('scroll', updateStripe);
  updateStripe();

  /* ---------- Navbar glass-on-scroll ---------- */
  const navbar = document.querySelector('.navbar');
  const onScrollNav = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  document.addEventListener('scroll', onScrollNav);
  onScrollNav();

  /* ---------- Mobile nav drawer ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => drawer.classList.toggle('open'));
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
  }

  /* ---------- Hero slider ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots button');
  let current = 0;
  if (slides.length) {
    const showSlide = (i) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[i].classList.add('active');
      if (dots[i]) dots[i].classList.add('active');
      current = i;
    };
    dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
    setInterval(() => showSlide((current + 1) % slides.length), 5500);
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target.toLocaleString() + suffix; return; }
        el.textContent = cur.toLocaleString() + suffix;
        requestAnimationFrame(tick);
      };
      tick();
      countIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => countIO.observe(el));

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Gallery filter ---------- */
  const filterBtns = document.querySelectorAll('.gallery-tag button');
  const galleryItems = document.querySelectorAll('.gallery-grid a');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      galleryItems.forEach(item => {
        const show = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.style.display = show ? 'block' : 'none';
      });
    });
  });

  /* ---------- Contact form (demo — no backend) ---------- */
  const form = document.querySelector('#quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message sent';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2600);
    });
  }

});
