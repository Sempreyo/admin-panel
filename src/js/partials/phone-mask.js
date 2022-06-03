$(window).on('load', function () {
	let maskedElem = document.querySelector('[type="tel"]');

	let phoneMask = IMask(
		maskedElem, {
			mask: '+{7}(000)000-00-00'
		});
})