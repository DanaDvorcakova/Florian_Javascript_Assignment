//Reveal on Scroll
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight-revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

let content = document.getElementById("content");

function displayBox() {
    setTimeout(() => {
        content.style.display = "block";
    }, 2000)
}

function hideBox() {
    content.style.display = "none";

}



//Form
const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

   return success;


}
//password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


//slideshow
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//search
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


//counter
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = counter.innerText

        const increment = target / 200

        if(c > target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(pdateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})


//typewriter effect
const div = document.querySelector(".hero-text");
const text = "As one of the most popular florists in County Clare, we are passionate about flowers and want you to deliver the freshest flowers for any occasions 💐";

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
    element.textContent = "";
    }

    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1) , 50);
}
textTypingEffect(div, text);



//feedback
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

panel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive() 
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
     })   
     
     sendBtn.addEventListener('click', (e) => {
        panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer service</p>
        `

     })
        
    function removeActive() {
        for(let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove('active')
        }
    }

//canvas image
    function myCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("flower");
  ctx.drawImage(img,20,20);
}




//small script to toggle visibility
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });









