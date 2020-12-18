const $button = document.querySelector('.header__button')
const $plegableMenu = document.querySelector('.header__menu--mobile')

document.addEventListener('click', e => {
	if (e.target.matches('.header__button')) {
		$plegableMenu.classList.toggle('active')
	}
})
