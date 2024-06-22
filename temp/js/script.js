document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".sls", {
    strings: ["Developer", "Designer", "Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".cls2", {
    strings: [
      "Liên hệ với tôi ở đây",
      "Im open to any suggestions or just to chat",
      "Bắt đầu trò chuyện",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
});

function scroll(vt, t) {
  $("html, body").animate(
    {
      scrollTop: $(vt).offset().top,
    },
    t
  );
}
const ontop = document.getElementById("ontop");
ontop.addEventListener("click", () => {
  scroll("#home", 1100);
});
const btn_sk_Portfolio = document.getElementById("btn-Portfolio");
btn_sk_Portfolio.addEventListener("click", () => {
  scroll("#Portfolio", 1000);
});
const btn_sk_skill = document.getElementById("btn-skill");
btn_sk_skill.addEventListener("click", () => {
  scroll("#skill", 1200);
});
const btn_sk_project = document.getElementById("btn-project");
btn_sk_project.addEventListener("click", () => {
  scroll("#project", 1300);
});
const btn_sk_Contact = document.getElementById("btn-Contact");
btn_sk_Contact.addEventListener("click", () => {
  scroll("#Contact", 1400);
});
function oncontact() {
  scroll("#Contact", 1400);
}

window.onscroll = () =>
  (ontop.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none");



const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('show');
});