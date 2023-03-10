import React from 'react';
import { data } from '@/data/data';
import { HiShoppingBag } from 'react-icons/hi';

const Orders = () => {
	return (
		<div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-auto">
			<h3>Recent Orders</h3>
			<ul>
				{data.map((order, index) => (
					<li
						key={index}
						className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
					>
						<div className="bg-purple-100 rounded-lg p-3">
							<HiShoppingBag className="text-purple-800" size={25} />
						</div>
						<div className="pl-4">
							<span className="text-gray-800 font-bold">${order.total}</span>
							<p className="text-gray-500 text-sm">{order.name.first}</p>
						</div>
						<p className="lg:flex md:hidden absolute right-6 text-xs lg:text-base">
							{order.date}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Orders;
