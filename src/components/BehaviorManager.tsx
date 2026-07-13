'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function BehaviorManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll if it was a link click (not a browser back/forward)
    if (typeof window !== 'undefined') {
      const isNavigating = sessionStorage.getItem('kranti_navigating');
      if (isNavigating === 'true') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        sessionStorage.removeItem('kranti_navigating');
      }
    }

    let cleanupFunc: (() => void) | undefined;

    // Fix for Next.js routing NotFoundError with GSAP pins:
    // Revert all ScrollTriggers synchronously on link click before React unmounts the page
    const handleBeforeNavigate = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin) && target.target !== '_blank') {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('kranti_navigating', 'true');
          if ((window as any).ScrollTrigger) {
            (window as any).ScrollTrigger.getAll().forEach((t: any) => t.revert());
          }
        }
      }
    };
    if (typeof document !== 'undefined') {
      document.addEventListener('click', handleBeforeNavigate, true);
    }

    const runInit = () => {
      // 0. Initialize Lenis Smooth Scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easing curve
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      // Sync scroll events with GSAP ScrollTrigger
      lenis.on('scroll', () => {
        if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.update();
        }
      });

      // Frame loop
      let lenisRafId: number;
      const raf = (time: number) => {
        lenis.raf(time);
        lenisRafId = requestAnimationFrame(raf);
      };
      lenisRafId = requestAnimationFrame(raf);

      // 1. Navbar auto-hide on scroll direction
      let lastY = window.scrollY;
      const nav = document.querySelector('.navbar');
      const handleScrollNav = () => {
        const y = window.scrollY;
        if (nav) {
          if (y > lastY && y > 200) nav.classList.add('nav-hidden');
          else nav.classList.remove('nav-hidden');
        }
        lastY = y;
      };
      window.addEventListener('scroll', handleScrollNav, { passive: true });

      // 2. Cursor glow
      const glow = document.querySelector('.cursor-glow') as HTMLElement;
      const handleMouseMoveCursor = (e: MouseEvent) => {
        if (glow) {
          glow.style.left = e.clientX + 'px';
          glow.style.top = e.clientY + 'px';
        }
      };
      if (glow) {
        window.addEventListener('mousemove', handleMouseMoveCursor, { passive: true });
      }

      // 3. Scroll progress stripe
      const stripe = document.querySelector('.scroll-stripe') as HTMLElement;
      const updateStripe = () => {
        const h = document.documentElement;
        const scrolled = (h.scrollHeight - h.clientHeight) > 0 
          ? (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100 
          : 0;
        if (stripe) stripe.style.width = scrolled + '%';
      };
      document.addEventListener('scroll', updateStripe, { passive: true });
      updateStripe();

      // 4. Navbar glass-on-scroll
      const navbar = document.querySelector('.navbar');
      const onScrollNav = () => {
        if (navbar) {
          if (window.scrollY > 40) navbar.classList.add('scrolled');
          else navbar.classList.remove('scrolled');
        }
      };
      document.addEventListener('scroll', onScrollNav, { passive: true });
      onScrollNav();

      // 5. Mobile nav drawer toggle
      const toggle = document.querySelector('.nav-toggle');
      const drawer = document.querySelector('.mobile-drawer');
      const handleToggleClick = () => {
        if (drawer) drawer.classList.toggle('active');
        if (toggle) toggle.classList.toggle('active');
      };
      const handleBackdropClick = (e: Event) => {
        if (e.target === drawer) {
          if (drawer) drawer.classList.remove('active');
          if (toggle) toggle.classList.remove('active');
        }
      };
      if (toggle && drawer) {
        toggle.addEventListener('click', handleToggleClick);
        drawer.addEventListener('click', handleBackdropClick);
      }
      const drawerLinks = drawer?.querySelectorAll('a');
      const handleLinkClick = () => {
        if (drawer) drawer.classList.remove('active');
        if (toggle) toggle.classList.remove('active');
      };
      drawerLinks?.forEach(a => a.addEventListener('click', handleLinkClick));

      // 6. FAQ Accordion
      document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-q');
        const a = item.querySelector('.faq-a') as HTMLElement;
        if (q && a) {
          q.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(o => {
              o.classList.remove('open');
              const innerA = o.querySelector('.faq-a') as HTMLElement;
              if (innerA) innerA.style.maxHeight = '';
            });
            if (!isOpen) {
              item.classList.add('open');
              a.style.maxHeight = a.scrollHeight + 'px';
            }
          });
        }
      });

      // 7. Gallery Filter
      const filterBtns = document.querySelectorAll('.gallery-tag button');
      const galleryItems = document.querySelectorAll('.gallery-grid a') as NodeListOf<HTMLElement>;
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

      // 8. Contact form submit
      const form = document.querySelector('#quoteForm') as HTMLFormElement;
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
          if (btn) {
            const original = btn.textContent;
            btn.textContent = 'Message sent';
            btn.disabled = true;
            setTimeout(() => {
              btn.textContent = original;
              btn.disabled = false;
              form.reset();
            }, 2600);
          }
        });
      }

      // GSAP Behaviors
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      let sliderInterval: any;
      let countObserver: IntersectionObserver | undefined;

      if (gsap) {
        if (ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        // Split-text hero headline animation
        const splitLines = document.querySelectorAll('.split-line');
        if (splitLines.length) {
          gsap.to('.split-word', {
            y: '0%',
            duration: 1.1,
            ease: 'power4.out',
            stagger: 0.045,
            delay: 0.2
          });
        }

        const heroContent = document.querySelector('.hero-content, .page-hero');
        if (heroContent) {
          gsap.from('.hero-content .eyebrow, .hero-content p, .hero-actions, .hero-badges .floating-chip, .page-hero .eyebrow, .page-hero p', {
            opacity: 0,
            y: 24,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 0.6
          });
        }

        // Scroll reveals
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length) {
          revealElements.forEach((el: any) => {
            gsap.fromTo(el, { opacity: 0, y: 50 }, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true }
            });
          });

          // Staggered card grids
          gsap.utils.toArray('.grid-3, .grid-2, .cert-list, .client-grid').forEach((grid: any) => {
            const items = grid.children;
            gsap.fromTo(items, { opacity: 0, y: 40 }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.1,
              scrollTrigger: { trigger: grid, start: 'top 85%', once: true }
            });
          });
        }

        // Entrance animations for cards can remain here as they don't add pinSpacing
        const luxuryCards = document.querySelectorAll('.luxury-card-anim');
        if (luxuryCards.length) {
          gsap.fromTo(luxuryCards, {
            opacity: 0,
            y: 60,
            scale: 0.95
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.services-pin-section',
              start: 'top 75%',
              once: true
            }
          });
        }

        // Parallax hero background layers
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        if (parallaxLayers.length) {
          gsap.utils.toArray('.parallax-layer').forEach((layer: any) => {
            gsap.to(layer, {
              yPercent: 18,
              ease: 'none',
              scrollTrigger: { trigger: layer, start: 'top top', end: 'bottom top', scrub: true }
            });
          });
        }

        // Page-hero background subtle parallax
        const pageHeroBgs = document.querySelectorAll('.page-hero-bg, .hero-slide');
        if (pageHeroBgs.length) {
          pageHeroBgs.forEach(bg => {
            const closestHeader = bg.closest('header');
            if (closestHeader) {
              gsap.to(bg, {
                yPercent: 12,
                ease: 'none',
                scrollTrigger: { trigger: closestHeader, start: 'top top', end: 'bottom top', scrub: true }
              });
            }
          });
        }

        // Sequential ScrollTrigger Creation for Sections (CRITICAL FOR DOM ORDER)
        // This ensures pinSpacing is calculated sequentially from top to bottom of the page
        document.querySelectorAll('section').forEach((sec: any) => {
          const isDesktop = window.innerWidth >= 1024;

          if (sec.classList.contains('services-pin-section')) {
            // --- HORIZONTAL SCROLL SECTION ---
            const hScroll = sec.querySelector('.services-h-scroll') as HTMLElement;
            if (hScroll && isDesktop) {
              const getScrollAmount = () => hScroll.scrollWidth - window.innerWidth + 100;
              
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: sec,
                  pin: true,
                  scrub: 1,
                  anticipatePin: 1,
                  end: () => `+=${getScrollAmount()}`,
                  invalidateOnRefresh: true
                }
              });

              const stamp = sec.querySelector('.big-stamp');
              if (stamp) {
                gsap.set(stamp, { opacity: 0.03, y: 150 });
                tl.to(stamp, { y: 0, ease: 'power2.out', duration: 0.2 }, 0);
              }

              tl.to(hScroll, {
                x: () => -getScrollAmount(),
                ease: 'none',
                duration: 1
              }, 0);
            }
          } else {
            // --- GENERIC STAMP SECTION ---
            const stamp = sec.querySelector('.big-stamp');
            if (!stamp) return;

            gsap.set(stamp, { opacity: 0.05 });

            if (isDesktop) {
              gsap.set(stamp, { y: 150, opacity: 0.05 });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: sec,
                  start: 'top top',
                  end: '+=60%',
                  pin: true,
                  pinSpacing: true,
                  scrub: 1,
                  anticipatePin: 1,
                }
              });

              tl.to(stamp, {
                y: 0,
                ease: 'power2.out',
              });
            } else {
              gsap.fromTo(stamp,
                { y: 60 },
                {
                  y: -60,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: sec,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.8,
                  }
                }
              );
            }
          }
        });

        // Magnetic buttons
        const handleBtnMouseMove = (e: MouseEvent) => {
          const btn = e.currentTarget as HTMLElement;
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          gsap.to(btn, { x: x * 0.3, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
        };
        const handleBtnMouseLeave = (e: MouseEvent) => {
          const btn = e.currentTarget as HTMLElement;
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        };

        document.querySelectorAll('.btn').forEach(btn => {
          btn.addEventListener('mousemove', handleBtnMouseMove as any);
          btn.addEventListener('mouseleave', handleBtnMouseLeave as any);
        });

        // 3D tilt on cards
        const handleCardMouseMove = (e: MouseEvent) => {
          const card = e.currentTarget as HTMLElement;
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, { rotateY: px * 8, rotateX: -py * 8, duration: 0.5, ease: 'power2.out', transformPerspective: 700 });
        };
        const handleCardMouseLeave = (e: MouseEvent) => {
          const card = e.currentTarget as HTMLElement;
          gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' });
        };

        document.querySelectorAll('.card, .why-card, .cert-card').forEach(card => {
          card.addEventListener('mousemove', handleCardMouseMove as any);
          card.addEventListener('mouseleave', handleCardMouseLeave as any);
        });

        // Slider logic
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dots button');
        let current = 0;
        if (slides.length) {
          const showSlide = (i: number) => {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            slides[i].classList.add('active');
            if (dots[i]) dots[i].classList.add('active');
            current = i;
          };
          dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
          sliderInterval = setInterval(() => showSlide((current + 1) % slides.length), 5500);
        }

        // Counter animation
        const counters = document.querySelectorAll('[data-count]');
        if (counters.length) {
          countObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (!e.isIntersecting) return;
              const el = e.target;
              const target = parseInt(el.getAttribute('data-count') || '0', 10);
              const suffix = el.getAttribute('data-suffix') || '';
              let cur = 0;
              const step = Math.max(1, Math.ceil(target / 60));
              const tick = () => {
                cur += step;
                if (cur >= target) {
                  el.textContent = target.toLocaleString() + suffix;
                  return;
                }
                el.textContent = cur.toLocaleString() + suffix;
                requestAnimationFrame(tick);
              };
              tick();
              countObserver?.unobserve(el);
            });
          }, { threshold: 0.4 });
          counters.forEach(el => countObserver?.observe(el));
        }

        // Dynamic height recalculation for delayed image loading
        if (typeof ResizeObserver !== 'undefined') {
          const ro = new ResizeObserver(() => {
            if ((window as any).ScrollTrigger) {
              (window as any).ScrollTrigger.refresh();
            }
          });
          ro.observe(document.body);
          (window as any)._krantiRo = ro; // Store for cleanup
        }
      }

      cleanupFunc = () => {
        window.removeEventListener('scroll', handleScrollNav);
        window.removeEventListener('mousemove', handleMouseMoveCursor);
        document.removeEventListener('scroll', updateStripe);
        document.removeEventListener('scroll', onScrollNav);
        if (toggle) toggle.removeEventListener('click', handleToggleClick);
        if (drawer) drawer.removeEventListener('click', handleBackdropClick);
        drawerLinks?.forEach(a => a.removeEventListener('click', handleLinkClick));
        if (sliderInterval) clearInterval(sliderInterval);
        if (countObserver) countObserver.disconnect();
        if (lenisRafId) cancelAnimationFrame(lenisRafId);
        lenis.destroy();
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((t: any) => t.revert());
        }
        if ((window as any)._krantiRo) {
          (window as any)._krantiRo.disconnect();
          delete (window as any)._krantiRo;
        }
      };
    };

    const timer = setTimeout(() => {
      runInit();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (typeof document !== 'undefined') {
        document.removeEventListener('click', handleBeforeNavigate, true);
      }
      if (cleanupFunc) cleanupFunc();
    };
  }, [pathname]);

  return null;
}
