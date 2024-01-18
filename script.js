const menuFirst = document.querySelector(".menu-first");
const navbar = document.querySelector(".navbar");
const num = 50;

const conButton = document.querySelector(".con-button");
const stopButton = document.querySelector(".stop-button");

const myVideo = document.querySelector(".my-video");

const first1 = document.querySelector(".first-1");
const first2 = document.querySelector(".first-2");
const first3 = document.querySelector(".first-3");
const first4 = document.querySelector(".first-4");
const first5 = document.querySelector(".first-5");

const duyurularButton = document.querySelector(".öne-cikanlar-duyurular");
const etkinliklerButton = document.querySelector(".öne-cikanlar-etkinlikler");
const duyurularImg = document.querySelector(".duyurular-img");
const etkinliklerImg = document.querySelector(".etkinlikler-img");
const toggleDuyurular = document.querySelector(".toggle-duyurular");
const toggleEtkinlikler = document.querySelector(".toggle-etkinlikler");

const toggleDuyurularLinks = document.querySelector(".toggle-duyurular-links");
const dotButton1 = document.querySelector('.dot-button-1');
const dotButton2 = document.querySelector('.dot-button-2');

const toggleDuyurularLink = document.querySelector(".toggle-duyurular-link");

const kesfetItem = document.querySelectorAll(".kesfet-item");

const navbarResponsive = document.querySelector(".navbar-responsive");
const responsiveButtonMenu = document.querySelector(".responsive-button-menu");
const iconMenu1 = document.querySelector(".icon-menu-1");
const iconMenu2 = document.querySelector(".icon-menu-2");
const iconMenu3 = document.querySelector(".icon-menu-3");
const iconMenu4 = document.querySelector(".icon-menu-4");
let countResp = 0;

const searchBtns = document.querySelectorAll('.search-btn');
const overlaySearch = document.querySelector('.overlay-search');
const overlaySearchButton = document.querySelector('.overlay-search-button');



const overlayIconMenus = document.querySelector('.overlay-icon-menus');
const biPluss = document.querySelectorAll('.bi-plus');
const subMenuOverlays = document.querySelectorAll('.sub-menu-overlay');

let count1 = 0;
let targetNumber1 = 17506;
let duration1 = 1000;
let interval1 = 1;
const step1 = (targetNumber1 / duration1) * interval1;

let count2 = 0;
let targetNumber2 = 69;
let duration2 = 1000;
let interval2 = 1;
const step2 = (targetNumber2 / duration2) * interval2;

let count3 = 0;
let targetNumber3 = 144;
let duration3 = 1000;
let interval3 = 1;
const step3 = (targetNumber3 / duration3) * interval3;

let count4 = 0;
let targetNumber4 = 38;
let duration4 = 1000;
let interval4 = 1;
const step4 = (targetNumber4 / duration4) * interval4;

let count5 = 0;
let targetNumber5 = 54;
let duration5 = 1000;
let interval5 = 1;
const step5 = (targetNumber5 / duration5) * interval5;

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight + menuFirst.offsetHeight - num) {
    navbar.classList.add("move");
    menuFirst.classList.add("delete");
    document.querySelector(".logo").src = "img/logo-white.svg";
    document.querySelector(".logo").style.width = "250px";
  } else {
    navbar.classList.remove("move");
    menuFirst.classList.remove("delete");
    document.querySelector(".logo").src = "img/logo-white.svg";
    document.querySelector(".logo").style.width = "200px";
  }
});

conButton.addEventListener("click", () => {
  if (conButton.src.includes("img/continue.svg")) {
    conButton.src = "img/pause.svg";
    myVideo.pause();
  } else {
    conButton.src = "img/continue.svg";
    myVideo.play();
  }
});

function increaseNumber1() {
  count1 += step1;

  if (count1 >= targetNumber1) {
    count1 = targetNumber1;
    clearInterval(counterInterval1);
  }

  first1.textContent = Math.round(count1);
  //console.log(step1);
}
const counterInterval1 = setInterval(increaseNumber1, interval1);

function increaseNumber2() {
  count2 += step2;

  if (count2 >= targetNumber2) {
    count2 = targetNumber2;
    clearInterval(counterInterval2);
  }

  first2.textContent = Math.round(count2);
  //console.log(step2);
}
const counterInterval2 = setInterval(increaseNumber2, interval2);

function increaseNumber3() {
  count3 += step3;

  if (count3 >= targetNumber3) {
    count3 = targetNumber3;
    clearInterval(counterInterval3);
  }

  first3.textContent = Math.round(count3);
  //console.log(step3);
}
const counterInterval3 = setInterval(increaseNumber3, interval3);

function increaseNumber4() {
  count4 += step4;

  if (count4 >= targetNumber4) {
    count4 = targetNumber4;
    clearInterval(counterInterval4);
  }

  first4.textContent = Math.round(count4);
  //console.log(step4);
}
const counterInterval4 = setInterval(increaseNumber4, interval4);

function increaseNumber5() {
  count5 += step5;

  if (count5 >= targetNumber5) {
    count5 = targetNumber5;
    clearInterval(counterInterval5);
  }

  first5.textContent = Math.round(count5);
  //console.log(step5);
}
const counterInterval5 = setInterval(increaseNumber5, interval5);

etkinliklerButton.addEventListener("click", () => {
  toggleDuyurular.style.display = "none";
  toggleDuyurular.style.visibility = "hidden";

  toggleEtkinlikler.style.display = "flex";
  toggleEtkinlikler.style.visibility = "visible";

  etkinliklerImg.src = "img/öne-cikanlar-button/indir (1.1).svg";
  duyurularImg.src = "img/öne-cikanlar-button/indir (0.1).svg";

  duyurularButton.style.color = "#BDBDBD";
  etkinliklerButton.style.color = "#0F4990";
});

duyurularButton.addEventListener("click", () => {
  toggleDuyurular.style.display = "flex";
  toggleDuyurular.style.visibility = "visible";

  toggleEtkinlikler.style.display = "none";
  toggleEtkinlikler.style.visibility = "hidden";

  etkinliklerImg.src = "img/öne-cikanlar-button/indir (1).svg";
  duyurularImg.src = "img/öne-cikanlar-button/indir.svg";

  duyurularButton.style.color = "#0F4990";
  etkinliklerButton.style.color = "#BDBDBD";
});

document.addEventListener("DOMContentLoaded", function () {
  toggleDuyurular.style.display = "flex";
  toggleDuyurular.style.visibility = "visible";

  toggleEtkinlikler.style.display = "none";
  toggleEtkinlikler.style.visibility = "hidden";

  etkinliklerImg.src = "img/öne-cikanlar-button/indir (1).svg";
  duyurularImg.src = "img/öne-cikanlar-button/indir.svg";

  duyurularButton.style.color = "#0F4990";
  etkinliklerButton.style.color = "#BDBDBD";
});

dotButton1.addEventListener("click", () => {
  dotButton1.classList.add("active");
  dotButton2.classList.remove("active");
  dotButton2.style.opacity = "0.25";
  toggleDuyurularLinks.scrollLeft -= toggleDuyurularLinks.offsetWidth + 100;
});

dotButton2.addEventListener("click", () => {
  dotButton2.classList.add("active");
  dotButton2.style.opacity = "0.75";
  dotButton1.classList.remove("active");
  toggleDuyurularLinks.scrollLeft += toggleDuyurularLinks.offsetWidth + 100;
});

/* dot3Button1.addEventListener("click", () => {
  dotButton1.classList.add("active");
  dot3Button2.classList.remove("active");
  dot3Button3.classList.remove("active");
  toggleDuyurularLinks.scrollLeft -= toggleDuyurularLinks.offsetWidth +7;
  dot3Button2.style.opacity = "0.25";
  dot3Button3.style.opacity = "0.25";
  dot3Button1.style.opacity = "0.75";

  if (dot3Button1.includes("active")) {
    toggleDuyurularLinks.scrollLeft -= toggleDuyurularLinks.offsetWidth +7;
    dot3Button2.style.opacity = "0.25";
    dot3Button3.style.opacity = "0.25";
    dot3Button1.style.opacity = "0.75";
  } 
});

dot3Button2.addEventListener("click", () => {
  dotButton2.classList.add("active");
  dot3Button1.classList.remove("active");
  dot3Button3.classList.remove("active");
  dot3Button2.style.opacity = "0.75";
  dot3Button1.style.opacity = "0.25";
  dot3Button3.style.opacity = "0.25";
  toggleDuyurularLinks.scrollLeft += toggleDuyurularLinks.offsetWidth + 7;
  toggleDuyurularLinks.scrollLeft -= toggleDuyurularLinks.offsetWidth + 7;

  if (dot3Button1.includes("active")) {
    toggleDuyurularLinks.scrollLeft -= toggleDuyurularLinks.offsetWidth +7;
    dot3Button2.style.opacity = "0.25";
    dot3Button3.style.opacity = "0.25";
    dot3Button1.style.opacity = "0.75";
  }
});

dot3Button3.addEventListener("click", () => {
  dot3Button3.classList.add("active");
  dot3Button1.classList.remove("active");
  dot3Button2.classList.remove("active");
  dot3Button3.style.opacity = "0.75";
  dot3Button1.style.opacity = "0.25";
  dot3Button2.style.opacity = "0.25";
  toggleDuyurularLinks.scrollLeft += toggleDuyurularLinks.offsetWidth + 7;
}); */

/* //! slider start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n)); 
}

function showSlides(n) {
    const slides = document.getElementsByClassName('toggle-duyurular-link');
    const dots = document.getElementsByClassName('dot-button');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");                           
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
//! slider end */

window.addEventListener("scroll", () => {
  kesfetItem.forEach((e) => {
    if (window.scrollY < 1700) {
      e.style.transform = "scale(.1)";
      e.style.transition = "1s ease all";
    } else {
      e.style.transform = "scale(1)";
    }
  });
});

responsiveButtonMenu.addEventListener("click", () => {
  if (iconMenu2.style.opacity == "0") {
    iconMenu2.style.opacity = "1";
    iconMenu2.style.transition = "all .3s ease";
    iconMenu3.style.opacity = "1";
    iconMenu3.style.transition = "all .3s ease";
    iconMenu1.style.transform = "rotate(0deg)";
    iconMenu1.style.top = "0";
    iconMenu1.style.backgroundColor = "#0f4990";
    iconMenu4.style.transform = "rotate(0deg)";
    iconMenu4.style.top = "24px";
    iconMenu4.style.backgroundColor = "#0f4990";


    searchBtns.forEach(searchBtn => {
      searchBtn.style.color = "#0f4990";
    });

    navbar.style.backgroundColor = "#fefefe";
    document.querySelector('.logo-img').src = "img/logo.svg";


    overlayIconMenus.style.height = '0';
    overlayIconMenus.style.top = '-1300px';


  } else {
    iconMenu2.style.opacity = "0";
    iconMenu2.style.transition = "all .3s ease";
    iconMenu3.style.opacity = "0";
    iconMenu3.style.transition = "all .3s ease";
    iconMenu1.style.transform = "rotate(135deg)";
    iconMenu1.style.top = "15px";
    iconMenu1.style.backgroundColor = "#fff";
    iconMenu4.style.transform = "rotate(-135deg)";
    iconMenu4.style.top = "15px";
    iconMenu4.style.backgroundColor = "#fff";
    
    
    searchBtns.forEach(searchBtn => {
      searchBtn.style.color = "#fff";
    });

    navbar.style.backgroundColor = "#0f4990";
    navbar.style.padding = "5px 20px";
    document.querySelector('.logo-img').src = "img/logo-white.svg";
    document.querySelector('.logo-img').style.width = "200px";


    overlayIconMenus.style.height = '100%';
    overlayIconMenus.style.top = '70px';
    }

});

searchBtns.forEach(searchBtn => {
  searchBtn.addEventListener("click", () => {
    overlaySearch.style.display = "flex";
    overlaySearch.style.visibility = "visible";
  });
});

overlaySearchButton.addEventListener("click", () => {
  overlaySearch.style.display = "none";
  overlaySearch.style.visibility = "hidden";
});


let countPlus = 0;

biPluss.forEach(biPlus => {
  biPlus.addEventListener("click", () => {
    const overlayFirst = biPlus.parentNode;
    const overlaySecond = overlayFirst.nextElementSibling;
    const overlaySecondFirst = overlaySecond.firstElementChild;


    if (overlaySecondFirst.style.display == "flex") {
      overlaySecondFirst.style.display = "none";
    } else {
      overlaySecondFirst.style.display = "flex";
    }
   
    if (countPlus % 2 == 0) {
      biPlus.style.transform = "rotate(135deg)";
      biPlus.style.transition = "ease all .6s";
    } else {
      biPlus.style.transform = "rotate(0deg)";
      biPlus.style.transition = "ease all .6s";
    }

    countPlus++;
  });
});
