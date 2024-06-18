document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('.sls', {
    strings: ['Developer', 'Designer','Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('.cls2', {
    strings: ['Liên hệ với tôi ở đây', 'Im open to any suggestions or just to chat','Bắt đầu trò chuyện'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
});

function scroll(vt,t){
  $('html, body').animate({
    scrollTop: $(vt).offset().top
  }, t);  
};
const ontop = document.getElementById('ontop');
ontop.addEventListener('click', () => {
  scroll("#home",1100);
});
const btn_sk_Portfolio = document.getElementById('btn-Portfolio');
btn_sk_Portfolio.addEventListener('click', () => {
  scroll("#Portfolio",1000);
});
const btn_sk_skill = document.getElementById('btn-skill');
btn_sk_skill.addEventListener('click', () => {
  scroll("#skill",1200);
});
const btn_sk_about = document.getElementById('btn-about');
btn_sk_about.addEventListener('click', () => {
  scroll("#about",1300);
});
const btn_sk_Contact = document.getElementById('btn-Contact');
btn_sk_Contact.addEventListener('click', () => {
  scroll("#Contact",1400);
});
function oncontact(){
  scroll("#Contact",1400);
};  



window.onscroll = () => ontop.style.display = document.body.scrollTop > 20 || 
  document.documentElement.scrollTop >20 ? "block" : "none";

const body = document.body;
const btn = document.getElementById("light-dark");
function chedo() {
    body.classList.toggle("dark");
    btn.classList.toggle("fa-moon");
    btn.classList.toggle("fa-sun");
}
const abc=document.getElementsByClassName("skill");
window.addEventListener('scroll',()=>{
  let height=window.pageYOffset;
  if(height==700){
    // console.log("Hello")
  }
})