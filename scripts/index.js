const $button = document.querySelector('.hamburger')
const $plegableMenu = document.querySelector('.plegable-menu')
const $backgroundImage = document.querySelector(
	'.hero-container__background-image--right--mobile',
)
const $navLink = document.querySelectorAll('.nav-li')

document.addEventListener('click', e => {
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

window.addEventListener('resize', () => {
	if (window.innerHeight < 413 && window.innerWidth < 650) {
		$navLink.forEach(e => {
			e.style.marginTop = '10px'
			e.style.padding = '0'
		})
	} else {
		$navLink.forEach(e => {
			e.style.marginTop = '10px'
			e.style.padding = '20px'
		})
	}
})
