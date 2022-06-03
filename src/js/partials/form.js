$(window).on('load', function () {
	$('.js-select-place').select2({
		selectionCssClass: 'custom-select',
		dropdownCssClass: 'cs-dropdown',
		placeholder: 'Place',
	});

	$('.js-select-gender').select2({
		selectionCssClass: 'custom-select',
		dropdownCssClass: 'cs-dropdown',
		placeholder: 'Gender',
		minimumResultsForSearch: -1
	});
})