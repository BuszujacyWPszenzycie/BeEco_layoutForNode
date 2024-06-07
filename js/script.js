const headerTextWrapper = document.querySelector('.header__bottom--textWrapper')
const headerFittingContainer = document.querySelector('.header__bottom--textFittingContainer')
const allNavItems = document.querySelectorAll('.nav__container')
const headerTop = document.querySelector('.header__top')

console.log(headerTop)
const showNavFunction = () => {
	headerTextWrapper.classList.add('active-text-wrapper')
	headerFittingContainer.classList.add('active-header-fitting-container')
	headerTop.classList.add('.active-header-top')
}

allNavItems[3].addEventListener('click', showNavFunction)
