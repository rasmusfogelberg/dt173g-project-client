const hamburger: HTMLElement = document.querySelector(".burgeru");
const navMenu: HTMLElement = document.querySelector(".nav-menu");
const link: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".nav-link");
const header: HTMLElement = document.querySelector(".header");
const sticky: Number = header.offsetTop;

window.onscroll = () => stickyHeader();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

link.forEach((item: HTMLAnchorElement) => {
  item.addEventListener("click", closeMenu);
});

function closeMenu(): void {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function stickyHeader(): void {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}