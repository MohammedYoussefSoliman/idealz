let header = document.querySelector('.global-header');
let currencyMenuHeader = document.querySelector('.left');
let searchBtn = document.querySelector('.icon-search');
let searchSection = document.querySelector('.search-section');
let searchLi = document.querySelector('.search-link')
let searchForm = document.querySelector('.search-section').querySelector('form');
let register = document.querySelector('.overlay-container')
let registerForm = register.querySelector('.overlay-section')
let registerHead = register.querySelector('.user-greeting')

// navbar



const scrollSuperHeader = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.top = "-40px";
      } else {
        header.style.top = "0";
      }
}

window.onscroll = scrollSuperHeader


// currency menu

const currencyMenuClick = (e) => {
    e.preventDefault()
    if(currencyMenuHeader.classList.contains('open')){
        currencyMenuHeader.classList.remove('open')
        currencyMenuHeader.querySelector('.select-container').style.display = 'none';
        currencyMenuHeader.querySelector('i').style.transform = 'rotate(0)';
        currencyMenuHeader.querySelector('i').style.transition = 'all 0.5s';
    }else{
        currencyMenuHeader.classList.add('open')
        currencyMenuHeader.querySelector('.select-container').style.display = 'block';
        currencyMenuHeader.querySelector('i').style.transform = 'rotate(180deg)';
        currencyMenuHeader.querySelector('i').style.transition = 'all 0.5s';
    }


}

currencyMenuHeader.addEventListener('click', currencyMenuClick)


const handleSearchEnter = () => {

   searchForm.style.opacity = '1'
   searchForm.style.pointerEvents = 'auto'
   searchLi.classList.add('hover-search')

}

const handleSearchLeave = () => {

    if(searchForm.style.opacity === '1'){
        searchForm.style.opacity = '0'
        searchLi.classList.remove('hover-search')
    }
}

const handleRegisterEnter = () => {
    registerForm.style.opacity = '1'
    registerForm.style.pointerEvents = 'auto'
    registerHead.style.height = '100%'
    registerHead.style.zIndex = '2'
    searchLi.classList.add('hover-search')
}

const handleRegisterLeave = () => {

    registerForm.style.opacity = '0'
    registerHead.style.height = 'auto'
    registerHead.style.zIndex = '0'
    searchLi.classList.remove('hover-search')

}

searchSection.onmouseover = handleSearchEnter
searchSection.onmouseout = handleSearchLeave

registerHead.onmouseover = handleRegisterEnter
document.addEventListener('click', event => {
    
    const isClickInside = register.contains(event.target).parentElement;
  
    if (!isClickInside) {
        handleRegisterLeave()
    }
  });

