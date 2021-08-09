let btnMeeting = document.querySelector('.accordion_btn_meeting');
let accordionMeeting = document.querySelector('.accordion_meeting');

btnMeeting.addEventListener('click' , function(e) {
  e.preventDefault();
  accordionMeeting.classList.toggle('accordion_active');
})

let btnBranch = document.querySelector('.accordion_btn_branch');
let accordionBrach = document.querySelector('.accordion_branch');

btnBranch.addEventListener('click' , function(e) {
  e.preventDefault();
  console.log(e);
  accordionBrach.classList.toggle('accordion_active');
})

let btnForm = document.querySelector('.accordion_btn_form');
let accordionForm = document.querySelector('.accordion_form');

btnForm.addEventListener('click' , function(e) {
  e.preventDefault();
  accordionForm.classList.toggle('accordion_active');
})

let btnChat = document.querySelector('.accordion_btn_chat');
let accordionChat = document.querySelector('.accordion_chat');

btnChat.addEventListener('click' , function(e) {
  e.preventDefault();
  accordionChat.classList.toggle('accordion_active');
})

let btnClub = document.querySelector('.accordion_btn_club');
let accordionClub = document.querySelector('.accordion_club');

btnClub.addEventListener('click' , function(e) {
  e.preventDefault();
  accordionClub.classList.toggle('accordion_active');
})

