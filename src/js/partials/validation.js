$(window).on('load', function () {
	/**
	 * Валидация поля email
	 * @param email
	 * @returns {boolean}
	 */
	function validateEmail(email) {
		var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return re.test(String(email).toLowerCase());
	}

	/**
	 * Проверка поля на правильность данных
	 * @param errs
	 * @returns {boolean}
	 */
	function checkValid(errs) {
		var isValid = true;

		errs.each(function () {
			if ($(this).is(':visible')) {
				isValid = false;
			}
		});

		return isValid;
	}

	/**
	 * Вывод сообщения об ошибке
	 * @param elem
	 */
	function fieldValidate(elem) {
		elem.each(function () {
			var err = $(this).siblings('.field-error'),
				isValid = checkValid(err),
				val = $(this).val();

			if ($(this).prop('required') === true) {
				if ($(this).val().length === 0) {
					err.show().text('Please enter a value.');
					isValid = false;
				} else {
					err.hide().text('');
				}
			}

			if ($(this).attr('type') === "email") {
				if (validateEmail(val)) {
					err.hide().text('');
				} else {
					err.show().text('Please enter a valid email address.');
					isValid = false;
				}
			}
		});
	}

	$('.js-form-validate button').on('click', function (e) {
		var form = $(this).parent('form'),
			fields = $(this).parent().find('input').add($(this).parent().find('textarea')),
			isValid = checkValid(form.find('.field-error'));

		fieldValidate(fields);

		if (isValid) {
			form.submit(function (event) {
				alert('Регистрация прошла успешно');
			});

			setTimeout(function () {
				form.off('submit');
			}, 100);
		} else {
			e.preventDefault();
		}
	});

	$('.js-form-validate .field input').add($('.js-form-validate .field textarea')).on('focusout keyup change', function () {
		fieldValidate($(this));
	});
})