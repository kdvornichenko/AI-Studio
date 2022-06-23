window.addEventListener('DOMContentLoaded', function () {
	// BURGER

	const mobMenu = document.getElementById('mobMenu')
	const body = document.getElementById('body')
	const main = document.getElementById('main')
	const mobHeaderWrap = document.getElementById('mobHeaderWrap')

	burger.classList.add('untoggle')
	burger.addEventListener('click', menuLinkClick)

	function menuLinkClick() {
		body.classList.toggle('overflow-y-hidden')
		burger.classList.toggle('toggled')
		burger.classList.toggle('unToggled')
		mobMenu.classList.toggle('-right-full')
		mobMenu.classList.toggle('right-0')
		main.classList.toggle('opacity-30')
		main.classList.toggle('opacity-100')
		mobHeaderWrap.classList.toggle('opacity-30')
		mobHeaderWrap.classList.toggle('opacity-100')
	}

	// Прокрутка при клике

	const menuLinks = document.querySelectorAll('.menu-link[data-goto]')

	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLinks => {
			menuLinks.addEventListener('click', onmenuLinkClick)
		})
	}

	function onmenuLinkClick(e) {
		menuLinkClick()
		const menuLink = e.target
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			})
			e.preventDefault()
		}
	}
})
