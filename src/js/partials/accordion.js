window.addEventListener('load', () => {
	const menuLinks = document.querySelectorAll('.sidebar-item__link');

	menuLinks.forEach((elem) => {
		if (!elem.hasAttribute('href')) {
			elem.addEventListener('click', () => {
				elem.classList.toggle('active');
				let submenu = elem.nextElementSibling;

				if (submenu.style.maxHeight) {
					submenu.style.maxHeight = null;
				} else {
					submenu.style.maxHeight = submenu.scrollHeight + 'px';
				}
			});
		}
	});
});