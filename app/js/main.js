let menu_hamburger = document.querySelector("#navbar_icon");

let mobileLinksDiv = document.querySelector(".mobileLinksDiv");
let instituteLi = document.querySelector("#instituteLi");
let newsEventLi = document.querySelector("#newsEventLi");
let resourcesLi = document.querySelector("#resourcesLi");
let departmentsLi = document.querySelector("#departmentsLi");
let nildsResourcesSubChild = document.querySelector("#nildsResourcesSubChild");

menu_hamburger.addEventListener("click", () => {
  toggleNavbar();
});
const toggleNavbar = () => {
  if (menu_hamburger.classList.contains("active")) {
    menu_hamburger.innerText = `menu`;
    menu_hamburger.classList.toggle("active");
    mobileLinksDiv.classList.toggle("active");
  } else {
    menu_hamburger.innerText = `close`;
    menu_hamburger.classList.toggle("active");
    mobileLinksDiv.classList.toggle("active");
  }
};

instituteLi.addEventListener("click", () => {
  let instituteUl = document.querySelector("#instituteUl");
  instituteUl.classList.toggle("active");
});

newsEventLi.addEventListener("click", () => {
  let newsEventUl = document.querySelector("#newsEventUl");
  newsEventUl.classList.toggle("active");
});
resourcesLi.addEventListener("click", () => {
  let resourcesUl = document.querySelector("#resourcesUl");
  resourcesUl.classList.toggle("active");
});
departmentsLi.addEventListener("click", () => {
  let departmentsUl = document.querySelector("#departmentsUl");
  console.log(departmentsUl);
  departmentsUl.classList.toggle("active");
});

nildsResourcesSubChild.addEventListener("click", () => {
  console.log("yes");
  let resourcesSubEventUl = document.querySelector("#resourcesSubEventUl");
  console.log(resourcesSubEventUl);
  resourcesSubEventUl.classList.toggle("active");
});
