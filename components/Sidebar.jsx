import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { BiHomeAlt2 } from 'react-icons/bi';
import { TbLayoutDashboard } from 'react-icons/tb';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';

const Sidebar = ({ children }) => {
	return (
		<div className="flex">
			<aside className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
				<div className="flex flex-col items-center">
					<Link href="/">
						<div className="p-3 bg-purple-800 text-white rounded-lg inline-block">
							<BiHomeAlt2 size={20} />
						</div>
					</Link>
					<span className="border-b-[1px] border-gray-200 w-full p-2"></span>
					<Link href="/" title="Dashboard">
						<div className="p-3 bg-gray-100 my-4 rounded-lg inline-block hover:bg-gray-200">
							<TbLayoutDashboard size={20} />
						</div>
					</Link>
					<Link href="/customers" title="Customers">
						<div className="p-3 bg-gray-100 my-4 rounded-lg inline-block hover:bg-gray-200">
							<BsPerson size={20} />
						</div>
					</Link>
					<Link href="/orders" title="Orders">
						<div className="p-3 bg-gray-100 my-4 rounded-lg inline-block hover:bg-gray-200">
							<AiOutlineShopping size={20} />
						</div>
					</Link>
					<Link href="/settings" title="Settings">
						<div className="p-3 bg-gray-100 my-4 rounded-lg inline-block hover:bg-gray-200">
							<IoSettingsOutline size={20} />
						</div>
					</Link>
				</div>
			</aside>
			<main className="ml-20 w-full">{children}</main>
		</div>
	);
};

export default Sidebar;
