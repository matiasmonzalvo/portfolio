gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: 100,
  lerp: 0.06,
  smartphone: { breakpoint: 0, smooth: !0 },
  tablet: { breakpoint: 0, smooth: !0 },
});
locoScroll.on("scroll", ScrollTrigger.update),
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(e) {
      return arguments.length
        ? locoScroll.scrollTo(e, { duration: 0.5, disableLerp: !0 })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect: () => ({
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  }),
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update()),
  ScrollTrigger.defaults({ scroller: ".smooth-scroll" }),
  locoScroll.stop(),
  window.addEventListener("load", function () {
    locoScroll.start();
  });
var lastScrollPos = 0;
gsap.from(".sidebar .skill-item", {
  scrollTrigger: { trigger: ".work", start: "77.5%", end: "115%", scrub: 0 },
  xPercent: -180,
  stagger: 0.2,
});
let currentScroll = 0,
  isScrollingDown = !0,
  arrows = document.querySelectorAll(".arrow"),
  tween = gsap
    .to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    })
    .totalProgress(0.5);
function initBasicFunctions() {
  $(document).ready(function () {
    $("[data-toggle='modal-nav-mobile']").click(function () {
      $("nav").hasClass("nav-mobile-not-active")
        ? ($("nav").addClass("nav-mobile-active"),
          $("nav").removeClass("nav-mobile-not-active"),
          $("nav").addClass("scroll-direction-down"))
        : ($("nav").addClass("nav-mobile-not-active"),
          $("nav").removeClass("nav-mobile-active"),
          $("nav").removeClass("scroll-direction-down"));
    }),
      $("[data-close='modal']").click(function () {
        $("nav").addClass("nav-mobile-not-active"),
          $("nav").removeClass("nav-mobile-active"),
          $("nav").removeClass("scroll-direction-down");
      }),
      $(document).keydown(function (e) {
        27 == e.keyCode &&
          ($(".modal").hasClass("active") &&
            ($("nav").addClass("nav-mobile-not-active"),
            $("nav").removeClass("nav-mobile-active"),
            $("nav").removeClass("scroll-direction-down"),
            scroll.start()),
          $("[data-question-id], .questions-back")
            .removeClass("active")
            .removeClass("not-active"),
          $("[data-testimonial-id], .testimonials-modal-back")
            .removeClass("active")
            .removeClass("not-active"),
          $("[data-team-id], .team-modal-back")
            .removeClass("active")
            .removeClass("not-active"));
      }),
      $("[data-hover='logo']").on("mouseenter", function () {
        $("main, nav").removeClass("scroll-direction-down");
      }),
      $("[data-cursor-text]").on("mouseenter", function () {
        let e = $(this).data("cursor-text");
        $(".custom-cursor").find(".cursor-nav-inner h4").text(e);
      }),
      $(".single-work-item a, .single-news-item a, .work-single-related a").on(
        "mouseenter",
        function () {
          var e = $(this).data("background-color");
          $(".data-change-color-main").css("background-color", e);
        }
      ),
      $(".single-work-item, .single-news-item, .work-single-related a").on(
        "mouseleave",
        function () {
          $(".data-change-color-main").removeAttr("style");
        }
      ),
      $(".work-single-related a").on("mouseenter", function () {
        $(this).addClass("hover");
      }),
      $(".work-single-related a").on("mouseleave", function () {
        $(this).removeClass("hover");
      }),
      $(".grid-hover").each(function () {
        var e = $(this);
        e.find("li a").on("mouseenter", function () {
          e.find("li").addClass("no-hover"),
            $(this).parent().removeClass("no-hover").addClass("hover");
        }),
          e.find("li a").on("mouseleave", function () {
            e.find("li").removeClass("no-hover").removeClass("hover");
          });
      });
  });
}
function initCheckScrollUpDown() {
  var e = 0;
  function o() {
    locoScroll.on("scroll", (o) => {
      var t = o.scroll.y;
      Math.abs(e - t) >= 50 &&
        (t > e
          ? $("main, nav").addClass("scroll-direction-down")
          : $("main, nav").removeClass("scroll-direction-down"),
        (e = t),
        t > 50
          ? ($("main, nav").addClass("scroll-scrolled"),
            $("nav").removeClass("nav-see-through"))
          : ($("main, nav").removeClass("scroll-scrolled"),
            $("nav").addClass("nav-see-through")));
    });
  }
  o(),
    barba.hooks.after(() => {
      o();
    });
}
gsap.set(".marquee__inner", { xPercent: -50 }),
  locoScroll.on("scroll", (e) => {
    let o = e.scroll.y;
    (isScrollingDown = o > currentScroll),
      gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 }),
      arrows.forEach((e) => {
        e.classList.toggle("active", isScrollingDown);
      }),
      (currentScroll = o);
  }),
  window.addEventListener("resize", () => {
    locoScroll.update();
  }),
  initCheckScrollUpDown(),
  initBasicFunctions(),
  document.querySelectorAll("a[data-scroll]").forEach((e) => {
    e.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#") || href === "") {
        e.preventDefault();
        let o = document.querySelector(href);
        o && locoScroll.scrollTo(o);
      }
    });
  });
const sections = document.querySelectorAll("section"),
  menuItems = document.querySelectorAll(".ul-mobile li");
function updateActiveClass() {
  if (locoScroll && locoScroll.scroll && locoScroll.scroll.instance) {
    let e = locoScroll.scroll.instance.scroll.y;
    sections.forEach((o, t) => {
      let s = o.getBoundingClientRect().top + e,
        r = s + o.offsetHeight;
      e >= s - 500 &&
        e < r + 500 &&
        (menuItems.forEach((e) => e.classList.remove("active")),
        menuItems[t].classList.add("active"));
    });
  }
}
function showPreviewOnHover() {
  var e = 0,
    o = 0,
    t = 0,
    s = 0,
    r = 0,
    l = 0;
  document.querySelector(".custom-cursor") &&
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function () {
        document.querySelector(".custom-cursor") &&
          ((e += (r - e) / 5),
          (o += (l - o) / 5),
          gsap.set($(".custom-cursor"), { css: { left: e, top: o } })),
          document.querySelector(".mouse-pos-list-image") &&
            ((t += (r / 1 - t) / 5),
            (s += (l - s) / 5),
            gsap.set($(".mouse-pos-list-image"), { css: { left: t, top: s } }),
            gsap.set($(".mouse-pos-list-rotate"), {
              css: { rotate: (r - e) / 20 },
            }));
      },
    }),
    $(window).on("mousemove", function (e) {
      (r = e.clientX), (l = e.clientY);
    }),
    $(document).mouseleave(function () {
      $(".custom-cursor").removeClass("cursor-init");
    }),
    $(".custom-cursor").addClass("cursor-hover"),
    $("[data-cursor-text]").on("mouseenter", function () {
      let e = $(this).data("cursor-text");
      $(".custom-cursor").hasClass("cursor-init") ||
        $(".custom-cursor").addClass("cursor-init"),
        $(".custom-cursor").addClass("cursor-hover"),
        $(".custom-cursor").find(".cursor-text").text(e),
        $(".custom-cursor")
          .find(".cursor-text")
          .css("--cursor-speed", " " + e.length + "s");
    }),
    $("[data-cursor-text]").on("mouseleave", function () {
      $(".custom-cursor").removeClass("cursor-hover");
    }),
    $("a, .hover").on("mouseenter", function () {
      $(".custom-cursor").addClass("cursor-hover-link");
    }),
    $("a, .hover").on("mouseleave", function () {
      $(".custom-cursor").removeClass("cursor-hover-link");
    }),
    $("main").on("mousedown", function () {
      $(".custom-cursor").addClass("pressed");
    }),
    $("main").on("mouseup", function () {
      $(".custom-cursor").removeClass("pressed");
    }),
    $(".mouse-pos-list-image-hover").on("mouseenter", function () {
      $(".mouse-pos-list-image").addClass("active");
    }),
    $(".mouse-pos-list-image-hover").on("mouseleave", function () {
      $(".mouse-pos-list-image").removeClass("active");
    }),
    $(".mouse-pos-list-image-ul li").on("mouseenter mouseleave", function () {
      var e = $(this).index();
      $(".mouse-pos-list-image-ul, .mouse-pos-list-image").each(function () {
        $("li", this).eq(e).siblings().removeClass("active"),
          $("li", this).eq(e).addClass("active");
      });
    });
}
showPreviewOnHover(),
  $(document).ready(function () {
    var e = $(".mouse-pos-list-image-hover"),
      o = $(".cursor-image");
    e.on("mouseenter", function () {
      var e = $(this).data("image-path");
      e && (o.css("background-image", "url(" + e + ")"), o.addClass("show"));
    }),
      e.on("mouseleave", function () {
        o.removeClass("show");
      });
  }),
  gsap.registerPlugin(ScrollTrigger);
const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
scrollColorElems.forEach((e, o) => {
  let t = 0 === o ? "" : scrollColorElems[o - 1].dataset.bgcolor,
    s = 0 === o ? "" : scrollColorElems[o - 1].dataset.textcolor;
  ScrollTrigger.create({
    trigger: e,
    scroller: ".smooth-scroll",
    start: "top 70%",
    onEnter: () =>
      gsap.to("body", {
        backgroundColor: e.dataset.bgcolor,
        color: e.dataset.textcolor,
        duration: 0.1,
        overwrite: "auto",
      }),
    onLeaveBack: () =>
      gsap.to("body", {
        backgroundColor: t,
        color: s,
        duration: 0.1,
        overwrite: "auto",
      }),
  });
}),
  ScrollTrigger.refresh(),
  document
    .getElementById("logo-reload-page")
    .addEventListener("click", function (e) {
      e.preventDefault(), location.reload();
    }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll(".btn-skill"),
      o = document.querySelectorAll(".skill-box"),
      t = document.querySelector(".arrow-left"),
      s = document.querySelector(".arrow-right"),
      r = document.querySelector(".pagination-skills"),
      l = 1,
      a = e.length;
    function n() {
      e.forEach((e) => e.classList.remove("active")),
        e[l - 1].classList.add("active"),
        o.forEach((e) => e.classList.remove("active")),
        document.querySelector(`.skill${l}-box`).classList.add("active"),
        (r.textContent = `${l}/${a}`);
    }
    e.forEach((e) => {
      e.addEventListener("click", function () {
        (l = parseInt(this.getAttribute("data-skill"))), n();
      });
    }),
      t.addEventListener("click", function () {
        (l = l > 1 ? l - 1 : a), n();
      }),
      s.addEventListener("click", function () {
        (l = l < a ? l + 1 : 1), n();
      }),
      n();
    let c = document.querySelectorAll(".work-box"),
      i = document.querySelector(".arrow-left-work"),
      u = document.querySelector(".arrow-right-work"),
      d = document.querySelector(".pagination-work"),
      m = 1,
      v = c.length;
    function h() {
      c.forEach((e) => e.classList.remove("active")),
        document.querySelector(`.work${m}-box`).classList.add("active"),
        (d.textContent = `${m}/${v}`);
    }
    i.addEventListener("click", function () {
      (m = m > 1 ? m - 1 : v), h();
    }),
      u.addEventListener("click", function () {
        (m = m < v ? m + 1 : 1), h();
      }),
      h();
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".skills-item"),
      o = document.createElement("div");
    o.classList.add("custom-cursor"), document.body.appendChild(o);
    let t = 0,
      s = 0,
      r = 0,
      l = 0;
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat() {
        (r += (t - r) / 5),
          (l += (s - l) / 5),
          gsap.set(o, { css: { left: r, top: l } });
      },
    }),
      e.forEach((e) => {
        e.addEventListener("mouseenter", (t) => {
          let s = e.getAttribute("data-image-path");
          (o.style.backgroundImage = `url(${s})`), (o.style.opacity = 1);
        }),
          e.addEventListener("mouseleave", () => {
            o.style.opacity = 0;
          }),
          e.addEventListener("mousemove", (e) => {
            (t = e.clientX), (s = e.clientY);
          });
      }),
      window.addEventListener("mousemove", (e) => {
        (t = e.clientX), (s = e.clientY);
      });
  });
