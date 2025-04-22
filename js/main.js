// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Typewriter effect
const typewriter = document.getElementById("typewriter")
const phrases = ["Product driven mindset", "JavaScript Expert", "React Specialist", "Node.js Engineer", "Team Leader",]

let phraseIndex = 0
let charIndex = 0
let isDeleting = false
let typingSpeed = 100

function typeEffect() {
  const currentPhrase = phrases[phraseIndex]

  if (isDeleting) {
    // Deleting text
    typewriter.textContent = currentPhrase.substring(0, charIndex - 1)
    charIndex--
    typingSpeed = 50 // Faster when deleting
  } else {
    // Typing text
    typewriter.textContent = currentPhrase.substring(0, charIndex + 1)
    charIndex++
    typingSpeed = 100 // Normal speed when typing
  }

  // If word is complete
  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at end of phrase
    isDeleting = true
    typingSpeed = 1500 // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Move to next phrase
    isDeleting = false
    phraseIndex = (phraseIndex + 1) % phrases.length
    typingSpeed = 500 // Pause before typing new phrase
  }

  setTimeout(typeEffect, typingSpeed)
}

// Start the typewriter effect
if (typewriter) {
  setTimeout(typeEffect, 1000)
}

// Form submission with Netlify
const form = document.querySelector(".contact-form")
if (form) {
  form.addEventListener("submit", (e) => {
    // Netlify handles the form submission
    // This is just for additional UX
    const button = form.querySelector('button[type="submit"]')
    button.textContent = "Sending..."
    button.disabled = true

    // Form will be handled by Netlify
    // No need to prevent default or handle submission manually
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed header
        behavior: "smooth",
      })
    }
  })
})

// Add active class to nav links on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
})

// Reveal animations on scroll
const revealElements = document.querySelectorAll(".section")

function checkReveal() {
  const triggerBottom = window.innerHeight * 0.8

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top

    if (elementTop < triggerBottom) {
      element.classList.add("revealed")
    }
  })
}

window.addEventListener("scroll", checkReveal)
window.addEventListener("load", checkReveal)
