import React from 'react';

const TopCards = () => {
	return (
		<div className="grid lg:grid-cols-5 gap-4 p-4">
			<div className="col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:col-span-2">
				<div className="flex flex-col w-full pb-4">
					<p className="text-2xl font-bold">$1,175</p>
					<p className="text-gray-600">Daily Revenue</p>
				</div>
				<div className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
					<span className="text-green-700 text-lg">18%</span>
				</div>
			</div>
			<div className="col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:col-span-2">
				<div className="flex flex-col w-full pb-4">
					<p className="text-2xl font-bold">$1,378,232</p>
					<p className="text-gray-600">YTD Revenue</p>
				</div>
				<div className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
					<span className="text-green-700 text-lg">37%</span>
				</div>
			</div>
			<div className="bg-white flex justify-between w-full border p-4 rounded-lg">
				<div className="flex flex-col w-full pb-4">
					<p className="text-2xl font-bold">7,187</p>
					<p className="text-gray-600">Total Customers</p>
				</div>
				<div className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
					<span className="text-green-700 text-lg">23%</span>
				</div>
			</div>
		</div>
	);
};

export default TopCards;
