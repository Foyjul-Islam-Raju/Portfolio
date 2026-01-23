// 1. Auto-highlight the current page in the right vertical navbar
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".right-nav .nav-link");

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");
  let i = 0;

  function showSkill() {
    if (i < skills.length) {
      skills[i].classList.add("show");
      i++;
      setTimeout(showSkill, 125); // Half-second delay for next skill
    }
  }

  showSkill();
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typing-2", {
    strings: ["Nothing"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typing-3", {
    strings: ["Quick Learner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
