window.addEventListener('load', () => {
	// Подписи на оси X
	const labels = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь'
	];

	const options = {
		responsive: true,
		layout: {
			padding: 10,
		},
		plugins: {
			legend: {
				align: 'start',
				position: 'bottom',
				labels: {
					boxWidth: 15,
					boxHeight: 15
				}
			}
		},
		scales: {
			y: {
				grid: {
					color: 'rgb(255, 255, 255, 0.8)',
					tickWidth: 0
				},
				ticks: {
					color: 'rgb(255, 255, 255, 0.8)'
				}
			},
			x: {
				grid: {
					color: 'rgb(255, 255, 255, 0.8)',
					tickWidth: 0
				},
				ticks: {
					color: 'rgb(255, 255, 255, 0.8)'
				}
			}
		}
	}

	const data1 = {
		labels: labels,
		datasets: [{
			label: 'Популярность запроса «Телевизор купить» за 2020г.',
			backgroundColor: 'rgb(32, 214, 66)',
			borderColor: 'rgb(32, 214, 66)',
			pointBorderWidth: 0,
			pointRadius: 4,
			data: [72, 100, 85, 100, 55, 45, 35, 30, 60, 75, 90, 95], // Значения на оси Y для каждого X
		}]
	};

	const data2 = {
		labels: labels,
		datasets: [{
			label: 'Популярность запроса «Телевизор купить» за 2020г.',
			backgroundColor: 'rgb(99, 239, 255)',
			borderColor: 'rgb(99, 239, 255)',
			data: [72, 100, 85, 100, 55, 45, 35, 30, 60, 75, 90, 95], // Значения на оси Y для каждого X
		}]
	};

	const data3 = {
		labels: labels,
		datasets: [{
			type: 'line',
			label: 'Популярность запроса «Телевизор купить» за 2020г.',
			backgroundColor: 'rgb(32, 214, 66)',
			borderColor: 'rgb(32, 214, 66)',
			pointBorderWidth: 0,
			pointRadius: 4,
			data: [72, 100, 85, 100, 55, 45, 35, 30, 60, 75, 90, 95], // Значения на оси Y для каждого X
		}, {
			type: 'bar',
			label: 'Популярность запроса «Телевизор купить» за 2021г.',
			backgroundColor: 'rgb(78, 97, 99)',
			borderColor: 'rgb(78, 97, 99)',
			data: [100, 90, 80, 70, 60, 50, 50, 60, 70, 80, 90, 100], // Значения на оси Y для каждого X
		}]
	};

	const config1 = {
		type: 'line',
		data: data1,
		options: options
	};

	const config2 = {
		type: 'bar',
		data: data2,
		options: options
	};

	const config3 = {
		data: data3,
		options: options
	};

	const diagElem1 = document.getElementById('myChart1');
	const diagElem2 = document.getElementById('myChart2');
	const diagElem3 = document.getElementById('myChart3');

	if (diagElem1) {
		const chart = new Chart(
			document.getElementById('myChart1'),
			config1
		);
	}

	if (diagElem2) {
		const chart2 = new Chart(
			document.getElementById('myChart2'),
			config2
		);
	}

	if (diagElem3) {
		const chart3 = new Chart(
			document.getElementById('myChart3'),
			config3
		);
	}
});