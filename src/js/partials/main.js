window.addEventListener('load', () => {
	const burger = document.querySelector('.header__burger');

	if (burger) {
		burger.addEventListener('click', (e) => {
			e.target.classList.toggle('active');
		});
	}
});