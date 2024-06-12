const allModals = document.querySelectorAll('dialog')
const allNavItems = document.querySelectorAll('.nav__itemWrapper')
const closeModalIcon = document.querySelector('.login__icon')
const searchButton = document.querySelector('.search__button')
const searchInput = document.querySelector('.search__input')
const browserButton = document.querySelector('.browser__button')
const browserResults = document.querySelector('.browser__results')
const spinner = document.querySelector('.spinner')
console.log(spinner)

const hideSpinnerFunction = () => {
	setTimeout(function () {
		spinner.classList.add('spinner-deactive')
	}, 3000)
}

const showLoginPageFunction = () => {
	allModals[0].showModal()
}

const closeLoginPageFunction = () => {
	allModals[0].close()
}

const showBrowserResultsFunction = () => {
	allModals[1].showModal()
	hideSpinnerFunction()
}

allNavItems[3].addEventListener('click', showLoginPageFunction)
closeModalIcon.addEventListener('click', closeLoginPageFunction)
searchButton.addEventListener('click', showBrowserResultsFunction)
searchInput.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		showBrowserResultsFunction()
	}
})
