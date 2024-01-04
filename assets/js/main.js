//show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
//shadow header
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//email
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_700sghl','template_nc91n0a','#contact-form','h9bpPWT1eir9vUFAF')
    .then(() =>{
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

//show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)