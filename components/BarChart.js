import { useState, useEffect } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart = () => {
	const [charData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
			datasets: [
				{
					label: 'Sales',
					data: [24364, 9657, 14752, 24136, 22759, 9875, 6364],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgba(53, 162, 235, 0.4)',
				},
			],
		});

		setChartOptions({
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Daily Revenue',
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
				<Bar data={charData} options={chartOptions} />
			</div>
		</>
	);
};

export default BarChart;
