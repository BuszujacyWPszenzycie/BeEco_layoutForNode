const loginModal = document.querySelector('dialog')
const allNavItems = document.querySelectorAll('.nav__itemWrapper')
const closeModalIcon = document.querySelector('.login__icon')

console.log('test')

const showLoginPageFunction = () => {
	console.log('is working?')
	loginModal.showModal()
}

const closeLoginPageFunction = () => {
	loginModal.close()
}

allNavItems[3].addEventListener('click', showLoginPageFunction)
closeModalIcon.addEventListener('click', closeLoginPageFunction)
