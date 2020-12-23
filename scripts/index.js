const $button = document.querySelector('.hamburger')
const $plegableMenu = document.querySelector('.plegable-menu')
const $backgroundImage = document.querySelector(
	'.hero-container__background-image--right--mobile',
)

document.addEventListener('click', e => {
	console.log(e.target)
	if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
		$plegableMenu.classList.toggle('active')
		$button.classList.toggle('is-active')
		$backgroundImage.classList.toggle('active')
	}
	if (e.target.matches('.nav-link')) {
		$plegableMenu.classList.remove('active')
		$button.classList.remove('is-active')
	}
})
