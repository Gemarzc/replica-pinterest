import './style.css'

// HEADER
const headerTemplate = () => {
  return `
  <h1>I</h1>
  <input type="text" placeholder="Search" id="searchinput"/>
  <button id="searchbtn"><img src="/icons/search.svg" alt="Search icon"/></button>
  <button id="darkmodebtn"><img src="/icons/dark.svg" alt="Dark mode icon"/ id="darkmodeicon"></button>
  <img
    src="/images/profile.jpg"
    alt="Profile image"
    class="profileimg"
  /> 
    `
}

// FOOTER
const templateFooter = () => {
  return `
    <h4>Copyright 2023 - Inspirest - Rock the Code</h4>
    `
}

const printFooterTemplate = () => {
  document.querySelector('footer').innerHTML = templateFooter()
}

printFooterTemplate()

const themeSwitch = () => {
  document.body.classList.toggle('dark')
}

const listeners = () => {
  const darkmodebtn = document.querySelector('#darkmodebtn')
  darkmodebtn.addEventListener('click', () => {
    themeSwitch()
    const theme = document.body.classList.contains('dark')
    if (theme) {
      document.querySelector('#darkmodeicon').src = '/icons/light.svg'
    } else {
      document.querySelector('#darkmodeicon').src = '/icons/dark.svg'
    }
  })
}

const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = headerTemplate()
  listeners()
}

printHeaderTemplate()
