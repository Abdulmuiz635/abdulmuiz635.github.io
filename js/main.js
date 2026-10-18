(function () {
  "use strict";

  /* ---------- year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- sticky nav ---------- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- signature: hero window 3D tilt ---------- */
  var heroSec = document.getElementById("home");
  var heroWin = document.querySelector(".hero .window");
  var canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
  var reduceMo = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroSec && heroWin && canHover && !reduceMo) {
    heroSec.addEventListener("mousemove", function (e) {
      var r = heroWin.getBoundingClientRect();
      var dx = Math.max(-0.8, Math.min(0.8, (e.clientX - (r.left + r.width / 2)) / r.width));
      var dy = Math.max(-0.8, Math.min(0.8, (e.clientY - (r.top + r.height / 2)) / r.height));
      heroWin.style.transform = "perspective(900px) rotateY(" + (dx * 9) + "deg) rotateX(" + (dy * -9) + "deg) translateY(-3px)";
    });
    heroSec.addEventListener("mouseleave", function () { heroWin.style.transform = ""; });
  }

  /* ---------- staggered reveal delays ---------- */
  ["#workList .row", "#entriesList .entry", ".timeline .tl"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i, 6) * 65 + "ms";
    });
  });

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- active nav link ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav__link");
  if ("IntersectionObserver" in window && navLinks.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.getAttribute("id");
          navLinks.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ---------- see all / collapse ---------- */
  function setupMore(btnId, listId, labelShow, labelHide) {
    var btn = document.getElementById(btnId);
    var list = document.getElementById(listId);
    if (!btn || !list) return null;
    btn.addEventListener("click", function () {
      var collapsed = list.classList.toggle("collapsed");
      btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      btn.textContent = collapsed ? labelShow : labelHide;
    });
    return { btn: btn, list: list, labelShow: labelShow };
  }
  var workMore = setupMore("workMore", "workList", "see all projects ↓", "show less ↑");
  setupMore("writingMore", "entriesList", "see all writing ↓", "show less ↑");

  /* ---------- work filter ---------- */
  var filters = document.getElementById("filters");
  var workList = document.getElementById("workList");
  var rows = document.querySelectorAll("#workList .row");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      filters.querySelectorAll(".filter").forEach(function (f) { f.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      if (f === "all") {
        if (workList) workList.classList.add("collapsed");
        if (workMore) {
          workMore.btn.style.display = "";
          workMore.btn.textContent = workMore.labelShow;
          workMore.btn.setAttribute("aria-expanded", "false");
        }
        rows.forEach(function (r) { r.classList.remove("is-hidden"); });
      } else {
        if (workList) workList.classList.remove("collapsed");
        if (workMore) workMore.btn.style.display = "none";
        rows.forEach(function (r) {
          r.classList.toggle("is-hidden", r.getAttribute("data-cat") !== f);
        });
      }
    });
  }
})();
