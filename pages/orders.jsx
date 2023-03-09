import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '@/data/data';
import Head from 'next/head';

const orders = () => {
	return (
		<>
			<Head>
				<title>Orders</title>
			</Head>
			<div className="p-4">
				<div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
					<div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
						<span>Order</span>
						<span className="sm:text-left text-right">Status</span>
						<span className="hidden md:block">Last Order</span>
						<span className="hidden md:block">Method</span>
					</div>
					<ul>
						{data.map((order) => (
							<li
								key={order.id}
								className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
							>
								<div className="flex">
									<div className="bg-purple-100 p-3 rounded-lg">
										<FaShoppingBag className="text-purple-800" />
									</div>
									<div className="pl-4 ">
										<span className="text-gray-800 font-bold">
											${order.total.toLocaleString()}
										</span>
										<p className="text-gray-800 text-sm">
											{order.name.first + ' ' + order.name.last}
										</p>
									</div>
								</div>
								<p className="text-gray-600 sm:text-left text-right">
									<span
										className={`p-2 rounded-lg ${
											order.status == 'Processing'
												? 'bg-green-200'
												: order.status == 'Completed'
												? 'bg-blue-200'
												: 'bg-yellow-200'
										}`}
									>
										{order.status}
									</span>
								</p>
								<p className="hidden md:block">{order.date}</p>
								<div className="sm:flex hidden justify-between items-center">
									<p>{order.method}</p>
									<BsThreeDotsVertical />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default orders;
