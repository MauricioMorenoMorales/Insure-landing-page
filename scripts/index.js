const $button = document.querySelector('.hamburger')
const $plegableMenu = document.querySelector('.plegable-menu')

document.addEventListener('click', e => {
	console.log(e.target)
	if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
		$plegableMenu.classList.toggle('active')
		$button.classList.toggle('is-active')
	}
})